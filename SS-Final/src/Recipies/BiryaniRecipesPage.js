import React, { useState } from 'react';
import { FaArrowRight, FaRegHandPointRight } from 'react-icons/fa'; // Icons for buttons
import { FaStar } from 'react-icons/fa'; // For star icon
import { Row, Col, Button, Card } from 'react-bootstrap'; // Importing Row, Col, Button, and Card from React-Bootstrap
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
 
 
const BiryaniRecipesPage = () => {
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
    alert('Review submitted successfully!');
  };
  return (
    <div className="container-fluid px-0">
      {/* Hero Section */}
     
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Delicious Biryani Recipes</h1>
        <p className="lead text-muted">Discover the perfect biryani recipes for every occasion.</p>
      </header>
    {/* Veg Biryani Section */}
<section id="recipes" className="py-5 bg-light" style={{ backgroundColor: '#6a1b9a' }}>
  <h2
    className="text-center mb-4"
    style={{
      color: '#ffffff',
      fontFamily: '"Playfair Display", serif',
      backgroundColor: '#6a1b9a',
      padding: '10px'
    }}
  >
    Veg Biryani Recipes
  </h2>
  <Row className="row-cols-1 row-cols-md-3">
    {/* Classic Veg Biryani */}
    <Col className="mb-4">
      <div className="recipe-box">
        <img src="/images/veg_biryani.jpg" alt="Classic Veg Biryani" className="img-fluid recipe-img" />
        <div className="recipe-details">
          <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Classic Veg Biryani</h4>
          <p>A traditional and aromatic vegetarian biryani made with basmati rice, mixed vegetables, and spices.</p>
          <Button
            variant="outline-warning"
            href="#recipe1"
            className="view-recipe-btn"
            style={{
              backgroundColor: '#6a1b9a',
              color: '#ffffff',
              border: 'none',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            View Recipe <FaRegHandPointRight />
          </Button>
        </div>
      </div>
    </Col>
    {/* Paneer Biryani */}
    <Col className="mb-4">
      <div className="recipe-box">
        <img src="/images/paneer-biryani.jpg" alt="Paneer Biryani" className="img-fluid recipe-img" />
        <div className="recipe-details">
          <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Paneer Biryani</h4>
          <p>A delicious biryani made with paneer (Indian cottage cheese), spices, and herbs.</p>
          <Button
            variant="outline-warning"
            href="#recipe2"
            className="view-recipe-btn"
            style={{
              backgroundColor: '#6a1b9a',
              color: '#ffffff',
              border: 'none',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            View Recipe <FaRegHandPointRight />
          </Button>
        </div>
      </div>
    </Col>
    {/* Hyderabadi Veg Biryani */}
    <Col className="mb-4">
      <div className="recipe-box">
        <img src="/images/hyd veg biryani.jpg" alt="Hyderabadi Veg Biryani" className="img-fluid recipe-img" />
        <div className="recipe-details">
          <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Hyderabadi Veg Biryani</h4>
          <p>A rich and flavorful biryani made with a mix of vegetables, herbs, and spices, cooked to perfection.</p>
          <Button
            variant="outline-warning"
            href="#recipe3"
            className="view-recipe-btn"
            style={{
              backgroundColor: '#6a1b9a',
              color: '#ffffff',
              border: 'none',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            View Recipe <FaRegHandPointRight />
          </Button>
        </div>
      </div>
    </Col>
  </Row>
</section>
 
{/* Non-Veg Biryani Section */}
<section className="py-5">
  <h2
    className="text-center mb-4"
    style={{
      color: '#ffffff',
      fontFamily: '"Playfair Display", serif',
      backgroundColor: '#6a1b9a',
      padding: '10px'
    }}
  >
    Non-Veg Biryani Recipes
  </h2>
  <Row className="row-cols-1 row-cols-md-3">
    {/* Chicken Biryani */}
    <Col className="mb-4">
      <div className="recipe-box">
        <img src="/images/chicken-biryani.jpg" alt="Chicken Biryani" className="img-fluid recipe-img" />
        <div className="recipe-details">
          <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Chicken Biryani</h4>
          <p>A flavorful chicken biryani made with tender chicken pieces, rice, and aromatic spices.</p>
          <Button
            variant="outline-warning"
            href="#recipe4"
            className="view-recipe-btn"
            style={{
              backgroundColor: '#6a1b9a',
              color: '#ffffff',
              border: 'none',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            View Recipe <FaRegHandPointRight />
          </Button>
        </div>
      </div>
    </Col>
    {/* Mutton Biryani */}
    <Col className="mb-4">
      <div className="recipe-box">
        <img src="/images/mutton-biryani.jpg" alt="Mutton Biryani" className="img-fluid recipe-img" />
        <div className="recipe-details">
          <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Mutton Biryani</h4>
          <p>A rich and spicy mutton biryani with tender lamb, basmati rice, and a perfect blend of spices.</p>
          <Button
            variant="outline-warning"
            href="#recipe5"
            className="view-recipe-btn"
            style={{
              backgroundColor: '#6a1b9a',
              color: '#ffffff',
              border: 'none',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            View Recipe <FaRegHandPointRight />
          </Button>
        </div>
      </div>
    </Col>
    {/* Fish Biryani */}
    <Col className="mb-4">
      <div className="recipe-box">
        <img src="/images/fish_biryani.jpeg" alt="Fish Biryani" className="img-fluid recipe-img" />
        <div className="recipe-details">
          <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Fish Biryani</h4>
          <p>A delightful biryani made with fish fillets, fragrant basmati rice, and fresh spices.</p>
          <Button
            variant="outline-warning"
            href="#recipe6"
            className="view-recipe-btn"
            style={{
              backgroundColor: '#6a1b9a',
              color: '#ffffff',
              border: 'none',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            View Recipe <FaRegHandPointRight />
          </Button>
        </div>
      </div>
    </Col>
  </Row>
</section>
 
<h2
    className="text-center mb-4"
    style={{
      color: '#ffffff',
      fontFamily: '"Playfair Display", serif',
      backgroundColor: '#6a1b9a',
      padding: '10px'
    }}
  >
    Veg Biryani Recipes
  </h2>
      {/* Recipe Details for Veg Biryani */}
      {/* Recipe Details for Veg Biryani */}
      <section id="recipe1" className="recipe-section py-5">
  <div className="row">
    <div className="col-md-6">
      <img
        src="/images/veg_biryani.jpg"
        alt="Classic Veg Biryani"
        className="img-fluid"
        style={{ width: '80%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
    <div className="col-md-6">
      <h3 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' , fontWeight: 'bold' }}>Classic Veg Biryani Recipe</h3>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h4>
      <ul>
        <li>2 cups basmati rice</li>
        <li>1 cup mixed vegetables</li>
        <li>1/2 cup yogurt</li>
        <li>1 onion, thinly sliced</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon garam masala</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>3 tablespoons oil</li>
        <li>4 cups water</li>
        <li>Salt to taste</li>
      </ul>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions:</h4>
      <ol>
        <li>Soak rice for 30 minutes, then drain.</li>
        <li>Heat oil, sauté onions until golden brown.</li>
        <li>Add ginger-garlic paste and cook for 1 minute. Add cubed paneer and cook for 5 minutes.</li>
        <li>Add yogurt, chili powder, turmeric powder, garam masala, and salt. Cook for 5 minutes.</li>
        <li>In a separate pot, cook the rice until 70% done, then drain.</li>
        <li>Layer the cooked rice and paneer mixture in a large pot, garnish with cilantro, mint, and fried onions.</li>
        <li>Cover and cook on low heat for 10 minutes. Serve hot.</li>
      </ol>
    </div>
  </div>
</section>
 
 
 
 
 
{/* Paneer Biryani */}
<section id="recipe2" className="recipe-section py-5">
  <div className="row">
    <div className="col-md-6">
      <img src="/images/paneer-biryani.jpg" alt="Paneer Biryani" className="img-fluid" style={{ width: '80%', height: 'auto', objectFit: 'cover' }}  />
    </div>
    <div className="col-md-6">
      <h3 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' , fontWeight: 'bold' }}>Paneer Biryani Recipe</h3>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h4>
      <ul>
        <li>2 cups basmati rice</li>
        <li>250g paneer, cubed</li>
        <li>1 onion, thinly sliced</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon garam masala</li>
        <li>1/2 cup yogurt</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>3 tablespoons ghee</li>
        <li>4 cups water</li>
        <li>Salt to taste</li>
      </ul>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions:</h4>
      <ol>
        <li>Marinate paneer with yogurt, ginger-garlic paste, and garam masala for at least 1 hour.</li>
        <li>Heat ghee, sauté onions until golden brown, then add ginger-garlic paste and paneer pieces.</li>
        <li>Cook paneer for 5 minutes, add rice, and water. Cook for 15-20 minutes until done.</li>
        <li>Garnish with cilantro, mint, and fried onions. Serve hot.</li>
      </ol>
    </div>
  </div>
</section>
 
{/* Hyderabadi Veg Biryani */}
<section id="recipe3" className="recipe-section py-5">
  <div className="row">
    <div className="col-md-6">
      <img src="/images/vegbiryaninew.png" alt="Hyderabadi Veg Biryani" className="img-fluid" style={{ width: '80%', height: '99%', objectFit: 'cover' }} />
    </div>
    <div className="col-md-6">
      <h3 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' , fontWeight: 'bold'}}>Hyderabadi Veg Biryani Recipe</h3>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h4>
      <ul>
        <li>2 cups basmati rice</li>
        <li>1 cup mixed vegetables</li>
        <li>1/2 cup yogurt</li>
        <li>1 onion, thinly sliced</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon garam masala</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>3 tablespoons oil</li>
        <li>4 cups water</li>
        <li>Salt to taste</li>
      </ul>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions:</h4>
      <ol>
        <li>Soak rice for 30 minutes, then drain.</li>
        <li>Heat oil, sauté onions until golden brown.</li>
        <li>Add ginger-garlic paste and cook for 1 minute. Add mixed vegetables and cook until tender.</li>
        <li>Add yogurt, chili powder, turmeric powder, garam masala, and salt. Cook for 5 minutes.</li>
        <li>In a separate pot, cook the rice until 70% done, then drain.</li>
        <li>Layer the cooked rice and vegetable mixture in a large pot, garnish with cilantro, mint, and fried onions.</li>
        <li>Cover and cook on low heat for 10 minutes. Serve hot.</li>
      </ol>
    </div>
  </div>
</section>
 
<h2
    className="text-center mb-4"
    style={{
      color: '#ffffff',
      fontFamily: '"Playfair Display", serif',
      backgroundColor: '#6a1b9a',
      padding: '10px'
    }}
  >
    Non-Veg Biryani Recipes
  </h2>
 
{/* Chicken Biryani */}
<section id="recipe4" className="recipe-section py-5">
  <div className="row">
    <div className="col-md-6">
      <img src="/images/chic_biryani.jpeg" alt="Chicken Biryani" className="img-fluid" />
    </div>
    <div className="col-md-6">
      <h3 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif', fontWeight: 'bold' }}>Chicken Biryani Recipe</h3>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h4>
      <ul>
        <li>2 cups basmati rice</li>
        <li>500g chicken, cut into pieces</li>
        <li>1 onion, thinly sliced</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon garam masala</li>
        <li>1/2 cup yogurt</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>3 tablespoons oil</li>
        <li>4 cups water</li>
        <li>Salt to taste</li>
      </ul>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions:</h4>
      <ol>
        <li>Marinate chicken with yogurt, ginger-garlic paste, and garam masala for at least 1 hour.</li>
        <li>Heat oil, sauté onions until golden brown, then add ginger-garlic paste and chicken pieces.</li>
        <li>Cook chicken for 5 minutes, add rice, and water. Cook for 15-20 minutes until done.</li>
        <li>Garnish with cilantro, mint, and fried onions. Serve hot.</li>
      </ol>
    </div>
  </div>
</section>
 
{/* Mutton Biryani */}
<section id="recipe5" className="recipe-section py-5">
  <div className="row">
    <div className="col-md-6">
      <img src="/images/mutton_biryani.jpeg" alt="Mutton Biryani" className="img-fluid" />
    </div>
    <div className="col-md-6">
      <h3 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif', fontWeight: 'bold' }}>Mutton Biryani Recipe</h3>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h4>
      <ul>
        <li>2 cups basmati rice</li>
        <li>500g mutton (lamb), cut into pieces</li>
        <li>1 onion, thinly sliced</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon garam masala</li>
        <li>1/2 cup yogurt</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>3 tablespoons ghee</li>
        <li>4 cups water</li>
        <li>Salt to taste</li>
      </ul>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions:</h4>
      <ol>
        <li>Marinate mutton with yogurt, ginger-garlic paste, and garam masala for at least 1 hour.</li>
        <li>Heat ghee, sauté onions until golden brown, then add ginger-garlic paste and mutton pieces.</li>
        <li>Cook mutton for 5 minutes, add rice, and water. Cook for 25-30 minutes until done.</li>
        <li>Garnish with cilantro, mint, and fried onions. Serve hot.</li>
      </ol>
    </div>
  </div>
</section>
 
{/* Fish Biryani */}
<section id="recipe6" className="recipe-section py-5">
  <div className="row">
    <div className="col-md-6">
      <img src="/images/fishbiryaninew.png" alt="Fish Biryani" className="img-fluid" />
    </div>
    <div className="col-md-6">
      <h3 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' , fontWeight: 'bold'}}>Fish Biryani Recipe</h3>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients:</h4>
      <ul>
        <li>2 cups basmati rice</li>
        <li>500g fish fillets (preferably firm fish)</li>
        <li>1 onion, thinly sliced</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon garam masala</li>
        <li>1/2 cup yogurt</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>3 tablespoons oil</li>
        <li>4 cups water</li>
        <li>Salt to taste</li>
      </ul>
      <h4 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions:</h4>
      <ol>
        <li>Marinate fish fillets with yogurt, ginger-garlic paste, and garam masala for at least 30 minutes.</li>
        <li>Heat oil, sauté onions until golden brown, then add ginger-garlic paste and fish fillets.</li>
        <li>Cook fish for 5 minutes, add rice, and water. Cook for 15-20 minutes until done.</li>
        <li>Garnish with cilantro, mint, and fried onions. Serve hot.</li>
      </ol>
    </div>
  </div>
</section>
 
 
    </div>
  );
};
 
export default BiryaniRecipesPage;