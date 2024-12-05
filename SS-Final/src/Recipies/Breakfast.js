import React from "react";
import { Link } from "react-router-dom";
import "./Breakfast.css";
import pancakesImg from "../Assets/Pancake.jpg";
import avocadoToastImg from "../Assets/Avocado-toast.jpg";
import omeletteImg from "../Assets/Omelet.jpg";
import wafflesImg from "../Assets/waffle.jpg";
import smoothieImg from "../Assets/Smoothi.jpg";
import bagelImg from "../Assets/Bagel.jpg";
import crepeImg from "../Assets/Creap.jpg";
import granolaImg from "../Assets/Granola.jpg";
 
const Breakfast = () => {
  const recipes = [
    {
      id: 1,
      name: "Fluffy Pancakes",
      image: pancakesImg,
      reviews: "737 Reviews • 4.9 Average",
    },
    {
      id: 2,
      name: "Avocado Toast",
      image: avocadoToastImg,
      reviews: "137 Reviews • 4.9 Average",
    },
    {
      id: 3,
      name: "French Omelette",
      image: omeletteImg,
      reviews: "503 Reviews • 4.8 Average",
    },
    {
      id: 4,
      name: "Crispy Waffles",
      image: wafflesImg,
      reviews: "342 Reviews • 4.7 Average",
    },
    {
      id: 5,
      name: "Berry Smoothie Bowl",
      image: smoothieImg,
      reviews: "281 Reviews • 4.6 Average",
    },
    {
      id: 6,
      name: "Bagel with Cream Cheese",
      image: bagelImg,
      reviews: "198 Reviews • 4.5 Average",
    },
    {
      id: 7,
      name: "Classic Crepes",
      image: crepeImg,
      reviews: "305 Reviews • 4.8 Average",
    },
    {
      id: 8,
      name: "Homemade Granola",
      image: granolaImg,
      reviews: "220 Reviews • 4.6 Average",
    },
  ];
 
  return (
    <div className="breakfast-page">
    <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
          Breakfast and Brunch
        </h1>
        <p className="lead text-muted">Explore a variety of energizing breakfast recipes to start your day on a positive note
        </p>
      </header>
 
      {/* Recipe Grid */}
      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <div className="recipe-info">
              <p className="recipe-reviews">{recipe.reviews}</p>
              <h3 className="recipe-name">{recipe.name}</h3>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe-button">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
 
export default Breakfast;