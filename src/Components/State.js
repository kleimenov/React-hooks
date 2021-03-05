import React, { useState } from "react";

const State = () => {
  //Let's implement a super simple counter to visualize how useState hook works

  //let's define our initial state, set useState equal zero
  const [counter, setCounter] = useState(0);

  //let's see how it looks like under the hood
  const counterState = useState(0);
  console.log(counterState)
  /*
  useState is an array (more detailed it is a cortege, with two defined element) of two element, firs element is a value or current staate (of something) and second is a function,
  this function allows us to change first element of array
  */


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
