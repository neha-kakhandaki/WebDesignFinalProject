import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';  // Adjust the import path as necessary
 
// Brain Boosting Meal Data with Instructions
const brainBoostingMeals = [
  {
    name: "Salmon and Avocado Salad",
    image: "/images/Brainboost/Salmon Avocado Salad.jpg",
    benefits: ["Rich in Omega-3", "Boosts Brain Function", "Improves Focus", "Rich in Healthy Fats"],
    description:
      "A refreshing salad with grilled salmon, creamy avocado, leafy greens, and a light lemon dressing. Great for improving cognitive function, focus,overall well-being. You must try this out. It tastes soo good.",
    instructions: [
      "Grill the salmon fillet with olive oil, salt, and pepper.",
      "Toss fresh spinach, avocado slices, cherry tomatoes, and red onions in a bowl.",
      "Top the salad with the grilled salmon.",
      "Drizzle with olive oil and lemon juice for a tangy dressing.",
      "Season with salt and pepper to taste.",
      "Serve immediately and enjoy the brain-boosting benefits!",
    ],reviews:"430 Reviews • 4.6 Average"
  },
  {
    name: "Blueberry - Almond Smoothie",
    image: "/images/Brainboost/Blueberry Almond Smoothie.jpg",
    benefits: ["Rich in Antioxidants", "Supports Memory", "Boosts Cognitive Health", "Hydrating"],
    description:
      "A delicious smoothie packed with antioxidants from blueberries and healthy fats from almonds, perfect for enhancing brain health. Perfect helpful for a helathy skin and for hair",
    instructions: [
      "Add blueberries, almond butter, almond milk, and honey into a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass and garnish with extra blueberries or a sprinkle of chia seeds.",
      "Drink it as a quick breakfast or an afternoon energy boost.",
    ],reviews:"540 Reviews • 4.7 Average"
  },
  {
    name: "Walnut and Dark Chocolate Bites",
    image: "/images/Brainboost/Walnut and Dark Chocolate Bites.jpg",
    benefits: ["Rich in Omega-3", "Supports Memory", "Improves Mood", "High in Antioxidants"],
    description:
      "These walnut and dark chocolate bites are a perfect combination of brain-boosting nutrients, offering a tasty and healthy snack.",
    instructions: [
      "Melt dark chocolate in a microwave-safe bowl.",
      "Chop walnuts into small pieces and mix them into the melted chocolate.",
      "Scoop the mixture into small bite-sized portions and place them on parchment paper.",
      "Let the bites cool and harden in the fridge for about 30 minutes.",
      "Enjoy these brain-boosting treats any time of day.",
    ],reviews:"600 Reviews • 4.7 Average"
  },
  {
    name: "Spinach and Mushroom Omelette",
    image: "/images/Brainboost/Spinach and Mushroom Omelett.jpg",
    benefits: ["Rich in Folate", "Supports Brain Function", "Improves Concentration", "High in Protein"],
    description:
      "A protein-packed omelette with spinach and mushrooms, providing essential nutrients that support brain function and cognitive performance. It also helps to maintain the protein requirement.",
    instructions: [
      "Whisk eggs with a pinch of salt and pepper.",
      "Sauté mushrooms in olive oil until soft, then add spinach and cook until wilted.",
      "Pour the egg mixture over the vegetables and cook until set.",
      "Fold the omelette in half and serve warm.",
      "Enjoy a brain-boosting, protein-packed meal to start your day!",
    ],reviews:"480 Reviews • 4.6 Average"
  },
  {
    name: "Chia Seed Pudding with Berries",
    image: "/images/Brainboost/Chia Seed Pudding with Berries.jpg",
    benefits: ["Rich in Omega-3", "Improves Cognitive Health", "Supports Mood", "High in Fiber"],
    description:
      "A simple chia seed pudding topped with fresh berries, offering a great balance of omega-3 fatty acids, fiber, and antioxidants. It helps in the Unnecessary fat cells reduction for a healthy human body .",
    instructions: [
      "Mix chia seeds, almond milk, and honey in a jar or bowl.",
      "Let the mixture sit in the fridge for at least 4 hours or overnight.",
      "Once thickened, top with fresh berries like blueberries, strawberries, and raspberries.",
      "Enjoy a delicious, brain-boosting breakfast or snack!",
    ],reviews:"475 Reviews • 4.6 Average"
  },
  {
    name: "Eggs with Avocado Toast",
    image: "/images/Brainboost/Eggs with Avocado Toast.jpg",
    benefits: ["Rich in Healthy Fats", "Supports Brain Health", "Improves Focus", "High in Protein"],
    description:
      "A delicious and nutritious breakfast, combining the healthy fats of avocado with the protein of eggs. Perfect for starting your day with a brain boost. Adding some oregano and chilli flakes to the top enhances the taste .",
    instructions: [
      "Toast a slice of whole grain bread.",
      "Mash an avocado with salt, pepper, and a squeeze of lemon juice.",
      "Spread the mashed avocado on the toast.",
      "Top with a fried or poached egg.",
      "Serve with a side of fresh fruit for an added brain-boosting effect.",
    ],reviews:"530 Reviews • 4.7 Average"
  },
  {
    name: "Greek Yogurt with Walnuts ",
    image: "/images/Brainboost/Greek Yogurt with Walnuts and Honey.jpg",
    benefits: ["Rich in Protein", "Supports Brain Function", "Improves Memory", "High in Antioxidants"],
    description:
      "A creamy Greek yogurt topped with crunchy walnuts and a drizzle of honey, providing a great mix of protein, healthy fats, and antioxidants. Walnuts helps in providng good fats to the body and Hnoey is a great anti-oxidant .",
    instructions: [
      "Scoop Greek yogurt into a bowl.",
      "Top with chopped walnuts and a drizzle of honey.",
      "Add a sprinkle of cinnamon if desired.",
      "Enjoy this as a quick snack or breakfast option.",
    ],reviews:"500 Reviews • 4.7 Average"
  },
  {
    name: "Coconut Almond Bars",
    image: "/images/Brainboost/Coconut Almond Energy Bars.jpg",
    benefits: ["Rich in Healthy Fats", "Boosts Energy", "Improves Brain Health", "High in Fiber"],
    description:
      "Homemade energy bars packed with healthy fats from almonds and coconut, providing sustained energy and brain-boosting benefits. It helps to stay full for a longer perios of time . Coconut is really good for the hydration of body .",
    instructions: [
      "In a food processor, blend almonds, coconut flakes, and dates until finely chopped.",
      "Add almond butter and a little honey to the mixture.",
      "Press the mixture into a baking tray and refrigerate for 2 hours.",
      "Cut into bars and store in the fridge for a healthy snack.",
    ],reviews:"800 Reviews • 4.7 Average"
  },
  {
    name: "Sweet Potato and Black Beans",
    image: "/images/Brainboost/Sweet Potato and Black Bean Bowl.jpg",
    benefits: ["Rich in Fiber", "Supports Cognitive Health", "Anti-inflammatory", "High in Antioxidants"],
    description:
      "A wholesome bowl featuring roasted sweet potatoes, black beans, and a variety of spices, providing nutrients that support cognitive health. It helps in providing the necessary proteins to the body ",
    instructions: [
      "Roast cubed sweet potatoes with olive oil, salt, and pepper until crispy.",
      "Warm black beans on the stove or microwave.",
      "Combine the roasted sweet potatoes and black beans in a bowl.",
      "Top with avocado, salsa, and a sprinkle of cilantro.",
      "Serve with a side of brown rice for a complete meal.",
    ],reviews:"600 Reviews • 4.8 Average"
  },
  {
    name: "Oats with Chia and Berries",
    image: "/images/Brainboost/Oats with Chia and Berries.jpg",
    benefits: ["Rich in Fiber", "Supports Memory", "Improves Focus", "High in Antioxidants"],
    description:
      "A hearty breakfast made with oats, chia seeds, and fresh berries, helping to improve brain function and memory. Oats are rich in anti- oxidents helping in healthier body and brain's functions . Chia is highly rich in Omega fatty acids .",
    instructions: [
      "Cook oats according to package instructions.",
      "Stir in chia seeds and a drizzle of honey.",
      "Top with fresh berries like blueberries, raspberries, and strawberries.",
      "Enjoy this nourishing breakfast to boost your brain power.",
    ],reviews:"760 Reviews • 4.8 Average"
  },
  {
    name: "Turmeric Golden Milk",
    image: "/images/Brainboost/Turmeric Golden Milk.jpg",
    benefits: ["Anti-inflammatory", "Improves Mood", "Supports Cognitive Function", "Rich in Antioxidants"],
    description:
      "A warm, soothing drink made with turmeric and milk (or dairy-free alternative), known for its anti-inflammatory properties and cognitive benefits.",
    instructions: [
      "In a small pot, heat milk and add turmeric, ginger, and black pepper.",
      "Whisk until smooth and heated through.",
      "Add honey or maple syrup to sweeten to taste.",
      "Drink before bed or as an afternoon pick-me-up for a brain boost.",
    ],reviews:"600 Reviews • 4.7 Average"
  },
  {
    name: "Avocado and Tomato Salad",
    image: "/images/Brainboost/Avocado and Tomato Salad.jpg",
    benefits: ["Rich in Healthy Fats", "Supports Brain Health", "Anti-inflammatory", "High in Fiber"],
    description:
      "A light and refreshing salad made with ripe avocados, tomatoes, and a zesty vinaigrette, offering brain-boosting nutrients. Avocado is highly rich in good fats .",
    instructions: [
      "Slice avocado and tomatoes and place them in a bowl.",
      "Drizzle with olive oil and balsamic vinegar.",
      "Season with salt, pepper, and a pinch of red pepper flakes.",
      "Toss gently and serve as a side or light meal.",
    ],reviews:"760 Reviews • 4.8 Average"
  },
];
 
const BrainBoostingFoodsPage = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [reviews, setReviews] = useState({}); // Add the reviews state
 
  // Function to open the feedback form modal
  const handleFeedbackClick = () => {
    setShowFeedbackForm(true);
  };
 
  // Close the feedback form modal
  const closeFeedbackForm = () => {
    setShowFeedbackForm(false);
  };
 
  // Handle review submission
  const handleReviewSubmit = (saladId, rating, review) => {
    setReviews((prev) => ({
      ...prev,
      [saladId]: { rating, review },
    }));
    setSuccessMessage('Your review has been successfully submitted!');
    closeFeedbackForm();
   
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Hide message after 3 seconds
  };
 
  return (
    <div style={{ padding: "10px 20px", background: "linear-gradient(135deg, #e0f7fa, #ffccbc)", minHeight: "100vh", fontFamily: "'Playfair Display', serif" }}>
 
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>Brain Boosting Foods</h1>
        <p className="lead text-muted">Explore our collection of Brain Boosters that are perfect for every occasion.</p>
      </header>
 
      {/* Meal Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "30px",
        justifyItems: "center",
      }}>
        {brainBoostingMeals.map((meal, index) => (
          <div key={index} className="meal-item" style={{
            position: "relative", padding: "20px", background: "#fff", borderRadius: "12px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", overflow: "hidden", transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", cursor: "pointer", textAlign: "center", width: "100%",
          }} onClick={() => setSelectedMeal(meal)}>
            <img src={meal.image} alt={meal.name} style={{
              width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", marginBottom: "20px",
            }} />
           <div style={{
              fontSize: "1rem", color: '#6a1b9a', marginBottom: "10px", fontStyle: "italic"
            }}>
              {meal.reviews}
            </div>
            <div style={{
              fontSize: "1.5rem", fontWeight: "bold", color: "#333", textTransform: "uppercase", marginBottom: "10px",
            }}>
              {meal.name}
            </div>
            <div style={{
              fontSize: "1rem", color: "#555", marginBottom: "10px",
            }}>
              {meal.description}
            </div>
            <button style={{
              padding: "8px 15px", fontSize: "1rem", backgroundColor: "#6a1b9a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer",
            }}>
              View Recipe
            </button>
          </div>
        ))}
      </div>
 
      {/* View Recipe Modal with Feedback Button */}
      {selectedMeal && (
        <div style={{
          position: "fixed", right: 0, top: 0, width: "400px", height: "100%", background: "#fff", boxShadow: "-2px 0 15px rgba(0, 0, 0, 0.1)", padding: "20px", zIndex: 1000,
        }}>
          <h2 style={{ fontSize: "1.5rem", color: "#6a1b9a" }}>Instructions for {selectedMeal.name}</h2>
          <ol style={{ marginTop: "20px", color: "#555" }}>
            {selectedMeal.instructions.map((instruction, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>{instruction}</li>
            ))}
          </ol>
 
          {/* Leave Feedback Button */}
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                padding: "8px 15px", fontSize: "1rem", backgroundColor: "#6a1b9a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer",
              }}
              onClick={handleFeedbackClick}
            >
              Rate this Recipe
            </button>
 
            {/* Close Button */}
            <button
              onClick={() => setSelectedMeal(null)}
              style={{
                padding: "8px 15px", fontSize: "1rem", backgroundColor: "#6a1b9a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
 
      {/* Feedback Modal */}
      {showFeedbackForm && selectedMeal && (
        <FeedbackForm
          saladId={selectedMeal.name} // Pass meal name to uniquely identify the recipe
          onSubmitReview={handleReviewSubmit} // Handle the review submission
          onClose={closeFeedbackForm}
        />
      )}
 
      {/* Success Message */}
      {successMessage && (
        <div style={{
          backgroundColor: "#28a745", color: "#fff", padding: "15px", marginTop: "20px", textAlign: "center", borderRadius: "5px",
        }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};
 
export default BrainBoostingFoodsPage;