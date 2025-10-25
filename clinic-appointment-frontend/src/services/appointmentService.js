import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/appointments`, appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error.response?.data || error;
  }
};

// Get all appointments
export const fetchAllAppointments = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_URL}/appointments`, { params: filters });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error.response?.data || error;
  }
};

// Get appointments by email
export const fetchAppointmentsByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/appointments/email/${email}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching appointments by email:', error);
    throw error.response?.data || error;
  }
};

// Get single appointment by ID
export const fetchAppointmentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/appointments/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching appointment:', error);
    throw error.response?.data || error;
  }
};

// Update appointment
export const updateAppointment = async (id, updateData) => {
  try {
    const response = await axios.put(`${API_URL}/appointments/${id}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating appointment:', error);
    throw error.response?.data || error;
  }
};

// Update appointment status only
export const updateAppointmentStatus = async (id, status) => {
  try {
    const response = await axios.patch(`${API_URL}/appointments/${id}/status`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating appointment status:', error);
    throw error.response?.data || error;
  }
};

// Delete appointment
export const deleteAppointment = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error.response?.data || error;
  }
};

// Get appointment statistics
export const fetchAppointmentStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/appointments/stats`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching appointment stats:', error);
    throw error.response?.data || error;
  }
};

// Fetch active doctors (if you add doctor endpoints later)
export const fetchActiveDoctors = async () => {
  try {
    // This is a placeholder - you'll need to implement doctor endpoints in backend
    const response = await axios.get(`${API_URL}/doctors`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    // Return mock data if endpoint doesn't exist yet
    return [
      { _id: '1', name: 'Dr. Sarah Johnson', specialization: 'General Physician' },
      { _id: '2', name: 'Dr. Michael Chen', specialization: 'Cardiologist' },
      { _id: '3', name: 'Dr. Priya Sharma', specialization: 'Pediatrician' },
      { _id: '4', name: 'Dr. James Wilson', specialization: 'Dermatologist' },
      { _id: '5', name: 'Dr. Emily Brown', specialization: 'Gynecologist' },
      { _id: '6', name: 'Dr. Robert Davis', specialization: 'Orthopedic' },
      { _id: '7', name: 'Dr. Lisa Anderson', specialization: 'Neurologist' },
      { _id: '8', name: 'Dr. David Martinez', specialization: 'ENT Specialist' }
    ];
  }
};

// Fetch available time slots (placeholder - implement when you add scheduling logic)
export const fetchAvailableTimeSlots = async (doctorId, date) => {
  try {
    // This is a placeholder - you'll need to implement this endpoint in backend
    const response = await axios.get(`${API_URL}/appointments/availability`, {
      params: { doctorId, date }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching time slots:', error);
    // Return mock time slots if endpoint doesn't exist yet
    return [
      '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
      '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
    ];
  }
};