import React from 'react';
import { Button, Card, Carousel, Modal, Container, Row, Col, ListGroup } from 'react-bootstrap';
import FeedbackForm from './FeedbackForm'; // Import FeedbackForm
 
   
// Recipe Data (Including new recipes)
const recipeData = {
  turkey: {
    title: "Roast Turkey",
    ingredients: [
      "1 whole turkey (12-14 lbs)",
      "2 tbsp olive oil",
      "1 onion, quartered",
      "2 sprigs rosemary",
      "1 tbsp salt",
      "1 tsp black pepper",
      "4 cloves garlic"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Rub the turkey with olive oil, salt, and pepper.",
      "Stuff the cavity with onion, garlic, and rosemary.",
      "Roast the turkey for about 13 minutes per pound, basting occasionally.",
      "Let the turkey rest for 20 minutes before carving."
    ]
  },
  stuffing: {
    title: "Stuffing",
    ingredients: [
      "1 loaf of bread, cubed",
      "1 onion, chopped",
      "2 celery stalks, chopped",
      "1 tbsp sage",
      "2 cups chicken broth",
      "4 tbsp butter",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Toast the bread cubes in the oven until golden brown.",
      "Sauté onion and celery in butter until soft.",
      "Mix toasted bread, sautéed veggies, sage, and broth.",
      "Bake the stuffing for 30 minutes, covered, then 10 minutes uncovered."
    ]
  },
  pumpkinPie: {
    title: "Pumpkin Pie",
    ingredients: [
      "1 pie crust (store-bought or homemade)",
      "1 can (15 oz) pumpkin puree",
      "1 cup heavy cream",
      "2 eggs",
      "3/4 cup sugar",
      "1 tsp cinnamon",
      "1/2 tsp nutmeg",
      "1/4 tsp ginger",
      "1/4 tsp cloves"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Whisk together pumpkin, eggs, sugar, and spices.",
      "Pour mixture into pie crust.",
      "Bake for 15 minutes, then reduce the temperature to 350°F (175°C) and bake for another 40-45 minutes.",
      "Let cool before serving."
    ]
  },
  mashedPotatoes: {
    title: "Creamy Mashed Potatoes",
    ingredients: [
      "5 lbs potatoes, peeled and cubed",
      "1 cup butter",
      "1 cup heavy cream",
      "Salt and pepper to taste",
      "1 garlic clove, minced",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Boil the potatoes in salted water until tender, about 15-20 minutes.",
      "Drain the potatoes and return them to the pot.",
      "Mash the potatoes with butter, cream, and garlic.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh parsley and serve."
    ]
  },
  cranberrySauce: {
    title: "Cranberry Sauce",
    ingredients: [
      "1 bag (12 oz) fresh cranberries",
      "1 cup sugar",
      "1 cup water",
      "1 orange, zested and juiced",
      "1/2 tsp cinnamon",
      "1/4 tsp nutmeg"
    ],
    instructions: [
      "In a saucepan, combine cranberries, sugar, water, orange juice, and spices.",
      "Bring to a simmer over medium heat, stirring occasionally.",
      "Cook for 10-15 minutes, until cranberries burst and the sauce thickens.",
      "Remove from heat and let cool before serving."
    ]
  },
  applePie: {
    title: "Apple Pie",
    ingredients: [
      "1 package pie crusts (or homemade)",
      "6 cups apples, peeled and sliced",
      "3/4 cup sugar",
      "2 tbsp flour",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "1 tbsp butter"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Combine sliced apples, sugar, flour, and spices in a bowl.",
      "Roll out pie crust and fill with apple mixture.",
      "Dot with butter, then top with the second pie crust.",
      "Bake for 45 minutes, until crust is golden brown. Let cool before serving."
    ]
  }
};
 
const FullMenuModal = ({ showModal, handleClose, currentRecipe, handleShowReviewForm }) => {
  if (currentRecipe) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#6a1b9a', color: '#ffffff' }}>
          <Modal.Title>{currentRecipe.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#ffffff', color: '#000000', textAlign: 'left' }}> {/* Align content to the left */}
          <h5>Ingredients:</h5>
          <ListGroup>
            {currentRecipe.ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
            ))}
          </ListGroup>
 
          <h5 className="mt-3">Instructions:</h5>
          <ol>
            {currentRecipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#6a1b9a' }}>
          <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a' }}>
            Close
          </Button>
          {/* Add a button to open the feedback form */}
          <Button variant="primary" onClick={handleShowReviewForm}>
            Leave a Review
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
 
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: '#6a1b9a', color: '#ffffff' }}>
        <Modal.Title>Full Thanksgiving Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#ffffff', color: '#000000', textAlign: 'left' }}> {/* Align content to the left */}
        <h5>Main Course:</h5>
        <ListGroup>
          <ListGroup.Item>Roast Turkey</ListGroup.Item>
          <ListGroup.Item>Stuffing</ListGroup.Item>
          <ListGroup.Item>Mashed Potatoes</ListGroup.Item>
          <ListGroup.Item>Gravy</ListGroup.Item>
          <ListGroup.Item>Cranberry Sauce</ListGroup.Item>
        </ListGroup>
 
        <h5>Desserts:</h5>
        <ListGroup>
          <ListGroup.Item>Pumpkin Pie</ListGroup.Item>
          <ListGroup.Item>Apple Pie</ListGroup.Item>
          <ListGroup.Item>Pecan Pie</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#6a1b9a' }}>
        <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a' }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
 
 
 
    // Carousel Component
const ThanksgivingCarousel = () => (
  <Carousel className="my-4">
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="/images/Thanksgiving/turkey1.jpg"
        alt="Roast Turkey"
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
      <Carousel.Caption className="carousel-caption">
        <h3>Perfectly Roasted Turkey</h3>
        <p>A golden, juicy bird with crispy skin, the heart of the feast.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="/images/Thanksgiving/mashed potatoes.jpg"
        alt="Mashed Potatoes"
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
      <Carousel.Caption className="carousel-caption">
        <h3>Creamy Mashed Potatoes</h3>
        <p>Fluffy, buttery mashed potatoes with a hint of garlic.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="/images/Thanksgiving/pumpkin pie.jpg"
        alt="Pumpkin Pie"
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
      <Carousel.Caption className="carousel-caption">
        <h3>Classic Pumpkin Pie</h3>
        <p>Sweet, spiced pumpkin filling wrapped in a flaky crust.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
 
// Recipe Card Component (Updated)
const RecipeCard = ({ title, image, description,reviews, onClick }) => (
  <Col md={4}>
    <Card className="mb-4"
    style={{
      borderColor: '#A020F0'
    }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {/* Reviews Section */}
        <div style={{
          fontSize: "1rem",
          color: "purple",
          marginBottom: "10px",
          fontStyle: "italic"
        }}>
          {reviews}
        </div>
        <Card.Title style={{ color: 'purple' }}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="danger"
          onClick={onClick}
          style={{
            backgroundColor: '#6a1b9a',
            borderColor: '#6a1b9a',
            color: 'white'
          }}
        >
          View Recipe
        </Button>
      </Card.Body>
    </Card>
  </Col>
);
 
class ThanksgivingPage extends React.Component {
  state = {
    showModal: false,
    showReviewForm: false,
    currentRecipe: null
  };
 
  handleShow = (recipeKey = null) => {
    this.setState({
      showModal: true,
      currentRecipe: recipeKey ? recipeData[recipeKey] : null
    });
  };
 
  handleClose = () => {
    this.setState({ showModal: false });
  };
 
  handleShowReviewForm = () => {
    this.setState({ showModal: false, showReviewForm: true });
  };
 
  handleCloseReviewForm = () => {
    this.setState({ showReviewForm: false });
  };
 
  handleSubmitReview = (recipeKey, rating, review) => {
    console.log(`Review for ${recipeKey}:`, { rating, review });
    // Handle the review submission (e.g., save it to a database)
    this.setState({ showReviewForm: false });
  };
 
  render() {
    return (
      <div>
        <Container className="my-5 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <h1 style={{ color: '#ffffff', backgroundColor: '#6a1b9a', padding: '20px' }}>Thanksgiving Dinner Menu</h1>
          <p className="lead" style={{ color: '#000000' }}>
            A hearty, traditional Thanksgiving feast with all the favorites.
          </p>
 
          {/* Carousel Section */}
          <ThanksgivingCarousel />
 
             {/* Recipe Cards Section */}
          <Row className="mt-5">
            <RecipeCard
              title="Roast Turkey"
              image="/images/Thanksgiving/turkey2.jpg"
              reviews= "577 Reviews • 4.9 Average"
              description="A Thanksgiving classic: tender, juicy turkey with a crispy golden-brown skin."
              onClick={() => this.handleShow('turkey')}
            />
            <RecipeCard
              title="Stuffing"
              image="/images/Thanksgiving/stuffing.jpg"
              reviews= "897 Reviews • 4.6 Average"
              description="Savory, herby stuffing made with bread, onions, and sage, baked to perfection."
              onClick={() => this.handleShow('stuffing')}
            />
            <RecipeCard
              title="Pumpkin Pie"
              image="/images/Thanksgiving/pumpkin pie2.jpg"
              reviews= "797 Reviews • 4.7 Average"
              description="Spicy, creamy pumpkin pie with a flaky, buttery crust, and a delightful aroma."
              onClick={() => this.handleShow('pumpkinPie')}
            />
            <RecipeCard
              title="Creamy Mashed Potatoes"
              image="/images/Thanksgiving/mashed potatoes.jpg"
              reviews= "822 Reviews • 4.9 Average"
              description="Buttery mashed potatoes with a smooth, creamy texture."
              onClick={() => this.handleShow('mashedPotatoes')}
            />
            <RecipeCard
              title="Cranberry Sauce"
              image="/images/Thanksgiving/cranberry sauce.jpg"
              reviews= "698 Reviews • 4.9 Average"
              description="Sweet and tart cranberry sauce with a zesty citrusy twist."
              onClick={() => this.handleShow('cranberrySauce')}
            />
            <RecipeCard
              title="Apple Pie"
              image="/images/Thanksgiving/apple pie.jpg"
              reviews= "893 Reviews • 4.9 Average"
              description="Warm, spiced apple pie with a buttery, golden flaky crust."
              onClick={() => this.handleShow('applePie')}
            />
          </Row>
 
          {/* Full Menu Modal Button */}
          <Button
            variant="danger"
            className="my-4"
            onClick={() => this.handleShow()}
            style={{
              backgroundColor: '#6a1b9a',
              borderColor: '#6a1b9a',
              color: 'white'
            }}
          >
            See Full Thanksgiving Menu
          </Button>
 
          {/* Full Menu Modal */}
          <FullMenuModal
            showModal={this.state.showModal}
            handleClose={this.handleClose}
            currentRecipe={this.state.currentRecipe}
            handleShowReviewForm={this.handleShowReviewForm}
          />
 
          {/* Feedback Form Modal */}
          {this.state.showReviewForm && (
  <div className="feedback-form-container">
    <FeedbackForm
      saladId={this.state.currentRecipe ? this.state.currentRecipe.title : ''}
      onSubmitReview={this.handleSubmitReview}
      onClose={this.handleCloseReviewForm}
      style={{ zIndex: 1050 }}  // Ensure this modal has a higher z-index than others
    />
  </div>
)}
 
        </Container>
      </div>
    );
  }
}
 
export default ThanksgivingPage;