import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      Enter your name:
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {text}
    </div>
  );
};

export default App;
