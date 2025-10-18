import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorAppointments from "./DoctorAppointments";
import DoctorProfile from "./DoctorProfile";
import DoctorSidebar from "../components/doctor/DoctorSidebar";
import DoctorDashboard from "./DoctorDashboard";

const DoctorLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F9FBFF]">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full">
        <DoctorSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<DoctorDashboard />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorLayout;
