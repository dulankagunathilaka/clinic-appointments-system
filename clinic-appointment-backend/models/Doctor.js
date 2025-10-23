import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String }, // e.g., Consultant Cardiologist
  specializations: [{ type: String, required: true }],
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  dob: { type: String },
  nic: { type: String },
  registrationNumber: { type: String }, // SLMC number
  fee: { type: Number, default: 0 },
  notes: { type: String },
  profileImage: { type: String }, // matches frontend
  isApproved: { type: Boolean, default: false },
  availability: [
    {
      day: String,
      active: { type: Boolean, default: false },
      from: { type: String, default: "09:00" },
      to: { type: String, default: "12:00" },
    },
  ],
});

export default mongoose.model("Doctor", doctorSchema);
