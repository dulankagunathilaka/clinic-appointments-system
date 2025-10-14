import React, { useState } from "react";
import { Edit3, Search, Calendar } from "lucide-react";

const Appointments = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const appointments = [
    { id: 1, patient: "John Doe", doctor: "Dr. Dulanka Nimsara", datetime: "2025-10-15 10:00 AM", status: "Done" },
    { id: 2, patient: "Jane Smith", doctor: "Dr. Jane Doe", datetime: "2025-10-15 11:00 AM", status: "Pending" },
    { id: 3, patient: "Michael Lee", doctor: "Dr. John Smith", datetime: "2025-10-16 09:30 AM", status: "Cancelled" },
    { id: 4, patient: "Emily White", doctor: "Dr. Emily White", datetime: "2025-10-16 02:00 PM", status: "Done" },
    { id: 5, patient: "Robert Brown", doctor: "Dr. Michael Lee", datetime: "2025-10-17 01:00 PM", status: "Pending" },
    { id: 6, patient: "Alice Brown", doctor: "Dr. Dulanka Nimsara", datetime: "2025-10-17 03:00 PM", status: "Done" },
    { id: 7, patient: "Bob Green", doctor: "Dr. Jane Doe", datetime: "2025-10-18 10:30 AM", status: "Pending" },
    { id: 8, patient: "Carol Black", doctor: "Dr. John Smith", datetime: "2025-10-18 11:30 AM", status: "Cancelled" },
  ];

  const appointmentsPerPage = 4; // Items per page

  const filteredAppointments = appointments.filter(
    (app) =>
      app.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);
  const startIndex = (activePage - 1) * appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(startIndex, startIndex + appointmentsPerPage);

  return (
    <div className="flex w-full bg-gray-50 min-h-screen p-6 sm:p-10">
      <div className="flex-1">
        {/* Header */}
        <div className="relative w-full max-w-7xl mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2">
                Appointments Management
              </h1>
              <p className="text-md sm:text-lg text-blue-700 mb-1">
                Administrator ► Manage Clinic Appointments
              </p>
              <p className="text-sm text-blue-500">
                Track appointments, status, and schedule
              </p>
            </div>
          </div>
        </div>

        {/* Add & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
            + Add New Appointment
          </button>

          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition w-full sm:w-96 gap-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by patient or doctor..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActivePage(1); // reset to page 1 on search
              }}
              className="outline-none text-gray-700 w-full"
            />
            <Calendar size={18} className="text-gray-500" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="outline-none text-gray-700 cursor-pointer"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-900 font-semibold text-sm uppercase">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Patient</th>
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-blue-50 transition border-b border-gray-200"
                >
                  <td className="px-6 py-4">{app.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{app.patient}</td>
                  <td className="px-6 py-4">{app.doctor}</td>
                  <td className="px-6 py-4">{app.datetime}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        app.status === "Done"
                          ? "bg-green-100 text-green-600"
                          : app.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="flex items-center justify-center gap-1 mx-auto text-white bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-1 rounded-full font-medium shadow-sm hover:scale-105 transition">
                      <Edit3 size={16} /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-3">
          <button
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
            disabled={activePage === 1}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activePage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium">Page {activePage} of {totalPages}</span>
          <button
            onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
            disabled={activePage === totalPages}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activePage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
