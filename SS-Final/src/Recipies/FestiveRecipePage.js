import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'; // For star icons
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component
 
const IMAGE_BASE_PATH = '/images/FestivePage/';
 
 
 
const recipes = [
  {
    name: 'Gulab Jamun',
    description: 'A delicious deep-fried dessert soaked in sugar syrup, perfect for festivals like Diwali and Eid.',
    ingredients: 'Sugar, Flour, Ghee, Cardamom, Milk Powder',
    time: '45 mins',
    image: 'gulab-jamun.jpg',
    instructions: '1. Mix sugar, flour, ghee, and cardamom into a dough. 2. Shape into small balls and deep fry them in hot oil. 3. Soak the fried balls in sugar syrup for 10-15 minutes. 4. Garnish with cardamom and rose petals before serving.'
  },
  {
    name: 'Ladoo',
    description: 'A sweet ball-shaped dessert made of flour, sugar, and ghee, often served during Ganesh Chaturthi and Diwali.',
    ingredients: 'Chickpea Flour, Ghee, Sugar, Cardamom, Cashews',
    time: '30 mins',
    image: 'ladoos.jpg',
    instructions: '1. Roast chickpea flour in ghee until golden brown. 2. Add sugar and cardamom powder to the mixture. 3. Once cooled, shape the mixture into small round balls. 4. Garnish with cashews and let them set.'
  },
  {
    name: 'Pongal',
    description: 'A traditional South Indian dish made of rice, lentils, and tempered spices, popular during the Pongal festival.',
    ingredients: 'Rice, Lentils, Black Pepper, Cashews, Ginger',
    time: '25 mins',
    image: 'pongal.jpg',
    instructions: '1. Wash rice and lentils and cook them until soft. 2. In a pan, heat ghee and add mustard seeds, black pepper, cashews, and ginger. 3. Once fragrant, pour this tempering over the cooked rice and lentils mixture. 4. Mix well and serve hot with coconut chutney.'
  },
  {
    name: 'Samosa',
    description: 'A crispy snack filled with spicy potatoes and peas, commonly served during festive gatherings.',
    ingredients: 'Potatoes, Peas, Spices, Flour, Oil',
    time: '35 mins',
    image: 'samosa.jpg',
    instructions: '1. Boil and mash potatoes, and mix with peas, spices, and cilantro. 2. Prepare the dough for the samosa wrapper. 3. Stuff the dough with the prepared filling and fold into a triangular shape. 4. Deep fry the samosas until golden brown and crispy.'
  },
  {
    name: 'Chole Bhature',
    description: 'A hearty North Indian dish consisting of spicy chickpeas served with fluffy fried bread.',
    ingredients: 'Chickpeas, Flour, Tomatoes, Onion, Garlic',
    time: '60 mins',
    image: 'chole-bhature.jpg',
    instructions: '1. Soak chickpeas overnight and pressure cook them. 2. Prepare a gravy using tomatoes, onions, garlic, and spices. 3. Add the chickpeas to the gravy and cook until thickened. 4. Serve with freshly fried bhature.'
  },
  {
    name: 'Rasgulla',
    description: 'Soft and spongy sweet cheese balls soaked in sugar syrup, popular during Durga Puja and other festivals.',
    ingredients: 'Milk, Sugar, Lemon Juice, Cardamom',
    time: '40 mins',
    image: 'rasgulla.jpg',
    instructions: '1. Boil milk and curdle it with lemon juice. 2. Drain the curdled milk and knead the chenna into smooth dough. 3. Shape into small balls and boil them in sugar syrup until they expand and become spongy.'
  },
  {
    name: 'Kheer',
    description: 'A creamy rice pudding flavored with cardamom, saffron, and nuts, served during many Indian festivals.',
    ingredients: 'Rice, Milk, Sugar, Cardamom, Saffron',
    time: '50 mins',
    image: 'kheer.jpg',
    instructions: '1. Cook rice in milk until soft and creamy. 2. Add sugar, cardamom, and saffron and simmer. 3. Garnish with nuts like almonds and pistachios. 4. Serve chilled or warm.'
  },
  {
    name: 'Dhokla',
    description: 'A savory steamed cake made from rice and chickpea flour, often served as a snack during Navratri.',
    ingredients: 'Rice Flour, Chickpea Flour, Yogurt, Ginger, Mustard Seeds',
    time: '30 mins',
    image: 'dhokla.jpg',
    instructions: '1. Mix rice flour and chickpea flour with yogurt and a pinch of baking soda. 2. Steam the batter for 20 minutes. 3. Temper with mustard seeds and green chilies. 4. Garnish with coriander and serve with chutney.'
  },
  {
    name: 'Peda',
    description: 'A rich, milk-based sweet made with condensed milk and flavored with cardamom, commonly prepared during Holi and Diwali.',
    ingredients: 'Milk, Sugar, Cardamom, Pistachios',
    time: '45 mins',
    image: 'peda.jpg',
    instructions: '1. Boil milk and reduce it to a thick consistency. 2. Add sugar, cardamom, and nuts. 3. Stir until the mixture solidifies, then shape into small pedas. 4. Garnish with pistachios and cardamom.'
  },
  {
    name: 'Jalebi',
    description: 'A sweet, crispy, and colorful dessert made from deep-fried batter soaked in sugar syrup, enjoyed during various festivals.',
    ingredients: 'Flour, Sugar, Water, Saffron, Oil',
    time: '40 mins',
    image: 'jalebi.jpg',
    instructions: '1. Prepare a batter using flour and water. 2. Heat oil and pipe the batter in circular shapes into the hot oil. 3. Fry until crispy and dip them into sugar syrup infused with saffron.'
  }
];
 
const FestiveRecipes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // State for showing feedback form
 
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
 
  const handleShowModal = (index) => {
    setSelectedRecipe(recipes[index]);
    setShowModal(true);
  };
 
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };
 
  const handleShowFeedbackForm = () => {
    setShowFeedbackForm(true); // Show the feedback form
  };
 
  const handleCloseFeedbackForm = () => {
    setShowFeedbackForm(false); // Close the feedback form
  };
 
  const handleSubmitReview = (recipeId, rating, review) => {
    // Here you can handle submitting the review, e.g., save it to a database
    console.log(`Review for ${recipeId}: ${rating} stars, ${review}`);
    //alert('Review submitted successfully!');
    handleCloseFeedbackForm(); // Close feedback form after submission
  };
 
  return (
    <div style={{ fontFamily: "'Playfair Display', serif" }}>
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Indian Festive Recipes</h1>
        <p className="lead text-muted">Delight in the rich and diverse flavors of India's festive treats.</p>
      </header>
 
      <ul className="nav nav-pills mb-5" role="tablist">
        {recipes.map((recipe, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <a
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabChange(index)}
              role="tab"
              aria-selected={activeTab === index ? 'true' : 'false'}
              style={{
                color: activeTab === index ? '#ffffff' : '#6a1b9a',
                backgroundColor: activeTab === index ? '#6a1b9a' : 'transparent',
                fontWeight: 'bold'
              }}
            >
              {recipe.name}
            </a>
          </li>
        ))}
      </ul>
 
      <div className="tab-content" id="recipeTabsContent">
        {recipes.map((recipe, index) => (
          <div
            className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
            role="tabpanel"
            key={index}
          >
            <div className="row">
              <div className="col-md-6">
                <img
                  src={`${IMAGE_BASE_PATH}${recipe.image}`}
                  alt={recipe.name}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6">
                <h3 style={{ color: '#6a1b9a' }}>{recipe.name}</h3>
                <p><strong>Description:</strong> {recipe.description}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Preparation Time:</strong> {recipe.time}</p>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => handleShowModal(index)}
                  style={{ borderColor: '#6a1b9a', color: '#6a1b9a' }}
                >
                  View Full Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
 
      {showModal && selectedRecipe && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="recipeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#6a1b9a', color: '#fff' }}>
                <h5 className="modal-title" style={{ color: 'white', fontWeight: 'bold' }} id="recipeModalLabel">{selectedRecipe.name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h6 className="text-info">Ingredients:</h6>
                <p>{selectedRecipe.ingredients}</p>
                <h6 className="text-success">Instructions:</h6>
                <p>{selectedRecipe.instructions}</p>
              </div>
              <div className="modal-footer">
              <button
  type="button"
  className="btn btn-outline-primary"
  onClick={handleShowFeedbackForm}
  style={{
    borderColor: '#6a1b9a',
    color: '#6a1b9a',
    transition: 'all 0.3s ease',
  }}
>
  Give Feedback
</button>
<button
  type="button"
  className="btn btn-secondary"
  onClick={handleCloseModal}
  style={{
    backgroundColor: '#6a1b9a',
    color: '#fff',
    transition: 'all 0.3s ease',
  }}
>
  Close
</button>
 
                </div>
            </div>
          </div>
        </div>
      )}
 
      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <FeedbackForm
          saladId={selectedRecipe ? selectedRecipe.name : ""}
          onSubmitReview={handleSubmitReview}
          onClose={handleCloseFeedbackForm}
        />
      )}
 
      <div className="text-center mt-5">
        <h3 style={{ color: '#6a1b9a' }}>Our Top Festival Picks</h3>
        <div>
          <span className="badge bg-success me-2">Popular</span>
          <span className="badge bg-warning text-dark me-2">Must Try</span>
          <span className="badge bg-danger">Exclusive</span>
        </div>
      </div>
 
      <div className="alert alert-info mt-5" role="alert">
        <strong>Try out these recipes!</strong> Bring the festive joy into your home with these easy-to-make Indian dishes.
      </div>
    </div>
  );
};
 
export default FestiveRecipes;