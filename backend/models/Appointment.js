import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  date: String,
  time: String
});

export default mongoose.model("Appointment", appointmentSchema);
