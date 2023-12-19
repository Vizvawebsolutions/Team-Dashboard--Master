import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

// importing file components
import { tokens } from "../../Theme";
import Header from "../Global/Header";
import PopUpShow from "../PopUp/PopUp";
import Calendar from "../CalendarShow/CalendarShow"


const TaskList = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [typoPopUp, setTypoPopup] = useState(false);

  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [data, setData] = useState([]);
  const [assigneesList, setAssigneesList] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3000/fetch-data')
      .then((response) => {
        setData(response.data);

        // Extract unique assignees
        const uniqueAssignees = [...new Set(response.data.map(task => task.assignees))];
        setAssigneesList(uniqueAssignees);
      })

      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  
  console.log(assigneesList);


  const handleAssigneeChange = (event, taskId) => {
    // Filter out the task with the provided taskId
    const updatedTasks = data.filter(task => task.id !== taskId);
    const newAssignee = event.target.value;

    // Call the backend to update the task assignment
    axios.put(`http://localhost:3000/update-assignee/${taskId}`, {
      assignee: newAssignee
    })
      .then(response => {
        // Assuming the backend returns the updated task
        const updatedTask = response.data;

        // Now update the local state with the updated task
        const updatedTasks = data.map(task => {
          if (task.id === taskId) {
            return updatedTask;
          }
          return task;
        });

        setData(updatedTasks);
      })
      .catch(err => {
        console.error("Error updating assignee:", err);
      });

    
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const handleTypographyClick = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const selectedTask = data?.find((task) => task.id === selectedTaskId);


  // creating coloumns
  const columns = [

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "task_type",
      headerName: "Type",
      flex: 1,
    },

    {
      field: "task_bio",
      headerName: "Details",
      flex: 1,
      renderCell: (params) => (
        <>
          {data.map((task) => (
            <Typography
              key={task.id}
              onClick={() => {
                setTypoPopup(true);
                handleTypographyClick(params.row.id);
              }}
              color={colors.greenAccent[500]}
            >
              {params.value}
            </Typography>
          ))}
        </>
      ),
    },

    {
      field: "team",
      headerName: "Team",
      flex: 1,
    },

    {
      field: "assignees",
      headerName: "Assignees",
      flex: 1,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(event) => handleAssigneeChange(event, params.row.id)}
          variant="filled"
          fullWidth="true"
          sx={{
            backgroundColor: "#141B2D",
          }}
        >
          {assigneesList.map(assignee => (
            <MenuItem key={assignee} value={assignee} sx={{listStyle:"none", borderLeft:"transparent"}}>
              {assignee}
            </MenuItem>
          ))}
        </Select>
      ),
    },

    {
      field: "date_time",
      headerName: "Date & Time",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.date_time}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TASKS" subtitle="List Of Task Sheet" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          onRowClick={(params) => setSelectedRow(params.row.id)}
          checkboxSelection={false} />

        <PopUpShow
          trigger={typoPopUp}
          setTrigger={setTypoPopup}
          rows={selectedRow}
        >
          {selectedTask && (
            <div>
              <Typography variant="h4">Task Details</Typography>
              <Typography variant="h6">{bull} {selectedTask.name}</Typography>
              <Typography variant="h6">{bull} {selectedTask.email}</Typography>
              <Typography variant="h6">{bull} {selectedTask.task_type}</Typography>
              <Typography variant="h6">{bull} {selectedTask.task_bio}</Typography>
              <Typography variant="h6">{bull} {selectedTask.team}</Typography>
              <Typography variant="h6">{bull} {selectedTask.assignees}</Typography>
              <Typography variant="h6">{bull} {selectedTask.date_time}</Typography>
              <Calendar />
            </div>
          )}
        </PopUpShow>
      </Box>
    </Box>
  );
};


export default TaskList;
