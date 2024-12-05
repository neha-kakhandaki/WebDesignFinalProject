import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Adjust path if necessary
import BiryaniRecipesPage from './pages/BiryaniRecipesPage';  // Adjust path if necessary
import NonVegRecipesPage from './pages/NonVegRecipesPage';  // Adjust path if necessary
import VegRecipesPage from './pages/VegRecipesPage';  // Adjust path if necessary
import SaladsPage from './pages/SaladsPage';
import HighproteinPage from './pages/HighproteinPage';
import SmoothiesPage from './pages/SmoothiesPage';
import ThanksgivingPage from './pages/ThanksgivingPage'; 
import FamilyPartyRecipesPage from './pages/FamilyPartyRecipesPage';
import FestiveRecipePage from './pages/FestiveRecipePage';
import SuperfoodsRecipesPage from './pages/SuperfoodsRecipesPage';
import HighenergyPage from './pages/HighenergyPage';
import BrainboostPage from './pages/BrainboostPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page route */}
         {/* <Route path="/" element={<Home />} /> */}
        
        {/* Biryani Recipes page route */}
        <Route path="/biryani-recipes" element={<BiryaniRecipesPage />} />

        {/* Non-Veg Recipes page route */}
        <Route path="/non-veg-recipes" element={<NonVegRecipesPage />} />

         {/* Non-Veg Recipes page route */}
         <Route path="/veg-recipes" element={<VegRecipesPage />} />

{/* Non-Veg Recipes page route */}
<Route path="/salads" element={<SaladsPage />} />

{/* Non-Veg Recipes page route */}
<Route path="/highprotein" element={<HighproteinPage />} />

{/* Non-Veg Recipes page route */}
<Route path="/smoothies" element={<SmoothiesPage />} />

{/* Festive Recipes page route */}
<Route path="/superfoodsrecipes" element={<SuperfoodsRecipesPage/>} />

{/* high energy  Recipes page route */}
<Route path="/highenergy" element={<HighenergyPage/>} />

{/* brain boost Recipes page route */}
<Route path="/brainboost" element={<BrainboostPage/>} />


 {/* Thanksgiving Recipes page route */}
 <Route path="/thanksgiving" element={<ThanksgivingPage />} />
 {/* Family Party Recipes page route */}
 <Route path="/familyparty" element={<FamilyPartyRecipesPage />} />
 {/* Festive Recipes page route */}
 <Route path="/festiverecipes" element={<FestiveRecipePage/>} />



      </Routes>
    </Router>
  );
}

export default App;
