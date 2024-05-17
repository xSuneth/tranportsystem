import express from "express";
import PublicTransport from "../models/publicTransport.js";

const router = express.Router();

// Create Public Transport
router.post("/", async (req, res) => {
  try {
    const newPublicTransport = new PublicTransport(req.body);
    const savedPublicTransport = await newPublicTransport.save();
    res.status(201).json(savedPublicTransport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Public Transport
router.get("/", async (req, res) => {
  try {
    const publicTransport = await PublicTransport.find();
    res.status(200).json(publicTransport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read Public Transport by ID
router.get("/:id", async (req, res) => {
  try {
    const publicTransport = await PublicTransport.findById(req.params.id);
    if (publicTransport) {
      res.status(200).json(publicTransport);
    } else {
      res.status(404).json({ message: "Public Transport not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Public Transport
router.put("/:id", async (req, res) => {
  try {
    const updatedPublicTransport = await PublicTransport.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPublicTransport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Public Transport
router.delete("/:id", async (req, res) => {
  try {
    await PublicTransport.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Public Transport deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
