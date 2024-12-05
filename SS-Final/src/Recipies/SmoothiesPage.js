import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component
 
const SmoothiesPage = () => {
  const [showModal, setShowModal] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // Manage feedback form visibility
  const [selectedSmoothieId, setSelectedSmoothieId] = useState(null); // Store selected smoothie id for feedback form
  const [successMessage, setSuccessMessage] = useState(''); // Manage success message state
 
  // Close the modal
  const handleCloseModal = () => setShowModal(null);
 
  // Smoothie Data
  const smoothies = [
    { id: 'banana-berry', name: 'Banana Berry Smoothie', imgUrl: '/images/Smoothies/bananaberry.jpg', recipe: { ingredients: ['Banana', 'Strawberries', 'Greek yogurt', 'Almond milk', 'Honey'], steps: ['Blend banana, strawberries, and almond milk.', 'Add Greek yogurt and honey, then blend again.', 'Serve chilled.'],reviews:"430 Reviews • 4.6 Average"  }},
    { id: 'mango-pineapple', name: 'Mango Pineapple Smoothie', imgUrl: '/images/Smoothies/mangopine.jpg', recipe: { ingredients: ['Mango', 'Pineapple', 'Coconut milk', 'Lime juice', 'Ice'], steps: ['Blend mango and pineapple with coconut milk.', 'Add lime juice and ice, blend until smooth.', 'Serve immediately.'],reviews: "345 Reviews • 4.7 Average"  }},
    { id: 'green-boost', name: 'Green Boost Smoothie', imgUrl: '/images/Smoothies/greenboost.jpg', recipe: { ingredients: ['Spinach', 'Apple', 'Banana', 'Almond milk', 'Chia seeds'], steps: ['Blend spinach, apple, and banana with almond milk.', 'Add chia seeds and blend again.', 'Serve chilled.'] ,reviews: "213 Reviews • 4.3 Average"  }},
    { id: 'berry-citrus', name: 'Berry Citrus Smoothie', imgUrl: '/images/Smoothies/berrycitrus.jpg', recipe: { ingredients: ['Blueberries', 'Orange', 'Greek yogurt', 'Honey', 'Ice'], steps: ['Blend blueberries, orange, and Greek yogurt.', 'Add honey and ice, blend again.', 'Serve immediately.'], reviews: "915 Reviews • 4.6 Average"  }},
    { id: 'tropical-paradise', name: 'Tropical Paradise Smoothie', imgUrl: '/images/Smoothies/tropical.jpg', recipe: { ingredients: ['Pineapple', 'Mango', 'Coconut water', 'Banana', 'Lime'], steps: ['Blend pineapple, mango, and coconut water.', 'Add banana and lime juice, then blend again.', 'Serve immediately.'], reviews: "500 Reviews • 4.8 Average"  }},
    { id: 'chocolate-peanut-butter', name: 'Chocolate Peanut Butter Smoothie', imgUrl: '/images/Smoothies/chocpeanut.jpg', recipe: { ingredients: ['Banana', 'Peanut butter', 'Cocoa powder', 'Almond milk', 'Honey'], steps: ['Blend banana, peanut butter, and cocoa powder with almond milk.', 'Add honey, then blend until smooth.', 'Serve chilled.'] , reviews: "480 Reviews • 4.3 Average" }},
    { id: 'avocado-coconut', name: 'Avocado Coconut Smoothie', imgUrl: '/images/Smoothies/avocado.jpg', recipe: { ingredients: ['Avocado', 'Coconut milk', 'Honey', 'Lime juice'], steps: ['Blend avocado and coconut milk together.', 'Add honey and lime juice, then blend again.', 'Serve immediately.'], reviews: "450 Reviews • 4.4 Average" }},
    { id: 'strawberry-pineapple', name: 'Strawberry Pineapple Smoothie', imgUrl: '/images/Smoothies/strawberry.jpg', recipe: { ingredients: ['Strawberries', 'Pineapple', 'Coconut water', 'Lime juice'], steps: ['Blend strawberries and pineapple with coconut water.', 'Add lime juice and blend again.', 'Serve chilled.'] ,  reviews: "550 Reviews • 4.8 Average" }},
    { id: 'peach-mango', name: 'Peach Mango Smoothie', imgUrl: '/images/Smoothies/peach.jpg', recipe: { ingredients: ['Peach', 'Mango', 'Greek yogurt', 'Honey', 'Ice'], steps: ['Blend peach and mango with Greek yogurt.', 'Add honey and ice, blend again.', 'Serve chilled.'] , reviews: "800 Reviews • 4.5 Average" }},
  ];
 
  // Show feedback form when the "Leave Feedback" button is clicked
  const handleShowFeedbackForm = (smoothieId) => {
    setSelectedSmoothieId(smoothieId);
    setShowFeedbackForm(true);
  };
 
  const handleCloseFeedbackForm = () => setShowFeedbackForm(false);
 
  const handleSubmitReview = (smoothieId, rating, review) => {
    console.log(`Review for ${smoothieId}: Rating - ${rating}, Review - ${review}`);
    // Here, you can handle the submission logic, e.g., save it to a database
     
    // Show success message and reset feedback form
    setSuccessMessage('Your review has been successfully submitted!');
    setShowFeedbackForm(false);
   
    // Show success modal
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Hide message after 3 seconds
  };
 
  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Smoothies Recipes</h1>
        <p className="lead text-muted">Enjoy a refreshing smoothie for every occasion with these healthy, delicious recipes.</p>
      </header>
 
      {/* Smoothie Bubble Section with Hexagonal Shape */}
      <section className="row justify-content-center">
        {smoothies.map(smoothie => (
          <div className="col-md-4 mb-4" key={smoothie.id}>
            <div style={{
              backgroundColor: '#e0f7fa',  // New light color for the hexagon
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              minHeight: '230px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagonal clip-path
              overflow: 'hidden',
            }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={smoothie.imgUrl}
                className="img-fluid rounded mb-3"
                alt={smoothie.name}
                style={{ width: '120px', height: '120px' }}
              />
               <p className="text-muted" style={{color: '#6a1b9a',fontSize: '16px', fontStyle: 'italic' }}>
                {smoothie.recipe.reviews} {/* Display Reviews and Average */}
              </p>
              <h5>{smoothie.name}</h5>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(smoothie.id)}
                style={{
                  borderRadius: '20px',
                  fontSize: '14px',
                  padding: '10px 20px',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: '#6a1b9a',
                  borderColor: '#6a1b9a',
                  fontFamily: '"Playfair Display", serif',
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#800080'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#6a1b9a'}   // Initial purple shade (dark)
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </section>
 
      {/* Recipe Modals */}
      {smoothies.map(smoothie => (
        showModal === smoothie.id && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" key={smoothie.id}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="modal-header">
                  <h5 className="modal-title" style={{ color: '#6a1b9a' }}>
                    {smoothie.name}
                  </h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <h6 style={{ color: '#6a1b9a' }}>Ingredients:</h6>
                  <ul>
                    {smoothie.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h6 style={{ color: '#6a1b9a' }}>Preparation:</h6>
                  <ol>
                    {smoothie.recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                 
                  {/* Leave Feedback Button */}
                  <div className="text-center mt-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleShowFeedbackForm(smoothie.id)}
                      style={{ backgroundColor: '#6a1b9a', color: '#ffffff' }}
                    >
                      Leave Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
 
      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <FeedbackForm
          saladId={selectedSmoothieId}
          onSubmitReview={handleSubmitReview}
          onClose={handleCloseFeedbackForm}
        />
      )}
    </div>
  );
};
 
export default SmoothiesPage;