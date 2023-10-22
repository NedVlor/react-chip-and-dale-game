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
    vector: "",
  });

  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  const checkIntersection = () => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;

    if (element1 && element2) {
      const rect1 = element1.getBoundingClientRect();
      const rect2 = element2.getBoundingClientRect();

      let shiftY = 0;
      let shiftX = 0;
      if (
        rect1.bottom + 1 < rect2.top || // вищe
        !(rect1.right > rect2.left && rect1.left < rect2.right) // мимо
      ) {
        shiftY = 1;
      }
      if (
        rect1.top > rect2.bottom //|| // нижче
        // (rect1.right > rect2.left && rect1.left < rect2.right) // intersection
      ) {
        shiftY = 1;
        console.log("if under", rect1.top, rect2.bottom);
      }
      // Обновляем положение элемента char
      setChar((prevChar) => {
        console.log(prevChar);
        if (prevChar.vector == "left") shiftX = -1;
        if (prevChar.vector == "right") shiftX = 1;
        console.log(shiftX);
        return {
          ...prevChar,
          y: prevChar.y + shiftY,
          x: prevChar.x + shiftX,
        };
      });

      //a.style.top=dataA().y+1+"px";

      if (rect1.right < rect2.left) {
        // console.log("Слева+"); // Chip находится слева от element2
      } else if (rect1.left > rect2.right) {
        //console.log("Справа+"); // Chip находится справа от element2
      } else if (rect1.bottom < rect2.top) {
        //console.log("Сверху+"); // Chip находится сверху от element2
      } else if (rect1.top > rect2.bottom) {
        //console.log("Снизу+"); // Chip находится снизу от element2
      } else {
        // console.log("Пересекаются+"); // Chip и element2 пересекаются
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Проверяем пересечение при каждом обновлении положения
      checkIntersection();
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [char.vector]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      // console.log(event);
      if (event.key == "ArrowRight") {
        console.log("Goright");
        setChar((prevChar) => ({
          ...prevChar,
          //x: prevChar.x + 1,
          vector: "right",
        }));
      }
      if (event.key == "ArrowLeft") {
        console.log("Left");
        setChar((prevChar) => ({
          ...prevChar,
          // x: prevChar.x - 1,
          vector: "left",
        }));
      }
    });
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
          left: "300px",
          top: "300px",
          width: "100px",
          height: "100px",
          background: "blue",
        }}
      >
        {char.vector}
      </div>
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
