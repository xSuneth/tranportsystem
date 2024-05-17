import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import transportPassRoutes from "./routes/transportPassRoutes.js";
import parkingTicketRoutes from "./routes/parkingTicketRoutes.js";
import publicTransportRoutes from "./routes/publicTransportRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
app.use("/admins", adminRoutes);
app.use("/transport-passes", transportPassRoutes);
app.use("/parking-tickets", parkingTicketRoutes);
app.use("/public-transport", publicTransportRoutes);
app.use("/payments", paymentRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/neotropolis-stms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
