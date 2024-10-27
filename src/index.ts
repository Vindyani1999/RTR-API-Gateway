import express from "express";
import dotenv from "dotenv";
import { setupProxies } from "./proxy";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Setup Proxies
setupProxies(app);

// Test route for checking if the server is running
app.get("/", (req, res) => {
  res.send("API Gateway is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
