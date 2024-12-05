const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema({
  saladId: {
    type: String,
    required: true, // ID of the salad being reviewed
  },
  rating: {
    type: Number,
    required: true, // Rating given by the user (1-5)
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true, // Text review from the user
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp of review creation
  },
});

// Create the Review model based on the schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;