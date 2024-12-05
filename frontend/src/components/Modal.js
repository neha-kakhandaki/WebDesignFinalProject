// src/components/Modal.js
import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ show, onClose, recipeId }) => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      recipeId,
      rating: parseInt(rating),
      review,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/submit-feedback', feedbackData);
      setMessage(response.data.message);
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('Error submitting feedback');
    }
  };

  if (!show) return null; // Don't render if show is false

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-btn">X</button>
        <h2>Submit Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Rating: </label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Review: </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Modal;
