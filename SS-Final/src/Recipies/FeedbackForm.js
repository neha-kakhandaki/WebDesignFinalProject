import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // For star icons
import axios from 'axios'; // Axios for making HTTP requests

const FeedbackForm = ({ saladId, onSubmitReview, onClose }) => {
  const [rating, setRating] = useState(0); // Store the rating (1-5 stars)
  const [review, setReview] = useState(""); // Store the review text

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating > 0 && review) {
      try {
        // Sending review data to the backend
        const response = await axios.post('http://localhost:5000/api/submit-review', {
          saladId, // ID of the salad being reviewed
          rating,  // Rating (1-5 stars)
          review,  // Review text
        });

        // Handle success
        alert(response.data.message || 'Thank you for your feedback!');
        onSubmitReview(saladId, rating, review); // Submit the review and rating to the parent
        setRating(0); // Reset rating
        setReview(''); // Reset review
        onClose(); // Close the form after submission
      } catch (error) {
        // Handle error
        alert('Failed to submit review, please try again.');
        console.error(error);
      }
    } else {
      alert('Please provide both rating and review!');
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" style={{ maxWidth: '600px' }}>
        <div className="modal-content rounded-3" style={{ backgroundColor: '#f4f4f9', padding: '20px' }}>
          <div className="modal-header" style={{ borderBottom: 'none' }}>
            <h5 className="modal-title" style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>
              Rate this Recipe
            </h5>
            <button type="button" className="btn-close" onClick={onClose} style={{ color: '#6a1b9a' }}></button>
          </div>
          <div className="modal-body">
            <h6 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Rating:</h6>
            <div className="d-flex mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  color={star <= rating ? '#ffc107' : '#e4e5e9'}
                  size={30}
                  style={{ cursor: 'pointer', marginRight: '5px' }}
                  onClick={() => handleRatingClick(star)} // Set rating on star click
                />
              ))}
            </div>

            <div className="mb-4">
              <label className="form-label" style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>
                Review:
              </label>
              <textarea
                className="form-control"
                value={review}
                onChange={handleReviewChange}
                placeholder="Write your review here..."
                rows="4"
                style={{ borderColor: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
                style={{
                  backgroundColor: '#6a1b9a',
                  borderColor: '#6a1b9a',
                  fontFamily: '"Playfair Display", serif',
                  padding: '10px 20px',
                }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;