import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Patients from "./admin/Patients";
import Doctors from "./admin/Doctors";
import Appointments from "./admin/Appointments";
import ClinicSettings from "./admin/ClinicSettings";
import Profile from "./admin/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="settings" element={<ClinicSettings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
