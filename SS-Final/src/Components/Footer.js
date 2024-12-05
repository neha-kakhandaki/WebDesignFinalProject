import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2d3436",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "0.9rem",
        position: "relative",
        bottom: 0,
        width: "100%",
        marginTop: "20px",
      }}
    >
      <p style={{ margin: "0" }}>
        &copy; {new Date().getFullYear()} Spoonful Stories. All rights reserved.
      </p>
      <p style={{ margin: "5px 0" }}>
        <a
          href="/privacy-policy"
          style={{ color: "#55efc4", textDecoration: "none", marginRight: "10px" }}
        >
          Privacy Policy
        </a>
        |
        <a
          href="/terms-of-service"
          style={{ color: "#55efc4", textDecoration: "none", marginLeft: "10px" }}
        >
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
