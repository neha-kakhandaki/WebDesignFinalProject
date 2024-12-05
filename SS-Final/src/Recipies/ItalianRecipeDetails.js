import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItalianRecipeDetails.css";

// Importing images
import spaghettiImg from "../Assets/Spegetti.jpg";
import lasagnaImg from "../Assets/lasagna.jpg";
import margheritaPizzaImg from "../Assets/VegPizza.jpg";
import penneArrabbiataImg from "../Assets/PennePasta.jpg";
import tiramisuImg from "../Assets/Tiramisu.jpg";
import risottoMilaneseImg from "../Assets/Rissoto.jpg";
import capreseSaladImg from "../Assets/CapreseSalad.jpg";
import fettuccineAlfredoImg from "../Assets/Fettuccine Alfredo.jpg";
import bruschettaImg from "../Assets/Bruschetta.jpg";

// Recipe Data
const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: spaghettiImg,
    description: "A classic Italian pasta dish with a rich meat sauce.",
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Onion",
      "Garlic",
      "Tomato paste",
      "Crushed tomatoes",
      "Olive oil",
      "Salt and pepper",
      "Basil",
    ],
    steps: [
      "Cook spaghetti according to package instructions.",
      "Sauté onion and garlic in olive oil.",
      "Add ground beef and cook until browned.",
      "Stir in tomato paste and crushed tomatoes.",
      "Simmer until the sauce thickens.",
      "Serve over cooked spaghetti, garnished with basil.",
    ],
  },
  {
    id: 2,
    name: "Lasagna",
    image: lasagnaImg,
    description:
      "Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to perfection.",
    ingredients: [
      "Lasagna sheets",
      "Ground beef",
      "Marinara sauce",
      "Ricotta cheese",
      "Mozzarella cheese",
      "Parmesan cheese",
      "Garlic",
      "Basil",
    ],
    steps: [
      "Cook lasagna sheets until al dente.",
      "Prepare the meat sauce by cooking ground beef and adding marinara sauce.",
      "Layer lasagna sheets, meat sauce, and cheeses in a baking dish.",
      "Repeat layers and top with mozzarella and Parmesan.",
      "Bake at 375°F (190°C) for 25–30 minutes until bubbly and golden.",
    ],
  },
  {
    id: 3,
    name: "Margherita Pizza",
    image: margheritaPizzaImg,
    description:
      "A simple and delicious pizza with fresh mozzarella, basil leaves, and classic tomato sauce.",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough and spread tomato sauce evenly.",
      "Add slices of mozzarella and basil leaves.",
      "Drizzle with olive oil.",
      "Bake for 10–12 minutes until crust is golden and cheese is melted.",
    ],
  },
  {
    id: 4,
    name: "Penne Arrabbiata",
    image: penneArrabbiataImg,
    description: "Spicy tomato pasta with garlic, chili, and olive oil.",
    ingredients: [
      "Penne pasta",
      "Tomato sauce",
      "Garlic",
      "Red chili flakes",
      "Olive oil",
      "Parsley",
      "Salt and pepper",
    ],
    steps: [
      "Cook penne pasta until al dente.",
      "Heat olive oil in a pan and sauté garlic and chili flakes.",
      "Add tomato sauce and simmer for a few minutes.",
      "Toss cooked pasta in the sauce.",
      "Garnish with parsley and serve hot.",
    ],
  },
  {
    id: 5,
    name: "Tiramisu",
    image: tiramisuImg,
    description:
      "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
    ingredients: [
      "Ladyfingers",
      "Mascarpone cheese",
      "Egg yolks",
      "Sugar",
      "Espresso coffee",
      "Cocoa powder",
    ],
    steps: [
      "Whisk egg yolks and sugar until pale and creamy.",
      "Fold in mascarpone cheese to create a smooth mixture.",
      "Dip ladyfingers in espresso coffee and layer them in a dish.",
      "Spread the mascarpone mixture over the layer.",
      "Repeat layers and dust with cocoa powder.",
      "Chill in the fridge for 4 hours before serving.",
    ],
  },
  {
    id: 6,
    name: "Risotto Milanese",
    image: risottoMilaneseImg,
    description: "Creamy risotto flavored with saffron and Parmesan cheese.",
    ingredients: [
      "Arborio rice",
      "Chicken broth",
      "Saffron",
      "Onion",
      "Butter",
      "Parmesan cheese",
      "White wine",
    ],
    steps: [
      "Sauté onion in butter until translucent.",
      "Add Arborio rice and toast for a minute.",
      "Deglaze with white wine and let it evaporate.",
      "Gradually add chicken broth while stirring.",
      "Add saffron and cook until the rice is creamy.",
      "Stir in Parmesan cheese and serve.",
    ],
  },
  {
    id: 7,
    name: "Caprese Salad",
    image: capreseSaladImg,
    description:
      "A refreshing salad with fresh mozzarella, tomatoes, and basil leaves.",
    ingredients: [
      "Fresh mozzarella cheese",
      "Tomatoes",
      "Basil leaves",
      "Olive oil",
      "Salt and pepper",
    ],
    steps: [
      "Slice mozzarella cheese and tomatoes.",
      "Arrange them on a plate alternately.",
      "Sprinkle with salt and pepper.",
      "Drizzle with olive oil and garnish with basil leaves.",
    ],
  },
  {
    id: 8,
    name: "Fettuccine Alfredo",
    image: fettuccineAlfredoImg,
    description:
      "Creamy and indulgent pasta dish made with fettuccine, butter, and Parmesan cheese.",
    ingredients: [
      "Fettuccine pasta",
      "Butter",
      "Heavy cream",
      "Parmesan cheese",
      "Garlic",
      "Salt and pepper",
    ],
    steps: [
      "Cook fettuccine pasta until al dente.",
      "Melt butter in a pan and add minced garlic.",
      "Pour in heavy cream and simmer.",
      "Add grated Parmesan cheese and stir until creamy.",
      "Toss the pasta in the sauce and serve.",
    ],
  },
  {
    id: 9,
    name: "Bruschetta",
    image: bruschettaImg,
    description:
      "Crispy toasted bread topped with fresh tomatoes, garlic, and olive oil.",
    ingredients: [
      "Baguette",
      "Tomatoes",
      "Garlic",
      "Olive oil",
      "Basil",
      "Salt and pepper",
    ],
    steps: [
      "Slice baguette and toast until golden.",
      "Dice tomatoes and mix with minced garlic, olive oil, and basil.",
      "Season with salt and pepper.",
      "Top the toasted bread with the tomato mixture.",
      "Serve immediately.",
    ],
  },
];

const ItalianRecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === parseInt(id)); // Find recipe by ID

  if (!recipe) {
    return <p className="text-center mt-5">Recipe not found!</p>; // Handle missing recipe
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
          <Card.Title className="text-center">{recipe.name}</Card.Title>
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
          <Button
            variant="primary"
            className="mt-3 w-100"
            onClick={() => navigate("/cuisine/italian")}
          >
            Back to Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItalianRecipeDetails;
