import React from "react";
import State from "./Components/State";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-secondary">Hello Hook!</h3>
        <ul className="list-unstyled text-secondary">
          <State />
        </ul>
      </div>
    </div>
  );
}

export default App;
