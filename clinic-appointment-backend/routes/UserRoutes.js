import express from "express";
import { registerUser, loginUser, resetPassword, requestPasswordReset, } from "../controllers/UserController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/request-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);


export default router;
