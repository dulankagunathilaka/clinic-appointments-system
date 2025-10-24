// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const API_ENDPOINTS = {
  // Doctor endpoints
  doctors: {
    getActive: `${API_BASE_URL}/doctors/active`,
    getAvailableSlots: (doctorId) => `${API_BASE_URL}/doctors/${doctorId}/available-slots`,
    getAvailableDays: (doctorId) => `${API_BASE_URL}/doctors/${doctorId}/available-days`,
  },
  
  // Appointment endpoints
  appointments: {
    create: `${API_BASE_URL}/appointments`,
    getAll: `${API_BASE_URL}/appointments`,
    getById: (id) => `${API_BASE_URL}/appointments/${id}`,
    getByEmail: (email) => `${API_BASE_URL}/appointments/email/${email}`,
    update: (id) => `${API_BASE_URL}/appointments/${id}`,
    updateStatus: (id) => `${API_BASE_URL}/appointments/${id}/status`,
    delete: (id) => `${API_BASE_URL}/appointments/${id}`,
  },
  
  // Patient endpoints
  patients: {
    create: `${API_BASE_URL}/patients`,
    getAll: `${API_BASE_URL}/patients`,
    getById: (id) => `${API_BASE_URL}/patients/${id}`,
  }
};

export default API_BASE_URL;