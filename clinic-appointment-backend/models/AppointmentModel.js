import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Patient name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    doctorId: {
      type: String,
      required: [true, 'Doctor selection is required'],
    },
    doctorName: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: [true, 'Appointment date is required'],
    },
    appointmentTime: {
      type: String,
      required: [true, 'Appointment time is required'],
    },
    reasonForVisit: {
      type: String,
      required: [true, 'Reason for visit is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient querying
appointmentSchema.index({ appointmentDate: 1, doctorId: 1 });
appointmentSchema.index({ email: 1 });
appointmentSchema.index({ status: 1 });

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

export default AppointmentModel;