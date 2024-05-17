import express from "express";
import ParkingTicket from "../models/parkingTicket.js";

const router = express.Router();

// Create Parking Ticket
router.post("/", async (req, res) => {
  try {
    const newParkingTicket = new ParkingTicket(req.body);
    const savedParkingTicket = await newParkingTicket.save();
    res.status(201).json(savedParkingTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Parking Tickets
router.get("/", async (req, res) => {
  try {
    const parkingTickets = await ParkingTicket.find();
    res.status(200).json(parkingTickets);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read Parking Ticket by ID
router.get("/:id", async (req, res) => {
  try {
    const parkingTicket = await ParkingTicket.findById(req.params.id);
    if (parkingTicket) {
      res.status(200).json(parkingTicket);
    } else {
      res.status(404).json({ message: "Parking Ticket not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Parking Ticket
router.put("/:id", async (req, res) => {
  try {
    const updatedParkingTicket = await ParkingTicket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedParkingTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Parking Ticket
router.delete("/:id", async (req, res) => {
  try {
    await ParkingTicket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Parking Ticket deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
