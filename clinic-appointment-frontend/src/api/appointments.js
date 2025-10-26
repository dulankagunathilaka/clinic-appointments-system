import axios from "axios";

const BASE_URL = "http://localhost:4000/api/appointments";

// Fetch appointments for doctor
export const fetchAppointmentsByDoctor = async (doctorId) => {
  try {
    const res = await axios.get(`${BASE_URL}/doctor/id/${doctorId}`);
    return res.data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Fetch appointments for patient
export const fetchAppointmentsByPatient = async (patientId) => {
  try {
    const res = await axios.get(`${BASE_URL}/patient/id/${patientId}`);
    return res.data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
