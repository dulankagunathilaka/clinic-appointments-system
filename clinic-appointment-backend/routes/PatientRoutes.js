import express from 'express';
import {
  addPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from '../controllers/PatientController.js';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected routes with authentication & authorization
router.post('/', authenticateJWT, authorizeRoles('admin'), addPatient);
router.get('/', authenticateJWT, authorizeRoles('admin', 'doctor'), getAllPatients);
router.get('/:id', authenticateJWT, authorizeRoles('admin','doctor','patient'), getPatientById);
router.put('/:id', authenticateJWT, authorizeRoles('admin'), updatePatient);
router.delete('/:id', authenticateJWT, authorizeRoles('admin'), deletePatient);

export default router;
