import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Lunch.css";

// Import images
import vegetablePulaoImg from "../Assets/Veg-pulav.jpg";
import grilledChickenSaladImg from "../Assets/Grilled-Chicken-Salad.jpg";
import palakPaneerImg from "../Assets/Palak-Paneer.jpg";
import margheritaPizzaImg from "../Assets/Margirita-pizza.jpg";
import masoorDalImg from "../Assets/Masoor-dal.jpg";
import quinoaBowlImg from "../Assets/Quinova-bowl.jpg";
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
      id: 10,
      name: "Grilled Chicken Salad",
      image: grilledChickenSaladImg,
      reviews: "423 Reviews • 4.8 Average",
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
      id: 14,
      name: "Quinoa Buddha Bowl",
      image: quinoaBowlImg,
      reviews: "347 Reviews • 4.8 Average",
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
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Lunch
          </li>
        </ol>
      </nav>

      {/* Page Title with Updated Styling */}
      <div className="header-section">
        <h1>Mixed Lunch Recipes</h1>
        <p>
          A curated collection of healthy and tasty lunch recipes from Indian
          and global cuisines. Perfect for a wholesome and fulfilling meal!
        </p>
      </div>

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
