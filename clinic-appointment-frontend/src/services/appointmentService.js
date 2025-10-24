import { API_ENDPOINTS } from '../config/api';

// Fetch active doctors for dropdown
export const fetchActiveDoctors = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.doctors.getActive);
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    }
    throw new Error(data.message || 'Failed to fetch doctors');
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

// Fetch available time slots for a doctor on a specific date
export const fetchAvailableTimeSlots = async (doctorId, date) => {
  try {
    const url = `${API_ENDPOINTS.doctors.getAvailableSlots(doctorId)}?date=${date}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.success) {
      return data.data.availableSlots;
    }
    throw new Error(data.message || 'Failed to fetch time slots');
  } catch (error) {
    console.error('Error fetching time slots:', error);
    throw error;
  }
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch(API_ENDPOINTS.appointments.create, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    }
    throw new Error(data.message || 'Failed to create appointment');
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

// Fetch appointments by email
export const fetchAppointmentsByEmail = async (email) => {
  try {
    const response = await fetch(API_ENDPOINTS.appointments.getByEmail(email));
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    }
    throw new Error(data.message || 'Failed to fetch appointments');
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

// Update appointment status (Cancel/Reschedule)
export const updateAppointmentStatus = async (appointmentId, status) => {
  try {
    const response = await fetch(API_ENDPOINTS.appointments.updateStatus(appointmentId), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    }
    throw new Error(data.message || 'Failed to update appointment');
  } catch (error) {
    console.error('Error updating appointment:', error);
    throw error;
  }
};

// Delete appointment
export const deleteAppointment = async (appointmentId) => {
  try {
    const response = await fetch(API_ENDPOINTS.appointments.delete(appointmentId), {
      method: 'DELETE',
    });
    
    const data = await response.json();
    
    if (data.success) {
      return true;
    }
    throw new Error(data.message || 'Failed to delete appointment');
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
};