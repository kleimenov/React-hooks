import React, { useState } from "react";

const StateIII = () => {
  const [data, setData] = useState({
    message: "You",
    author: "HHCD",
  });

  const changeMessage = () => {
    setData((prev) => {
      return {
        ...prev,
        message: "You should feed your cat",
      };
    });
  };

  return (
    <li className="mb-3">
      <h4>1.2 useState hook (use state with objects)</h4>
      <h4>
        {data.message}
      </h4>
      <button onClick={changeMessage} className="btn btn-primary">
        change cat's message
      </button>
    </li>
  );
};

export default StateIII;
