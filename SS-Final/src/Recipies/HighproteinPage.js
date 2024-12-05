import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedbackForm from './FeedbackForm'; // Import FeedbackForm component
 
const HighproteinPage = () => {
  const [showModal, setShowModal] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // Manage feedback form visibility
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Store selected recipe for feedback
 
  // Close the modal
  const handleCloseModal = () => {
    setShowModal(null);
    setShowFeedbackForm(false); // Close feedback form when modal is closed
  };
 
  // High Protein Recipes Data
  const recipes = [
    {
      id: 'chicken-breast',
      name: 'Grilled Chicken Breast',
      imgUrl: '/images/Protein/grilledchic.jpg',
      recipe: {
        ingredients: ['Chicken breast', 'Olive oil', 'Garlic', 'Lemon', 'Rosemary', 'Salt and pepper'],
        steps: ['Season chicken with olive oil, garlic, lemon juice, and rosemary.', 'Grill the chicken until cooked through, about 6-8 minutes per side.', 'Let rest before serving.'],
        reviews: "1,245 Reviews | 4.7 Average"
      }
    },
    {
      id: 'salmon',
      name: 'Grilled Salmon',
      imgUrl: '/images/Protein/grilledsalmon.jpg',
      recipe: {
        ingredients: ['Salmon fillets', 'Olive oil', 'Lemon', 'Garlic', 'Dill', 'Salt and pepper'],
        steps: ['Rub salmon with olive oil, garlic, lemon juice, and dill.', 'Grill for 4-5 minutes per side until cooked through.', 'Serve with a drizzle of fresh lemon juice.'],
        reviews: "832 Reviews | 4.5 Average"
      }
    },
    {
      id: 'tofu',
      name: 'Crispy Tofu Stir Fry',
      imgUrl: '/images/Protein/tofu.jpg',
      recipe: {
        ingredients: ['Tofu', 'Soy sauce', 'Cornstarch', 'Vegetables (broccoli, bell peppers, etc.)', 'Sesame oil', 'Ginger'],
        steps: ['Press tofu to remove excess moisture, then cut into cubes.', 'Toss tofu in cornstarch and fry in sesame oil until crispy.', 'Stir-fry vegetables and add soy sauce, ginger, and tofu.', 'Serve hot.'],
        reviews: "543 Reviews | 4.3 Average"
      }
    },
    {
      id: 'beef-steak',
      name: 'Beef Steak',
      imgUrl: '/images/Protein/beefsteak.jpg',
      recipe: {
        ingredients: ['Beef steak', 'Olive oil', 'Garlic', 'Rosemary', 'Salt and pepper'],
        steps: ['Season steak with olive oil, garlic, rosemary, salt, and pepper.', 'Grill or pan-sear the steak to your desired doneness.', 'Let rest before serving.'],
        reviews: "1,120 Reviews | 4.8 Average"
      }
    },
    {
      id: 'lentils',
      name: 'Lentil Soup',
      imgUrl: '/images/Protein/lentilsoup.jpg',
      recipe: {
        ingredients: ['Lentils', 'Carrots', 'Onion', 'Garlic', 'Tomatoes', 'Vegetable broth'],
        steps: ['Sauté onions, carrots, and garlic in olive oil.', 'Add lentils, tomatoes, and vegetable broth, and simmer for 30 minutes.', 'Season with salt and pepper, and serve.'],
        reviews: "672 Reviews | 4.6 Average"
      }
    },
    {
      id: 'chicken-tacos',
      name: 'Chicken Tacos',
      imgUrl: '/images/Protein/tacos.jpg',
      recipe: {
        ingredients: ['Chicken breast', 'Taco seasoning', 'Taco shells', 'Lettuce', 'Tomatoes', 'Cheese'],
        steps: ['Season chicken with taco seasoning and cook until done.', 'Shred the chicken and fill taco shells with lettuce, tomatoes, cheese, and chicken.', 'Serve with your favorite salsa.'],
        reviews: "850 Reviews | 4.7 Average"
      }
    },
    {
      id: 'egg-salad',
      name: 'Egg Salad',
      imgUrl: '/images/Protein/eggsalad.jpg',
      recipe: {
        ingredients: ['Boiled eggs', 'Mayonnaise', 'Mustard', 'Salt and pepper', 'Paprika'],
        steps: ['Peel and chop boiled eggs.', 'Mix eggs with mayonnaise, mustard, salt, and pepper.', 'Sprinkle paprika on top and serve with bread or crackers.'],
        reviews: "315 Reviews | 4.2 Average"
      }
    },
    {
      id: 'chickpea-curry',
      name: 'Chickpea Curry',
      imgUrl: '/images/Protein/chicpeacurry.jpg',
      recipe: {
        ingredients: ['Chickpeas', 'Coconut milk', 'Curry powder', 'Onion', 'Garlic', 'Spinach'],
        steps: ['Sauté onions and garlic in oil.', 'Add curry powder and chickpeas, then pour in coconut milk.', 'Simmer for 15 minutes, then add spinach and cook until wilted.'],
        reviews: "410 Reviews | 4.6 Average"
      }
    },
    {
      id: 'turkey-burger',
      name: 'Turkey Burgers',
      imgUrl: '/images/Protein/turkeyburger.jpg',
      recipe: {
        ingredients: ['Ground turkey', 'Garlic', 'Onion', 'Egg', 'Breadcrumbs', 'Lettuce', 'Tomato'],
        steps: ['Mix ground turkey with garlic, onion, egg, and breadcrumbs.', 'Form into patties and grill or pan-fry.', 'Serve with lettuce, tomato, and your favorite sauce.'],
        reviews: "1,010 Reviews | 4.7 Average"
      }
    }
  ];
 
 
  // Function to handle feedback submission
  const handleFeedbackSubmit = (recipeId, rating, review) => {
    console.log('Feedback submitted:', { recipeId, rating, review });
    // Handle feedback storage, API call, etc.
    //alert('Thank you for your feedback!');
    setShowFeedbackForm(false); // Close feedback form after submission
  };
 
  return (
    <div>
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>High Protein Recipes</h1>
        <p className="lead text-muted">Boost your protein intake with these delicious and healthy recipes perfect for any meal.</p>
      </header>
 
      {/* Recipe Bubble Section */}
      <section className="row justify-content-center">
        {recipes.map(recipe => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '50%',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '230px',
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
                src={recipe.imgUrl}
                className="img-fluid rounded-circle mb-3"
                alt={recipe.name}
                style={{ width: '150px', height: '150px' }}
              />
               <p className="recipe-reviews mb-0" style={{ color: '#6a1b9a', fontStyle: 'italic', marginTop: '5px' }}>
          {recipe.recipe.reviews} {/* Access reviews from the recipe object */}
        </p>
              <h5>{recipe.name}</h5>
              <button
                className="btn btn-primary"
                onClick={() => { setShowModal(recipe.id); setSelectedRecipe(recipe); }}
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
      {recipes.map(recipe => (
        showModal === recipe.id && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" key={recipe.id}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content" style={{ borderRadius: '15px' }}>
                <div className="modal-header">
                  <h5 className="modal-title" style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>
                    {recipe.name}
                  </h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal} style={{ color: '#6a1b9a' }}></button>
                </div>
                <div className="modal-body">
                  <h6 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h6>
                  <ul style={{ marginLeft: '20px' }}>
                    {recipe.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h6 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Preparation:</h6>
                  <ol style={{ marginLeft: '20px' }}>
                    {recipe.recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
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
                    onClick={() => { setShowFeedbackForm(true); setSelectedRecipe(recipe); }}
                  >
                    Provide Feedback
                  </button>
                  <button type="button" className="btn" style={{ backgroundColor: '#6a1b9a', color: '#ffffff' }} onClick={handleCloseModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
 
      {/* Feedback Form */}
      {showFeedbackForm && selectedRecipe && (
        <FeedbackForm
          saladId={selectedRecipe.id}
          onSubmitReview={handleFeedbackSubmit}  /* Correct function name */
          onClose={() => setShowFeedbackForm(false)}
        />
      )}
    </div>
  );
};
 
export default HighproteinPage;