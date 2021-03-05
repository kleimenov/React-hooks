import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  return (
    <li>
      <h4>1. userState hook</h4>
      {counter >= 0 ? (
        <h4 className="text-success">{counter}</h4>
      ) : (
        <h4 className="text-danger">{counter}</h4>
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
      <button className="btn btn-warning ml-2">plus 2</button>
    </li>
  );
};

export default State;
