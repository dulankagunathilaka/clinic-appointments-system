import AppointmentModel from '../models/AppointmentModel.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
  try {
    const appointment = new AppointmentModel(req.body);
    const savedAppointment = await appointment.save();
    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: savedAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create appointment',
      error: error.message,
    });
  }
};

// Get all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const { status, doctorId, date, email } = req.query;
    
    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (doctorId) filter.doctorId = doctorId;
    if (email) filter.email = email;
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      filter.appointmentDate = { $gte: startDate, $lt: endDate };
    }

    const appointments = await AppointmentModel.find(filter)
      .sort({ appointmentDate: 1, appointmentTime: 1 });
    
    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve appointments',
      error: error.message,
    });
  }
};

// Get a single appointment by ID
export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentModel.findById(id);
    
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    console.error('Error retrieving appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving appointment',
      error: error.message,
    });
  }
};

// Get appointments by email
export const getAppointmentsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const appointments = await AppointmentModel.find({ email })
      .sort({ appointmentDate: -1 });
    
    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error('Error retrieving appointments by email:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving appointments',
      error: error.message,
    });
  }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    
    if (!updatedAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Appointment updated successfully',
      data: updatedAppointment,
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to update appointment',
      error: error.message,
    });
  }
};

// Update appointment status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['Pending', 'Confirmed', 'Completed', 'Cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value',
      });
    }
    
    const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!updatedAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Appointment status updated successfully',
      data: updatedAppointment,
    });
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to update appointment status',
      error: error.message,
    });
  }
};

// Delete an appointment
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await AppointmentModel.findByIdAndDelete(id);
    
    if (!deletedAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete appointment',
      error: error.message,
    });
  }
};

// Get appointment statistics
export const getAppointmentStats = async (req, res) => {
  try {
    const stats = await AppointmentModel.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);
    
    const totalAppointments = await AppointmentModel.countDocuments();
    
    res.status(200).json({
      success: true,
      data: {
        total: totalAppointments,
        byStatus: stats,
      },
    });
  } catch (error) {
    console.error('Error retrieving appointment statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving statistics',
      error: error.message,
    });
  }
};

// Get appointments by Doctor ID
export const getAppointmentsByDoctorId = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const appointments = await AppointmentModel.find({ doctorId })
      .populate('patientId', 'name email'); // populate patient info if exists
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching appointments by doctor:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch appointments', error: error.message });
  }
};

// Get appointments by Patient ID
export const getAppointmentsByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;
    const appointments = await AppointmentModel.find({ patientId })
      .populate('doctorId', 'doctorName'); // populate doctor info
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching appointments by patient:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch appointments', error: error.message });
  }
};
