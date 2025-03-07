import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name.trim()) {
      setMessage("Please enter a name.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
      const data = await response.json();
      console.log("API Response:", data);  // Debugging
      setMessage(data.message || "Unexpected error occurred.");
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <div className="container">
      <h1>Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={getGreeting}>Get Greeting</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
