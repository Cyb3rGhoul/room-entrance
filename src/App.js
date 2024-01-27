import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className={`app-container ${loggedIn ? "logged-in" : ""}`}>
      <video autoPlay muted loop className="background-video">
        <source src="/hacking-vdeo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {loggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
