const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const reviewsRoutes = require('./routes/reviews');

// Initialize dotenv to load environment variables
dotenv.config(); // This loads environment variables from the .env file

// Create the Express app
const app = express();
const port = process.env.PORT || 5000; // Use the port from environment variables, default to 5000

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Use the routes
app.use('/api', reviewsRoutes); // Prefix all routes with /api

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected')) // Success message if MongoDB is connected
  .catch((err) => console.log('Error connecting to MongoDB:', err)); // Error message if MongoDB connection fails

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Corrected console log statement
});