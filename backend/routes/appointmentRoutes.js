import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

/* CREATE appointment */
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Appointment booked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
});

/* READ all appointments */
router.get("/", async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
});

/* UPDATE patient name & doctor name */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

export default router;
