import React, { useState, useEffect } from "react";
import { Edit3, Search, X, Trash2 } from "lucide-react";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [newPatient, setNewPatient] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    medicalHistory: "",
    emergencyContact: { name: "", phone: "", relation: "" },
  });

  const patientsPerPage = 4;

  // Fetch patients from backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/patients");
        const data = await res.json();
        if (Array.isArray(data.data)) {
          setPatients(data.data);
        } else {
          console.error("Unexpected response format:", data);
          setPatients([]);
        }
      } catch (err) {
        console.error("Error fetching patients:", err);
        setPatients([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("emergencyContact.")) {
      const key = name.split(".")[1];
      setNewPatient((prev) => ({
        ...prev,
        emergencyContact: { ...prev.emergencyContact, [key]: value },
      }));
    } else {
      setNewPatient((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("emergencyContact.")) {
      const key = name.split(".")[1];
      setCurrentPatient((prev) => ({
        ...prev,
        emergencyContact: { ...prev.emergencyContact, [key]: value },
      }));
    } else {
      setCurrentPatient((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add new patient
  const handleAddPatient = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPatient),
      });
      const data = await res.json();
      if (data.success) {
        setPatients((prev) => [...prev, data.data]);
        setModalOpen(false);
        setNewPatient({
          fullName: "",
          email: "",
          phone: "",
          age: "",
          gender: "",
          address: "",
          medicalHistory: "",
          emergencyContact: { name: "", phone: "", relation: "" },
        });
      } else {
        alert("Error adding patient: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error adding patient");
    }
  };

  // Open edit modal
  const openEditModal = (patient) => {
    setCurrentPatient(patient);
    setEditModalOpen(true);
  };

  // Update patient
  const handleUpdatePatient = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:4000/api/patients/${currentPatient._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentPatient),
        }
      );
      const data = await res.json();
      if (data.success) {
        setPatients((prev) =>
          prev.map((p) => (p._id === currentPatient._id ? data.data : p))
        );
        setEditModalOpen(false);
        setCurrentPatient(null);
      } else {
        alert("Error updating patient: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error updating patient");
    }
  };

  // Delete patient
  const handleDeletePatient = async (id) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) return;
    try {
      const res = await fetch(`http://localhost:4000/api/patients/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setPatients((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert("Error deleting patient: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting patient");
    }
  };

  // Filter patients
  const filteredPatients = patients.filter((patient) =>
    [patient.fullName, patient.phone, patient.email].some((field) =>
      field?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);
  const startIndex = (activePage - 1) * patientsPerPage;
  const currentPatients = filteredPatients.slice(
    startIndex,
    startIndex + patientsPerPage
  );

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">Loading patients...</div>
    );
  }

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
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            + Add New Patient
          </button>

          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition w-full sm:w-96 gap-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, phone or email..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActivePage(1);
              }}
              className="outline-none text-gray-700 w-full"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-blue-100 text-blue-900 font-semibold text-sm uppercase">
                <th className="px-6 py-3">Patient ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3">Medical History</th>
                <th className="px-6 py-3">Emergency Contact</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients.map((patient, index) => (
                <tr
                  key={patient._id || index}
                  className="hover:bg-blue-50 transition border-b border-gray-200"
                >
                  <td className="px-6 py-4">{patient._id?.slice(-5)}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {patient.fullName}
                  </td>
                  <td className="px-6 py-4">{patient.age || "N/A"}</td>
                  <td className="px-6 py-4">{patient.gender || "N/A"}</td>
                  <td className="px-6 py-4">{patient.phone}</td>
                  <td className="px-6 py-4">{patient.email || "N/A"}</td>
                  <td className="px-6 py-4">{patient.address || "N/A"}</td>
                  <td className="px-6 py-4">{patient.medicalHistory || "N/A"}</td>
                  <td className="px-6 py-4">
                    {patient.emergencyContact
                      ? `${patient.emergencyContact.name} (${patient.emergencyContact.relation}) - ${patient.emergencyContact.phone}`
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      onClick={() => openEditModal(patient)}
                      className="flex items-center gap-1 text-white bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-1 rounded-full font-medium shadow-sm hover:scale-105 transition"
                    >
                      <Edit3 size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDeletePatient(patient._id)}
                      className="flex items-center gap-1 text-white bg-red-500 px-3 py-1 rounded-full font-medium shadow-sm hover:scale-105 transition"
                    >
                      <Trash2 size={16} /> Delete
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
          <span className="text-gray-700 font-medium">
            Page {activePage} of {totalPages}
          </span>
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

      {/* Add Patient Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Add New Patient
            </h2>
            <form onSubmit={handleAddPatient} className="space-y-2 max-h-[70vh] overflow-y-auto">
              <input
                type="text"
                name="fullName"
                value={newPatient.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={newPatient.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="phone"
                value={newPatient.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="number"
                name="age"
                value={newPatient.age}
                onChange={handleInputChange}
                placeholder="Age"
                className="w-full border px-3 py-2 rounded-md"
              />
              <select
                name="gender"
                value={newPatient.gender}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="address"
                value={newPatient.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="medicalHistory"
                value={newPatient.medicalHistory}
                onChange={handleInputChange}
                placeholder="Medical History"
                className="w-full border px-3 py-2 rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Emergency Contact</h3>
              <input
                type="text"
                name="emergencyContact.name"
                value={newPatient.emergencyContact.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="emergencyContact.relation"
                value={newPatient.emergencyContact.relation}
                onChange={handleInputChange}
                placeholder="Relation"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="emergencyContact.phone"
                value={newPatient.emergencyContact.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full border px-3 py-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full mt-3 hover:scale-105 transition"
              >
                Add Patient
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Patient Modal */}
      {editModalOpen && currentPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative">
            <button
              onClick={() => setEditModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Edit Patient
            </h2>
            <form onSubmit={handleUpdatePatient} className="space-y-2 max-h-[70vh] overflow-y-auto">
              <input
                type="text"
                name="fullName"
                value={currentPatient.fullName}
                onChange={handleEditInputChange}
                placeholder="Full Name"
                required
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={currentPatient.email}
                onChange={handleEditInputChange}
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="phone"
                value={currentPatient.phone}
                onChange={handleEditInputChange}
                placeholder="Phone"
                required
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="number"
                name="age"
                value={currentPatient.age}
                onChange={handleEditInputChange}
                placeholder="Age"
                className="w-full border px-3 py-2 rounded-md"
              />
              <select
                name="gender"
                value={currentPatient.gender}
                onChange={handleEditInputChange}
                className="w-full border px-3 py-2 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="address"
                value={currentPatient.address}
                onChange={handleEditInputChange}
                placeholder="Address"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="medicalHistory"
                value={currentPatient.medicalHistory}
                onChange={handleEditInputChange}
                placeholder="Medical History"
                className="w-full border px-3 py-2 rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Emergency Contact</h3>
              <input
                type="text"
                name="emergencyContact.name"
                value={currentPatient.emergencyContact?.name || ""}
                onChange={handleEditInputChange}
                placeholder="Name"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="emergencyContact.relation"
                value={currentPatient.emergencyContact?.relation || ""}
                onChange={handleEditInputChange}
                placeholder="Relation"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                name="emergencyContact.phone"
                value={currentPatient.emergencyContact?.phone || ""}
                onChange={handleEditInputChange}
                placeholder="Phone"
                className="w-full border px-3 py-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full mt-3 hover:scale-105 transition"
              >
                Update Patient
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;
