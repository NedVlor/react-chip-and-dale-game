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
width: 10rem;
    position: fixed;
  top: 0;
  left:0;
  display:flex;
  padding:0 1rem;
  justify-content:center;
  align-item:center;
}
`;

function LevelPanel(props) {
  return (
    <Container>
      <div
        className="timer"
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Level: {props.data.level}
      </div>
    </Container>
  );
}

export default LevelPanel;
