import { Routes, Route } from "react-router-dom";
import React from "react";
import AdminDash from "./Components/Logins/Dashboards/AdminDash";
import AccessLevel from "./Components/Logins/Others/Accesslevel";
import UserDash from "./Components/Logins/Dashboards/UserDash";
import CreateOpportunity from "./Components/Logins/Others/CreateOpportunity";
import Leads from "./Components/Logins/Others/Leads";
import MainLogin from './Components/Logins/MainLogin'

function App() {
  return (
    <>
    {/* <MainLogin/> */}
    {/* <Routes>
      <Route path="/" element={<UserDash />} />
      <Route path="/create-opportunity" element={<CreateOpportunity/>} />
      <Route path="/leads" element={<Leads/>}/>
    </Routes> */}
      
    {/* <Routes>
      <Route path="/" element={<AdminDash/>} />
      <Route path="/access-level" element={<AccessLevel/>} />
    </Routes> */}

    <Routes>
      <Route path="/" element={<MainLogin/>} />
      <Route path="/admin-dashboard" element={<AdminDash />} />
      <Route path="/employee-dashboard" element={<UserDash/>} />
      <Route path="/create-opportunity" element={<CreateOpportunity/>}/>
      <Route path="/dashboard" element={<UserDash/>}/>
      <Route path="/leads" element={<Leads/>}/>
      <Route path="/access-level" element={<AccessLevel/>}/>
    </Routes>

    </>
  );
}

export default App;

