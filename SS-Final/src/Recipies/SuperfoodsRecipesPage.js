import React, { useState } from 'react';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedbackForm from './FeedbackForm'; // Import FeedbackForm
 
 
const recipes = [
  {
    name: "Avocado Salad",
    image: "/images/Superfoods/avocado.jpg",
    ingredients: [
      "2 ripe avocados",
      "1 cup cherry tomatoes",
      "1/2 red onion",
      "1/4 cup cilantro",
      "1 lime",
      "Salt and pepper to taste",
      "1 tbsp olive oil",
      "1 tsp cumin",
      "1/4 tsp chili flakes",
      "1 tbsp lemon juice",
      "1/2 cup corn kernels",
      "1/4 cup feta cheese",
    ],
    instructions: "Dice the avocados and tomatoes. Finely chop the onion and cilantro. Squeeze lime juice over the ingredients. Season with salt and pepper to taste. Optionally add corn and feta for extra flavor.",
    reviews:"430 Reviews • 4.6 Average"
  },
  {
    name: "Chia Pudding",
    image: "/images/Superfoods/chia.jpg",
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup almond milk",
      "1 tsp vanilla extract",
      "1 tbsp maple syrup",
      "Fresh berries for topping",
      "1/2 banana",
      "1 tbsp peanut butter",
      "1 tsp honey",
      "1/2 tsp cinnamon",
      "A pinch of salt",
      "1 tbsp shredded coconut",
      "1 tbsp cacao nibs",
    ],
    instructions: "Mix chia seeds, almond milk, vanilla extract, and maple syrup in a jar. Refrigerate overnight. Add banana slices and berries on top before serving.",reviews:"800 Reviews • 4.7 Average"
  },
  {
    name: "Kale Smoothie",
    image: "/images/Superfoods/kale.jpg",
    ingredients: [
      "1 cup kale",
      "1 banana",
      "1/2 cup almond milk",
      "1 tbsp peanut butter",
      "Ice cubes",
      "1/2 cup spinach",
      "1/2 cup frozen mango",
      "1/2 cup yogurt",
      "1 tbsp chia seeds",
      "1 tsp honey",
      "1/4 cup oats",
      "1 tbsp flax seeds",
    ],
    instructions: "Blend all ingredients until smooth. Add ice cubes for a chilled smoothie.",reviews:"850 Reviews • 4.7 Average"
  },
  {
    name: "Quinoa Bowl",
    image: "/images/Superfoods/Quinoa Bowl.jpg",
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas",
      "1/4 cup cucumber",
      "1/4 cup cherry tomatoes",
      "Tahini dressing",
      "1/4 avocado",
      "1/4 cup red bell pepper",
      "1/4 cup sweetcorn",
      "1 tbsp lemon juice",
      "1 tbsp olive oil",
      "1 tsp cumin",
      "Salt and pepper to taste",
    ],
    instructions: "Combine quinoa, chickpeas, cucumber, and tomatoes in a bowl. Drizzle with tahini dressing and serve.",reviews:"500 Reviews • 4.7 Average"
  },
  {
    name: "Mango Chia Pudding",
    image: "/images/Superfoods/Mango Chia Pudding.jpg",
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup coconut milk",
      "1 mango (peeled and diced)",
      "1 tsp vanilla extract",
      "1 tbsp maple syrup",
      "1 tbsp shredded coconut",
      "1 tbsp almond slivers",
      "A pinch of cinnamon",
      "1/2 tsp cardamom",
      "1/4 tsp turmeric",
      "1 tbsp pumpkin seeds",
      "Fresh mint leaves for garnish",
    ],
    instructions: "Mix chia seeds with coconut milk, vanilla, and maple syrup. Refrigerate overnight. Top with mango, coconut, and almonds before serving.",reviews:"600 Reviews • 4.8 Average"
  },
  {
    name: "Berry Smoothie",
    image: "/images/Superfoods/Berry Smoothie.jpg",
    ingredients: [
      "1 cup mixed berries",
      "1 banana",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "1/2 cup yogurt",
      "1 tbsp honey",
      "1 tbsp oats",
      "1 tsp flax seeds",
      "1/2 cup spinach",
      "Ice cubes",
      "1 tsp vanilla extract",
      "1 tbsp peanut butter",
    ],
    instructions: "Blend all ingredients until smooth and creamy.",reviews:"700 Reviews • 4.9 Average"
  },
  {
    name: "Sweet Potato Salad",
    image: "/images/Superfoods/Sweet Potato Salad.jpg",
    ingredients: [
      "2 medium sweet potatoes",
      "1/2 red onion",
      "1/4 cup pumpkin seeds",
      "1/4 cup dried cranberries",
      "1/4 cup feta cheese",
      "1 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "1 tsp mustard",
      "1 tbsp maple syrup",
      "Salt and pepper to taste",
      "1 tbsp parsley",
      "1 tbsp lemon juice",
    ],
    instructions: "Roast sweet potatoes in the oven until tender. Toss with the other ingredients and serve chilled or at room temperature.",reviews:"650 Reviews • 4.5 Average"
  },
  {
    name: "Zucchini Noodles",
    image: "/images/Superfoods/Zucchini Noodles.jpg",
    ingredients: [
      "2 zucchinis",
      "1 tbsp olive oil",
      "1 garlic clove",
      "1/4 cup cherry tomatoes",
      "1/4 cup pine nuts",
      "1 tbsp nutritional yeast",
      "1 tbsp lemon juice",
      "1 tbsp parsley",
      "1 tbsp parmesan",
      "Salt and pepper to taste",
      "1/4 cup basil",
      "1 tbsp balsamic glaze",
    ],
    instructions: "Spiralize the zucchini into noodles. Sautee garlic and tomatoes in olive oil, add noodles and cook for 2-3 minutes. Garnish with pine nuts, herbs, and cheese.",reviews:"700 Reviews • 4.9 Average"
  },
  {
    name: "Chickpea Salad",
    image: "/images/Superfoods/Chickpea Salad.jpg",
    ingredients: [
      "1 cup cooked chickpeas",
      "1/4 cup red onion",
      "1/4 cup cucumber",
      "1/4 cup cherry tomatoes",
      "1/4 cup bell peppers",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tbsp tahini",
      "Salt and pepper to taste",
      "1 tbsp cumin",
      "1 tbsp parsley",
      "1 tbsp sunflower seeds",
    ],
    instructions: "Mix all ingredients in a large bowl and refrigerate for 30 minutes. Serve cold.",reviews:"860 Reviews • 4.7 Average"
  },
  {
    name: "Coconut Curry Soup",
    image: "/images/Superfoods/Coconut Curry Soup.jpg",
    ingredients: [
      "1 cup coconut milk",
      "1/2 cup red lentils",
      "1 tbsp curry powder",
      "1 onion",
      "2 garlic cloves",
      "1 tsp turmeric",
      "1 tbsp olive oil",
      "1 carrot",
      "1 celery stalk",
      "1 cup spinach",
      "Salt and pepper to taste",
      "1 tbsp cilantro",
    ],
    instructions: "Cook onion, garlic, and carrots in olive oil. Add curry powder and turmeric. Add coconut milk, lentils, and water. Simmer for 30 minutes. Add spinach and cilantro before serving.",reviews:"750 Reviews • 4.9 Average"
  },
  {
    name: "Pomegranate Salad",
    image: "/images/Superfoods/Pomegranate Salad.jpg",
    ingredients: [
      "1 pomegranate",
      "1 cup arugula",
      "1/4 cup feta cheese",
      "1 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "1 tsp honey",
      "1/4 cup walnuts",
      "1/4 cup red onion",
      "1 tsp cumin",
      "1/4 cup almonds",
      "Salt and pepper to taste",
      "1 tbsp lemon juice",
    ],
    instructions: "Toss arugula, pomegranate seeds, feta, and nuts. Drizzle with balsamic dressing and serve.",reviews:"460 Reviews • 4.5 Average"
  },
  {
    name: "Spinach & Mushroom Stir-fry",
    image: "/images/Superfoods/Spinach & Mushroom Stir-fry.jpg",
    ingredients: [
      "2 cups spinach",
      "1 cup mushrooms",
      "1 garlic clove",
      "1 tbsp olive oil",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "1/4 cup onion",
      "1/4 cup bell pepper",
      "1 tbsp sesame seeds",
      "1 tbsp ginger",
      "1 tbsp rice vinegar",
      "1 tbsp chili flakes",
    ],
    instructions: "Sautee mushrooms and garlic in olive oil. Add spinach, soy sauce, and sesame oil. Stir fry for 5 minutes and garnish with sesame seeds.",reviews:"700 Reviews • 4.9 Average"
  },
];
 
const SuperfoodsRecipePage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // State to control feedback form visibility
  const [currentRecipeId, setCurrentRecipeId] = useState(null); // Store the current recipe ID for feedback
 
  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0); // Scroll to top when a recipe is clicked
  };
 
  const handleReviewClick = (recipeId) => {
    setCurrentRecipeId(recipeId); // Set the recipe ID for review
    setShowFeedbackForm(true); // Show the feedback form inside modal
  };
 
  const handleCloseFeedbackForm = () => {
    setShowFeedbackForm(false); // Hide the feedback form
  };
 
  // Handle the review submission logic (to be handled in FeedbackForm)
  const handleSubmitReview = (saladId, rating, review) => {
    console.log(`Review submitted for recipe ${saladId}:`);
    console.log(`Rating: ${rating}, Review: ${review}`);
 
    // Normally here you would make a backend call to save the review.
    // For now, we're just logging it.
    //alert('Review submitted successfully!');
  };
 
  return (
    <div style={{ fontFamily: "'Playfair Display', serif", padding: '10px' }}>
     
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Superfoods Recipes</h1>
        <p className="lead text-muted">Explore our collection of fresh and healthy recipes that are perfect for every occasion.</p>
      </header>
      {/* Recipe Grid */}
      <div className="row">
        {recipes.map((recipe, index) => (
          <div className="col-6 col-md-4 mb-4" key={index}>
            <div className="card shadow-sm" style={{ borderRadius: '10px', backgroundColor: '#fff3e6' }}>
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                onClick={() => handleImageClick(recipe)}
              />
              <div className="card-body text-center">
              <p style={{ color: '#6a1b9a',fontSize: '16px', fontStyle: 'italic' }}>{recipe.reviews}</p>
 
                <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold', color: '#6a1b9a' }}>
                  {recipe.name}
                </h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleReviewClick(recipe.name)} // Open the review form inside modal
                  style={{ backgroundColor: '#6a1b9a', borderColor: '#6a1b9a' }}
                >
                  Leave a Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
 
     {/* Recipe Modal with Feedback Form */}
{selectedRecipe && (
  <div
    className="modal show"
    style={{
      display: 'block',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      zIndex: '1050',
    }}
    onClick={() => setSelectedRecipe(null)}
  >
    <div
      className="modal-dialog modal-lg"
      style={{
        maxWidth: '800px',
        marginTop: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-header" style={{ position: 'relative' }}>
        <h5 className="modal-title" style={{ color: '#6a1b9a', fontWeight: 'bold' }}>
          {selectedRecipe.name}
        </h5>
        {/* Close Button Positioned at Top Right */}
        <button
          type="button"
          className="close"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#6a1b9a',
            fontSize: '1.5rem',
            border: 'none',
            background: 'none',
          }}
          onClick={() => setSelectedRecipe(null)}
        >
          &times;
        </button>
      </div>
      <div className="modal-body">
        <h5>Ingredients:</h5>
        <ul>
          {selectedRecipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
        <h5>Instructions:</h5>
        <p>{selectedRecipe.instructions}</p>
      </div>
    </div>
  </div>
)}
 
{/* Feedback Form inside the modal */}
{showFeedbackForm && (
  <FeedbackForm
    saladId={currentRecipeId} // Pass the selected recipe's ID to FeedbackForm
    onSubmitReview={handleSubmitReview} // Pass the review submission function
    onClose={handleCloseFeedbackForm} // Close the feedback form
  />
)}
    </div>
  );
};
 
 
export default SuperfoodsRecipePage;