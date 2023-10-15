"use client";
import { useState } from "react";
import Chip from "./Chip.client.js";
import styled from "styled-components";

const GameContainer = styled.div`
  height: 800px;
  width: 1000px;
  background-color: grey;
`;
function Game() {
  const [char, setChar] = useState({
    x: 300,
    y: 100,
    //action: "run",
    action: "standing",
    direction: "left",
  });

  setInterval(() => {}, 100);

  return (
    <div>X</div>
    /*  <GameContainer>
       <Right><Chip data={char} />
      <div
        style={{
          position: "absolute",
          left: "400px",
          top: "300px",
          width: "400px",
          height: "50px",
          background: "brown",
        }}
      ></div>
    </GameContainer> */
  );
}
export default Game;
