import express from "express";
import Doctor from "../models/Doctor.js";

const router = express.Router();

// Get doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

export default router;
