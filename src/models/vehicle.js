import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  license_plate: {
    type: String,
    required: true,
    unique: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  parking_ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingTicket",
  },
});

export default mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);
