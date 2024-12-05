import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Mexican.css";
 
 
import tacoImage from "../Assets/Taco.jpg";
import burritoImage from "../Assets/Burrito.jpg";
import enchiladasImage from "../Assets/Enchiladas.jpg";
import guacamoleImage from "../Assets/Guacamole.jpg";
import quesadillaImage from "../Assets/Quesadilla.jpg";
import churrosImage from "../Assets/Churros.jpg";
import tamalesImage from "../Assets/Tamales.jpg";
import pozoleImage from "../Assets/Pozole.jpg";
import fajitasImage from "../Assets/Fajitas.jpg";
 
const mexicanRecipes = [
  { id: 1, name: "Tacos", image: tacoImage, description: "Delicious soft-shell tacos with a variety of fillings." },
  { id: 2, name: "Burritos", image: burritoImage, description: "Stuffed burritos with beans, rice, and your choice of meat." },
  { id: 3, name: "Enchiladas", image: enchiladasImage, description: "Corn tortillas rolled around a filling and covered with sauce." },
  { id: 4, name: "Guacamole", image: guacamoleImage, description: "Fresh avocado dip with lime, cilantro, and onions." },
  { id: 5, name: "Quesadillas", image: quesadillaImage, description: "Grilled tortillas filled with melted cheese and toppings." },
  { id: 6, name: "Churros", image: churrosImage, description: "Sweet fried dough pastries coated in cinnamon sugar." },
  { id: 7, name: "Tamales", image: tamalesImage, description: "Steamed corn dough filled with meats or veggies." },
  { id: 8, name: "Pozole", image: pozoleImage, description: "Traditional Mexican soup with hominy and pork." },
  { id: 9, name: "Fajitas", image: fajitasImage, description: "Sizzling meat and vegetables served with warm tortillas." },
];
 
const Mexican = () => {
    const navigate = useNavigate();
 
    const handleViewRecipe = (id) => {
      navigate(`/recipes/mexican/${id}`); // Navigate to the specific recipe details
    };
 
    return (
      <div className="mexican-container">
       <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
          Mexican Cuisine
        </h1>
        <p className="lead text-muted">Dive into the vibrant and bold world of Mexican cuisine, featuring spicy, zesty, and savory dishes that bring the taste of Mexico to your table</p>
      </header>
 
        {/* Recipe Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {mexicanRecipes.map((recipe) => (
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
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => handleViewRecipe(recipe.id)}
                    >
                      View Recipe
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };
 
  export default Mexican;