import React, { useState } from "react";

const State = () => {
  
  const [counter, setCounter] = useState(0);


  return (
    <li className="mb-3">
      <h4>1.1 useState hook (prevent double rendering)</h4>
      {counter >= 0 ? (
        <h4 className="text-success py-1 py-1">{counter}</h4>
      ) : (
        <h4 className="text-danger py-1 py-1">{counter}</h4>
      )}

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="btn btn-success"
      >
        +add
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="btn btn-danger ml-2"
      >
        -subtract
      </button>
    </li>
  );
};

export default State;
