"use client";
import React, { useState, useRef, useEffect } from "react";
import Chip from "./Chip.client.js";
import styled from "styled-components";

const GameContainer = styled.div`
  height: 800px;
  width: 1000px;
  background-image: url(/city.png);
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
    jump: false,
    onTheGround: false,
  });
  const rChar = useRef(null);
  const r0 = useRef(null);
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);
  const r5 = useRef(null);
  const r6 = useRef(null);

  const checkIntersection = () => {
    let barier = false; // for gravity
    let intersection = false; // for X
    let shiftY = 0;
    let shiftX = 0;

    [r0, r1, r2, r3, r4, r5, r6].forEach((el) => {
      const chipNode = rChar.current;
      const element2 = el.current;
      if (chipNode && element2) {
        const chip = chipNode.getBoundingClientRect(); // cordinates and size for chip
        const rect2 = element2.getBoundingClientRect(); // cordinate and size for current solid object

        // graviry intersection checking 1
        if (
          chip.bottom + 1 < rect2.top || // вищe
          !(chip.right > rect2.left && chip.left < rect2.right) // мимо
        ) {
        } else {
          console.log("first barier");
          barier = true;
        }
        // gravity intersection checking 2
        if (
          chip.top > rect2.bottom //|| // нижче
        ) {
          console.log("if under", chip.top, rect2.bottom);
          barier = false;
        } else {
          console.log("secound barier");
        }

        setChar((prevChar) => {
          // horizontal intersection (actually any intersection)
          // no vertical intersection
          // no horizontal imtersection
          if (
            !(
              !!(chip.bottom > rect2.top && chip.top < rect2.bottom) &&
              !!(chip.right > rect2.left && chip.left < rect2.right)
            )
          ) {
          } else {
            intersection = true;
          }
          return {
            ...prevChar,
          };
        });
      }
    });

    if (!barier) {
      shiftY = 10;
    } else {
    }

    setChar((prevChar) => {
      if (prevChar.jump) shiftY = -10;

      if (prevChar.y > 900) {
        //fall
        return {
          ...prevChar,
          y: 0,
          x: 300,
        };
      }
      if (!intersection) {
        window.prevX = prevChar.x;
        window.prevY = prevChar.y;

        if (prevChar.vector == "left") shiftX = -4;
        if (prevChar.vector == "right") shiftX = 4;
        console.log("no intersection");
      } else {
        console.log("intersection");
        return {
          ...prevChar,
          y: window.prevY,
          x: window.prevX,
        };
      }

      return {
        ...prevChar,
        y: prevChar.y + shiftY,
        x: prevChar.x + shiftX,
        onTheGround: barier,
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Проверяем пересечение при каждом обновлении положения
      checkIntersection();
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [char.vector]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      console.log(event);
      if (event.code == "Space") {
        setChar((prevChar) => ({
          ...prevChar,
          jump: prevChar.onTheGround ? true : false,
        }));
        setTimeout(() => {
          setChar((prevChar) => ({
            ...prevChar,
            jump: false,
          }));
        }, 500);
      }
      if (event.key == "ArrowRight") {
        console.log("Goright");
        setChar((prevChar) => ({
          ...prevChar,
          vector: "right",
          direction: "right",
          action: "run",
        }));
      }
      if (event.key == "ArrowLeft") {
        console.log("Left");
        setChar((prevChar) => ({
          ...prevChar,
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
        ref={rChar}
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
        ref={r0}
        style={{
          position: "absolute",
          left: "500px",
          top: "474px",
          width: "283px",
          height: "17px",
          background: "blue",
        }}
      >
        {char.vector}
      </div>

      <div
        ref={r1}
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
        ref={r2}
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
        ref={r3}
        style={{
          position: "absolute",
          left: "479px",
          top: "700px",
          width: "521px",
          height: "101px",
          background: "blue",
        }}
      ></div>
      <div
        ref={r4}
        style={{
          position: "absolute",
          left: "0px",
          top: "700px",
          width: "422px",
          height: "100px",
          background: "blue",
        }}
      ></div>
      <div
        ref={r5}
        style={{
          position: "absolute",
          left: "0px",
          top: "700px",
          width: "422px",
          height: "100px",
          background: "blue",
        }}
      ></div>
      <div
        ref={r6}
        style={{
          position: "absolute",
          left: "0px",
          top: "700px",
          width: "422px",
          height: "100px",
          background: "blue",
        }}
      ></div>
    </GameContainer>
  );
}
//          backgroundImage: "url(/brick-wall.jpg)",
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
/*
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
}*/

export default Game;
