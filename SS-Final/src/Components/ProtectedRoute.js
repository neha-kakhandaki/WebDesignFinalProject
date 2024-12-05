import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const userRole = localStorage.getItem("role") || "customer"; // Default to "customer"

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/" />; // Redirect customers to home if unauthorized
    }

    return children;
};

export default ProtectedRoute;
