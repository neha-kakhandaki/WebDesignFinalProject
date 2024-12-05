import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; 
import "./RecipeDetails.css";

// Importing all images
import pancakeImg from "../Assets/pancake.gif";
import avocadoToastImg from "../Assets/Avocado-toast.jpg";
import omeletteImg from "../Assets/Omelet.jpg";
import wafflesImg from "../Assets/waffle.jpg";
import smoothieImg from "../Assets/Smoothi.jpg";
import bagelImg from "../Assets/Bagel.jpg";
import crepesImg from "../Assets/Creap.jpg";
import granolaImg from "../Assets/Granola.jpg";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Define navigate hook


  // Recipe details data
  const recipes = {
    1: {
      name: "Fluffy Pancakes",
      image: pancakeImg,
      description: "Learn to make the fluffiest pancakes ever with this easy recipe!",
      ingredients: ["2 cups flour", "2 tbsp sugar", "2 eggs", "1 cup milk"],
      steps: [
        "Mix the dry ingredients together.",
        "Add the wet ingredients and mix until smooth.",
        "Heat a pan and pour batter to form pancakes.",
        "Flip and cook until golden brown. Serve warm.",
      ],
      nutritionalInfo: {
        calories: "250 kcal",
        protein: "6g",
        carbs: "30g",
        fat: "10g",
      },
      reviews: "737 Reviews • 4.9 Average",
    },
    2: {
      name: "Avocado Toast",
      image: avocadoToastImg,
      description: "A simple yet delicious avocado toast recipe to kickstart your day!",
      ingredients: ["2 slices of bread", "1 avocado", "Salt and pepper"],
      steps: [
        "Toast the bread.",
        "Mash the avocado and season with salt and pepper.",
        "Spread avocado onto toast. Serve immediately.",
      ],
      nutritionalInfo: {
        calories: "200 kcal",
        protein: "4g",
        carbs: "22g",
        fat: "15g",
      },
      reviews: "137 Reviews • 4.9 Average",
    },
    3: {
      name: "French Omelette",
      image: omeletteImg,
      description: "Master the art of making a creamy and delicious French omelette.",
      ingredients: ["3 eggs", "Butter", "Salt and pepper"],
      steps: [
        "Whisk the eggs until frothy.",
        "Heat butter in a pan and pour in the eggs.",
        "Cook slowly, folding the omelette carefully. Serve hot.",
      ],
      nutritionalInfo: {
        calories: "190 kcal",
        protein: "10g",
        carbs: "2g",
        fat: "15g",
      },
      reviews: "503 Reviews • 4.8 Average",
    },
    4: {
      name: "Crispy Waffles",
      image: wafflesImg,
      description: "Golden and crispy waffles that are perfect for a hearty breakfast.",
      ingredients: ["2 cups waffle mix", "1 1/4 cups water", "1 egg", "2 tbsp oil"],
      steps: [
        "Preheat the waffle maker.",
        "Mix the waffle batter until smooth.",
        "Pour the batter into the waffle maker and cook until golden.",
        "Serve with syrup or your favorite toppings.",
      ],
      nutritionalInfo: {
        calories: "280 kcal",
        protein: "5g",
        carbs: "35g",
        fat: "10g",
      },
      reviews: "342 Reviews • 4.7 Average",
    },
    5: {
      name: "Berry Smoothie Bowl",
      image: smoothieImg,
      description: "A refreshing and healthy smoothie bowl topped with fresh fruits.",
      ingredients: [
        "1 cup frozen berries",
        "1 banana",
        "1/2 cup yogurt",
        "1/4 cup granola",
      ],
      steps: [
        "Blend the frozen berries, banana, and yogurt until smooth.",
        "Pour the mixture into a bowl.",
        "Top with granola, fresh fruits, and your choice of nuts or seeds.",
      ],
      nutritionalInfo: {
        calories: "220 kcal",
        protein: "5g",
        carbs: "38g",
        fat: "4g",
      },
      reviews: "281 Reviews • 4.6 Average",
    },
    6: {
      name: "Bagel with Cream Cheese",
      image: bagelImg,
      description: "A classic breakfast with a toasted bagel and creamy cheese spread.",
      ingredients: ["1 bagel", "2 tbsp cream cheese"],
      steps: [
        "Slice the bagel in half and toast it.",
        "Spread cream cheese on each half of the bagel.",
        "Serve warm and enjoy.",
      ],
      nutritionalInfo: {
        calories: "280 kcal",
        protein: "8g",
        carbs: "45g",
        fat: "8g",
      },
      reviews: "198 Reviews • 4.5 Average",
    },
    7: {
      name: "Classic Crepes",
      image: crepesImg,
      description: "Delicate and delicious crepes filled with fruit or cream.",
      ingredients: ["1 cup flour", "2 eggs", "1/2 cup milk", "1/2 cup water"],
      steps: [
        "Mix all the ingredients until smooth.",
        "Heat a pan and pour a thin layer of batter.",
        "Cook each side until golden brown.",
        "Fill with your choice of fruits, cream, or chocolate.",
      ],
      nutritionalInfo: {
        calories: "180 kcal",
        protein: "6g",
        carbs: "28g",
        fat: "5g",
      },
      reviews: "305 Reviews • 4.8 Average",
    },
    8: {
      name: "Homemade Granola",
      image: granolaImg,
      description: "Crunchy and flavorful granola made with oats, nuts, and honey.",
      ingredients: [
        "2 cups rolled oats",
        "1/2 cup honey",
        "1/4 cup almonds",
        "1/4 cup dried fruits",
      ],
      steps: [
        "Mix oats, honey, and almonds together.",
        "Bake at 350°F for 20 minutes, stirring occasionally.",
        "Add dried fruits and store in an airtight container.",
      ],
      nutritionalInfo: {
        calories: "240 kcal",
        protein: "6g",
        carbs: "32g",
        fat: "9g",
      },
      reviews: "220 Reviews • 4.6 Average",
    },
  };

  const recipe = recipes[id];

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist. Try another one!</p>
        <Link to="/recipes" className="back-link">
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="recipe-details-page">
      <div className="recipe-hero">
        {/* Recipe Image */}
        <img src={recipe.image} alt={recipe.name} className="recipe-hero-image" />

        {/* Recipe Info */}
        <div className="recipe-hero-content">
          <h1 className="recipe-title">{recipe.name}</h1>
          <p className="recipe-description">{recipe.description}</p>

          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Steps</h2>
          <ol className="steps-list">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <h2>Nutritional Information</h2>
          <ul className="nutritional-info">
            <li>Calories: {recipe.nutritionalInfo.calories}</li>
            <li>Protein: {recipe.nutritionalInfo.protein}</li>
            <li>Carbs: {recipe.nutritionalInfo.carbs}</li>
            <li>Fat: {recipe.nutritionalInfo.fat}</li>
          </ul>

          <p className="recipe-reviews">{recipe.reviews}</p>
        <button onClick={() => navigate(-1)} className="back-to-recipes">
          Back to Recipes
        </button>


        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
