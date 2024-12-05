import React from 'react';
 
// Meal Data with Instructions
const meals = [
  {
    name: "Power Protein Bowl",
    image: "/images/High energy/Power Protein Bowl.jpg",
    benefits: ["High Protein", "Boosts Muscle Growth", "Rich in Iron", "Keeps You Full Longer"],
    description:
      "A delicious blend of quinoa, chickpeas, grilled chicken, and leafy greens that provides sustained energy throughout the day.",
    instructions: [
      "Cook quinoa according to package instructions.",
      "Grill chicken breast and slice into strips.",
      "Rinse chickpeas and mix them with quinoa.",
      "Toss the quinoa, chickpeas, and chicken with leafy greens and olive oil.",
      "Season with salt, pepper, and lemon juice to taste.",
      "Top with avocado slices and your favorite dressing.",
    ],
  },
  {
    name: "Super Smoothie",
    image: "/images/High energy/Super Smoothie.jpg",
    benefits: ["Rich in Antioxidants", "Boosts Immunity", "Hydrating", "Improves Focus"],
    description:
      "A nutrient-packed smoothie made with fresh fruits, oats, chia seeds, and spinach, perfect for an energy boost anytime.",
    instructions: [
      "Add all the fruits (banana, berries, spinach) to a blender.",
      "Pour in almond milk and add oats, chia seeds, and honey.",
      "Blend until smooth and creamy.",
      "Pour into a glass and garnish with extra berries or a sprinkle of oats.",
    ],
  },
  {
    name: "Spicy Power Stir-Fry",
    image: "/images/High energy/spicy stir fry.jpg",
    benefits: ["High in Fiber", "Rich in Vitamins", "Good for Digestion", "Metabolism Boosting"],
    description:
      "A zesty stir-fry with lean chicken, vegetables, and a spicy kick that helps your body stay energized and strong.",
    instructions: [
      "Slice chicken breast into thin strips and season with salt and pepper.",
      "In a pan, heat olive oil and sauté garlic and chili flakes.",
      "Add chicken and cook until browned.",
      "Add vegetables and cook for 5-7 minutes until tender.",
      "Add soy sauce, ginger, and stir-fry for another 2 minutes.",
      "Serve hot with a side of brown rice or quinoa.",
    ],
  },
  {
    name: "Energy-Packed Wrap",
    image: "/images/High energy/Energy-Packed Wrap.jpg",
    benefits: ["High in Carbs", "Sustains Energy", "Good for Post-Workout", "Delicious & Satisfying"],
    description:
      "A flavorful wrap with whole grain tortilla, turkey, avocado, and veggies that provides long-lasting energy to keep you going.",
    instructions: [
      "Lay the tortilla flat and spread a thin layer of hummus.",
      "Layer on sliced turkey breast, avocado, spinach, and bell peppers.",
      "Add a sprinkle of cheese and drizzle with a bit of olive oil or mustard.",
      "Roll up the tortilla tightly and slice in half.",
      "Serve with a side of fresh fruit or a smoothie for extra energy.",
    ],
  },
  {
    name: "Energizing Oats",
    image: "/images/High energy/Energizing Oats.jpg",
    benefits: ["Boosts Metabolism", "Great for Breakfast", "Rich in Fiber", "Keeps You Energized"],
    description:
      "A hearty bowl of oats with chia seeds, almond butter, and fruits, packed with energy-boosting nutrients to start your day.",
    instructions: [
      "Cook the oats according to package instructions.",
      "Once cooked, stir in almond butter and chia seeds.",
      "Top with fresh fruits like berries, bananas, and a sprinkle of cinnamon.",
      "Add a drizzle of honey or maple syrup for extra sweetness.",
      "Enjoy it warm as a filling and energizing breakfast!",
    ],
  },
];
 
const HighEnergyMealsPage = () => {
  return (
    <div
      style={{
        padding: "10px 20px",
        background: "linear-gradient(135deg, #f0f8ff, #f0e68c)",
        minHeight: "100vh",
        fontFamily: "'Playfair Display', serif", // Applying the Playfair Display font family
      }}
    >
      {/* Banner Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-white" style={{ backgroundColor: '#6a1b9a', padding: '20px' }}>High Energy Meals</h1>
        <p className="lead text-muted">Explore our collection of energizing recipes that are perfect for every occasion.</p>
      </header>
 
      <div className="meal-list">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="meal-item"
            style={{
              position: "relative",
              marginBottom: "30px",
              padding: "20px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transform: "scale(1)",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              display: "block", // Ensures that the meals are stacked vertically
              width: "80%", // You can adjust the width to your desired size
              maxWidth: "800px", // You can set a max-width to control layout
              marginLeft: "auto", // Centers the content horizontally
              marginRight: "auto", // Centers the content horizontally
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={meal.image}
              alt={meal.name}
              style={{
                width: "150px", // Image width reduced to 150px
                height: "150px", // Image height reduced to 150px
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "block",
                margin: "0 auto", // Center the image horizontally
              }}
            />
            <div
              style={{
                marginTop: "15px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333",
                textTransform: "uppercase",
              }}
            >
              {meal.name}
            </div>
 
            <div
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                textAlign: "center",
                color: "#555",
                maxWidth: "600px",
                marginBottom: "15px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {meal.description}
            </div>
 
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              {meal.benefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "0.9rem",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      marginRight: "5px",
                      fontSize: "1.2rem",
                      color: "#ff6347", // Red color for the bullet symbol
                    }}
                  >
                    &#8226;
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
 
            {/* Instructions Section */}
            <div style={{ marginTop: "20px", fontSize: "1.1rem", color: "#333", textAlign: "left", width: "100%" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Instructions:
              </h3>
              <ol>
                {meal.instructions.map((instruction, index) => (
                  <li key={index} style={{ marginBottom: "10px", color: "#555" }}>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default HighEnergyMealsPage;