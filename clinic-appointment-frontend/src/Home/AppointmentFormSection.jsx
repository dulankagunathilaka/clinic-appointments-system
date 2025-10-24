import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { fetchActiveDoctors, fetchAvailableTimeSlots, createAppointment } from '../services/appointmentService';

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
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    doctorId: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: '',
    reasonForVisit: '',
  });

  const [doctors, setDoctors] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch doctors on component mount
  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const doctorsList = await fetchActiveDoctors();
        setDoctors(doctorsList);
      } catch (error) {
        setErrorMessage('Failed to load doctors. Please try again.');
      }
    };
    
    loadDoctors();
  }, []);

  // Fetch time slots when doctor and date are selected
  useEffect(() => {
    const loadTimeSlots = async () => {
      if (formData.doctorId && formData.appointmentDate) {
        setLoadingSlots(true);
        try {
          const slots = await fetchAvailableTimeSlots(formData.doctorId, formData.appointmentDate);
          setTimeSlots(slots);
          // Reset selected time if it's not available anymore
          if (formData.appointmentTime && !slots.includes(formData.appointmentTime)) {
            setFormData(prev => ({ ...prev, appointmentTime: '' }));
          }
        } catch (error) {
          setErrorMessage('Failed to load available time slots.');
          setTimeSlots([]);
        } finally {
          setLoadingSlots(false);
        }
      }
    };
    
    loadTimeSlots();
  }, [formData.doctorId, formData.appointmentDate]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear time slot when doctor or date changes
    if (field === 'doctorId' || field === 'appointmentDate') {
      setFormData(prev => ({ ...prev, appointmentTime: '' }));
    }
    
    // Update doctor name when doctor is selected
    if (field === 'doctorId') {
      const selectedDoctor = doctors.find(doc => doc._id === value);
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
      await createAppointment(formData);
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
      setTimeSlots([]);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const doctorOptions = doctors.map(doctor => ({
    value: doctor._id,
    label: `${doctor.name} - ${doctor.specialization}`
  }));

  const timeSlotOptions = timeSlots.map(slot => ({
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
              <div className="mb-6 p-4 bg-green-500 text-white rounded-lg">
                {successMessage}
              </div>
            )}
            
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500 text-white rounded-lg">
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
                disabled={doctors.length === 0}
              />
              
              <FormInput 
                placeholder="DD/MM/YYYY" 
                icon={Calendar} 
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                disabled={!formData.doctorId}
              />
              
              <FormInput 
                placeholder={loadingSlots ? "Loading slots..." : "Select Time"} 
                isSelect={true}
                value={formData.appointmentTime}
                onChange={(e) => handleInputChange('appointmentTime', e.target.value)}
                options={timeSlotOptions}
                disabled={!formData.appointmentDate || timeSlots.length === 0 || loadingSlots}
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