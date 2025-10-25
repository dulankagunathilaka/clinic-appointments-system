import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import axios from 'axios';

const FormInput = ({ type = 'text', placeholder, icon: Icon, isSelect = false, value, onChange, options = [], disabled = false }) => {
  return (
    <div className="relative w-full">
      {isSelect ? (
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300 transition duration-150 appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
          required
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300 transition duration-150 disabled:bg-gray-100 disabled:cursor-not-allowed"
          required
          min={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
        />
      )}
      
      {Icon && !isSelect && (
        <Icon
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      )}
      
      {isSelect && (
        <ChevronDown
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      )}
    </div>
  );
};

const FormTextarea = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative w-full">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300 transition duration-150 resize-none"
        required
      />
    </div>
  );
};

const AppointmentFormSection = () => {
  // Mock doctors data
  const mockDoctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialization: 'General Physician' },
    { id: '2', name: 'Dr. Michael Chen', specialization: 'Cardiologist' },
    { id: '3', name: 'Dr. Priya Sharma', specialization: 'Pediatrician' },
    { id: '4', name: 'Dr. James Wilson', specialization: 'Dermatologist' },
    { id: '5', name: 'Dr. Emily Brown', specialization: 'Gynecologist' },
    { id: '6', name: 'Dr. Robert Davis', specialization: 'Orthopedic' },
    { id: '7', name: 'Dr. Lisa Anderson', specialization: 'Neurologist' },
    { id: '8', name: 'Dr. David Martinez', specialization: 'ENT Specialist' }
  ];

  // Mock time slots
  const mockTimeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    doctorId: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: '',
    reasonForVisit: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const API_URL = 'http://localhost:4000/api';

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Update doctor name when doctor is selected
    if (field === 'doctorId') {
      const selectedDoctor = mockDoctors.find(doc => doc.id === value);
      setFormData(prev => ({ 
        ...prev, 
        doctorName: selectedDoctor ? selectedDoctor.name : '' 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Prepare data matching your backend AppointmentModel schema
      const appointmentData = {
        patientName: formData.patientName,
        email: formData.email,
        doctorId: formData.doctorId,
        doctorName: formData.doctorName,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
        reasonForVisit: formData.reasonForVisit,
        status: 'Pending'
      };

      console.log('Sending data:', appointmentData);

      // Send to backend using the correct endpoint
      const response = await axios.post(
        `${API_URL}/appointments`,
        appointmentData
      );

      if (response.data.success) {
        setSuccessMessage('Appointment booked successfully! We will contact you shortly.');
        
        // Reset form
        setFormData({
          patientName: '',
          email: '',
          doctorId: '',
          doctorName: '',
          appointmentDate: '',
          appointmentTime: '',
          reasonForVisit: '',
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      console.error('Error response:', error.response?.data);
      setErrorMessage(
        error.response?.data?.message || 
        error.response?.data?.error ||
        'Failed to book appointment. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const doctorOptions = mockDoctors.map(doctor => ({
    value: doctor.id,
    label: `${doctor.name} - ${doctor.specialization}`
  }));

  const timeSlotOptions = mockTimeSlots.map(slot => ({
    value: slot,
    label: slot
  }));

  return (
    <section className="py-20 px-6 bg-white" id="appointment">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-2xl overflow-hidden">
          
          {/* Left Column: Form (3/5 width) */}
          <div className="lg:w-3/5 w-full bg-sky-500 p-8 md:p-12 text-white">
            <div className="mb-8 space-y-2">
              <p className="text-lg font-semibold tracking-wider">
                <span className="mr-5">|</span>Appointment
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold">Apply For Free Now</h2>
            </div>
            
            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-500 text-white rounded-lg font-semibold">
                {successMessage}
              </div>
            )}
            
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500 text-white rounded-lg font-semibold">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <FormInput 
                placeholder="Patient Name*" 
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
              />
              
              <FormInput 
                type="email"
                placeholder="Email*" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              
              <FormInput 
                placeholder="Select Doctor" 
                isSelect={true}
                value={formData.doctorId}
                onChange={(e) => handleInputChange('doctorId', e.target.value)}
                options={doctorOptions}
              />
              
              <FormInput 
                placeholder="DD/MM/YYYY" 
                icon={Calendar} 
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
              />
              
              <FormInput 
                placeholder="Select Time" 
                isSelect={true}
                value={formData.appointmentTime}
                onChange={(e) => handleInputChange('appointmentTime', e.target.value)}
                options={timeSlotOptions}
              />
              
              {/* Reason/Symptoms Field - Spans full width */}
              <div className="md:col-span-2">
                <FormTextarea 
                  placeholder="Reason for Visit / Symptoms*"
                  value={formData.reasonForVisit}
                  onChange={(e) => handleInputChange('reasonForVisit', e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full md:col-span-2 bg-blue-700 text-white font-semibold py-4 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>
            </form>
          </div>
          
          <div className="lg:w-2/5 w-full hidden lg:block relative">
            <img
              src="/src/assets/appoinment_img.png"
              alt="Smiling female doctor with stethoscope"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentFormSection;