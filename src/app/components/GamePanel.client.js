"use client";
// CounterButton.js
import styled from "styled-components";

import React, { useState } from "react";

const Button = styled.button`
  background-color: blue;
  color: white;
`;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  height: 58px;
width: 392px;
    position: fixed;
  top: 0;
  right: 0;
}
`;

function GamePanel() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      {/*      <Button onClick={handleButtonClick}>Нажми на меня!</Button>
      <p>Текущий счет: {count}</p> */}
      <div class="hearts">
        {" "}
        <img src="./heard.png" style={{ width: "2.5rem" }} />
      </div>
      <div class="health"></div>
    </Container>
  );
}

export default GamePanel;
