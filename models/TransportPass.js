import mongoose from "mongoose";

const TransportPassSchema = new mongoose.Schema({
  issue_date: {
    type: Date,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.TransportPass || mongoose.model("TransportPass", TransportPassSchema);
