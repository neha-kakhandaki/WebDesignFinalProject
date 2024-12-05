import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="/Assets/logo.jpg" alt="Spoonful Stories Logo" />
        <span>Spoonful Stories</span>
      </div>

      {/* Menu Section */}
      <ul className="menu">
        {/* Recipes Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("recipes")}
          onMouseLeave={handleMouseLeave}
        >
          Recipes
          {activeDropdown === "recipes" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/recipes/breakfast">Breakfast & Brunch</Link>
              </li>
              <li>
                <Link to="/recipes/lunch">Lunch</Link>
              </li>
              <li>
                <Link to="/recipes/dinner">Dinner</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Cuisine Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("cuisine")}
          onMouseLeave={handleMouseLeave}
        >
          Cuisine
          {activeDropdown === "cuisine" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/cuisine/italian">Italian</Link>
              </li>
              <li>
                <Link to="/cuisine/indian">Indian</Link>
             </li>
              <li>
                <Link to="/cuisine/Mexican">Mexican</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Seasonal Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("seasonal")}
          onMouseLeave={handleMouseLeave}
        >
          Seasonal
          {activeDropdown === "seasonal" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/seasonal/summer">Summer Recipes</Link>
              </li>
              <li>
                <Link to="/seasonal/winter">Winter Recipes</Link>
              </li>
              <li>
                <Link to="/seasonal/spring">Spring Recipes</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Popular Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("popular")}
          onMouseLeave={handleMouseLeave}
        >
          Popular
          {activeDropdown === "popular" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/popular/trending">Trending Recipes</Link>
              </li>
              <li>
                <Link to="/popular/top-rated">Top Rated</Link>
              </li>
              <li>
                <Link to="/popular/editors-picks">Editor's Picks</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Healthy & Diet Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("healthy")}
          onMouseLeave={handleMouseLeave}
        >
          Healthy & Diet
          {activeDropdown === "healthy" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/healthy/low-carb">Low Carb</Link>
              </li>
              <li>
                <Link to="/healthy/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/healthy/gluten-free">Gluten-Free</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Meat & Seafood Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("meat")}
          onMouseLeave={handleMouseLeave}
        >
          Meat & Seafood
          {activeDropdown === "meat" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/meat/chicken">Chicken</Link>
              </li>
              <li>
                <Link to="/meat/beef">Beef</Link>
              </li>
              <li>
                <Link to="/meat/seafood">Seafood Specials</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Holiday Menu Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("holiday")}
          onMouseLeave={handleMouseLeave}
        >
          Holiday Menu
          {activeDropdown === "holiday" && (
            <ul className="dropdown-content">
              <li>
                <Link to="/holiday/christmas">Christmas</Link>
              </li>
              <li>
                <Link to="/holiday/thanksgiving">Thanksgiving</Link>
              </li>
              <li>
                <Link to="/holiday/easter">Easter</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
