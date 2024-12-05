import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Italian.css";
 
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
const italianRecipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: spaghettiImg,
    description: "A classic Italian pasta dish with a rich meat sauce.",
  },
  {
    id: 2,
    name: "Lasagna",
    image: lasagnaImg,
    description:
      "Layers of pasta, rich meat sauce, and creamy béchamel, baked to perfection.",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    image: margheritaPizzaImg,
    description:
      "A simple yet delicious pizza with fresh mozzarella, basil, and tomato sauce.",
  },
  {
    id: 4,
    name: "Penne Arrabbiata",
    image: penneArrabbiataImg,
    description: "Spicy tomato pasta with garlic, chili, and olive oil.",
  },
  {
    id: 5,
    name: "Tiramisu",
    image: tiramisuImg,
    description:
      "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
  },
  {
    id: 6,
    name: "Risotto Milanese",
    image: risottoMilaneseImg,
    description: "Creamy risotto flavored with saffron and Parmesan cheese.",
  },
  {
    id: 7,
    name: "Caprese Salad",
    image: capreseSaladImg,
    description:
      "A refreshing salad with fresh mozzarella, tomatoes, and basil leaves.",
  },
  {
    id: 8,
    name: "Fettuccine Alfredo",
    image: fettuccineAlfredoImg,
    description:
      "Creamy and indulgent pasta dish made with fettuccine, butter, and Parmesan cheese.",
  },
  {
    id: 9,
    name: "Bruschetta",
    image: bruschettaImg,
    description:
      "Crispy toasted bread topped with fresh tomatoes, garlic, and olive oil.",
  },
];
 
const Italian = () => {
  const navigate = useNavigate(); // Hook for navigation
 
  const handleViewRecipe = (id) => {
    navigate(`/recipes/italian/${id}`); // Redirect to recipe details with recipe ID
  };
 
  return (
    <div className="container mt-5">
<header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
          Italian
        </h1>
        <p className="lead text-muted">Savor the Flavors of Italy</p>
      </header>
 
      {/* Recipe Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        {italianRecipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            <Card className="h-100 shadow-sm">
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
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => handleViewRecipe(recipe.id)} // Redirect to details page
                >
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Italian;