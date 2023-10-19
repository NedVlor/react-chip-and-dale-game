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
    x: 400,
    y: 200,
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
        rect1.bottom + 1 < rect2.top || // вище
        !(rect1.right > rect2.left && rect1.left < rect2.right) // мимо
      ) {
        // Обновляем положение элемента char
        setChar((prevChar) => ({
          ...prevChar,
          y: prevChar.y + 1,
        }));

        //a.style.top=dataA().y+1+"px";
      }

      if (rect1.right < rect2.left) {
        console.log("Слева+"); // Chip находится слева от element2
      } else if (rect1.left > rect2.right) {
        console.log("Справа+"); // Chip находится справа от element2
      } else if (rect1.bottom < rect2.top) {
        console.log("Сверху+"); // Chip находится сверху от element2
      } else if (rect1.top > rect2.bottom) {
        console.log("Снизу+"); // Chip находится снизу от element2
      } else {
        console.log("Пересекаются+"); // Chip и element2 пересекаются
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
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
          left: "0px",
          top: "300px",
          width: "100px",
          height: "100px",
          background: "blue",
        }}
      ></div>
    </GameContainer>
  );
}

/* if (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
      ) {
        // Определите с какой стороны происходит пересечение
        if (rect1.right <= rect2.left) {
          console.log("----Слева"); // Chip справа от element2
        } else if (rect1.left >= rect2.right) {
          console.log("----Справа"); // Chip слева от element2
        } else if (rect1.bottom <= rect2.top) {
          console.log("----Сверху"); // Chip ниже element2
        } else if (rect1.top >= rect2.bottom) {
          console.log("----Снизу"); // Chip выше element2
        } else {
          console.log("----Пересекаются"); // Chip пересекается с element2
        }
      } else {
        console.log("----Нет пересечения");
      }
*/

export default Game;
