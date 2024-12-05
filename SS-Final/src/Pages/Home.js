import React, { useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

// Import images for carousel
import blogImage1 from "../Assets/indian-food-on-restaurant-table.jpg";
import blogImage2 from "../Assets/berry-cheesecake.jpg";
import blogImage3 from "../Assets/shellfish-pasta-pizza-and-italian-food new.jpg";

// Import images for team members
import member1 from "../Assets/neha.jpg";
import member2 from "../Assets/prabhu.jpg";
import member3 from "../Assets/minal.jpg";
import member4 from "../Assets/atharva.jpg";
import member5 from "../Assets/samuel.jpg";

// Add image for the "Let's Start" section
import letsStartImage from "../Assets/mypics/indian-cuisine.jpg";
import shopImage from "../Assets/shopImage.jpg";


const Home = () => {
  const navigate = useNavigate(); // Initialize navigate
  const teamMembers = [
    {
      id: 1,
      name: "Neha Kakhandaki",
      description:
        "Neha is the creative force behind our recipes, blending flavors and techniques to create unique dishes.",
      image: member1,
    },
    {
      id: 2,
      name: "Prabhu Lalitha",
      description:
        "Prabhu crafts engaging stories and writes detailed recipe instructions for our food blog.",
      image: member2,
    },
    {
      id: 3,
      name: "Minal Randive",
      description:
        "Minal captures the beauty of our recipes through stunning photography.",
      image: member3,
    },
    {
      id: 4,
      name: "Atharva Chonkar",
      description:
        "Atharva ensures our food blog runs smoothly and is easy to navigate.",
      image: member4,
    },
    {
      id: 5,
      name: "Samuel Morris",
      description:
        "Samuel manages our social media channels, sharing our recipes with food lovers worldwide.",
      image: member5,
    },
  ];

  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscriptionSuccess(true);
  };

  const handleNavigateToCourses = () => {
    console.log("Navigating to /home"); // Add this for debugging
    navigate("/courses");
  };
  

  return (
    <div>
      {/* Carousel Section */}
      {/* Carousel Section */}
<section className="carousel-section">
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={blogImage1}
        alt="First slide"
        style={{
          height: "95vh", // Full viewport height
          objectFit: "cover", // Maintain aspect ratio and cover
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
          height: "100vh", // Full viewport height
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
          height: "100vh", // Full viewport height
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

      {/* Newsletter Subscription Section */}
<section
  className="newsletter-section mt-5"
  style={{
    backgroundColor: "#E6E6FA", // Lavender background color
    padding: "40px 0", // Add padding for spacing
    borderRadius: "10px", // Rounded corners for the section
  }}
>
  <div className="text-center mb-4">
    <h2
      style={{
        color: "#6a1b9a", // Lavender-compatible primary text color
        fontWeight: "bold",
      }}
    >
      Subscribe to Our Newsletter
    </h2>
    <p style={{ color: "#555" }}>
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
          style={{
            borderRadius: "5px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        />
      </div>
      <div className="col-md-4 mb-3">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          required
          style={{
            borderRadius: "5px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        />
      </div>
      <div className="col-md-2 mb-3">
        <Button
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "#6a1b9a",
            border: "none",
            color: "white",
            padding: "10px",
            fontSize: "1rem",
          }}
        >
          Subscribe
        </Button>
      </div>
    </div>
    {subscriptionSuccess && (
      <div
        className="text-success text-center mt-3"
        style={{ fontWeight: "bold" }}
      >
        Thank you for subscribing!
      </div>
    )}
  </Form>
</section>


      {/* Shop Section */}
     {/* Shop Section */}
<section
  className="shop-section mt-5"
  style={{
    position: "relative", // Make the section relative for the overlay
    backgroundImage: "url('/images/bkg.jpg')", // Add your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "40px 0",
    color: "white", // Text color
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent dark overlay
      zIndex: 1, // Place it below the content
    }}
  ></div>

  {/* Content */}
  <div
    className="container"
    style={{
      position: "relative", // Position it above the overlay
      zIndex: 2, // Ensure it is above the overlay
    }}
  >
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src={shopImage}
          alt="Shop Products"
          className="img-fluid rounded shadow"
          style={{
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="col-md-6">
        {/* Text Wrapper */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Light semi-transparent background
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          }}
        >
          <h2
            style={{
              color: "#333", // Darker text for better contrast
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", // Subtle text shadow
            }}
          >
            "Step Into the Chef’s World"
          </h2>
          <p
            style={{
              color: "#555", // Medium gray for the paragraph
            }}
          >
            Delve deeper into the art of cooking with our exclusive paid courses
            designed to suit every lifestyle and dietary need. Whether you’re
            looking to master the essentials of Plant-Based Cooking, explore
            delicious options with Gluten-Free and Allergy-Friendly Cooking,
            simplify healthy eating with Keto and Paleo Cooking Made Simple, or
            refresh your routine with Smoothies and Juices for Detox and Energy,
            we’ve got you covered. These expertly crafted courses are here to
            inspire and empower you in the kitchen.
          </p>
          <Button
            variant="secondary"
            className="btn-lg mt-3"
            style={{
              backgroundColor: "#6c757d",
              border: "none",
              color: "white",
            }}
            onClick={handleNavigateToCourses} // Correctly calls navigation function
          >
            Get it now →
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Us Section */}
      {/* Contact Us Section */}
<section
  className="contact-us-section mt-5"
  style={{
    backgroundColor: "#E6E6FA", // Lavender background color
    padding: "40px 20px",
    borderRadius: "10px",
  }}
>
  <div className="container">
    <h2
      className="text-center mb-4"
      style={{ color: "#6a1b9a", fontWeight: "bold" }}
    >
      Contact Us
    </h2>
    <p className="text-center mb-4" style={{ color: "#555" }}>
      Have questions or feedback? Reach out to us using the form below!
    </p>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon."); // Display pop-up message
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: "#6a1b9a" }}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
              style={{
                borderRadius: "5px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: "#6a1b9a" }}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
              style={{
                borderRadius: "5px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label" style={{ color: "#6a1b9a" }}>
              Your Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Write your message here..."
              required
              style={{
                borderRadius: "5px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#6a1b9a",
                color: "white",
                padding: "10px 20px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;