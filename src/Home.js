// src/Home.js
import React from "react";
import "./Home.css";

const Home = ({ onLogout }) => {
  return (
    <div className="home-container">
      <h2>Welcome to the Room!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
