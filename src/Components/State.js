import React, { useState } from "react";

const State = () => {
  //Let's implement a super simple counter to visualize how useState hook works

  //let's define our initial state, set useState equal zero
  const [counter, setCounter] = useState(0);

  //let's see how it looks like under the hood
  const counterState = useState(0);
  console.log(counterState);
  /*
  useState is an array (more detailed it is a cortege, with two defined element) of two element, firs element is a value or current staate (of something) and second is a function,
  this function allows us to change first element of array
  */

  /*
  below I will add callback functions for buttons, if you will click on the +add button, 
  you will change state and increase value by one other hands if you click on subtract button
  you will decrease by one and the cherry on top is the plus 2 button, which adds 2 to the previous value
  */

  console.log(counter)

  return (
    <li className="mb-3">
      <h4>1. useState hook</h4>
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
      <button
        onClick={() => {
          setCounter((prevValue) => {
            return prevValue + 1;
          });
          setCounter((prev) => prev + 1);
        }}
        className="btn btn-success ml-2"
      >
        add 2
      </button>
      <button
        onClick={() => {
          setCounter((prevValue) => {
            return prevValue - 1;
          });
          setCounter((prev) => prev - 1);
        }}
        className="btn btn-danger ml-2"
      >
        subtract 2
      </button>
    </li>
  );
};

export default State;
