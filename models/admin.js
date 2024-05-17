import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ["super admin", "traffic manager", "admin"],
    default: "admin",
  },
});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
