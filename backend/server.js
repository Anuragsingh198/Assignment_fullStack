const express = require("express");
const mongoose = require("mongoose");
const cartRouter = require("./routes/cartRouter");

const app = express();
const PORT = 5000;
// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

// Middleware to parse JSON
app.use(express.json({ limit: "10mb" }));

// Your routes
app.use('/api', cartRouter);

// 404 Error Handler - Place this after all other routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "No data found" });
});

// Start the server and connect to the database
const startServer = () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/assignment');
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  } catch (error) {
    console.log("There is an issue with the server", error);
  }
};
startServer();
