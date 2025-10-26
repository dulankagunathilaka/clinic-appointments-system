import express from "express";
import multer from "multer";
import {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  approveDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

// Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post("/", addDoctor);
router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.put("/:id", upload.single("profileImage"), updateDoctor);
router.delete("/:id", deleteDoctor);
router.put("/approve/:id", approveDoctor);

export default router;
