import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "patient" // patient | admin
  }
});

export default mongoose.model("User", userSchema);
