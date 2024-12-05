import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./MexicanRecipeDetails.css";

// Import images
import TacoImage from "../Assets/Taco.jpg";
import BurritoImage from "../Assets/Burrito.jpg";
import EnchiladasImage from "../Assets/Enchiladas.jpg";
import GuacamoleImage from "../Assets/Guacamole.jpg";
import QuesadillaImage from "../Assets/Quesadilla.jpg";
import ChurrosImage from "../Assets/Churros.jpg";
import TamalesImage from "../Assets/Tamales.jpg";
import PozoleImage from "../Assets/Pozole.jpg";
import FajitasImage from "../Assets/Fajitas.jpg";

// Recipe Data
const mexicanRecipes = [
  {
    id: 1,
    name: "Tacos",
    image: TacoImage,
    description: "Delicious soft-shell tacos with a variety of fillings.",
    ingredients: [
      "Tortillas (corn or flour)",
      "Ground beef or chicken",
      "Lettuce, chopped",
      "Cheese, shredded",
      "Salsa or hot sauce",
      "Guacamole (optional)",
      "Sour cream (optional)",
    ],
    steps: [
      "Cook the ground beef or chicken in a skillet until fully cooked.",
      "Warm the tortillas on a skillet or microwave.",
      "Assemble the tacos: Add meat, lettuce, cheese, and salsa to the tortilla.",
      "Optionally, add guacamole and sour cream.",
      "Serve immediately with lime wedges on the side.",
    ],
  },
  {
    id: 2,
    name: "Burritos",
    image: BurritoImage,
    description: "Stuffed burritos with beans, rice, and your choice of meat.",
    ingredients: [
      "Large flour tortillas",
      "Cooked rice",
      "Refried beans",
      "Grilled chicken or beef strips",
      "Cheddar cheese, shredded",
      "Guacamole",
      "Sour cream",
    ],
    steps: [
      "Prepare the filling by mixing cooked rice, refried beans, and grilled chicken or beef.",
      "Warm the tortillas in a skillet or microwave.",
      "Place the filling in the center of the tortilla, then add cheese, guacamole, and sour cream.",
      "Fold the sides and roll tightly to form a burrito.",
      "Optionally, grill the burrito for a crispy exterior.",
    ],
  },
  {
    id: 3,
    name: "Enchiladas",
    image: EnchiladasImage,
    description: "Corn tortillas rolled around a filling and covered with sauce.",
    ingredients: [
      "Corn tortillas",
      "Cooked shredded chicken or beef",
      "Enchilada sauce",
      "Cheddar cheese, shredded",
      "Sour cream",
      "Chopped cilantro",
    ],
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "Fill the tortillas with shredded chicken or beef, and roll tightly.",
      "Place the rolled tortillas in a baking dish, seam side down.",
      "Pour enchilada sauce over the tortillas and sprinkle with shredded cheese.",
      "Bake for 20-25 minutes until the cheese is melted and bubbly.",
      "Garnish with sour cream and chopped cilantro before serving.",
    ],
  },
  {
    id: 4,
    name: "Guacamole",
    image: GuacamoleImage,
    description: "Fresh avocado dip with lime, cilantro, and onions.",
    ingredients: [
      "2 ripe avocados",
      "1 lime, juiced",
      "1/4 cup chopped onions",
      "1/4 cup chopped cilantro",
      "Salt to taste",
      "1 diced tomato (optional)",
    ],
    steps: [
      "Scoop out the avocado flesh into a bowl.",
      "Mash the avocados with a fork or potato masher until smooth.",
      "Mix in lime juice, onions, and cilantro.",
      "Add salt to taste and diced tomato, if desired.",
      "Serve with tortilla chips or as a topping for tacos or burritos.",
    ],
  },
  {
    id: 5,
    name: "Quesadillas",
    image: QuesadillaImage,
    description: "Grilled tortillas filled with melted cheese and toppings.",
    ingredients: [
      "Flour tortillas",
      "Cheddar or mozzarella cheese, shredded",
      "Cooked chicken or vegetables (optional)",
      "Butter or oil for grilling",
      "Sour cream and salsa for serving",
    ],
    steps: [
      "Heat a skillet over medium heat and lightly grease with butter or oil.",
      "Place a tortilla on the skillet and sprinkle shredded cheese evenly.",
      "Add cooked chicken or vegetables if desired.",
      "Top with another tortilla and cook until the bottom tortilla is golden brown.",
      "Flip and cook the other side until cheese is melted.",
      "Slice into wedges and serve with sour cream and salsa.",
    ],
  },
  {
    id: 6,
    name: "Churros",
    image: ChurrosImage,
    description: "Sweet fried dough pastries coated in cinnamon sugar.",
    ingredients: [
      "1 cup water",
      "2 tbsp sugar",
      "2 tbsp butter",
      "1 cup all-purpose flour",
      "1 egg",
      "Vegetable oil for frying",
      "Cinnamon sugar for coating",
    ],
    steps: [
      "In a saucepan, combine water, sugar, and butter. Bring to a boil.",
      "Add flour and stir until the mixture forms a dough. Let it cool slightly.",
      "Mix in the egg until the dough is smooth.",
      "Transfer the dough to a piping bag with a star tip.",
      "Heat oil in a skillet and pipe strips of dough into the oil.",
      "Fry until golden brown and coat in cinnamon sugar.",
    ],
  },
  {
    id: 7,
    name: "Tamales",
    image: TamalesImage,
    description: "Steamed corn dough filled with meats or veggies.",
    ingredients: [
      "Corn husks",
      "Masa harina",
      "Chicken broth",
      "Shredded chicken or pork",
      "Salsa or mole sauce",
    ],
    steps: [
      "Soak corn husks in warm water to soften.",
      "Prepare the masa dough by mixing masa harina with chicken broth.",
      "Spread the dough onto the corn husks and add shredded chicken or pork with salsa.",
      "Fold the husks to enclose the filling and steam for 1-2 hours until firm.",
    ],
  },
  {
    id: 8,
    name: "Pozole",
    image: PozoleImage,
    description: "Traditional Mexican soup with hominy and pork.",
    ingredients: [
      "Pork shoulder, cubed",
      "Hominy",
      "Red chili sauce",
      "Garlic",
      "Onions",
      "Shredded cabbage for garnish",
    ],
    steps: [
      "Simmer pork shoulder with garlic and onions until tender.",
      "Add hominy and red chili sauce to the pot.",
      "Cook for 30 minutes to allow flavors to blend.",
      "Serve hot, garnished with shredded cabbage and lime wedges.",
    ],
  },
  {
    id: 9,
    name: "Fajitas",
    image: FajitasImage,
    description: "Sizzling meat and vegetables served with warm tortillas.",
    ingredients: [
      "Chicken or beef strips",
      "Bell peppers, sliced",
      "Onions, sliced",
      "Tortillas",
      "Seasoning mix (paprika, cumin, garlic powder)",
    ],
    steps: [
      "Heat a skillet and cook chicken or beef strips until browned.",
      "Add sliced bell peppers and onions and cook until tender.",
      "Sprinkle with seasoning mix and stir well.",
      "Serve the mixture with warm tortillas and toppings of choice.",
    ],
  },
];

const MexicanRecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = mexicanRecipes.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-5">Recipe not found!</p>;
  }

  return (
    <div className="container mt-5">
      <Card className="shadow-lg">
        <Card.Img
          variant="top"
          src={recipe.image}
          alt={recipe.name}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title className="text-center text-purple">
            {recipe.name}
          </Card.Title>
          <Card.Text className="text-muted text-center">
            {recipe.description}
          </Card.Text>
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5>Steps:</h5>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => navigate("/cuisine/mexican")}
            >
              Back to Mexican Recipes
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MexicanRecipeDetails;
