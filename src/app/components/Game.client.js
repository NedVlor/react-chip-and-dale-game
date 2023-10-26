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
    prevX: 400,
    prevY: 200,
    action: "standing",
    direction: "left",
    vector: "",
  });
  let prevX = 0;
  let prevY = 0;
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);
  const element3Ref = useRef(null);
  const element4Ref = useRef(null);

  const checkIntersection = () => {
    let gravityFlag = false;
    let shiftY = 0;
    let shiftX = 0;

    [element2Ref.current, element3Ref.current, element4Ref.current].forEach(
      (element2) => {
        const chipNode = element1Ref.current;
        //const element2 =   element2ref.current;
        //   const element3 = element3ref.current;
        // const element4 = element4ref.current;

        if (chipNode && element2) {
          const chip = chipNode.getBoundingClientRect();
          const rect2 = element2.getBoundingClientRect();

          if (
            chip.bottom + 1 < rect2.top || // вищe
            !(chip.right > rect2.left && chip.left < rect2.right) // мимо
          ) {
            //        shiftY = 1;
            gravityFlag = true;
          }
          if (
            chip.top > rect2.bottom //|| // нижче
          ) {
            //shiftY = 1;
            gravityFlag = true;
            console.log("if under", chip.top, rect2.bottom);
          }
          // Обновляем положение элемента char
          setChar((prevChar) => {
            // console.log(prevChar);
            console.log(
              !!(chip.bottom > rect2.top && chip.top < rect2.bottom),
              !!(chip.right > rect2.left && chip.left < rect2.right),
              chip.bottom,
              rect2.top,
              chip.top,
              rect2.bottom,
            );
            if (
              !(
                !!(chip.bottom > rect2.top && chip.top < rect2.bottom) && //  не пересечение по верт
                !!(chip.right > rect2.left && chip.left < rect2.right)
              )
              //мимо по горизонтали
            ) {
              console.log("!!!!!!!!!!!!!!!!!>>>>>>>>>>>>>>>>");
              prevX = prevChar.x;
              prevY = prevChar.y;

              if (prevChar.vector == "left") shiftX = -1;
              if (prevChar.vector == "right") shiftX = 1;
            } else {
              return {
                ...prevChar,
                y: prevY,
                x: prevX,
              };
            }
            console.log(shiftX);
            return {
              ...prevChar,
              // y: prevchar.y + shifty,
              //x: prevchar.x + shiftx,
            };
          });

          if (chip.right < rect2.left) {
            // console.log("Слева+"); // Chip находится слева от element2
          } else if (chip.left > rect2.right) {
            //console.log("Справа+"); // Chip находится справа от element2
          } else if (chip.bottom < rect2.top) {
            //console.log("Сверху+"); // Chip находится сверху от element2
          } else if (chip.top > rect2.bottom) {
            //console.log("Снизу+"); // Chip находится снизу от element2
          } else {
            // console.log("Пересекаются+"); // Chip и element2 пересекаются
          }
        }
      },
    );
    if (gravityFlag) shiftY = 1;
    //place for changing cordinates
    setChar((prevChar) => {
      return {
        ...prevChar,
        y: prevChar.y + shiftY,
        x: prevChar.x + shiftX,
      };
    });
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
          direction: "right",
          action: "run",
        }));
      }
      if (event.key == "ArrowLeft") {
        console.log("Left");
        setChar((prevChar) => ({
          ...prevChar,
          // x: prevChar.x - 1,
          vector: "left",
          direction: "left",
          action: "run",
        }));
      }
    });

    document.addEventListener("keyup", (event) => {
      // console.log(event);
      setChar((prevChar) => ({
        ...prevChar,
        vector: "",
        action: "standing",
      }));
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
      <div
        ref={element3Ref}
        style={{
          position: "absolute",
          left: "400px",
          top: "400px",
          width: "100px",
          height: "100px",
          background: "blue",
        }}
      ></div>
      <div
        ref={element4Ref}
        style={{
          position: "absolute",
          left: "500px",
          top: "500px",
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
