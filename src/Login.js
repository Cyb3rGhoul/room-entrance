import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  const handleLogin = () => {
    if (password === "Amit Bhai") {
      onLogin();
      setIsWrongPassword(false); // Reset GIF state for the next attempt
    } else {
      setIsWrongPassword(true); // Trigger GIF for the wrong response
      alert("Chal bhosadike");
    }
  };

  // UseEffect for GIF animation
  useEffect(() => {
    const gifElement = document.querySelector(".wrong-password-gif");
    if (gifElement && isWrongPassword) {
      gifElement.style.display = "block"; // Show GIF when the wrong password
    } else {
      gifElement.style.display = "none"; // Hide GIF otherwise
    }
  }, [isWrongPassword]);

  return (
    <>
      <div className="login-container">
        <h2>Password Likho</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Check</button>
        {isWrongPassword && (
          <img
            src="/chal-boss.gif" // Replace with your GIF path
            alt="Wrong password"
            className="wrong-password-gif"
          />
        )}
      </div>
    </>
  );
};

export default Login;
