import React from 'react';

const ChickenRecipesPage = () => {
  const recipes = [
    {
      id: 1,
      title: "Spicy Grilled Chicken",
      description: "A fiery grilled chicken recipe with a spicy kick!",
      image: "https://example.com/images/spicy-grilled-chicken.jpg",
    },
    {
      id: 2,
      title: "Chicken Alfredo Pasta",
      description: "A creamy, delicious pasta dish with tender chicken.",
      image: "https://example.com/images/chicken-alfredo.jpg",
    },
    {
      id: 3,
      title: "Chicken Curry",
      description: "A rich and flavorful chicken curry with aromatic spices.",
      image: "https://example.com/images/chicken-curry.jpg",
    },
    {
      id: 4,
      title: "Lemon Herb Roast Chicken",
      description: "A zesty and fresh roasted chicken, perfect for family dinners.",
      image: "https://example.com/images/lemon-herb-roast-chicken.jpg",
    },
  ];

  return (
    <div className="recipes-container">
      <h1 className="page-title">Delicious Chicken Recipes</h1>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-details">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
            <div className="recipe-hover-overlay">
              <p>Click to Learn More!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChickenRecipesPage;
