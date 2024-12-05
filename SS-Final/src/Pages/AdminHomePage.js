import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const handleManageCourses = () => {
    navigate("/admin/courses");
  };

  const handleManageUsers = () => {
    navigate("/admin/manage-users");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        backgroundImage: "url('/images/adminhome.jpg')", // Replace with the actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)", // Enhance readability
        }}
      >
        Welcome, Admin
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "40px",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)", // Add a subtle shadow for text clarity
        }}
      >
        Use the options below to manage the application.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Manage Courses Card */}
        <div
          onClick={handleManageCourses}
          style={{
            width: "220px",
            height: "160px",
            backgroundColor: "rgba(106, 27, 154, 0.95)", // Solid color with a slight transparency
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)", // Add depth to the cards
            cursor: "pointer",
            transition: "transform 0.3s ease, background-color 0.3s ease", // Smooth hover effects
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(128, 50, 180, 1)")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(106, 27, 154, 0.95)")}
        >
          <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>Manage Courses</h3>
        </div>

        {/* Manage Users Card */}
        <div
          onClick={handleManageUsers}
          style={{
            width: "220px",
            height: "160px",
            backgroundColor: "rgba(106, 27, 154, 0.95)", // Consistent color scheme
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)", // Add depth to the cards
            cursor: "pointer",
            transition: "transform 0.3s ease, background-color 0.3s ease", // Smooth hover effects
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(128, 50, 180, 1)")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(106, 27, 154, 0.95)")}
        >
          <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>Manage Users</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
