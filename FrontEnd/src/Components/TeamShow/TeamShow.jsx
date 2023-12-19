import { useState, useEffect } from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";


//importing file & components
import Header from "../Global/Header";
import { tokens } from "../../Theme";

const TeamShow = () => {
  const [users, setUsers] = useState([]); //for user changes
  const theme = useTheme();
  
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "user_name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      // renderCell: (params) => (
      //   <Typography
      //     onClick={() => {
      //       setTypoPopup(true);
      //       handleTypographyClick(params.row.id);
      //     }}
      //     color={colors.greenAccent[500]}
      //   >
      //     {params.value}
      //   </Typography>
      // ),
    },
    {
      field: "user_email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "user_phone",
      headerName: "Phone Number",
      flex: 1,
    },

    {
      field: "access",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { admin_flag } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              admin_flag ? colors.greenAccent[600] : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {admin_flag ? (
              <AdminPanelSettingsOutlinedIcon />
            ) : (
              <LockOpenOutlinedIcon />
            )}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {admin_flag ? "Admin" : "User"}
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
        let backgroundColor = colors.yellowAccent[700]; // Default color for 'in_meeting'
        let statusIcon = <MeetingRoomIcon />; // Default icon for 'in_meeting'
    
        if (status === "online") {
          backgroundColor = colors.greenAccent[700];
          statusIcon = <BookOnlineIcon />;
        } else if (status === "in_meeting") {
          backgroundColor = colors.yellowAccent[700];
          statusIcon = <OfflineShareIcon />;
        }else if (status === "offline") {
          backgroundColor = colors.redAccent[700];
          statusIcon = <OfflineShareIcon />;
        }
    
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={backgroundColor}
            borderRadius="4px"
          >
            {statusIcon}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
    
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/list'); // Modify the URL to match your backend
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
  
        // Map through the received data and add an 'id' property to each row
        const usersWithId = data.data.map((user, index) => ({
          id: user.user_id || index, // Assuming 'user_id' is the unique identifier for a user
          ...user,
        }));
  
        setUsers(usersWithId); // Set the modified users data with 'id' to state
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle errors as needed
      }
    };
  
    fetchUsers();
  }, []);


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
          rows={users} // Use 'users' state for rows instead of 'mockDataContacts'
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />

        {/* for PopUp card view after clickon task_bio */}

        {/* <PopUpShow
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
        </PopUpShow> */}
      </Box>
    </Box>
  );
};

export default TeamShow;



