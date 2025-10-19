import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import Appointments from "./Appointments";
import Patients from "./Patients";
import ClinicSettings from "./ClinicSettings";
import Profile from "./Profile";

const AdminLayout = () => {
  return (
    <div className="min-h-screen w-full flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full">
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-8 min-h-screen flex flex-col overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="clinic-settings" element={<ClinicSettings />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
