import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "./Components/Navbar";
import AdminNavbar from "./Components/AdminNavbar";
import LoginSignup from "./Pages/LoginSignup";
import Home from "./Pages/Home";
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
import BiryaniRecipesPage from "./Recipies/BiryaniRecipesPage";
import NonVegRecipesPage from "./Recipies/NonVegRecipesPage";
import VegRecipesPage from "./Recipies/VegRecipesPage";
import SaladsPage from "./Recipies/SaladsPage";
import HighproteinPage from "./Recipies/HighproteinPage";
import SmoothiesPage from "./Recipies/SmoothiesPage";
import ThanksgivingPage from "./Recipies/ThanksgivingPage";
import FamilyPartyRecipesPage from "./Recipies/FamilyPartyRecipesPage";
import FestiveRecipePage from "./Recipies/FestiveRecipePage";
import SuperfoodsRecipesPage from "./Recipies/SuperfoodsRecipesPage";
import HighenergyPage from "./Recipies/HighenergyPage";
import BrainboostPage from "./Recipies/BrainboostPage";
import AdminPage from "./Pages/AdminPage";
import AdminHomePage from "./Pages/AdminHomePage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ConfirmationPage from "./Pages/ConfirmationPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import HomePage from "./Pages/HomePage";
import FloatingCartButton from "./Components/FloatingCartButton";
import ManageUsersPage from "./Pages/ManageUsersPage";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";
import Suggestions from "./Pages/Suggestions";

// Load Stripe for Payment
const stripePromise = loadStripe("pk_test_51QQav9BpwYU6d9vY9KuwFyPMadLCTGnAlXZDaSXbfljBVARAtBpx3k5QavQvYRAEiZlOLUQkMxGqJmd3jdWOsWdx00uyIFTUwl");

const App = () => {
  const location = useLocation();

  // Routes where the AdminNavbar should be displayed
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Routes where the Customer Navbar should not be displayed
  const hideCustomerNavbarRoutes = ["/"];

  const hideFooterRoutes = ["/cart"]; // Add the paths where footer should be hidden

  return (
    <>
      {/* Conditionally render AdminNavbar or Customer Navbar */}
      {isAdminRoute ? (
        <AdminNavbar />
      ) : (
        !hideCustomerNavbarRoutes.includes(location.pathname) && <Navbar />
      )}

      {/* Chatbot - Floating Widget */}
      <Chatbot />

      {/* Conditionally render the Floating Cart Button */}
      {location.pathname === "/courses" && <FloatingCartButton />}

      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginSignup />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageUsersPage />
            </ProtectedRoute>
          }
        />

        {/* Customer Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Elements stripe={stripePromise}>
                <CheckoutPage />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirmation"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <ConfirmationPage />
            </ProtectedRoute>
          }
        />

        {/* Recipe and Food Pages (Customer Only) */}
        <Route
          path="/recipes/breakfast"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Breakfast />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/lunch"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Lunch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lunchrecipe/:id"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <LunchRecipeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/dinner"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Dinner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/dinner/:id"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <DinnerRecipeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cuisine/italian"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Italian />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/italian/:id"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <ItalianRecipeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cuisine/indian"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Indian />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/indian/:id"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <IndianRecipeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cuisine/mexican"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Mexican />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/mexican/:id"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <MexicanRecipeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/popular/biryani-recipes"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <BiryaniRecipesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/popular/non-veg-recipes"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <NonVegRecipesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/popular/veg-recipes"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <VegRecipesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/healthy/salads"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <SaladsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/healthy/highprotein"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <HighproteinPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/healthy/smoothies"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <SmoothiesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/superfood/superfoods"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <SuperfoodsRecipesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/superfood/highenergy"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <HighenergyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/superfood/brainboost"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <BrainboostPage />
            </ProtectedRoute>
          }
        />

        {/* Recipe Details Page */}
        <Route
          path="/recipe/:id"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <RecipeDetailsPage />
            </ProtectedRoute>
          }
        />

        {/* Seasonal/Holiday Recipes */}
        <Route
          path="/holiday/thanksgiving"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <ThanksgivingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/holiday/familyparty"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <FamilyPartyRecipesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/holiday/festive"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <FestiveRecipePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute allowedRoles={["customer", "admin"]}>
              <Chatbot />
            </ProtectedRoute>
          }
        />
        <Route path="/courses" element={<HomePage />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirmation"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <ConfirmationPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
