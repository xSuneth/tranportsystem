import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  method: {
    type: String,
    required: true,
    enum: ["credit card", "debit card", "bank transfer", "digital wallet"],
  },
  status: {
    type: String,
    required: true,
    enum: ["completed", "pending", "failed"],
    default: "pending",
  },
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
