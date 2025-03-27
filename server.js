import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Environment variables
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection (Updated: Removed deprecated options)
const uri = 'mongodb+srv://<username>:pT1Zm8wJBu19X5qL@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eventDate: { type: String, required: true },
  message: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
const Contact = mongoose.model("Contact", ContactSchema);

// **User Registration**
app.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check for missing fields
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password securely
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /signup:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// **User Login**
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// **Handle Contact Form Submission**
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, eventDate, message } = req.body;

    if (!name || !email || !phone || !eventDate || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ name, email, phone, eventDate, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in /contact:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// **Middleware: Authenticate Admin Access**
const verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

// **Get All Registered Users (Admin Only)**
app.get("/users", verifyAdmin, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords for security
    res.json(users);
  } catch (error) {
    console.error("Error in /users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// Fetch all contact form submissions
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});
