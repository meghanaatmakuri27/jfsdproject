import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import JobProfiles from "./components/JobProfiles";
import MyProfile from "./components/MyProfile";
import Interviews from "./components/Interviews";
import Assessments from "./components/Assessments";
import Events from "./components/Events";
import Resume from "./components/Resume";
import Help from "./components/Help";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/job-profiles" element={<JobProfiles />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
