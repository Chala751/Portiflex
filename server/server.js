import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true, // Allow credentials
  })
);

// Routes




app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process?.env?.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
