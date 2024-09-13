import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      Enter your name:
      <input
        type="text"
        onChange={(e) => setText("Hello " + e.target.value + "!")}
      />
      <p>{text}</p>
    </div>
  );
};

export default App;
