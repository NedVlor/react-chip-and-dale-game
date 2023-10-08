"use client";
// CounterButton.js

import React, { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Нажми на меня!</button>
      <p>Текущий счет: {count}</p>
    </div>
  );
}

export default CounterButton;
