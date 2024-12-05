const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// POST route to submit a new review
router.post('/submit-review', async (req, res) => {
  const { saladId, rating, review } = req.body;

  if (!saladId || !rating || !review) {
    return res.status(400).json({ error: 'Missing required fields!' });
  }

  try {
    const newReview = new Review({
      saladId,
      rating,
      review,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit review. Please try again.' });
  }
});

// GET route to fetch all reviews for a particular salad
router.get('/reviews/:saladId', async (req, res) => {
  const { saladId } = req.params;

  try {
    const reviews = await Review.find({ saladId });
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch reviews. Please try again.' });
  }
});

module.exports = router;