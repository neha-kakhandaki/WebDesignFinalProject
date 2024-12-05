import React from 'react';
import { Button, Container, Row, Col, Modal, Badge, ProgressBar, ListGroup, Image } from 'react-bootstrap';
import FeedbackForm from './FeedbackForm'; // Importing the FeedbackForm component
 
// Recipe Data with images, ingredients, and instructions
const recipeData = {
  appetizers: [
   
    {
      title: "Bruschetta",
      description: "Crunchy baguette topped with tomatoes, basil, and balsamic glaze.",
      difficulty: 1,
      image: "/images/Familyparty/Bruschetta.jpg",
      ingredients: ["1 loaf baguette", "2 tomatoes", "Fresh basil", "Balsamic glaze", "Olive oil"],
      instructions: [
        "Toast slices of baguette in the oven until golden.",
        "Chop tomatoes and basil, then mix with olive oil.",
        "Top toasted bread with tomato-basil mixture.",
        "Drizzle with balsamic glaze and serve."
      ],reviews: "845 Reviews • 4.7 Average"
    },
    {
      title: "Deviled Eggs",
      description: "Classic deviled eggs with creamy filling and a sprinkle of paprika.",
      difficulty: 2,
      image: "/images/Familyparty/devileggs.jpg",
      ingredients: ["6 eggs", "1/4 cup mayonnaise", "1 teaspoon mustard", "Paprika for garnish"],
      instructions: [
        "Boil the eggs and peel them.",
        "Cut the eggs in half and remove the yolks.",
        "Mix yolks with mayonnaise, mustard, and paprika.",
        "Spoon or pipe the filling into egg whites.",
        "Garnish with paprika and serve."
      ], reviews: "987 Reviews • 4.9 Average"
    },
    {
      title: "Spinach and Artichoke Dip",
      description: "A creamy, cheesy dip made with spinach and artichokes.",
      difficulty: 3,
      image: "/images/Familyparty/Spinach and Artichoke Dip.jpg",
      ingredients: ["1 cup spinach", "1 cup artichokes", "1 cup cream cheese", "1/2 cup parmesan cheese", "1/2 cup mozzarella cheese"],
      instructions: [
        "Preheat oven to 375°F.",
        "Mix spinach, artichokes, and cheeses in a bowl.",
        "Transfer mixture to a baking dish and bake for 25 minutes.",
        "Serve warm with crackers or bread."
      ], reviews: "897 Reviews • 4.3 Average"
    }
  ],
  mainCourses: [
    {
      title: "Grilled Chicken Skewers",
      description: "Tender grilled chicken skewers marinated in flavorful spices.",
      difficulty: 2,
      image: "/images/Familyparty/Grilled Chicken Skewers.jpg",
      ingredients: ["4 chicken breasts", "1 tablespoon olive oil", "1 tablespoon paprika", "1 teaspoon garlic powder"],
      instructions: [
        "Cut chicken into chunks and marinate in olive oil and spices.",
        "Skewer the chicken and grill for 6-8 minutes per side.",
        "Serve hot with your favorite dipping sauce."
      ], reviews: "967 Reviews • 4.7 Average"
    },
    {
      title: "Pulled Pork Sandwiches",
      description: "Slow-cooked pulled pork served on soft buns with tangy BBQ sauce.",
      difficulty: 4,
      image: "/images/Familyparty/Porksandwich.jpg",
      ingredients: ["2 pounds pork shoulder", "1 onion", "1 cup BBQ sauce", "Sandwich buns"],
      instructions: [
        "Cook pork shoulder in a slow cooker for 6-8 hours.",
        "Shred the pork and mix with BBQ sauce.",
        "Serve on buns with extra sauce and toppings."
      ], reviews: "798 Reviews • 4.9 Average"
    },
    {
      title: "Vegetable Stir Fry",
      description: "A colorful medley of fresh vegetables sautéed in a savory sauce.",
      difficulty: 2,
      image: "/images/Familyparty/Vegetable Stir Fry.jpg",
      ingredients: ["1 bell pepper", "1 zucchini", "1 cup broccoli", "Soy sauce", "Olive oil"],
      instructions: [
        "Heat oil in a pan and stir-fry vegetables.",
        "Add soy sauce and cook for 5 minutes.",
        "Serve with rice or noodles."
      ], reviews: "698 Reviews • 4.8 Average"
    }
  ],
  sideDishes: [
    {
      title: "Mac and Cheese",
      description: "Creamy mac and cheese with a crunchy breadcrumb topping.",
      difficulty: 3,
      image: "/images/Familyparty/Mac and Cheese.jpg",
      ingredients: ["2 cups elbow macaroni", "2 cups cheddar cheese", "1 cup milk", "1/2 cup breadcrumbs"],
      instructions: [
        "Cook macaroni according to package instructions.",
        "Make a cheese sauce with milk and cheddar.",
        "Mix pasta with sauce and top with breadcrumbs.",
        "Bake at 350°F for 20 minutes."
      ], reviews: "897 Reviews • 4.5 Average"
    },
    {
      title: "Potato Salad",
      description: "A classic potato salad with creamy dressing and hard-boiled eggs.",
      difficulty: 2,
      image: "/images/Familyparty/Potato Salad.jpg",
      ingredients: ["6 potatoes", "1/2 cup mayonnaise", "2 hard-boiled eggs", "1 tablespoon mustard"],
      instructions: [
        "Boil potatoes and cut into cubes.",
        "Mix with mayonnaise, mustard, and chopped eggs.",
        "Chill in the fridge before serving."
      ], reviews: "978 Reviews • 4.9 Average"
    },
    {
      title: "Coleslaw",
      description: "A crunchy and tangy cabbage slaw with a creamy dressing.",
      difficulty: 1,
      image: "/images/Familyparty/Coleslaw.jpg",
      ingredients: ["1/2 cabbage", "1/4 cup mayonnaise", "2 tablespoons vinegar", "1 tablespoon sugar"],
      instructions: [
        "Shred cabbage and mix with other ingredients.",
        "Chill before serving for the best flavor."
      ], reviews: "975 Reviews • 4.7 Average"
    }
  ],
  desserts: [
    {
      title: "Chocolate Chip Cookies",
      description: "Chewy chocolate chip cookies with gooey centers.",
      difficulty: 2,
      image: "/images/Familyparty/Chocolatechips.jpg",
      ingredients: ["2 cups flour", "1 cup sugar", "1 cup chocolate chips", "1/2 cup butter"],
      instructions: [
        "Preheat oven to 350°F.",
        "Mix all ingredients and scoop dough onto a baking sheet.",
        "Bake for 10-12 minutes until golden."
      ], reviews: "635 Reviews • 4.6 Average"
    },
    {
      title: "Fruit Tart",
      description: "A buttery crust filled with creamy custard and topped with fresh fruit.",
      difficulty: 3,
      image: "/images/Familyparty/Fruit Tart.jpg",
      ingredients: ["1 tart crust", "1 cup custard", "Fresh berries"],
      instructions: [
        "Fill tart crust with custard.",
        "Top with fresh berries and chill for 1 hour.",
        "Serve and enjoy!"
      ], reviews: "978 Reviews • 4.4 Average"
    },
    {
      title: "Cheesecake Bites",
      description: "Mini cheesecake bites topped with a fresh berry compote.",
      difficulty: 4,
      image: "/images/Familyparty/cake.jpg",
      ingredients: ["1 cup cream cheese", "1/2 cup sugar", "1/4 cup berries", "1/2 cup graham cracker crumbs"],
      instructions: [
        "Mix cream cheese and sugar and form small bites.",
        "Top with berry compote and serve cold."
      ], reviews: "978 Reviews • 4.4 Average"
    }
  ]
};
// Recipe Modal
const RecipeModal = ({ showModal, handleClose, recipe, handleShowFeedbackForm }) => (
  <Modal show={showModal} onHide={handleClose} centered>
    <Modal.Header closeButton style={{ backgroundColor: '#6a1b9a', color: '#fff' }}>
      <Modal.Title>{recipe.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image src={recipe.image} fluid className="mb-3" style={{ borderRadius: '8px' }} />
      <p>{recipe.description}</p>
      <p>
        <strong>Difficulty:</strong>
        <Badge variant={recipe.difficulty <= 2 ? "success" : recipe.difficulty === 3 ? "warning" : "danger"}>
          {recipe.difficulty <= 2 ? "Easy" : recipe.difficulty === 3 ? "Medium" : "Hard"}
        </Badge>
      </p>
      <ProgressBar now={recipe.difficulty * 25} label={`${recipe.difficulty * 25}%`} style={{ marginBottom: '20px' }} />
      {/* Ingredients and Instructions */}
      <h5 style={{ marginTop: '30px' }}>Ingredients:</h5>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h5>Instructions:</h5>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#6a1b9a' }}>Close</Button>
      {/* Button to open feedback form */}
      <Button variant="primary" onClick={handleShowFeedbackForm} style={{ backgroundColor: '#6a1b9a' }}>
        Give Feedback
      </Button>
    </Modal.Footer>
  </Modal>
);
 
// Recipe List Group Component
const RecipeListGroup = ({ recipes, category, handleShowModal }) => (
  <div className="mb-5">
    <h3 style={{ color: '#6a1b9a', marginTop: '30px' }}>{category}</h3>
    <ListGroup variant="flush">
      {recipes.map((recipe, index) => (
        <ListGroup.Item key={index} style={{ borderRadius: '8px', marginBottom: '15px', backgroundColor: '#f8f9fa' }}>
          <Row>
            <Col md={4} className="text-center">
              <Image src={recipe.image} fluid style={{ height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
            </Col>
            <Col md={8}>
            <h5>
        {recipe.title}
        <span style={{ marginLeft: '10px', color: 'purple',fontStyle:'italic', fontSize: '1rem', fontWeight: '500' }}>
          {recipe.reviews}
        </span>
        </h5>
              <p>{recipe.description}</p>
             
              <Button
                variant="info"
                onClick={() => handleShowModal(recipe)}
                style={{
                  backgroundColor: '#6a1b9a',
                  border: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                View Recipe
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);
 
// Main Component for the Family Party Recipes Page
class FamilyPartyRecipesPage extends React.Component {
  state = {
    showModal: false,
    selectedRecipe: null,
    showFeedbackForm: false, // For feedback form modal
  };
 
  handleShowModal = (recipe) => {
    this.setState({ showModal: true, selectedRecipe: recipe });
  };
 
  handleCloseModal = () => {
    this.setState({ showModal: false, selectedRecipe: null });
  };
 
  handleShowFeedbackForm = () => {
    this.setState({ showFeedbackForm: true });
  };
 
  handleCloseFeedbackForm = () => {
    this.setState({ showFeedbackForm: false });
  };
 
  handleSubmitReview = (saladId, rating, review) => {
    // Handle review submission here
    console.log(`Recipe ID: ${saladId}, Rating: ${rating}, Review: ${review}`);
    //alert('Your review has been submitted!');
  };
 
  render() {
    return (
      <div style={{ fontFamily: "'Playfair Display', serif" }}>
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Family Party Recipes</h1>
          <p className="lead text-muted">Delicious recipes to make your family gathering unforgettable!</p>
        </header>
 
        <Container>
          {/* Recipe Sections */}
          <RecipeListGroup
            recipes={recipeData.appetizers}
            category="Appetizers"
            handleShowModal={this.handleShowModal}
          />
          <RecipeListGroup
            recipes={recipeData.mainCourses}
            category="Main Courses"
            handleShowModal={this.handleShowModal}
          />
          <RecipeListGroup
            recipes={recipeData.sideDishes}
            category="Side Dishes"
            handleShowModal={this.handleShowModal}
          />
          <RecipeListGroup
            recipes={recipeData.desserts}
            category="Desserts"
            handleShowModal={this.handleShowModal}
          />
        </Container>
 
        {/* Feedback Form Modal should be rendered above Recipe Modal */}
        {this.state.showFeedbackForm && (
          <Modal
            show={this.state.showFeedbackForm}
            onHide={this.handleCloseFeedbackForm}
            centered
            style={{ zIndex: 1060 }} // Ensures this modal shows above others
          >
            <FeedbackForm
              saladId={this.state.selectedRecipe.title} // Use recipe title or ID
              onSubmitReview={this.handleSubmitReview}
              onClose={this.handleCloseFeedbackForm}
            />
          </Modal>
        )}
 
        {/* Recipe Modal */}
        {this.state.selectedRecipe && (
          <Modal
            show={this.state.showModal}
            onHide={this.handleCloseModal}
            centered
            style={{ zIndex: 1050 }} // Recipe modal is below feedback form modal
          >
            <Modal.Header closeButton style={{ backgroundColor: '#6a1b9a', color: '#fff' }}>
              <Modal.Title>{this.state.selectedRecipe.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                src={this.state.selectedRecipe.image}
                fluid
                className="mb-3"
                style={{ borderRadius: '8px' }}
              />
              <p>{this.state.selectedRecipe.description}</p>
              <p>
                <strong>Difficulty:</strong>
                <Badge
                  variant={
                    this.state.selectedRecipe.difficulty <= 2
                      ? 'success'
                      : this.state.selectedRecipe.difficulty === 3
                      ? 'warning'
                      : 'danger'
                  }
                >
                  {this.state.selectedRecipe.difficulty <= 2
                    ? 'Easy'
                    : this.state.selectedRecipe.difficulty === 3
                    ? 'Medium'
                    : 'Hard'}
                </Badge>
              </p>
              <ProgressBar
                now={this.state.selectedRecipe.difficulty * 25}
                label={`${this.state.selectedRecipe.difficulty * 25}%`}
                style={{ marginBottom: '20px' }}
              />
              {/* Ingredients and Instructions */}
              <h5 style={{ marginTop: '30px' }}>Ingredients:</h5>
              <ul>
                {this.state.selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h5>Instructions:</h5>
              <ol>
                {this.state.selectedRecipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </Modal.Body>
            <Modal.Footer>
            <Button
                variant="primary"
                onClick={this.handleShowFeedbackForm}
                style={{ backgroundColor: '#6a1b9a' }}
              >
                Give Feedback
              </Button>
              <Button
                variant="secondary"
                onClick={this.handleCloseModal}
                style={{ backgroundColor: '#6a1b9a' }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}
 
export default FamilyPartyRecipesPage;