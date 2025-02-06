const express = require("express");
const app = express();
require("dotenv").config(); // Load environment variables from .env file
const cors = require("cors");

// Import routes
const eventRoutes = require("./routes/eventRoutes");

// Define port number
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json()); // Parse JSON requests
app.use(cors());

// Connect to database and cloudinary
require("./config/database").dbconnect(); // Connect to database

// run cron scheduler and create events every 24 hour
require("./utils/eventScraper").eventScraper();

// Route setup
app.use("/events", eventRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Hello Hi Bye</h1>"); // Simple response for root route
});

// Activate server
app.listen(PORT, () => {
  console.log("Server is running on port", PORT); // Log server activation
});
