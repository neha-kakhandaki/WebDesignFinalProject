import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Indian.css';
 
 
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
 
const indianRecipes = [
  { id: 1, name: "Biryani", image: biryaniImg, description: "Aromatic rice dish cooked with spices, meat, and vegetables." },
  { id: 2, name: "Butter Chicken", image: butterChickenImg, description: "Rich and creamy chicken curry made with butter and tomatoes." },
  { id: 3, name: "Samosa", image: samosaImg, description: "Crispy pastry filled with spiced potatoes and peas." },
  { id: 4, name: "Dal Tadka", image: dalTadkaImg, description: "Lentils cooked with tempering of spices and ghee." },
  { id: 5, name: "Rogan Josh", image: roganJoshImg, description: "Fragrant curry with tender lamb and aromatic spices." },
  { id: 6, name: "Paneer Tikka", image: paneerTikkaImg, description: "Marinated paneer cubes grilled to perfection." },
  { id: 7, name: "Aloo Paratha", image: alooParathaImg, description: "Stuffed Indian flatbread filled with spiced potatoes." },
  { id: 8, name: "Chole", image: choleImg, description: "Chickpea curry made with a blend of spices." },
  { id: 9, name: "Gulab Jamun", image: gulabJamunImg, description: "Soft milk dumplings soaked in sugar syrup." },
];
 
const Indian = () => {
    const navigate = useNavigate();
 
    const handleViewRecipe = (id) => {
      navigate(`/recipes/indian/${id}`); // Navigate to the recipe details page
    };
 
    return (
      <div className="container mt-5">
        <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
          Indian Cuisine
        </h1>
        <p className="lead text-muted">A Journey Through the Rich Flavors of India</p>
      </header>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {indianRecipes.map((recipe) => (
            <div className="col" key={recipe.id}>
              <Card className="h-100">
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
                  <Card.Text className="text-center text-muted">
                    {recipe.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="d-block mx-auto"
                    onClick={() => handleViewRecipe(recipe.id)}
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
 
  export default Indian;