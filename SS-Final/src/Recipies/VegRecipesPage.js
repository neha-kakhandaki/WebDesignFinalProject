import React, { useState } from 'react';
import { Card, Button, Row, Col, Offcanvas } from 'react-bootstrap';
import FeedbackForm from './FeedbackForm'; // Import FeedbackForm
 
const VegetarianRecipesPage = () => {
  const [show, setShow] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // State for feedback form visibility
 
 // Array of recipe data with detailed ingredients and instructions
 const recipes = [
  {
    id: 1,
    name: 'Vegetable Biryani',
    image: '/images/Veg Recipes/veg biryani.jpeg',
    description: 'A Rice dish with mixed vegetables and spices.',
    ingredients: [
      '2 cups basmati rice',
      '1 cup mixed vegetables (carrot, peas, beans)',
      '1 onion, sliced',
      '2 tomatoes, chopped',
      '1/4 cup yogurt',
      '2 tbsp biryani masala',
      '1 tsp ginger garlic paste',
      'Whole spices (bay leaf, cinnamon, cardamom)',
      'Salt to taste',
      '1/4 cup cilantro, chopped'
    ],
    instructions: [
      'Rinse and soak the basmati rice for 30 minutes.',
      'Heat oil in a pan, fry the whole spices, and add sliced onions.',
      'Once onions turn golden, add ginger garlic paste and chopped tomatoes.',
      'Add mixed vegetables, biryani masala, salt, and cook for 5 minutes.',
      'Add yogurt, mix well, and cook for another 5 minutes.',
      'Layer the rice over the vegetable mixture and cook on low heat until the rice is tender.',
      'Garnish with cilantro and serve hot.'
    ],
   reviews: "737 Reviews • 4.9 Average"
  },
  {
    id: 2,
    name: 'Paneer Butter Masala',
    image: '/images/Veg Recipes/panner butter masala.jpeg',
    description: 'Paneer in a creamy and spicy tomato gravy.',
    ingredients: [
      '250g paneer, cubed',
      '2 tbsp butter',
      '1 onion, finely chopped',
      '2 tomatoes, pureed',
      '1/4 cup cream',
      '1 tsp ginger garlic paste',
      '1 tsp garam masala',
      '1/2 tsp chili powder',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Heat butter in a pan and sauté onions until golden.',
      'Add ginger garlic paste and sauté for another 2 minutes.',
      'Add pureed tomatoes, garam masala, chili powder, and salt. Cook until oil separates.',
      'Add cubed paneer and cook for 5 minutes.',
      'Add cream and cook for another 2-3 minutes on low flame.',
      'Garnish with fresh coriander leaves and serve with naan or rice.'
    ],
    reviews: "897 Reviews • 4.8 Average"
  },
  {
    id: 3,
    name: 'Chana Masala',
    image: '/images/Veg Recipes/chana masala.jpeg',
    description: 'A tangy and spicy chickpea curry.',
    ingredients: [
      '2 cups cooked chickpeas',
      '1 onion, finely chopped',
      '2 tomatoes, chopped',
      '1 tbsp ginger garlic paste',
      '1 tbsp chana masala powder',
      '1/2 tsp cumin powder',
      '1/2 tsp turmeric powder',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Heat oil in a pan, sauté onions until golden.',
      'Add ginger garlic paste and sauté for a minute.',
      'Add chopped tomatoes and cook until soft.',
      'Add chana masala powder, cumin powder, turmeric powder, and salt.',
      'Add cooked chickpeas, a little water, and simmer for 10 minutes.',
      'Garnish with coriander leaves and serve with rice or roti.'
    ], reviews: "689 Reviews • 4.3 Average"
  },
  {
    id: 4,
    name: 'Aloo Gobi',
    image: '/images/Veg Recipes/aloo gobi.jpg',
    description: 'A classic Indian dry curry made with potatoes and cauliflower.',
    ingredients: [
      '2 potatoes, cubed',
      '1 medium cauliflower, broken into florets',
      '1 onion, sliced',
      '1 tomato, chopped',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric powder',
      '1 tsp garam masala',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Heat oil in a pan, add cumin seeds and sauté onions until golden.',
      'Add chopped tomatoes and cook for 2-3 minutes.',
      'Add turmeric powder, garam masala, and salt.',
      'Add potatoes and cauliflower florets, cook for 10 minutes until vegetables are tender.',
      'Garnish with coriander leaves and serve with roti or rice.'
    ], reviews: "876 Reviews • 4.3 Average"
  },
  {
    id: 5,
    name: 'Baingan Bharta',
    image: '/images/Veg Recipes/baigan barta.jpg',
    description: 'Roasted eggplant curry with onions, tomatoes, and spices.',
    ingredients: [
      '1 large eggplant',
      '1 onion, finely chopped',
      '1 tomato, chopped',
      '1 tbsp ginger garlic paste',
      '1/2 tsp cumin powder',
      '1 tsp garam masala',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Roast the eggplant directly on an open flame until the skin chars.',
      'Peel off the skin and mash the roasted eggplant.',
      'Heat oil in a pan, sauté onions, and ginger garlic paste.',
      'Add chopped tomatoes, cumin powder, garam masala, and cook until soft.',
      'Add the mashed eggplant and mix well. Cook for 5 minutes.',
      'Garnish with fresh coriander leaves and serve hot with naan.'
    ], reviews: "689 Reviews • 4.6 Average"
  },
  {
    id: 6,
    name: 'Palak Paneer',
    image: '/images/Veg Recipes/palak paneer.jpg',
    description: 'Paneer cubes cooked in a smooth spinach gravy with butter.',
    ingredients: [
      '250g paneer, cubed',
      '2 cups spinach, blanched and pureed',
      '1 onion, finely chopped',
      '1 tomato, chopped',
      '1 tsp ginger garlic paste',
      '1/2 tsp cumin seeds',
      'Salt to taste',
      'Fresh cream'
    ],
    instructions: [
      'Heat oil in a pan, sauté cumin seeds and onions.',
      'Add ginger garlic paste and chopped tomatoes. Cook until soft.',
      'Add the spinach puree, cumin powder, and salt. Cook for 5 minutes.',
      'Add paneer cubes and simmer for another 5 minutes.',
      'Stir in fresh cream and serve hot with roti or rice.'
    ], reviews: "796 Reviews • 4.7 Average"
  },
  {
    id: 7,
    name: 'Rajma',
    image: '/images/Veg Recipes/rajma.jpg',
    description: 'Red kidney beans in a rich and spicy gravy.',
    ingredients: [
      '2 cups cooked kidney beans',
      '1 onion, finely chopped',
      '2 tomatoes, chopped',
      '1 tbsp ginger garlic paste',
      '1 tsp cumin powder',
      '1 tsp chili powder',
      '1 tsp garam masala',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan, sauté onions until golden.',
      'Add ginger garlic paste and chopped tomatoes. Cook until soft.',
      'Add cumin powder, chili powder, garam masala, and salt.',
      'Add cooked kidney beans, a little water, and simmer for 10 minutes.',
      'Serve hot with steamed rice.'
    ], reviews: "698 Reviews • 4.4 Average"
  },
  {
    id: 8,
    name: 'Kadhi Pakora',
    image: '/images/Veg Recipes/pakora.jpg',
    description: 'Gram flour dumplings in a tangy yogurt gravy.',
    ingredients: [
      '1 cup gram flour (besan)',
      '1 cup yogurt',
      '1 onion, finely chopped',
      '1 tsp ginger garlic paste',
      '1/2 tsp cumin seeds',
      '1/2 tsp turmeric powder',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Make a batter with gram flour, water, and spices.',
      'Fry small dumplings (pakoras) in hot oil until golden.',
      'Prepare the kadhi by heating oil, adding cumin seeds, and sautéing onions.',
      'Add yogurt, turmeric, and salt, cook until the kadhi thickens.',
      'Add fried pakoras to the kadhi and simmer for 5 minutes.',
      'Garnish with fresh coriander leaves and serve hot with rice.'
    ], reviews: "976 Reviews • 4.6 Average"
  },
 
  {
    id: 9,
    name: 'Methi Thepla',
    image: '/images/Veg Recipes/methi.jpg',
    description: 'A  flatbread made with fenugreek leaves.',
    ingredients: [
      '2 cups whole wheat flour',
      '1 cup fenugreek leaves (methi), chopped',
      '1/2 tsp turmeric powder',
      '1 tsp cumin powder',
      '1 tsp chili powder',
      '1 tbsp sesame seeds',
      'Salt to taste',
      'Water as needed',
      'Oil for frying'
    ],
    instructions: [
      'Mix the wheat flour, fenugreek leaves, and spices in a bowl.',
      'Gradually add water and knead the dough.',
      'Divide the dough into small balls and roll them into thin circles.',
      'Cook on a hot griddle with a little oil until golden brown on both sides.',
      'Serve hot with yogurt or pickle.'
    ], reviews: "987 Reviews • 4.9 Average"
  },
  {
    id: 10,
    name: 'Stuffed Paratha',
    image: '/images/Veg Recipes/paratha.jpg',
    description: 'Whole wheat parathas stuffed with spiced potato filling.',
    ingredients: [
      '2 cups whole wheat flour',
      '2 large potatoes, boiled and mashed',
      '1/2 tsp cumin seeds',
      '1/2 tsp turmeric powder',
      '1 tsp cumin powder',
      '1 tsp chili powder',
      'Fresh coriander leaves',
      'Salt to taste',
      'Oil for frying'
    ],
    instructions: [
      'Mix flour, salt, and water to form a soft dough.',
      'In a separate bowl, combine mashed potatoes with cumin seeds, turmeric, chili powder, and fresh coriander.',
      'Divide the dough into small portions, roll each into a ball, and stuff with the potato filling.',
      'Roll out the stuffed dough into flat parathas and cook on a griddle with oil until golden brown on both sides.',
      'Serve with raita or chutney.'
    ], reviews: "897 Reviews • 4.7 Average"
  },
 
  {
    id: 11,
    name: 'Daal Tadka',
    image: '/images/Veg Recipes/daal tadka.jpg',
    description: 'A comforting yellow lentil curry tempered with ghee and spices.',
    ingredients: [
      '1 cup yellow lentils (toor daal)',
      '1 onion, finely chopped',
      '2 tomatoes, chopped',
      '1 tsp ginger garlic paste',
      '1/2 tsp cumin seeds',
      '1/2 tsp turmeric powder',
      '1 tsp chili powder',
      '1 tbsp ghee',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Cook the yellow lentils in a pressure cooker with turmeric powder and salt until soft.',
      'In a separate pan, heat ghee, add cumin seeds and sauté onions until golden.',
      'Add ginger garlic paste, tomatoes, chili powder, and cook until soft.',
      'Add the cooked lentils to the pan and simmer for 5 minutes.',
      'Garnish with coriander leaves and serve with rice or roti.'
    ], reviews: "869 Reviews • 4.3 Average"
  },
  {
    id: 12,
    name: 'Vegetable Pulao',
    image: '/images/Veg Recipes/veg biryani.jpeg',
    description: 'A one-pot rice dish with vegetables and spices alog with Ghee .',
    ingredients: [
      '2 cups basmati rice',
      '1 cup mixed vegetables (carrot, peas, beans)',
      '1 onion, chopped',
      '1 tbsp ginger garlic paste',
      '2 bay leaves',
      '4-5 cloves',
      '1 cinnamon stick',
      '1 tsp cumin seeds',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Heat oil in a pan, add bay leaves, cloves, cinnamon, and cumin seeds.',
      'Add chopped onions and ginger garlic paste, sauté until golden.',
      'Add mixed vegetables, rice, and salt. Stir well.',
      'Add 4 cups of water, bring to a boil, then reduce heat and cook until rice is done.',
      'Garnish with fresh coriander leaves and serve hot.'
    ], reviews: "639 Reviews • 4.6 Average"
  },
  {
    id: 13,
    name: 'Matar Paneer',
    image: '/images/Veg Recipes/matar panner.jpg',
    description: 'Paneer cubes cooked with peas in a spicy tomato gravy.',
    ingredients: [
      '200g paneer, cubed',
      '1 cup peas',
      '2 tomatoes, chopped',
      '1 onion, chopped',
      '1 tsp ginger garlic paste',
      '1 tsp garam masala',
      '1 tsp chili powder',
      '1/2 tsp turmeric powder',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Heat oil in a pan, sauté onions and ginger garlic paste until golden.',
      'Add chopped tomatoes, garam masala, chili powder, turmeric powder, and salt. Cook until soft.',
      'Add peas and cook for 5 minutes.',
      'Add paneer cubes and simmer for another 5 minutes.',
      'Garnish with fresh coriander leaves and serve with roti or rice.'
    ], reviews: "638 Reviews • 4.6 Average"
  },
  {
    id: 14,
    name: 'Tandoori Broccoli',
    image: '/images/Veg Recipes/tandoori broccoli.jpg',
    description: 'Broccoli marinated in yogurt and spices, then grilled to perfection.',
    ingredients: [
      '1 head of broccoli',
      '1/2 cup yogurt',
      '1 tsp turmeric powder',
      '1 tsp cumin powder',
      '1 tsp paprika',
      '1 tbsp lemon juice',
      'Salt to taste',
      'Oil for grilling'
    ],
    instructions: [
      'Cut broccoli into florets and blanch them in boiling water for 2 minutes.',
      'Mix yogurt, turmeric powder, cumin powder, paprika, lemon juice, and salt to make the marinade.',
      'Coat the broccoli florets in the marinade and let sit for 30 minutes.',
      'Preheat the grill and cook the broccoli until tender and slightly charred.',
      'Serve hot with a drizzle of lemon juice.'
    ], reviews: "689 Reviews • 4.4 Average"
  },
  {
    id: 15,
    name: 'Mushroom Masala',
    image: '/images/Veg Recipes/mushroom masala.jpg',
    description: 'Mushrooms cooked in a rich, spiced tomato gravy with onion .',
    ingredients: [
      '200g mushrooms, sliced',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp ginger garlic paste',
      '1 tsp cumin powder',
      '1 tsp chili powder',
      '1/2 tsp turmeric powder',
      'Fresh coriander leaves'
    ],
    instructions: [
      'Heat oil, sauté onions until golden, then add ginger garlic paste.',
      'Add tomatoes, turmeric powder, chili powder, and cumin powder, cook until soft.',
      'Add mushrooms, cook until soft, and simmer for 10 minutes.',
      'Garnish with fresh coriander and serve hot.'
    ], reviews: "688 Reviews • 4.9 Average"
  },
 
 
];
 
  const handleShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };
 
  const handleClose = () => {
    setShow(false);
    setShowFeedbackForm(false); // Close feedback form when offcanvas closes
  };
 
  // Function to handle feedback submission
  const handleFeedbackSubmit = (saladId, rating, review) => {
    console.log('Feedback submitted:', { saladId, rating, review });
    // Handle feedback storage, API call, etc.
    //alert('Thank you for your feedback!');
  };
 
  return (
    <div>
      {/* Page Heading */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
          Vegetarian Recipes
        </h1>
        <p className="lead text-muted">Explore a variety of mouth-watering vegetarian dishes perfect for every occasion.</p>
      </header>
 
      {/* Recipe Section */}
      <section className="recipe-section py-5">
        <div className="container">
          <Row>
            {recipes.map((recipe) => (
              <Col sm={12} md={6} lg={4} key={recipe.id} className="mb-4">
                <Card className="recipe-box"  
                style={{
                        borderColor: '#A020F0'
                      }}>
                  <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                  <Card.Body>
                    <Card.Text style={{ color: 'purple', fontStyle : 'italic' }}>{recipe.reviews}</Card.Text>
                    <Card.Title style={{ color: 'purple' }}>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleShow(recipe)}
                      style={{
                        backgroundColor: '#6a1b9a',
                        borderColor: '#A020F0',
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      View Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
 
      {/* Offcanvas Component */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>
            {selectedRecipe?.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedRecipe && (
            <div>
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="img-fluid mb-4"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <h5 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Ingredients</h5>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h5 style={{ color: '#6a1b9a', fontFamily: '"Playfair Display", serif' }}>Instructions</h5>
              <ol>
                {selectedRecipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
              {/* "Rate This Recipe" Button */}
              <Button
                variant="secondary"
                onClick={() => setShowFeedbackForm(true)}
                style={{
                  backgroundColor: '#6a1b9a',
                  borderColor: '#6a1b9a',
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                Rate This Recipe
              </Button>
 
              {/* Conditionally render the FeedbackForm */}
              {showFeedbackForm && (
                <div className="mt-4">
                  <FeedbackForm
                    saladId={selectedRecipe.id}  // Passing the saladId (recipe ID)
                    onSubmitReview={handleFeedbackSubmit}  // Corrected function name for feedback
                    onClose={handleClose}
                  />
                </div>
              )}
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
 
export default VegetarianRecipesPage;