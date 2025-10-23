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

router.post('/', authenticateJWT, authorizeRoles('admin'), addPatient);
router.get('/', authenticateJWT, authorizeRoles('admin', 'doctor'), getAllPatients);
router.get('/:id', authenticateJWT, authorizeRoles('admin','doctor','patient'), getPatientById);
router.put('/:id', authenticateJWT, authorizeRoles('admin'), updatePatient);
router.delete('/:id', authenticateJWT, authorizeRoles('admin'), deletePatient);

const router = express.Router();

router.post('/', addPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;
