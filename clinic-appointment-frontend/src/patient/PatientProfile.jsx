import { useState } from 'react';
import PatientSidebar from '../components/PatientSidebar';
import ProfileHeader from '../components/ProfileHeader';
import AppointmentSummaryCard from '../components/AppointmentSummaryCard';
import PersonalInfoSection from '../components/PersonalInfoSection';
import MedicalInfoSection from '../components/MedicalInfoSection';

const PatientProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Mock data - Replace with API call later
  const [personalInfo, setPersonalInfo] = useState({
    email: 'anne01@gmail.com',
    address: 'Colombo, SL',
    gender: 'Female',
    dob: '01.01.2000',
    contactNumber: '71246578'
  });

  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: 'B+',
    allergies: 'Peanuts, Penicillin',
    chronicConditions: 'Asthma',
    currentMedications: 'None',
    emergencyContact: '71246578'
  });

  const appointmentStats = {
    completed: 1,
    upcoming: 2,
    total: 3
  };

  const handlePersonalInfoSave = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
    // TODO: Call API to update backend
    console.log('Saving personal info:', updatedInfo);
  };

  const handleMedicalInfoSave = (updatedInfo) => {
    setMedicalInfo(updatedInfo);
    // TODO: Call API to update backend
    console.log('Saving medical info:', updatedInfo);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* PatientSidebar */}
      <PatientSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <ProfileHeader name="Anne Marie" avatarUrl="" />

          {/* Appointment Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <AppointmentSummaryCard
              title="Completed Appointments"
              count={appointmentStats.completed}
              color="blue"
            />
            <AppointmentSummaryCard
              title="Upcoming Appointments"
              count={appointmentStats.upcoming}
              color="lightblue"
            />
            <AppointmentSummaryCard
              title="Total Appointments"
              count={appointmentStats.total}
              color="skyblue"
            />
          </div>

          {/* Info Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PersonalInfoSection 
              data={personalInfo} 
              onSave={handlePersonalInfoSave} 
            />
            <MedicalInfoSection 
              data={medicalInfo} 
              onSave={handleMedicalInfoSave} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;