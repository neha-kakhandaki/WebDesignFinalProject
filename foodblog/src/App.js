import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginSignup from "./Pages/LoginSignup";
import HomePage from "./Pages/Home";
import Breakfast from "./Recipies/Breakfast";
import Lunch from "./Recipies/Lunch";
import Dinner from "./Recipies/Dinner";
import RecipeDetailsPage from "./Recipies/RecipeDetailsPage";
import LunchRecipeDetails from "./Recipies/LunchRecipeDetails";
import DinnerRecipeDetails from "./Recipies/DinnerRecipeDetails";
import Italian from "./Recipies/Italian";
import Indian from "./Recipies/Indian";
import Mexican from "./Recipies/Mexican";
import ItalianRecipeDetails from "./Recipies/ItalianRecipeDetails";
import IndianRecipeDetails from "./Recipies/IndianRecipeDetails";
import MexicanRecipeDetails from "./Recipies/MexicanRecipeDetails";

const App = () => {
  const location = useLocation();

  // Define routes where the Navbar should not be displayed
  const hideNavbarRoutes = ["/"]; // Navbar hidden on the Login page

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginSignup />} />

        {/* Home Page */}
        <Route path="/home" element={<HomePage />} />

        {/* Breakfast, Lunch, and Dinner Pages */}
        <Route path="/recipes/breakfast" element={<Breakfast />} />
        <Route path="/recipes/lunch" element={<Lunch />} />
        <Route path="/recipes/dinner" element={<Dinner />} />

        {/* Italian Cuisine */}
        <Route path="/cuisine/italian" element={<Italian />} />
        <Route path="/cuisine/italian/:id" element={<ItalianRecipeDetails />} />

        {/* Indian Cuisine */}
        <Route path="/cuisine/indian" element={<Indian />} />
        <Route path="/recipes/indian/:id" element={<IndianRecipeDetails />} />

        <Route path="/cuisine/mexican" element={<Mexican />} />
        <Route path="/recipes/mexican/:id" element={<MexicanRecipeDetails />} />


        {/* General Recipe Details */}
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/lunchrecipe/:id" element={<LunchRecipeDetails />} />
        <Route path="/recipes/dinner/:id" element={<DinnerRecipeDetails />} />
      </Routes>
    </>
  );
};

export default App;
