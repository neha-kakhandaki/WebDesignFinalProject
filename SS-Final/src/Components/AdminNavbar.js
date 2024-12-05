import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleHome = () => {
    navigate("/admin");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#6a1b9a", // Admin-specific theme
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Website Name */}
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Spoonful Stories
      </div>

      {/* Buttons for Home and Logout */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleHome}
          style={{
            backgroundColor: "white",
            color: "#6a1b9a",
            fontSize: "1rem",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
          }}
        >
          Home
        </button>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            fontSize: "1rem",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
