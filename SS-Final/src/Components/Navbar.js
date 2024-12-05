import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Spoonful Stories</div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Menu */}
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <div className="dropdown" onClick={() => handleDropdownToggle("recipes")}>
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
          </div>
        </li>
        <li>
          <div className="dropdown" onClick={() => handleDropdownToggle("cuisine")}>
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
                  <Link to="/cuisine/mexican">Mexican</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown" onClick={() => handleDropdownToggle("popular")}>
            Popular
            {activeDropdown === "popular" && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/popular/biryani-recipes">Biryani Recipes</Link>
                </li>
                <li>
                  <Link to="/popular/non-veg-recipes">Non-Vegetarian Recipes</Link>
                </li>
                <li>
                  <Link to="/popular/veg-recipes">Vegetarian Recipes</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown" onClick={() => handleDropdownToggle("healthy")}>
            Healthy & Diet
            {activeDropdown === "healthy" && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/healthy/salads">Salads</Link>
                </li>
                <li>
                  <Link to="/healthy/highprotein">High-Protein Recipes</Link>
                </li>
                <li>
                  <Link to="/healthy/smoothies">Smoothies</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown" onClick={() => handleDropdownToggle("holiday")}>
            Holiday Menu
            {activeDropdown === "holiday" && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/holiday/festive">Festive Recipes</Link>
                </li>
                <li>
                  <Link to="/holiday/familyparty">Family Party Recipes</Link>
                </li>
                <li>
                  <Link to="/holiday/thanksgiving">Thanksgiving Recipes</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown" onClick={() => handleDropdownToggle("superfoods")}>
            Superfoods & Nutrition
            {activeDropdown === "superfoods" && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/superfood/superfoods">SuperFoods Recipes</Link>
                </li>
                <li>
                  <Link to="/superfood/highenergy">High-Energy Meals</Link>
                </li>
                <li>
                  <Link to="/superfood/brainboost">Brain-Boosting Foods</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="btn btn-logout"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
