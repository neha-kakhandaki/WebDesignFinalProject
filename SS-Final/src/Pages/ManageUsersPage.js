import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users on component mount
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token"); // Ensure the token is used for authenticated requests
        const { data } = await axios.get("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#6a1b9a",
          marginBottom: "20px",
          fontSize: "2.5rem",
        }}
      >
        Manage Users
      </h1>
      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {error}
        </p>
      )}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#6a1b9a", color: "white" }}>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                  }}
                >
                  <td style={tableCellStyle}>{user.fullName}</td>
                  <td style={tableCellStyle}>{user.email}</td>
                  <td
                    style={{
                      ...tableCellStyle,
                      color: user.role === "admin" ? "#6a1b9a" : "#333",
                      fontWeight: user.role === "admin" ? "bold" : "normal",
                    }}
                  >
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Inline styles for table headers and cells
const tableHeaderStyle = {
  padding: "10px 20px",
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: "2px solid white",
};

const tableCellStyle = {
  padding: "10px 20px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

export default ManageUsersPage;
