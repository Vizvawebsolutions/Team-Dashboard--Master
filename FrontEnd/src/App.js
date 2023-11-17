import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./Components/Global/Topbar";
import Sidebar from "./Components/Global/Sidebar";
import Dashboard from "./Pages/Admin/DashboardShow/DashBoardShow";
import Team from "./Components/TeamShow/TeamShow";
import TaskList from "./Components/InvoiceShow/InvoiceShow";
import Bar from "./Components/BarShow/BarChart";
import Form from "./Components/FormShow/FormShow";
import Line from "./Components/LineShow/LineShow";
import Pie from "./Components/PeShow/PieShow";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";

import Calendar from "./Components/CalendarShow/CalendarShow";
import UserLog from "./Pages/Login/Login";
import UserSignLog from "./Pages/SignUp/SignUp"
import UserDashboard from "./Pages/User/UserDashboard";

//components not in use

// import Contacts from "./Components/ContactsShow/ContactShow";
// import FAQ from "./Components/FaqShow/FaqShow";
// import Geography from "./Components/GeoShow/GeoShow";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [role, setRole] = useState("");

  function AdminRoutes() {
    return (
      <>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<TaskList />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/calendar" element={<Calendar />} />
      </>
    );
  }

  function UserRoutes() {
    return <Route path="/userdashboard" element={<UserDashboard />} />;
  }

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {(role === "admin" || role === "user") && (
            <Sidebar isSidebar={isSidebar} />
          )}

          <main className="content">
            {(role === "admin" || role === "user") && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}

            <Routes>
              <Route path="/signin" element={<UserSignLog />} />
              <Route path="/login" element={<UserLog />} />
              {role === "admin" ? (
                <AdminRoutes />
              ) : role === "user" ? (
                <UserRoutes />
              ) : (
                <Route path="*" element={<Navigate to="/signin" replace />} />
              )}

              {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/tasklist" element={<TaskList />} />
              <Route path="/userdashboard" element={<UserDashboard />} /> */}
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

   
  );
}

export default App;
