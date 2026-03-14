import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

/* SIGNUP */
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    password: hashed,
    role: role || "patient"
  });

  await user.save();
  res.json({ message: "Signup successful" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  res.json({
    message: "Login successful",
    role: user.role,
    name: user.name
  });
});

export default router;
