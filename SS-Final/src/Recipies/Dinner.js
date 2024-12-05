import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dinner.css";
 
// Import images
import grilledSalmonImg from "../Assets/Grilled-Salmon.jpg";
import steakImg from "../Assets/Steak.jpg";
import pastaPrimaveraImg from "../Assets/Pasta-Primvera.jpg";
import roastedChickenImg from "../Assets/Roested-chicken.jpg";
import veggieStirFryImg from "../Assets/Veggie-stir-fry.jpg";
import mushroomRisottoImg from "../Assets/Mushroom.jpg";
import lambChopsImg from "../Assets/LambChops.jpg";
import tofuBowlImg from "../Assets/Tofu-bowl.jpg";
import shrimpScampiImg from "../Assets/Shrimp.jpg"; // New recipe image
 
const Dinner = () => {
  const recipes = [
    {
      id: 17,
      name: "Grilled Salmon",
      image: grilledSalmonImg,
      reviews: "412 Reviews • 4.8 Average",
    },
    {
      id: 18,
      name: "Steak with Garlic Butter",
      image: steakImg,
      reviews: "524 Reviews • 4.9 Average",
    },
    {
      id: 19,
      name: "Pasta Primavera",
      image: pastaPrimaveraImg,
      reviews: "317 Reviews • 4.7 Average",
    },
    {
      id: 20,
      name: "Roasted Chicken",
      image: roastedChickenImg,
      reviews: "402 Reviews • 4.8 Average",
    },
    {
      id: 21,
      name: "Veggie Stir Fry",
      image: veggieStirFryImg,
      reviews: "285 Reviews • 4.6 Average",
    },
    {
      id: 22,
      name: "Mushroom Risotto",
      image: mushroomRisottoImg,
      reviews: "324 Reviews • 4.8 Average",
    },
    {
      id: 23,
      name: "Lamb Chops",
      image: lambChopsImg,
      reviews: "296 Reviews • 4.7 Average",
    },
    {
      id: 24,
      name: "Tofu Buddha Bowl",
      image: tofuBowlImg,
      reviews: "259 Reviews • 4.6 Average",
    },
    {
      id: 25,
      name: "Shrimp Scampi",
      image: shrimpScampiImg,
      reviews: "345 Reviews • 4.9 Average",
    },
  ];
 
  return (
    <div className="container dinner-page">
<header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>
          Dinner
        </h1>
        <p className="lead text-muted">End Your Day with Flavorful Feasts</p>
      </header>
 
      {/* Recipe Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col">
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
                  to={`/recipes/dinner/${recipe.id}`}
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
 
export default Dinner;