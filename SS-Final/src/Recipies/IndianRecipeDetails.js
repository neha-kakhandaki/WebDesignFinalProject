import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IndianRecipeDetails.css";

// Importing images
import biryaniImg from "../Assets/Biryani.jpg";
import butterChickenImg from "../Assets/ButterChiken.jpg";
import samosaImg from "../Assets/Samosa.jpg";
import dalTadkaImg from "../Assets/DalTadka.jpg";
import roganJoshImg from "../Assets/RoganJosh.jpg";
import paneerTikkaImg from "../Assets/PaneerTikka.jpg";
import alooParathaImg from "../Assets/AlooParatha.jpg";
import choleImg from "../Assets/Chole.jpg";
import gulabJamunImg from "../Assets/GulabJam.jpg";

// Recipe details data
const indianRecipes = [
  {
    id: 1,
    name: "Biryani",
    image: biryaniImg,
    description: "Aromatic rice dish cooked with meat or vegetables and spices.",
    ingredients: [
      "Basmati rice",
      "Chicken or vegetables",
      "Yogurt",
      "Fried onions",
      "Spices (cardamom, cloves, cinnamon)",
    ],
    steps: [
      "Cook rice with aromatic spices.",
      "Prepare the meat or vegetable curry.",
      "Layer the rice and curry in a pot.",
      "Seal and cook on low heat.",
      "Garnish with fried onions and serve.",
    ],
  },
  {
    id: 2,
    name: "Butter Chicken",
    image: butterChickenImg,
    description: "Rich and creamy chicken curry made with butter and tomatoes.",
    ingredients: [
      "Chicken",
      "Tomatoes",
      "Butter",
      "Cream",
      "Spices (garam masala, turmeric, red chili powder)",
    ],
    steps: [
      "Marinate the chicken with spices.",
      "Prepare the tomato-based curry.",
      "Cook the chicken in the curry sauce.",
      "Add cream and simmer until rich and creamy.",
      "Serve with naan or rice.",
    ],
  },
  {
    id: 3,
    name: "Samosa",
    image: samosaImg,
    description: "Deep-fried pastry filled with spiced potatoes and peas.",
    ingredients: [
      "Flour",
      "Potatoes",
      "Peas",
      "Spices (cumin, coriander, garam masala)",
      "Oil",
    ],
    steps: [
      "Prepare the dough for the pastry.",
      "Cook the spiced potato filling.",
      "Shape and fill the samosas.",
      "Deep fry until golden and crispy.",
      "Serve with chutney.",
    ],
  },
  {
    id: 4,
    name: "Dal Tadka",
    image: dalTadkaImg,
    description: "Lentils cooked with tempering of spices and ghee.",
    ingredients: [
      "Yellow lentils (toor dal)",
      "Ghee",
      "Onions",
      "Tomatoes",
      "Spices (mustard seeds, cumin, turmeric)",
    ],
    steps: [
      "Cook lentils until soft.",
      "Prepare the tempering with spices in ghee.",
      "Mix the tempering into the cooked lentils.",
      "Simmer for a few minutes.",
      "Serve with rice or chapati.",
    ],
  },
  {
    id: 5,
    name: "Rogan Josh",
    image: roganJoshImg,
    description: "Slow-cooked lamb curry with a rich and flavorful gravy.",
    ingredients: [
      "Lamb",
      "Yogurt",
      "Onions",
      "Ginger-garlic paste",
      "Kashmiri chili powder",
      "Spices (cinnamon, cloves, cardamom)",
    ],
    steps: [
      "Marinate the lamb with spices.",
      "Sauté onions and spices in oil.",
      "Add lamb and cook until tender.",
      "Simmer with yogurt and spices.",
      "Serve with rice or naan.",
    ],
  },
  {
    id: 6,
    name: "Paneer Tikka",
    image: paneerTikkaImg,
    description: "Spiced and grilled paneer cubes served with mint chutney.",
    ingredients: [
      "Paneer",
      "Yogurt",
      "Ginger-garlic paste",
      "Spices (turmeric, red chili powder, garam masala)",
      "Capsicum",
      "Onion",
    ],
    steps: [
      "Marinate paneer and vegetables with spiced yogurt.",
      "Skewer the marinated ingredients.",
      "Grill or bake until golden.",
      "Serve hot with mint chutney.",
    ],
  },
  {
    id: 7,
    name: "Aloo Paratha",
    image: alooParathaImg,
    description: "Stuffed Indian flatbread filled with spiced potatoes.",
    ingredients: [
      "Wheat flour",
      "Potatoes",
      "Onions",
      "Green chilies",
      "Spices (cumin, coriander, garam masala)",
    ],
    steps: [
      "Prepare the dough for the paratha.",
      "Cook the spiced potato filling.",
      "Roll out the dough and fill with the potato mixture.",
      "Cook on a hot griddle with ghee until golden.",
      "Serve hot with yogurt or pickle.",
    ],
  },
  {
    id: 8,
    name: "Chole",
    image: choleImg,
    description: "Chickpea curry made with a blend of spices.",
    ingredients: [
      "Chickpeas",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Spices (cumin, coriander, garam masala)",
    ],
    steps: [
      "Soak and cook chickpeas until tender.",
      "Prepare the tomato-based curry.",
      "Add cooked chickpeas and simmer.",
      "Garnish with cilantro and serve.",
    ],
  },
  {
    id: 9,
    name: "Gulab Jamun",
    image: gulabJamunImg,
    description: "Soft milk dumplings soaked in sugar syrup.",
    ingredients: [
      "Milk powder",
      "Flour",
      "Sugar",
      "Cardamom",
      "Ghee",
      "Milk",
    ],
    steps: [
      "Prepare the dough with milk powder and flour.",
      "Shape into small balls and deep fry.",
      "Soak the fried balls in sugar syrup.",
      "Serve warm or chilled.",
    ],
  },
];

const IndianRecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = indianRecipes.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-5">Recipe not found!</p>;
  }

  return (
    <div className="container mt-5">
      <Card className="shadow-lg">
        <Card.Img
          variant="top"
          src={recipe.image}
          alt={recipe.name}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title className="text-center text-purple">
            {recipe.name}
          </Card.Title>
          <Card.Text className="text-muted text-center">
            {recipe.description}
          </Card.Text>
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
          <Button
            variant="primary"
            className="mt-3 w-100"
            onClick={() => navigate("/cuisine/indian")}
          >
            Back to Indian Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IndianRecipeDetails;