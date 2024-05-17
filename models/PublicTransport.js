import mongoose from "mongoose";

const PublicTransportSchema = new mongoose.Schema({
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  current_location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  status: {
    type: String,
    enum: ["on route", "delayed", "out of service"],
    default: "on route",
  },
});

PublicTransportSchema.index({ current_location: "2dsphere" });

export default mongoose.models.PublicTransport || mongoose.model("PublicTransport", PublicTransportSchema);
