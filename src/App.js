import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          if (buttonColor === "red") setButtonColor("blue");
          else setButtonColor("red");
        }}
      >
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
    </div>
  );
}

export default App;
