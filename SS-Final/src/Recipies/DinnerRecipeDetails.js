import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DinnerRecipeDetails.css";

// Import images
import grilledSalmonImg from "../Assets/Grilled-Salmon.jpg";
import steakImg from "../Assets/Steak.jpg";
import pastaPrimaveraImg from "../Assets/Pasta-Primvera.jpg";
import roastedChickenImg from "../Assets/Roested-chicken.jpg";
import veggieStirFryImg from "../Assets/Veggie-stir-fry.jpg";
import mushroomRisottoImg from "../Assets/Mushroom.jpg";
import lambChopsImg from "../Assets/LambChops.jpg";
import tofuBowlImg from "../Assets/Tofu-bowl.jpg";
import shrimpScampiImg from "../Assets/Shrimp.jpg";

// Dinner recipes data
const recipes = [
  {
    id: 17,
    name: "Grilled Salmon",
    image: grilledSalmonImg,
    description: "A perfectly grilled salmon served with a tangy lemon-butter sauce.",
    ingredients: ["Salmon fillets", "Olive oil", "Lemon juice", "Garlic", "Fresh parsley"],
    steps: [
      "Preheat grill to medium heat.",
      "Brush salmon with olive oil and season with salt and pepper.",
      "Grill salmon for 4-5 minutes per side until cooked through.",
      "Drizzle with lemon-butter sauce and garnish with parsley.",
      "Serve with your favorite side dish.",
    ],
  },
  {
    id: 18,
    name: "Steak with Garlic Butter",
    image: steakImg,
    description: "Juicy steak cooked to perfection, topped with garlic butter.",
    ingredients: ["Steak (ribeye or sirloin)", "Butter", "Garlic", "Fresh thyme", "Salt and pepper"],
    steps: [
      "Season the steak with salt and pepper.",
      "Heat a skillet and sear steak on both sides until desired doneness.",
      "Melt butter in the skillet and add garlic and thyme.",
      "Spoon garlic butter over the steak for added flavor.",
      "Rest for 5 minutes before serving.",
    ],
  },
  {
    id: 19,
    name: "Pasta Primavera",
    image: pastaPrimaveraImg,
    description: "A vibrant pasta dish with fresh vegetables and a light garlic sauce.",
    ingredients: ["Pasta", "Mixed vegetables (zucchini, bell peppers, broccoli)", "Olive oil", "Garlic", "Parmesan cheese"],
    steps: [
      "Cook pasta according to package instructions.",
      "Sauté vegetables in olive oil and garlic until tender.",
      "Toss cooked pasta with vegetables and sprinkle with Parmesan cheese.",
      "Serve warm with a garnish of fresh herbs.",
    ],
  },
  {
    id: 20,
    name: "Roasted Chicken",
    image: roastedChickenImg,
    description: "A succulent roasted chicken seasoned with herbs and spices for a hearty dinner.",
    ingredients: ["Whole chicken", "Olive oil", "Garlic", "Rosemary", "Salt and pepper"],
    steps: [
      "Preheat the oven to 375°F.",
      "Rub the chicken with olive oil, garlic, rosemary, salt, and pepper.",
      "Place in a roasting pan and cook for 1.5 hours or until done.",
      "Rest for 10 minutes before carving.",
      "Serve with roasted vegetables.",
    ],
  },
  {
    id: 21,
    name: "Veggie Stir Fry",
    image: veggieStirFryImg,
    description: "A quick and healthy stir fry loaded with fresh vegetables and a savory sauce.",
    ingredients: ["Mixed vegetables (broccoli, carrots, bell peppers)", "Soy sauce", "Garlic", "Ginger", "Cornstarch"],
    steps: [
      "Chop all vegetables into bite-sized pieces.",
      "Heat oil in a pan and sauté garlic and ginger.",
      "Add vegetables and stir fry until tender-crisp.",
      "Mix soy sauce and cornstarch with water and add to the pan.",
      "Cook until the sauce thickens and serve over rice.",
    ],
  },
  {
    id: 22,
    name: "Mushroom Risotto",
    image: mushroomRisottoImg,
    description: "A creamy Italian risotto with sautéed mushrooms and Parmesan cheese.",
    ingredients: ["Arborio rice", "Mushrooms", "Chicken or vegetable stock", "Onion", "Parmesan cheese"],
    steps: [
      "Sauté onions and mushrooms in butter.",
      "Add rice and cook until lightly toasted.",
      "Gradually add stock, stirring continuously until absorbed.",
      "Repeat until the rice is cooked and creamy.",
      "Stir in Parmesan cheese and serve hot.",
    ],
  },
  {
    id: 23,
    name: "Lamb Chops",
    image: lambChopsImg,
    description: "Tender and flavorful lamb chops seasoned with rosemary and garlic.",
    ingredients: ["Lamb chops", "Garlic", "Rosemary", "Olive oil", "Salt"],
    steps: [
      "Marinate lamb chops with garlic, rosemary, olive oil, and salt for 30 minutes.",
      "Heat a skillet and sear lamb chops on both sides until golden brown.",
      "Cook to your desired doneness and let rest for 5 minutes.",
      "Serve with mint jelly or your favorite side.",
    ],
  },
  {
    id: 24,
    name: "Tofu Buddha Bowl",
    image: tofuBowlImg,
    description: "A healthy and colorful Buddha bowl with tofu, quinoa, and fresh vegetables.",
    ingredients: ["Tofu", "Quinoa", "Avocado", "Vegetables", "Dressing"],
    steps: [
      "Cook quinoa according to package instructions.",
      "Pan-fry tofu until crispy on all sides.",
      "Chop fresh vegetables and arrange them with tofu and quinoa in a bowl.",
      "Drizzle with your favorite dressing and serve.",
    ],
  },
  {
    id: 25,
    name: "Shrimp Scampi",
    image: shrimpScampiImg,
    description: "A classic shrimp scampi with garlic, butter, and white wine.",
    ingredients: ["Shrimp", "Butter", "Garlic", "White wine", "Lemon juice", "Parsley"],
    steps: [
      "Melt butter in a skillet and sauté garlic until fragrant.",
      "Add shrimp and cook until pink and opaque.",
      "Pour in white wine and lemon juice, simmer for 2-3 minutes.",
      "Garnish with fresh parsley and serve over pasta or rice.",
    ],
  },
];

const DinnerRecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div className="container mt-5">
      <Card className="shadow-lg">
        <Card.Img variant="top" src={recipe.image} alt={recipe.name} className="recipe-image" />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5>Steps:</h5>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <Button variant="primary" className="mt-3" href="/recipes/dinner">
            Back to Dinner Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DinnerRecipeDetails;
