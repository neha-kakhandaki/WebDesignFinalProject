import React, { useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

// Import images for carousel
import blogImage1 from "../Assets/indian-food-on-restaurant-table.jpg";
import blogImage2 from "../Assets/berry-cheesecake.jpg";
import blogImage3 from "../Assets/shellfish-pasta-pizza-and-italian-food new.jpg";

// Import images for team members
import member1 from "../Assets/Avocado-toast.jpg";
import member2 from "../Assets/AlooParatha.jpg";
import member3 from "../Assets/Bagel.jpg";
import member4 from "../Assets/Bharta.jpg";
import member5 from "../Assets/Biryani.jpg";

// Add image for the "Let's Start" section
import letsStartImage from "../Assets/mypics/indian-cuisine.jpg";

// Add image for the shop section
import shopImage from "../Assets/shop.jpg";

const Home = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Neha Khakhandaki",
      role: "Recipe Developer",
      description:
        "Alice is the creative force behind our recipes, blending flavors and techniques to create unique dishes.",
      image: member1,
    },
    {
      id: 2,
      name: "Prabhu",
      role: "Content Writer",
      description:
        "John crafts engaging stories and writes detailed recipe instructions for our food blog.",
      image: member2,
    },
    {
      id: 3,
      name: "Minal Randive",
      role: "Photographer",
      description:
        "Emily captures the beauty of our recipes through stunning photography.",
      image: member3,
    },
    {
      id: 4,
      name: "Atharva Chonker",
      role: "Web Developer",
      description:
        "Michael ensures our food blog runs smoothly and is easy to navigate.",
      image: member4,
    },
    {
      id: 5,
      name: "Sammual",
      role: "Social Media Manager",
      description:
        "Sophia manages our social media channels, sharing our recipes with food lovers worldwide.",
      image: member5,
    },
  ];

  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscriptionSuccess(true);
  };

  return (
    <div>
      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={blogImage1}
              alt="First slide"
              style={{
                maxHeight: "500px",
                height: "500px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h3>Explore Culinary Delights</h3>
              <p>Discover recipes from around the world.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={blogImage2}
              alt="Second slide"
              style={{
                maxHeight: "500px",
                height: "500px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h3>Healthy and Wholesome</h3>
              <p>Find recipes that nourish the soul.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={blogImage3}
              alt="Third slide"
              style={{
                maxHeight: "500px",
                height: "500px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h3>Share the Joy of Cooking</h3>
              <p>Join our food-loving community today!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="about-section mt-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            We are a passionate team of food enthusiasts bringing you the best
            recipes and inspiration!
          </p>
        </div>
        <div className="d-flex flex-column align-items-center gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member-card d-flex align-items-center gap-4 p-3 shadow-sm"
              style={{
                width: "80%",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "3px solid #6a1b9a",
                }}
              />
              <div>
                <h5 className="mb-1 text-primary">{member.name}</h5>
                <p className="mb-1 text-muted">{member.role}</p>
                <p className="small text-muted">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Start Section */}
      <section className="lets-start-section mt-5 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={letsStartImage}
                alt="Delicious Pasta"
                className="img-fluid rounded"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="text-primary">Welcome to Spoonful Stories</h2>
              <h4 className="text-muted">
                Let's Talk Food <em>Shall We?</em>
              </h4>
              <p>
                Well, we hope that’s why you’re here. Our recipes are designed
                for real, actual, everyday life, and we try to focus on real
                foods and healthy recipes.
              </p>
              <p>
                This is the place to find those recipes — everything from our
                most popular, to meal prep, to Instant Pot recipes, or if you
                just, like, have some greens in your fridge to use up and need
                inspiration.
              </p>
              <p>You’re here! Have fun. We hope you find something you love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={shopImage}
                alt="Shop Products"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-dark">"Step Into the Chef’s World"</h2>
              <p className="text-muted">
              Delve deeper into the art of cooking with our exclusive paid courses designed to suit every 
              lifestyle and dietary need. Whether you’re looking to master the essentials of Plant-Based Cooking,
               explore delicious options with Gluten-Free and Allergy-Friendly Cooking, simplify healthy eating
                with Keto and Paleo Cooking Made Simple, or refresh your routine with Smoothies and Juices for 
                Detox and Energy, we’ve got you covered. These expertly crafted courses are here to inspire and 
                empower you in the kitchen.
              </p>
              <Button
                variant="secondary"
                className="btn-lg mt-3"
                style={{ backgroundColor: "#6c757d", border: "none" }}
              >
                Get it now →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="newsletter-section mt-5">
        <div className="text-center mb-4">
          <h2 className="text-primary">Subscribe to Our Newsletter</h2>
          <p className="text-muted">
            Get exclusive recipes, tips, and updates directly in your inbox!
          </p>
        </div>
        <Form className="newsletter-form" onSubmit={handleSubscription}>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-md-2 mb-3">
              <Button type="submit" className="btn-primary w-100">
                Subscribe
              </Button>
            </div>
          </div>
          {subscriptionSuccess && (
            <div className="text-success text-center mt-3">
              Thank you for subscribing!
            </div>
          )}
        </Form>
      </section>
    </div>
  );
};

export default Home;
