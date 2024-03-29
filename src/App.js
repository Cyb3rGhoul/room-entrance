import React, { useState } from "react";
import successGif from "./no.gif";
import failureGif from "./yes.gif";
import successSound from "./success.mp3";
import failureSound from "./notsuccess.mp3";
import "./App.css";

const correctPassword = "amitbhai";

const App = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [gif, setGif] = useState(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setMessage("Padharo Mare Desh!");
      setGif(successGif);
      playSound(successSound);
    } else {
      setMessage("Chall Bhosadike!");
      setGif(failureGif);
      playSound(failureSound);
    }
  };

  const playSound = (audio) => {
    const sound = new Audio(audio);
    sound.play();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Password Likho</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password..."
          />
          <button type="submit">Press me daddy</button>
        </form>
        <p>{message}</p>
        {gif && <img src={gif} alt="Gif" />}
      </div>
    </div>
  );
};
export default App;