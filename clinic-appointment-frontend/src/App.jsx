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

// Home
import Home from "./Home/Home";
import AboutUsPage from "./Home/AboutUsPage";
import ServicePage from "./Home/ServicePage";
import Navbar from "./components/Navbar";
import BlogsPage from "./Home/BlogsPage";
import ContactUsPage from "./Home/ContactUsPage";

// Patient
import PatientProfile from "./patient/PatientProfile";
import MyAppointments from "./patient/MyAppointments";

const App = () => {
  return (
    <Router>
      <Routes>
      {/* Public Website Layout */}
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/blog" element={<BlogsPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </>
        }
      />

      
      {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="settings" element={<ClinicSettings />} />
          <Route path="profile" element={<Profile />} />
          </Route>

      {/* Patient Routes */}
          <Route path="/PatientProfile" element={<PatientProfile />} />
          <Route path="/MyAppointments" element={<MyAppointments />} />

      </Routes>
    </Router>
  );
};

export default App;
