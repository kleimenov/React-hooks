import React from "react";
import State from "./Components/State";
import StateII from "./Components/StateII";
import StateIII from "./Components/StateIII";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-secondary">Hello Hook!</h3>
        <ul className="list-unstyled text-secondary">
          <State />
          <StateII />
          <StateIII />
        </ul>
      </div>
    </div>
  );
}

export default App;
