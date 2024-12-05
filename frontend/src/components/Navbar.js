import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State for dropdown menus
  const [recipesDropdown, setRecipesDropdown] = useState(false);
  const [cuisineDropdown, setCuisineDropdown] = useState(false);
  const [seasonalDropdown, setSeasonalDropdown] = useState(false);
  const [popularDropdown, setPopularDropdown] = useState(false);
  const [healthyDietDropdown, setHealthyDietDropdown] = useState(false);
  const [superfoodsDropdown, setSuperfoodsDropdown] = useState(false)
  const [holidayMenuDropdown, setHolidayMenuDropdown] = useState(false);

  // Toggle functions for dropdown menus
  const toggleDropdown = (dropdown) => {
    if (dropdown === 'recipes') setRecipesDropdown(!recipesDropdown);
    if (dropdown === 'cuisine') setCuisineDropdown(!cuisineDropdown);
    if (dropdown === 'seasonal') setSeasonalDropdown(!seasonalDropdown);
    if (dropdown === 'popular') setPopularDropdown(!popularDropdown);
    if (dropdown === 'healthyDiet') setHealthyDietDropdown(!healthyDietDropdown);
    if (dropdown === 'superfoods') setSuperfoodsDropdown(!superfoodsDropdown);
    if (dropdown === 'holidayMenu') setHolidayMenuDropdown(!holidayMenuDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="Assets/Spoon logo.jpg" width="200px" height="50px" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* Recipes Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={recipesDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('recipes')}
              >
                Recipes
              </a>
              <ul className={`dropdown-menu ${recipesDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="#">Breakfast & Brunch Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Lunch Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Appetizers & Snacks Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Dinner Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Dessert Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Baking Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Cooker Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Air Fryer Recipes</Link></li>
                <li><hr className="dropdown-divider" />
                </li>
                <li><Link className="dropdown-item" to="#">See More</Link></li>
              </ul>
            </li>
            {/* Cuisine Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={cuisineDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('cuisine')}
              >
                Cuisine
              </a>
              <ul className={`dropdown-menu ${cuisineDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="#">Indian Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Mexican Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Italian Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Thai Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Korean Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">French Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Japanese Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Chinese Recipes</Link></li>
                <li><hr className="dropdown-divider" />
                </li>
                <li><Link className="dropdown-item" to="#">More Cuisines</Link></li>
              </ul>
            </li>
            {/* Seasonal Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={seasonalDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('seasonal')}
              >
                Seasonal
              </a>
              <ul className={`dropdown-menu ${seasonalDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="#">Spring Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Summer Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Fall Recipes</Link></li>
                <li><Link className="dropdown-item" to="#">Winter Recipes</Link></li>
                <li><hr className="dropdown-divider" />
                </li>
                <li><Link className="dropdown-item" to="#">See More</Link></li>
              </ul>
            </li>
            {/* Popular Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={popularDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('popular')}
              >
                Popular
              </a>
              <ul className={`dropdown-menu ${popularDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/biryani-recipes">Biryani Recipes</Link></li>
                <li><Link className="dropdown-item" to="/non-veg-recipes">Non-Vegetarian Recipes</Link></li>
                <li><Link className="dropdown-item" to="/veg-recipes">Vegetarian Recipes</Link></li>
              </ul>
            </li>
            {/* Healthy & Diet Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={healthyDietDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('healthyDiet')}
              >
                Healthy & Diet
              </a>
              <ul className={`dropdown-menu ${healthyDietDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/salads">Salads</Link></li>
                <li><Link className="dropdown-item" to="/highprotein">High-Protein Recipes</Link></li>
                <li><Link className="dropdown-item" to="smoothies">Smoothies</Link></li>
              </ul>
            </li>
             {/* Superfoods & Nutrition Dropdown (Replaced Meat & Seafood) */}
             <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={superfoodsDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('superfoods')}  // Updated to superfoods
              >
                Superfoods & Nutrition
              </a>
              <ul className={`dropdown-menu ${superfoodsDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/superfoodsrecipes">Superfoods Recipes</Link></li>
                <li><Link className="dropdown-item" to="/highenergy">High-Energy Meals</Link></li>
                <li><Link className="dropdown-item" to="/brainboost">Brain-Boosting Foods</Link></li>
              </ul>
            </li>
            {/* Holiday Menu Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={holidayMenuDropdown ? 'true' : 'false'}
                onClick={() => toggleDropdown('holidayMenu')}
              >
                Holiday Menu
              </a>
              <ul className={`dropdown-menu ${holidayMenuDropdown ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/festiverecipes">Festive Recipes</Link></li>
                <li><Link className="dropdown-item" to="/familyparty">Family Party Recipes</Link></li>
                <li><Link className="dropdown-item" to="/thanksgiving">Thanksgiving Recipes</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
