"use client";
// CounterButton.js
import styled from "styled-components";

import React, { useState } from "react";

const Button = styled.button`
  background-color: blue;
  color: white;
`;
const Container = styled.div`
  background-color: tomato;
`;

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>Нажми на меня!</Button>
      <p>Текущий счет: {count}</p>
    </Container>
  );
}

export default CounterButton;
