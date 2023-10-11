"use client";
// CounterButton.js
import styled from "styled-components";

import React, { useState } from "react";

const Container = styled.div`
  background-color: tomato;
  height: 60px;
  width: 60px;
  background-image: url("/main-sprite.png");
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: 0px -316px;
`;

function Chip() {
  //const [count, setCount] = useState(0);

  //const handleButtonClick = () => {
  //setCount((prevCount) => prevCount + 1);
  //};

  return <Container style={{ backgroundColor: "green" }}></Container>;
}

export default Chip;
