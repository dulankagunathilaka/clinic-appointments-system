import React, { useState } from "react";
import { Edit3, Search } from "lucide-react";

const Patients = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const patients = [
    { id: 1, name: "John Doe", age: 30, gender: "Male", contact: "123-456-7890", address: "123 Main St" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female", contact: "987-654-3210", address: "456 Elm St" },
    { id: 3, name: "Michael Lee", age: 40, gender: "Male", contact: "555-123-4567", address: "789 Oak St" },
    { id: 4, name: "Emily White", age: 32, gender: "Female", contact: "444-555-6666", address: "321 Pine St" },
    { id: 5, name: "Robert Brown", age: 28, gender: "Male", contact: "777-888-9999", address: "654 Maple St" },
    { id: 6, name: "Alice Brown", age: 27, gender: "Female", contact: "222-333-4444", address: "852 Cedar St" },
    { id: 7, name: "Bob Green", age: 35, gender: "Male", contact: "111-222-3333", address: "963 Birch St" },
    { id: 8, name: "Carol Black", age: 29, gender: "Female", contact: "666-777-8888", address: "741 Walnut St" },
  ];

  const patientsPerPage = 4;

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);
  const startIndex = (activePage - 1) * patientsPerPage;
  const currentPatients = filteredPatients.slice(startIndex, startIndex + patientsPerPage);

  return (
    <div className="flex w-full bg-gray-50 min-h-screen p-6 sm:p-10">
      <div className="flex-1">
        {/* Header */}
        <div className="relative w-full max-w-7xl mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2">
                Patients Management
              </h1>
              <p className="text-md sm:text-lg text-blue-700 mb-1">
                Administrator ► Manage Clinic Patients
              </p>
              <p className="text-sm text-blue-500">
                Track patient details, contact, and address
              </p>
            </div>
          </div>
        </div>

        {/* Add & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
            + Add New Patient
          </button>

          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition w-full sm:w-96 gap-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or contact..."
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
                <th className="px-6 py-3">Patient ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="hover:bg-blue-50 transition border-b border-gray-200"
                >
                  <td className="px-6 py-4">{patient.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{patient.name}</td>
                  <td className="px-6 py-4">{patient.age}</td>
                  <td className="px-6 py-4">{patient.gender}</td>
                  <td className="px-6 py-4">{patient.contact}</td>
                  <td className="px-6 py-4">{patient.address}</td>
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

export default Patients;
