import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [mood, setMood] = useState("");
  const navigate = useNavigate();

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleGetSuggestions = () => {
    // Map moods to existing routes
    const moodToRouteMap = {
      happy: "/recipes/breakfast", // Assuming breakfast recipes are for happy mood
      sad: "/recipes/lunch", // Assuming lunch recipes for comfort food
      anxious: "/healthy/smoothies", // Herbal tea or smoothies for anxiety
      angry: "/healthy/salads", // Spicy food or healthy options for anger
      excited: "/cuisine/italian", // Celebratory cake or Italian cuisine
      relaxed: "/superfood/brainboost", // Smoothies or brain-boosting recipes
    };

    if (mood && moodToRouteMap[mood]) {
      navigate(moodToRouteMap[mood]); // Navigate to the mapped route
    } else {
      alert("Please select a mood or ensure the page exists.");
    }
  };

  return (
    <div>
      {!showChatbot ? (
        <button
          onClick={toggleChatbot}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#6a1b9a",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            fontSize: "24px",
            zIndex: 1000,
          }}
        >
          💬
        </button>
      ) : (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#6a1b9a",
              color: "#fff",
              padding: "10px",
              textAlign: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              position: "relative",
            }}
          >
            <h5 style={{ margin: 0 }}>Mood Bot</h5>
            <button
              onClick={toggleChatbot}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✖
            </button>
          </div>
          <div style={{ padding: "10px", textAlign: "center" }}>
            <p>How are you feeling today?</p>
            <div style={{ marginBottom: "10px" }}>
              <select
                onChange={(e) => setMood(e.target.value)}
                value={mood}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="">Select your mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
                <option value="angry">Angry</option>
                <option value="excited">Excited</option>
                <option value="relaxed">Relaxed</option>
              </select>
            </div>
          </div>
          <div style={{ padding: "10px" }}>
            <button
              onClick={handleGetSuggestions}
              style={{
                width: "100%",
                backgroundColor: "#6a1b9a",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get Suggestions
            </button>
          </div>
          <div style={{ padding: "10px" }}>
            <button
              onClick={() => navigate("/home")}
              style={{
                width: "100%",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginBottom: "5px",
              }}
            >
              Go to Home
            </button>
            <button
              onClick={() => navigate("/cart")}
              style={{
                width: "100%",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Go to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
