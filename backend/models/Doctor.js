import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  department: String,
  availableTime: String
});

export default mongoose.model("Doctor", doctorSchema);
