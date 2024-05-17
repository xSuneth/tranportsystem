// pages/api/signup.js

import dbConnect from "../../lib/database";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Connect to the MongoDB database
    await dbConnect();

    try {
      // Parse sign-up data from the request body
      const { name, email, password } = req.body;

      // Validate sign-up data (e.g., check for required fields)
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: "Name, email, and password are required" });
      }

      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email is already in use" });
      }

      // Create a new user document in the MongoDB database
      const newUser = new User({ name, email, password });
      await newUser.save();

      // Return a success response
      return res
        .status(201)
        .json({ success: true, message: "User created successfully" });
    } catch (error) {
      // Handle any errors
      console.error("Sign-up error:", error);
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  } else {
    // Return an error for unsupported HTTP methods
    return res.status(405).json({ error: "Method not allowed" });
  }
}
