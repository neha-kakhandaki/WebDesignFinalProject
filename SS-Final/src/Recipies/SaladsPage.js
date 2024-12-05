import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'; // For star icon
 
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component
 
const SaladsPage = () => {
  const [showModal, setShowModal] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [currentSalad, setCurrentSalad] = useState(null);
  const [reviews, setReviews] = useState({}); // Store reviews and ratings
 
  // Close the modal
  const handleCloseModal = () => setShowModal(null);
 
  // Handle review submission
  const handleReviewSubmit = (saladId, rating, review) => {
    setReviews(prev => ({
      ...prev,
      [saladId]: { rating, review }
    }));
    //alert('Review submitted successfully!');
  };
 
 // Salads Data
 const salads = [
  { id: 'caesar', name: 'Caesar Salad', imgUrl: '/images/Salads/ceaser.jpg', recipe: { ingredients: ['Romaine lettuce', 'Caesar dressing', 'Parmesan cheese', 'Croutons', 'Black pepper'], steps: ['Wash and chop the romaine lettuce.', 'Toss the lettuce with Caesar dressing.', 'Add croutons and parmesan cheese on top.', 'Season with black pepper and serve.'], reviews: "737 Reviews • 4.9 Average" } },
  { id: 'greek', name: 'Greek Salad', imgUrl: '/images/Salads/greek.jpg',recipe: { ingredients: ['Tomatoes', 'Cucumbers', 'Olives', 'Feta cheese', 'Red onion', 'Olive oil'],steps: ['Chop the vegetables and mix in a large bowl.', 'Add feta cheese and olives.', 'Drizzle with olive oil and season with salt and pepper.', 'Serve chilled.'], reviews: "520 Reviews • 4.6 Average"  }},
  { id: 'quinoa',name: 'Quinoa Salad', imgUrl: '/images/Salads/quinoa.jpg',recipe: { ingredients: ['Quinoa', 'Chopped vegetables', 'Almonds or walnuts', 'Lemon juice', 'Olive oil'], steps: ['Cook the quinoa according to package instructions.', 'Chop the vegetables and nuts.', 'Toss everything with olive oil and lemon juice.', 'Season with salt and pepper and serve.'],reviews: "412 Reviews • 4.7 Average"  } },
  { id: 'avocado',  name: 'Avocado Salad', imgUrl: '/images/Salads/avocado.jpg', recipe: { ingredients: ['Avocados', 'Lettuce', 'Tomatoes', 'Onions', 'Lemon', 'Olive oil'],steps: ['Dice the avocados and tomatoes.', 'Chop the onions and lettuce.', 'Toss the ingredients with olive oil and lemon juice.', 'Season with salt and pepper.'],reviews: "631 Reviews • 4.8 Average"   }},
  { id: 'spinach', name: 'Spinach Salad',imgUrl: '/images/Salads/spinach.jpg', recipe: { ingredients: ['Spinach leaves', 'Strawberries', 'Pine nuts', 'Goat cheese', 'Balsamic vinaigrette'],steps: ['Toss the spinach and strawberries together.', 'Sprinkle pine nuts and goat cheese on top.', 'Drizzle with balsamic vinaigrette and serve.'],  reviews: "894 Reviews • 4.9 Average"  } },
  {
    id: 'kale',
    name: 'Kale Salad',
    imgUrl: '/images/Salads/kale.jpg',
    recipe: {
      ingredients: ['Kale', 'Olive oil', 'Lemon', 'Garlic', 'Chickpeas', 'Feta cheese'],
      steps: ['Massage kale with olive oil and lemon juice.', 'Add garlic, chickpeas, and feta cheese.', 'Toss and serve chilled.'],
      reviews: "278 Reviews • 4.5 Average"
    }
  },
  {
    id: 'carrot',
    name: 'Carrot & Beet Salad',
    imgUrl: '/images/Salads/carrotbeet.jpg',
    recipe: {
      ingredients: ['Carrots', 'Beets', 'Orange', 'Olive oil', 'Cilantro'],
      steps: ['Grate the carrots and beets.', 'Peel and segment the orange.', 'Toss the vegetables with olive oil and cilantro.'],
      reviews: "213 Reviews • 4.3 Average"
    }
  },
  {
    id: 'chickpea',
    name: 'Chickpea Salad',
    imgUrl: '/images/Salads/chickpea.jpg',
    recipe: {
      ingredients: ['Chickpeas', 'Tomatoes', 'Cucumbers', 'Olives', 'Red onion', 'Olive oil'],
      steps: ['Combine chickpeas with chopped vegetables.', 'Drizzle with olive oil, lemon juice, and seasonings.'],
      reviews: "430 Reviews • 4.6 Average"
    }
  },
  {
    id: 'fruit',
    name: 'Mixed Fruit Salad',
    imgUrl: '/images/Salads/mixed.jpg',
    recipe: {
      ingredients: ['Strawberries', 'Blueberries', 'Pineapple', 'Kiwi', 'Mint leaves'],
      steps: ['Chop the fruits into small pieces.', 'Toss with fresh mint leaves and serve chilled.'],
      reviews: "345 Reviews • 4.7 Average"
    }
  }
];
 
 
  return (
    <div>
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Healthy Salads</h1>
        <p className="lead text-muted">Explore our collection of fresh and healthy salad recipes that are perfect for every occasion.</p>
      </header>
 
     {/* Salad Recipes Section */}
<section className="row g-4">
  {salads.map(salad => (
    <div className="col-md-4" key={salad.id}>
      <div className="salad-preview">
        <img
          src={salad.imgUrl}
          className="img-fluid rounded"
          alt={salad.name}
          style={{ width: '100%' }}
        />
       
        <div className="d-flex justify-content-between align-items-center mt-3">
          {/* Recipe Name */}
          <h5 style={{ fontWeight: 'bold', color: '#333', margin: 0 }}>{salad.name}</h5>
 
          {/* View Recipe Button */}
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(salad.id)}
            style={{
              backgroundColor: '#6a1b9a',
              borderColor: '#6a1b9a',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 'bold',
              padding: '6px 12px', // Adjusting padding to make the button smaller
              fontSize: '0.875rem' // Making the button font size smaller
            }}
          >
            View Recipe
          </button>
        </div>
 
        {/* Recipe Reviews */}
        <p className="recipe-reviews mb-0" style={{ color: '#6a1b9a', fontStyle: 'italic', marginTop: '5px' }}>
          {salad.recipe.reviews}
        </p>
      </div>
    </div>
  ))}
</section>
 
 
      {/* Recipe Modals */}
      {salads.map(salad => (
        showModal === salad.id && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" key={salad.id}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}
                  >
                    {salad.name} Recipe
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                    style={{ color: '#6a1b9a' }}
                  ></button>
                </div>
                <div className="modal-body">
                  <h6 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h6>
                  <ul>
                    {salad.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h6 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Preparation:</h6>
                  <ol>
                    {salad.recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
 
                  {/* Rating Icon (Link to Review Form) */}
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setShowReviewForm(true);
                        setCurrentSalad(salad.id);
                      }}
                      className="btn btn-secondary"
                    >
                      <FaStar /> Rate this Recipe
                    </button>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: '#6a1b9a',
                      color: '#ffffff',
                      border: 'none',
                      fontFamily: '"Playfair Display", serif'
                    }}
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
 
      {/* Show Review Form */}
      {showReviewForm && (
        <FeedbackForm
          saladId={currentSalad}
          onSubmitReview={handleReviewSubmit}
          onClose={() => setShowReviewForm(false)}
        />
      )}
    </div>
  );
};
 
export default SaladsPage;