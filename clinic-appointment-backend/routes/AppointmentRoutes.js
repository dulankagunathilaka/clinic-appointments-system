import express from 'express';
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  getAppointmentsByEmail,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
  getAppointmentStats,
  getAppointmentsByDoctorId,
  getAppointmentsByPatientId
} from '../controllers/AppointmentController.js';

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments (with optional filters: status, doctorId, date, email)
router.get('/', getAllAppointments);

// Get appointment statistics
router.get('/stats', getAppointmentStats);

// Get appointments by email
router.get('/email/:email', getAppointmentsByEmail);

// Get a single appointment by ID
router.get('/:id', getAppointmentById);

// Update an appointment
router.put('/:id', updateAppointment);

// Update appointment status only
router.patch('/:id/status', updateAppointmentStatus);

// Delete an appointment
router.delete('/:id', deleteAppointment);

// Fetch appointments by doctor
router.get('/doctor/id/:doctorId', getAppointmentsByDoctorId);

// Fetch appointments by patient
router.get('/patient/id/:patientId', getAppointmentsByPatientId);


export default router;