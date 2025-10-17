import PatientModel from '../models/PatientModel.js';

// Create a new patient
export const addPatient = async (req, res) => {
  try {
    const patient = new PatientModel(req.body);
    const savedPatient = await patient.save();
    res.status(201).json({
      success: true,
      message: 'Patient added successfully',
      data: savedPatient,
    });
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to add patient',
      error: error.message,
    });
  }
};

// Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await PatientModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve patients',
      error: error.message,
    });
  }
};

// Get a single patient by ID
export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await PatientModel.findById(id);
    if (!patient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving patient',
      error: error.message,
    });
  }
};

// Update a patient
export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPatient = await PatientModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Patient updated successfully',
      data: updatedPatient,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update patient',
      error: error.message,
    });
  }
};

// Delete a patient
export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPatient = await PatientModel.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Patient deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete patient',
      error: error.message,
    });
  }
};
