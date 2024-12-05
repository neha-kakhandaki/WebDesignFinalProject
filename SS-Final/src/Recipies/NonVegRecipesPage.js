import React, { useState } from 'react';
import { Tab, Tabs, Modal, Button } from 'react-bootstrap';
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component
 
const NonVegRecipesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalRecipe, setModalRecipe] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [reviews, setReviews] = useState([]); // State to store reviews
 
  // Function to handle submitting reviews
  const onSubmitReview = (recipeId, rating, reviewText) => {
    const newReview = {
      recipeId,
      rating,
      reviewText,
      date: new Date().toLocaleString(),
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    //alert('Thank you for your review!');
  };
 
  const handleShow = (recipe) => {
    setModalRecipe(recipe);
    setShowModal(true);
  };
 
  const handleClose = () => {
    setShowModal(false);
    setShowFeedbackForm(false);
  };
 
  const handleFeedback = () => {
    setShowFeedbackForm(true);
  };
 
  const recipeList = {
    mutton: [
      { name: 'Mutton Curry', ingredients: ['500g Mutton', '2 Onions', 'Tomato Paste', 'Ginger-Garlic Paste', 'Spices (cumin, coriander, garam masala)', 'Fresh coriander'], instructions: ['Heat oil in a pot', 'Add onions and sauté until golden', 'Add ginger-garlic paste and cook', 'Add mutton and brown it', 'Add tomato paste and cook until oil separates', 'Add water and spices, cook until tender', 'Garnish with fresh coriander'] , style: { fontWeight: 'bold', color: 'red', fontSize: '20px' } },
      { name: 'Mutton Pulao', ingredients: ['500g Mutton', '2 Cups Basmati Rice', '1 Onion', 'Whole Spices (cinnamon, cloves, cardamom)', 'Tomato', 'Ginger-Garlic Paste', 'Yogurt'], instructions: ['Fry onions until golden', 'Add ginger-garlic paste and spices', 'Add mutton and brown it', 'Add rice and water, cook until tender', 'Serve hot with raita'] },
      { name: 'Mutton Korma', ingredients: ['500g Mutton', 'Onions', 'Yogurt', 'Cashews', 'Cinnamon', 'Cardamom', 'Ginger-Garlic Paste', 'Fresh cream'], instructions: ['Grind onions and cashews into a paste', 'Fry the paste in ghee', 'Add mutton and cook until browned', 'Add yogurt and cook on low heat', 'Add cream for richness', 'Serve hot with naan or rice'] }
    ],
    fish: [
      { name: 'Fish Curry', ingredients: ['500g Fish Fillets', '2 Tomatoes', 'Onions', 'Coconut Milk', 'Ginger-Garlic Paste', 'Spices (turmeric, chili powder, garam masala)', 'Coriander'], instructions: ['Fry onions and ginger-garlic paste', 'Add tomatoes and spices, cook until soft', 'Add coconut milk and simmer', 'Add fish fillets and cook gently', 'Garnish with coriander leaves'] , style: { fontWeight: 'bold', color: 'red', fontSize: '20px' }},
      { name: 'Grilled Salmon', ingredients: ['2 Salmon Fillets', 'Olive Oil', 'Garlic', 'Lemon', 'Salt & Pepper', 'Herbs (dill, parsley)'], instructions: ['Preheat the grill', 'Season salmon with oil, garlic, and herbs', 'Grill salmon for 4-5 minutes on each side', 'Serve with lemon wedges'] , style: { fontWeight: 'bold', color: 'red', fontSize: '20px' } },
      { name: 'Fish Tacos', ingredients: ['400g Fish (white fish)', 'Taco Shells', 'Cabbage', 'Lemon', 'Avocado', 'Sour Cream', 'Spices (paprika, cumin)'], instructions: ['Season fish with spices and grill', 'Prepare toppings (cabbage, avocado, sour cream)', 'Assemble tacos with grilled fish and toppings'] , style: { fontWeight: 'bold', color: 'red', fontSize: '20px' }}
    ],
    chicken: [
      { name: 'Chicken Curry', ingredients: ['500g Chicken', 'Onions', 'Tomatoes', 'Ginger-Garlic Paste', 'Curry Leaves', 'Spices (turmeric, cumin, coriander)', 'Fresh coriander'], instructions: ['Fry onions and ginger-garlic paste', 'Add tomatoes and spices, cook until soft', 'Add chicken and cook until browned', 'Add water, simmer until chicken is tender', 'Garnish with fresh coriander'] },
      { name: 'Grilled Chicken', ingredients: ['4 Chicken Breasts', 'Lemon', 'Olive Oil', 'Garlic', 'Paprika', 'Salt & Pepper', 'Rosemary'], instructions: ['Marinate chicken in olive oil, lemon, and spices', 'Grill chicken for 6-8 minutes per side', 'Serve with grilled vegetables'] },
      { name: 'Chicken Tikka', ingredients: ['500g Chicken', 'Yogurt', 'Ginger-Garlic Paste', 'Lemon', 'Tikka Masala Spices', 'Fresh coriander'], instructions: ['Marinate chicken in yogurt and spices', 'Grill chicken until cooked through', 'Serve with naan or rice and garnish with coriander'] }
    ],
    beef: [
      { name: 'Beef Stir-fry', ingredients: ['500g Beef', 'Bell Peppers', 'Onions', 'Soy Sauce', 'Garlic', 'Ginger', 'Chili Flakes'], instructions: ['Stir-fry beef in hot oil', 'Add vegetables and cook until tender', 'Add soy sauce, garlic, and ginger, stir-fry until cooked', 'Serve with rice'] },
      { name: 'Beef Stew', ingredients: ['1kg Beef', 'Carrots', 'Potatoes', 'Onions', 'Beef Stock', 'Thyme', 'Bay Leaves'], instructions: ['Brown beef in a pot', 'Add onions and sauté', 'Add stock and vegetables, simmer until tender', 'Season with thyme and bay leaves'] },
      { name: 'Beef Bolognese', ingredients: ['500g Ground Beef', 'Onions', 'Garlic', 'Tomato Paste', 'Canned Tomatoes', 'Spaghetti', 'Basil'], instructions: ['Brown beef with onions and garlic', 'Add tomatoes and simmer', 'Serve with spaghetti, garnish with basil'] }
    ],
    pork: [
      { name: 'Pork Belly', ingredients: ['1kg Pork Belly', 'Garlic', 'Soy Sauce', 'Brown Sugar', 'Cinnamon', 'Star Anise'], instructions: ['Rub pork with seasonings', 'Slow roast in the oven for 2 hours', 'Slice and serve with sautéed vegetables'] },
      { name: 'Pork Tacos', ingredients: ['500g Pork Shoulder', 'Taco Shells', 'Onions', 'Cilantro', 'Lime', 'Spices (cumin, paprika, chili powder)'], instructions: ['Slow cook pork with spices', 'Shred pork and serve in tacos with onions, cilantro, and lime'] },
      { name: 'Pork Roast', ingredients: ['1.5kg Pork Roast', 'Garlic', 'Rosemary', 'Olive Oil', 'Salt & Pepper'], instructions: ['Season pork with garlic, rosemary, and oil', 'Roast in the oven at 180°C for 1.5 hours', 'Serve with roasted vegetables'] }
    ]
  };
 
  const getModalContent = (recipeName) => {
    let recipe = null;
 
    Object.values(recipeList).forEach((category) => {
      category.forEach((item) => {
        if (item.name === recipeName) {
          recipe = item;
        }
      });
    });
 
    return recipe || {};
  };
 
  return (
    <div>
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Non-Vegetarian Recipes</h1>
        <p className="lead text-muted">Delight in the rich and diverse flavors of India's festive treats.</p>
      </header>
 
      <section className="recipes-section" style={{ padding: '20px' }}>
  <Tabs defaultActiveKey="mutton" id="recipe-tabs" className="mb-3" transition={false}>
   
    {/* Mutton Tab */}
    <Tab eventKey="mutton" title="Mutton Recipes">
      {recipeList.mutton.map((recipe, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={`/images/mutton_recipe_${index + 1}.jpeg`}
              alt={`${recipe.name} Image`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                width: '80%'
              }}
            >
              <h2 style={{ fontSize: '2em', marginBottom: '10px',color: 'white' }}>{recipe.name}</h2>
              <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                A delicious {recipe.name} that will make your taste buds dance with flavor. Perfect for family gatherings and special occasions.
              </p>
              <Button variant="primary" onClick={() => handleShow(recipe)}>View Recipe</Button>
            </div>
          </div>
        </div>
      ))}
    </Tab>
 
    {/* Fish Tab */}
    <Tab eventKey="fish" title="Fish Recipes">
      {recipeList.fish.map((recipe, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={`/images/fish_recipe_${index + 1}.jpeg`}
              alt={`${recipe.name} Image`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                width: '80%'
              }}
            >
              <h2 style={{ fontSize: '2em', marginBottom: '10px', color: 'white'}}>{recipe.name}</h2>
              <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                Enjoy the fresh, succulent flavors of {recipe.name}. A perfect dish for a relaxing dinner.
              </p>
              <Button variant="primary" onClick={() => handleShow(recipe)}>View Recipe</Button>
            </div>
          </div>
        </div>
      ))}
    </Tab>
 
    {/* Chicken Tab */}
    <Tab eventKey="chicken" title="Chicken Recipes">
      {recipeList.chicken.map((recipe, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={`/images/chicken_recipe_${index + 1}.jpeg`}
              alt={`${recipe.name} Image`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                width: '80%'
              }}
            >
              <h2 style={{ fontSize: '2em', marginBottom: '10px' , color: 'white'}}>{recipe.name}</h2>
              <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                Discover the ultimate taste of {recipe.name}. This chicken recipe is a true crowd-pleaser.
              </p>
              <Button variant="primary" onClick={() => handleShow(recipe)}>View Recipe</Button>
            </div>
          </div>
        </div>
      ))}
    </Tab>
 
    {/* Beef Tab */}
    <Tab eventKey="beef" title="Beef Recipes">
      {recipeList.beef.map((recipe, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '100%'}}>
            <img
              src={`/images/beef_recipe_${index + 1}.jpeg`}
              alt={`${recipe.name} Image`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                width: '80%'
              }}
            >
              <h2 style={{ fontSize: '2em', marginBottom: '10px' , color: 'white'}}>{recipe.name}</h2>
              <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                Indulge in the hearty and rich flavors of {recipe.name}. Ideal for those who love a bold taste.
              </p>
              <Button variant="primary" onClick={() => handleShow(recipe)}>View Recipe</Button>
            </div>
          </div>
        </div>
      ))}
    </Tab>
 
    {/* Pork Tab */}
    <Tab eventKey="pork" title="Pork Recipes">
      {recipeList.pork.map((recipe, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={`/images/pork_recipe_${index + 1}.jpeg`}
              alt={`${recipe.name} Image`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                width: '80%'
              }}
            >
              <h2 style={{ fontSize: '2em', marginBottom: '10px' , color: 'white'}}>{recipe.name}</h2>
              <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                Relish the bold, savory flavors of {recipe.name}. A fantastic option for dinner or gatherings.
              </p>
              <Button variant="primary" onClick={() => handleShow(recipe)}>View Recipe</Button>
            </div>
          </div>
        </div>
      ))}
    </Tab>
  </Tabs>
</section>
 
     
 
      {/* Modal for Recipe Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalRecipe ? modalRecipe.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalRecipe ? (
            <div>
              {/* Display Ingredients and Instructions */}
              {!showFeedbackForm ? (
                <div>
                  <h5>Ingredients:</h5>
                  <ul>
                    {modalRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h5>Instructions:</h5>
                  <ol>
                    {modalRecipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                  {/* Button to trigger feedback form */}
                  <Button variant="secondary" onClick={handleFeedback}>Rate this recipe</Button>
                </div>
              ) : (
                <FeedbackForm saladId={modalRecipe.name} onSubmitReview={onSubmitReview} onClose={handleClose} />
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
 
export default NonVegRecipesPage;