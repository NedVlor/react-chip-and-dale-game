"use client";
// CounterButton.js
import styled from "styled-components";

import React, { useState } from "react";

const Container = styled.div`
  background-color: tomato;
`;

function Chip() {
  //const [count, setCount] = useState(0);

  //const handleButtonClick = () => {
  //setCount((prevCount) => prevCount + 1);
  //};

  return (
    <Container>
      <img src="/vercel.svg" />
    </Container>
  );
}

export default Chip;
