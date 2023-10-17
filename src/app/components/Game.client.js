"use client";
import React, { useState, useRef, useEffect } from "react";
import Chip from "./Chip.client.js";
import styled from "styled-components";

const GameContainer = styled.div`
  height: 800px;
  width: 1000px;
  background-color: grey;
  position: relative;
`;

function Game() {
  const [char, setChar] = useState({
    x: 300,
    y: 100,
    action: "standing",
    direction: "left",
  });

  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  const checkIntersection = () => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;

    if (element1 && element2) {
      const rect1 = element1.getBoundingClientRect();
      const rect2 = element2.getBoundingClientRect();

      if (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
      ) {
        console.log("!!!!!!!! intersecting");
        // Вы можете выполнить действие при пересечении элементов здесь
        // Например, изменить цвет или выполнить другие действия
      } else {
        console.log("no");
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Обновляем положение элемента char
      setChar((prevChar) => ({
        ...prevChar,
        y: prevChar.y + 1,
      }));

      // Проверяем пересечение при каждом обновлении положения
      checkIntersection();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <GameContainer>
      <Chip
        ref={element1Ref}
        data={char}
        style={{
          position: "absolute",
          left: "200px",
          top: "300px",
          width: "100px",
          height: "100px",
          background: "red",
        }}
      />
      <div
        ref={element2Ref}
        style={{
          position: "absolute",
          left: "200px",
          top: "300px",
          width: "1000px",
          height: "100px",
          background: "blue",
        }}
      ></div>
    </GameContainer>
  );
}

export default Game;
