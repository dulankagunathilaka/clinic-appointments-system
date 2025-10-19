import React, { useState } from "react";
import { Edit3, Search } from "lucide-react";

const ClinicSettings = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const settings = [
    { id: 1, day: "Monday", opening: "09:00 AM", closing: "05:00 PM", slot: "30 min", maxAppointments: 10, status: "Active" },
    { id: 2, day: "Tuesday", opening: "09:00 AM", closing: "05:00 PM", slot: "30 min", maxAppointments: 10, status: "Active" },
    { id: 3, day: "Wednesday", opening: "09:00 AM", closing: "05:00 PM", slot: "30 min", maxAppointments: 10, status: "Inactive" },
    { id: 4, day: "Thursday", opening: "09:00 AM", closing: "05:00 PM", slot: "30 min", maxAppointments: 10, status: "Active" },
    { id: 5, day: "Friday", opening: "09:00 AM", closing: "05:00 PM", slot: "30 min", maxAppointments: 10, status: "Active" },
    { id: 6, day: "Saturday", opening: "10:00 AM", closing: "02:00 PM", slot: "20 min", maxAppointments: 5, status: "Active" },
    { id: 7, day: "Sunday", opening: "Closed", closing: "Closed", slot: "-", maxAppointments: 0, status: "Inactive" },
  ];

  const settingsPerPage = 4;

  const filteredSettings = settings.filter(
    (s) => s.day.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSettings.length / settingsPerPage);
  const startIndex = (activePage - 1) * settingsPerPage;
  const currentSettings = filteredSettings.slice(startIndex, startIndex + settingsPerPage);

  return (
    <div className="flex w-full bg-gray-50 min-h-screen p-6 sm:p-10">
      <div className="flex-1">
        {/* Header */}
        <div className="relative w-full max-w-7xl mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2">
                Clinic Settings
              </h1>
              <p className="text-md sm:text-lg text-blue-700 mb-1">
                Administrator ► Manage Clinic Schedule
              </p>
              <p className="text-sm text-blue-500">
                Configure opening/closing times, slots, and maximum appointments
              </p>
            </div>
          </div>
        </div>

        {/* Add & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
            + Add New Day
          </button>

          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition w-full sm:w-96 gap-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by day..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActivePage(1); // reset page on search
              }}
              className="outline-none text-gray-700 w-full"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-900 font-semibold text-sm uppercase">
                <th className="px-6 py-3">Day</th>
                <th className="px-6 py-3">Opening Time</th>
                <th className="px-6 py-3">Closing Time</th>
                <th className="px-6 py-3">Slot Duration</th>
                <th className="px-6 py-3">Maximum Appointments</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentSettings.map((setting) => (
                <tr
                  key={setting.id}
                  className="hover:bg-blue-50 transition border-b border-gray-200"
                >
                  <td className="px-6 py-4">{setting.day}</td>
                  <td className="px-6 py-4">{setting.opening}</td>
                  <td className="px-6 py-4">{setting.closing}</td>
                  <td className="px-6 py-4">{setting.slot}</td>
                  <td className="px-6 py-4">{setting.maxAppointments}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        setting.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {setting.status}
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

export default ClinicSettings;
