// FloatingCartButton.js
import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingCartButton = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart");
    };

    // Inline styles with media query logic
    const buttonStyle = {
        position: "fixed",
        bottom: window.innerWidth <= 480 ? "10px" : window.innerWidth <= 768 ? "15px" : "20px",
        right: window.innerWidth <= 480 ? "10px" : window.innerWidth <= 768 ? "15px" : "20px",
        backgroundColor: "#6a1b9a",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: window.innerWidth <= 480 ? "45px" : window.innerWidth <= 768 ? "50px" : "60px",
        height: window.innerWidth <= 480 ? "45px" : window.innerWidth <= 768 ? "50px" : "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: window.innerWidth <= 480 ? "1rem" : window.innerWidth <= 768 ? "1.2rem" : "1.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000, // Ensure it stays above other elements
        transition: "transform 0.3s ease, background-color 0.3s ease",
    };

    return (
        <button
            onClick={handleCartClick}
            style={{
                ...buttonStyle,
                ":hover": {
                    backgroundColor: "#50187a",
                    transform: "scale(1.1)",
                },
            }}
        >
            🛒
        </button>
    );
};

export default FloatingCartButton;
