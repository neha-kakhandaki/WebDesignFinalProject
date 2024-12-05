import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LunchRecipeDetails.css";

// Import Images
import vegetablePulaoImg from "../Assets/Veg-pulav.jpg";
import grilledChickenSaladImg from "../Assets/Grilled-Chicken-Salad.jpg";
import palakPaneerImg from "../Assets/Palak-Paneer.jpg";
import margheritaPizzaImg from "../Assets/Margirita-pizza.jpg";
import masoorDalImg from "../Assets/Masoor-dal.jpg";
import quinoaBowlImg from "../Assets/Quinova-bowl.jpg";
import bainganBhartaImg from "../Assets/Bharta.jpg";
import tandooriRotiImg from "../Assets/Tandori-roti.jpg";

const recipes = [
  {
    id: 9,
    name: "Vegetable Pulao",
    image: vegetablePulaoImg,
    description:
      "A flavorful and aromatic rice dish made with mixed vegetables and Indian spices.",
    ingredients: ["Rice", "Mixed Vegetables", "Spices", "Onions", "Ghee"],
    steps: [
      "Rinse the rice and soak it for 30 minutes.",
      "Heat ghee in a pan and sauté onions and spices.",
      "Add vegetables and cook for a few minutes.",
      "Mix in rice and water, and cook until done.",
      "Serve hot with raita.",
    ],
  },
  {
    id: 10,
    name: "Grilled Chicken Salad",
    image: grilledChickenSaladImg,
    description:
      "A healthy and delicious salad with grilled chicken, fresh vegetables, and a tangy dressing.",
    ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Cucumbers", "Dressing"],
    steps: [
      "Grill the chicken until cooked.",
      "Chop the vegetables and mix them in a bowl.",
      "Slice the grilled chicken and add it to the salad.",
      "Drizzle with dressing and toss well.",
      "Serve fresh.",
    ],
  },
  {
    id: 11,
    name: "Palak Paneer",
    image: palakPaneerImg,
    description:
      "A rich and creamy spinach curry with tender cubes of paneer. A classic Indian dish.",
    ingredients: ["Spinach", "Paneer", "Onions", "Tomatoes", "Spices", "Cream"],
    steps: [
      "Blanch the spinach and blend into a puree.",
      "Sauté onions and tomatoes with spices.",
      "Add the spinach puree and cook for a few minutes.",
      "Add paneer cubes and simmer for 5 minutes.",
      "Garnish with cream and serve hot.",
    ],
  },
  {
    id: 12,
    name: "Margherita Pizza",
    image: margheritaPizzaImg,
    description:
      "A simple yet delicious pizza with fresh mozzarella, basil leaves, and a classic tomato sauce.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil Leaves"],
    steps: [
      "Preheat the oven to 220°C.",
      "Spread tomato sauce on the pizza base.",
      "Top with mozzarella cheese and basil leaves.",
      "Bake in the oven for 10-12 minutes.",
      "Slice and serve hot.",
    ],
  },
  {
    id: 13,
    name: "Masoor Dal",
    image: masoorDalImg,
    description:
      "A comforting and protein-rich lentil dish cooked with spices and served with rice or roti.",
    ingredients: ["Masoor Dal", "Onions", "Tomatoes", "Garlic", "Spices"],
    steps: [
      "Wash and soak the dal for 15 minutes.",
      "Cook the dal in a pressure cooker with water.",
      "Prepare a tempering with onions, tomatoes, and spices.",
      "Mix the tempering into the cooked dal.",
      "Serve hot with rice or roti.",
    ],
  },
  {
    id: 14,
    name: "Quinoa Buddha Bowl",
    image: quinoaBowlImg,
    description:
      "A healthy and colorful quinoa bowl loaded with fresh vegetables, beans, and a flavorful dressing.",
    ingredients: ["Quinoa", "Beans", "Avocado", "Vegetables", "Dressing"],
    steps: [
      "Cook quinoa according to package instructions.",
      "Chop vegetables and slice avocado.",
      "Arrange quinoa, beans, and vegetables in a bowl.",
      "Drizzle with dressing.",
      "Serve fresh and enjoy.",
    ],
  },
  {
    id: 15,
    name: "Baingan Bharta",
    image: bainganBhartaImg,
    description:
      "A smoky and flavorful Indian dish made with roasted eggplant, onions, and spices.",
    ingredients: ["Eggplant", "Onions", "Tomatoes", "Garlic", "Spices"],
    steps: [
      "Roast the eggplant on an open flame until charred.",
      "Peel the skin and mash the roasted eggplant.",
      "Sauté onions, garlic, and tomatoes with spices.",
      "Mix in the mashed eggplant and cook for 5 minutes.",
      "Serve hot with roti or rice.",
    ],
  },
  {
    id: 16,
    name: "Tandoori Roti",
    image: tandooriRotiImg,
    description:
      "A soft and fluffy Indian bread traditionally cooked in a tandoor oven.",
    ingredients: ["Wheat Flour", "Yogurt", "Salt", "Water"],
    steps: [
      "Knead the dough with flour, yogurt, salt, and water.",
      "Roll out small portions of the dough into circles.",
      "Cook on a hot griddle or oven until puffed and golden.",
      "Brush with butter and serve hot.",
    ],
  },
];

const LunchRecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div className="container mt-5">
      <Card className="shadow-lg">
        <Card.Img
          variant="top"
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image" // Add this class
        />
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
          <Button variant="primary" className="mt-3" href="/recipes/lunch">
            Back to Lunch Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LunchRecipeDetails;