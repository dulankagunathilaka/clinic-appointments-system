import express from 'express';
import {
  addPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from '../controllers/PatientController.js';

const router = express.Router();

router.post('/', addPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;
