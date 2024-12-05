import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Lunch.css";
 
// Import images
import vegetablePulaoImg from "../Assets/Veg-pulav.jpg";

import palakPaneerImg from "../Assets/Palak-Paneer.jpg";
import margheritaPizzaImg from "../Assets/Margirita-pizza.jpg";
import masoorDalImg from "../Assets/Masoor-dal.jpg";

import bainganBhartaImg from "../Assets/Bharta.jpg";
import tandooriRotiImg from "../Assets/Tandori-roti.jpg";
 
const Lunch = () => {
  const recipes = [
    {
      id: 9,
      name: "Vegetable Pulao",
      image: vegetablePulaoImg,
      reviews: "312 Reviews • 4.7 Average",
    },
    {
      id: 11,
      name: "Palak Paneer",
      image: palakPaneerImg,
      reviews: "483 Reviews • 4.9 Average",
    },
    {
      id: 12,
      name: "Margherita Pizza",
      image: margheritaPizzaImg,
      reviews: "542 Reviews • 4.9 Average",
    },
    {
      id: 13,
      name: "Masoor Dal",
      image: masoorDalImg,
      reviews: "259 Reviews • 4.6 Average",
    },
    {
      id: 15,
      name: "Baingan Bharta",
      image: bainganBhartaImg,
      reviews: "324 Reviews • 4.8 Average",
    },
    {
      id: 16,
      name: "Tandoori Roti",
      image: tandooriRotiImg,
      reviews: "290 Reviews • 4.7 Average",
    },
  ];
 
  return (
    <div className="container lunch-page">
<header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
         Lunch
        </h1>
        <p className="lead text-muted">Midday Meals That Satisfy</p>
      </header>
 
      {/* Recipe Grid */}
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{recipe.name}</h5>
                <p className="card-text text-center text-muted">
                  {recipe.reviews}
                </p>
                <Link
                  to={`/lunchrecipe/${recipe.id}`}
                  className="btn btn-primary mt-auto"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Lunch;
 