import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign-Up
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  }); // Form data
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:5000/api/users"; // Update to match your backend

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Sign-Up
    setFormData({ email: "", password: "", fullName: "", confirmPassword: "" }); // Clear form fields
    setError(null); // Clear error messages
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/register";
    const requestData = isLogin
      ? { email: formData.email, password: formData.password }
      : { ...formData, role: "customer" }; // Role is always "customer" for signup

    // Validation for Sign-Up
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(API_BASE_URL + endpoint, requestData);
      if (isLogin) {
        // Save role and token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect based on role
        if (data.role === "admin") {
          navigate("/admin"); // Redirect admin to the admin page
        } else {
          navigate("/home"); // Redirect customer to the home page
        }
      } else {
        // For successful signup
        alert("Account created successfully! You can now log in.");
        toggleForm(); // Switch to login form
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="loginsignup-page">
      <div className="loginsignup-container">
        <div className="logo-section">
          <img src="/images/refined_logo_white_text.png" alt="Spoonful Stories Logo" className="logo-image" />
        </div>
        <div className="loginsignup-background">
          <h2 className="form-title">{isLogin ? "Welcome Back!" : "Create Your Account"}</h2>
          <p className="form-subtitle">
            {isLogin
              ? "Log in to explore amazing recipes!"
              : "Join us and start exploring delicious recipes!"}
          </p>
          <form onSubmit={handleSubmit}>
            {/* Sign-Up Only Field */}
            {!isLogin && (
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            {/* Common Fields */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Sign-Up Only Field */}
            {!isLogin && (
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            {error && <p className="error-message">{error}</p>}
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
