import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vikhe Patil Hospital Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
