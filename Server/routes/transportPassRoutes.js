import express from "express";
import TransportPass from "../models/transportPass.js";

const router = express.Router();

// Create Transport Pass
router.post("/", async (req, res) => {
  try {
    const newTransportPass = new TransportPass(req.body);
    const savedTransportPass = await newTransportPass.save();
    res.status(201).json(savedTransportPass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Transport Passes
router.get("/", async (req, res) => {
  try {
    const transportPasses = await TransportPass.find();
    res.status(200).json(transportPasses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read Transport Pass by ID
router.get("/:id", async (req, res) => {
  try {
    const transportPass = await TransportPass.findById(req.params.id);
    if (transportPass) {
      res.status(200).json(transportPass);
    } else {
      res.status(404).json({ message: "Transport Pass not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Transport Pass
router.put("/:id", async (req, res) => {
  try {
    const updatedTransportPass = await TransportPass.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTransportPass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Transport Pass
router.delete("/:id", async (req, res) => {
  try {
    await TransportPass.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Transport Pass deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
