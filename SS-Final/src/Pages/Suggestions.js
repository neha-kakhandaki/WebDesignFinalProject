import React from "react";
import { useLocation } from "react-router-dom";
 
const Suggestions = () => {
  const query = new URLSearchParams(useLocation().search);
  const mood = query.get("mood");
  const suggestion = query.get("suggestion");
 
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Mood: {mood}</h1>
      <p>Suggested Food: {suggestion}</p>
    </div>
  );
};
 
export default Suggestions;