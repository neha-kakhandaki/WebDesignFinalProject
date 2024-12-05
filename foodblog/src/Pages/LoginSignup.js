import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state for Login/Sign-Up
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Sign-Up
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (isLogin) {
      // Simulate login logic
      navigate("/home"); // Redirect to homepage
    } else {
      // Simulate sign-up logic
      console.log("User signed up!");
    }
  };

  return (
    <div className="loginsignup-page">
      <div className="loginsignup-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src="../Assets/logo.jpg" alt="Spoonful Stories Logo" className="logo-image" />
          <h1 className="logo-title">Spoonful Stories</h1>
        </div>

        {/* Form Section */}
        <div className="loginsignup-background">
          <h2 className="form-title">
            {isLogin ? "Ready to Cook Something Delicious?" : "Create Your Account"}
          </h2>
          <p className="form-subtitle">
            {isLogin
              ? "Log in to explore and share amazing recipes!"
              : "Join Spoonful Stories and start exploring amazing recipes!"}
          </p>
          <form onSubmit={handleSubmit}>
            {/* Sign-Up Only Field: Full Name */}
            {!isLogin && (
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
            )}
            {/* Common Fields */}
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            {/* Sign-Up Only Field: Confirm Password */}
            {!isLogin && (
              <div className="form-group">
                <input type="password" placeholder="Confirm Password" required />
              </div>
            )}
            {/* Login Only: Remember Me */}
            {isLogin && (
              <div className="form-group remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            )}
            <button type="submit" className="submit-button">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={toggleForm} className="toggle-button">
              {isLogin ? " Sign Up" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
