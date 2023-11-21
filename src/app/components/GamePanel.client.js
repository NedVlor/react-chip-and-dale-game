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
width: 504px;
    position: fixed;
  top: 0;
  right: 0;
  display:flex;
  padding:0 1rem;
  justify-content:space-between;
  align-item:center;
}
`;

function GamePanel(props) {
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 6; i++) {
      hearts.push(
        <img
          key={i}
          src="./heard.png"
          style={{ width: "2.5rem", marginRight: "1rem" }}
        />,
      );
    }
    return hearts;
  };

  return (
    <Container>
      {/*      <Button onClick={handleButtonClick}>Нажми на меня!</Button>
      <p>Текущий счет: {count}</p> */}
      <div
        class="hearts"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {renderHearts()}
      </div>

      <meter
        style={{ width: "10.5rem" }}
        class="health"
        min="0"
        max="100"
        low="33"
        high="66"
        optimum="80"
        value={props.data.health}
      >
        at 50/100
      </meter>
    </Container>
  );
}

export default GamePanel;
