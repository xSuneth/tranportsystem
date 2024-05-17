import express from "express";
import Admin from "../models/admin.js";

const router = express.Router();

// Create Admin
router.post("/", async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Admins
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read Admin by ID
router.get("/:id", async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
      res.status(200).json(admin);
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Admin
router.put("/:id", async (req, res) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Admin
router.delete("/:id", async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
