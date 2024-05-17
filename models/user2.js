import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  transportPass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TransportPass",
  },
  vehicle: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  }],
  payment_methods: [{
    type: String,
  }],
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
