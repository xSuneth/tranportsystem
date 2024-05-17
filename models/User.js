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
  transportPass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TransportPass",
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
