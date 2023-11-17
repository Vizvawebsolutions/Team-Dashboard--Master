import { useState } from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

//importing file & components

import { tokens } from "../../Theme";

import { mockDataTeam } from "../../Data/DataShow";

import Header from "../Global/Header";
import PopUpShow from "../PopUp/PopUp";

const TeamShow = () => {

  // for popup task details
  const [typoPopUp, setTypoPopup] = useState(false);

  //To find the selectede task

  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);


  // const [candidates, setCandidates] = useState([]);
 

  // useEffect(() => {
  
  //   // Fetch data from the backend API
  //   fetch('http://localhost:8081/api/candidates')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setCandidates(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  
  // }, []);
  

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

  const selectedTask = mockDataTeam.find((task) => task.id === selectedTaskId);

  const theme = useTheme();
  
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <Typography
          onClick={() => {
            setTypoPopup(true);
            handleTypographyClick(params.row.id);
          }}
          color={colors.greenAccent[500]}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },

    {
      field: "access",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: "team_type",
      headerName: "Team",
      flex: 1,
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "active"
                ? colors.greenAccent[700]
                : status === "offline"
                ? colors.redAccent[700]
                : colors.yellowAccent[700]
            }
            borderRadius="4px"
          >
            {status === "active" && <BookOnlineIcon />}
            {status === "offline" && <OfflineShareIcon />}
            {status === "in meeting" && <MeetingRoomIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
          rows={mockDataTeam}
          columns={columns}
          onRowClick={(params) => setSelectedRow(params.row.id)}
          checkboxSelection={false}
        />

        {/* for PopUp card view after clickon task_bio */}

        <PopUpShow
          trigger={typoPopUp}
          setTrigger={setTypoPopup}
          rows={selectedRow}
        >
          <>
            {selectedTask && (
              <div>
                <Typography variant="h4">User Availability</Typography>
                <Typography variant="h6">
                  {bull} {selectedTask.name}
                </Typography>
                <Typography variant="h6">
                  {bull} {selectedTask.email}
                </Typography>
                <Typography variant="h6">
                  {bull} {selectedTask.phone}
                </Typography>
                <Typography variant="h6">
                  {bull} {selectedTask.access}
                </Typography>
                <Typography variant="h6">
                  {bull} {selectedTask.team_type}
                </Typography>
                <Typography variant="h6">
                  {bull} {selectedTask.status}
                </Typography>
              </div>
            )}
          </>
        </PopUpShow>
      </Box>
    </Box>
  );
};

export default TeamShow;



