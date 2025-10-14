import React, { useState } from "react";
import { Edit3, Search, Calendar } from "lucide-react";

const Doctors = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const doctors = [
    { id: 1, name: "Dr. Dulanka Nimsara", specialization: "Cardiologist", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
    { id: 2, name: "Dr. Jane Doe", specialization: "Neurologist", availability: "Tue–Sat, 10AM–6PM", status: "Active" },
    { id: 3, name: "Dr. John Smith", specialization: "Pediatrician", availability: "Mon–Fri, 8AM–4PM", status: "Inactive" },
    { id: 4, name: "Dr. Emily White", specialization: "Dermatologist", availability: "Wed–Sun, 9AM–5PM", status: "Active" },
    { id: 5, name: "Dr. Michael Lee", specialization: "Orthopedic", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
    { id: 6, name: "Dr. Alice Brown", specialization: "ENT", availability: "Mon–Fri, 10AM–4PM", status: "Active" },
    { id: 7, name: "Dr. Bob Green", specialization: "Orthodontist", availability: "Tue–Sat, 9AM–5PM", status: "Inactive" },
    { id: 8, name: "Dr. Carol Black", specialization: "Neurologist", availability: "Mon–Fri, 8AM–2PM", status: "Active" },
  ];

  const doctorsPerPage = 4; // Number of doctors per page

  // Filter doctors by search query
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const startIndex = (activePage - 1) * doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(startIndex, startIndex + doctorsPerPage);

  return (
    <div className="flex w-full bg-gray-50 min-h-screen p-6 sm:p-10">
      <div className="flex-1">
        {/* Header */}
        <div className="relative w-full max-w-7xl mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2">
                Doctors Management
              </h1>
              <p className="text-md sm:text-lg text-blue-700 mb-1">
                Administrator ► Manage Clinic Doctors
              </p>
              <p className="text-sm text-blue-500">
                Track doctors' availability and status
              </p>
            </div>
          </div>
        </div>

        {/* Add Doctor & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
            + Add New Doctor
          </button>

          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition w-full sm:w-96 gap-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActivePage(1); // Reset to first page on search
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

        {/* Doctors Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-900 font-semibold text-sm uppercase">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Specialization</th>
                <th className="px-6 py-3">Availability</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentDoctors.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-blue-50 transition border-b border-gray-200"
                >
                  <td className="px-6 py-4">{doc.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{doc.name}</td>
                  <td className="px-6 py-4">{doc.specialization}</td>
                  <td className="px-6 py-4">{doc.availability}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        doc.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}
                    >
                      {doc.status}
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

export default Doctors;
