import { useState } from 'react';
import AppointmentsTable from '../components/doctor/AppointmentsTable';
import PatientDetailsModal from '../components/doctor/PatientDetailsModal';

const DoctorAppointments = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* <DoctorSidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
            <p className="text-gray-600">Doctor • Appointments</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="date"
                defaultValue="2025-08-17"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Appointments Table */}
          <AppointmentsTable onPatientClick={handlePatientClick} />
        </div>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          patient={selectedPatient}
        />
      )}
    </div>
  );
};

export default DoctorAppointments;