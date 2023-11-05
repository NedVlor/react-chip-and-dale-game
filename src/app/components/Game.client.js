"use client";
import React, { useState, useRef, useEffect } from "react";
import Chip from "./Chip.client.js";
import styled from "styled-components";

const GameContainer = styled.div`
  height: 800px;
  width: 2000px;
  background-image: url(/city.png);
  position: relative;
`;

function Game() {
  const [scene, setScene] = useState({
    isSolidShow: true,
    isGraphicsShow: false,
    intersection: false,
  });
  const [char, setChar] = useState({
    x: 0,
    y: 800,
    prevX: 400,
    prevY: 200,
    action: "standing",
    direction: "left",
    vector: "",
    jump: false,
    onTheGround: false,
    verticalSpeed: 10,
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
    let bariers = []; // for gravity
    let intersection = false; // for X
    let shiftY = 0;
    let shiftX = 0;
    const chipNode = rChar.current;
    const chipRaw = chipNode.getBoundingClientRect(); // cordinates and size for chip
    const chip = {
      left: chipRaw.left + 15,
      top: chipRaw.top,
      bottom: chipRaw.bottom,
      right: chipRaw.right - 15,
    };

    [r0, r1, r2, r3, r4, r5, r6].forEach((el, i) => {
      const element2 = el.current;
      console.log("---i---", i);

      if (chipNode && element2) {
        const rect2 = element2.getBoundingClientRect(); // cordinate and size for current solid object

        // graviry intersection checking 1
        if (
          chip.bottom + 1 < rect2.top || // вищe
          !(chip.right > rect2.left && chip.left < rect2.right) // мимо
        ) {
          bariers[i] = false;
        } else {
          console.log("first barier");
          bariers[i] = true;
        }
        // gravity intersection checking 2
        if (
          chip.top > rect2.bottom //|| // нижче
        ) {
          bariers[i] = false;
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
    }); // END forEach

    const barier = bariers.some((b) => b);

    setChar((prevChar) => {
      if (!barier) {
        console.log("No barier, should falling");
        shiftY = prevChar.verticalSpeed;
      }
      if (prevChar.jump) shiftY = -prevChar.verticalSpeed;

      if (prevChar.y > 900) {
        //fall
        return {
          ...prevChar,
          y: 0,
          x: 300,
        };
      }

      if (!intersection) {
        console.log("no intersection");
        window.prevX = prevChar.x;
        window.prevY = prevChar.y;
        if (prevChar.vector == "left") shiftX = -4;
        if (prevChar.vector == "right") shiftX = 4;
        return {
          ...prevChar,
          prevX: window.prevX,
          prevY: window.prevY,
          y: prevChar.y + shiftY,
          x: prevChar.x + shiftX,
          onTheGround: barier,
        };
      } else {
        console.log("intersection");
        setTimeout(() => {
          console.log(" reset to 10");
          setChar((prevChar) => ({ ...prevChar, verticalSpeed: 10 }));
        }, 150);

        shiftY = 1;
        return {
          ...prevChar,
          y: window.prevY,
          x: window.prevX,
          verticalSpeed: 1,
        };
      }
    });
    setScene((prevScene) => {
      return {
        ...prevScene,
        intersection: intersection,
      };
    });

    console.log(
      "------------------------ checkIntersection----------------------",
    );
    // Устанавливаем "буферные" зоны для прокрутки
    var leftThreshold = 300; // Порог слева
    var rightThreshold = window.innerWidth - 300; // Порог справа
    const body = document.querySelector("body");

    // Проверяем, не выходит ли персонаж за левый край
    if (chip.left < leftThreshold) {
      // Прокрутка влево
      body.scrollBy({
        left: chip.left - leftThreshold,
        behavior: "smooth",
      });
    }
    // Проверяем, не выходит ли персонаж за правый край
    else if (chip.right > rightThreshold) {
      // Прокрутка вправо
      body.scrollBy({
        left: chip.right - rightThreshold,
        behavior: "smooth",
      });
    }
  }; // END checkIntersection

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
      <div
        style={{
          width: "200px",
          background: "#0000ff21",
          top: "0",
          left: "0",
          position: "fixed",
          padding: ".5rem",
        }}
      >
        <div style={{ background: scene.intersection ? "red" : "none" }}>
          intersection
        </div>
        <div style={{ background: char.onTheGround ? "gray" : "none" }}>
          onTheGround
        </div>
        <div>
          CHIP X Y: {char.x}, {char.y}
        </div>
        <div>
          PREV X Y: {char.prevX}, {char.prevY}
        </div>
        <div>verticalSpeed: {char.verticalSpeed}</div>
      </div>
      <Chip
        ref={rChar}
        data={char}
        style={{
          position: "absolute",
          left: "200px",
          top: "300px",
          width: "100px",
          height: "19px",
          background: "red",
        }}
      />
      <div
        ref={r0}
        style={{
          position: "absolute",
          left: "500px",
          top: "474px",
          width: "6000px",
          height: "17px",
          background: scene.isSolidShow ? "blue" : "",
        }}
      ></div>
      <div
        ref={r1}
        style={{
          position: "absolute",
          left: "0px",
          top: "337px",
          width: "14px",
          height: "356px",
          background: scene.isSolidShow ? "blue" : "",
        }}
      ></div>
      <div
        ref={r2}
        style={{
          position: "absolute",
          left: "300px",
          top: "300px",
          width: "100px",
          height: "100px",
          background: scene.isSolidShow ? "blue" : "",
        }}
      ></div>
      <div
        ref={r3}
        style={{
          position: "absolute",
          left: "479px",
          top: "700px",
          width: "521px",
          height: "19px",
          background: scene.isSolidShow ? "blue" : "",
        }}
      ></div>
      <div
        ref={r4}
        style={{
          position: "absolute",
          left: "0px",
          top: "700px",
          width: "408px",
          height: "8px",
          background: scene.isSolidShow ? "blue" : "",
        }}
      ></div>
      <div
        ref={r5}
        style={{
          position: "absolute",
          left: "0px",
          top: "633px",
          width: "212px",
          height: "67px",
          background: scene.isSolidShow ? "blue" : "",
        }}
      ></div>

      {[
        { type: "img", width: 69, left: 5, top: 632, src: "./box.jpg" },
        { type: "img", width: 69, left: 74, top: 632, src: "./box.jpg" },
        { type: "img", width: 69, left: 143, top: 632, src: "./box.jpg" },
        { type: "img", width: 69, left: 661, top: 632, src: "./box.jpg" },
        {
          type: "div",
          width: 521,
          height: 37,
          left: 479,
          top: 700,
          backgroundImage: "url(/metal-construction.png)",
        },
        {
          type: "div",
          width: 407,
          height: 36,
          left: 1,
          top: 700,
          backgroundImage: "url(/metal-construction.png)",
        },
      ].map((obj) => {
        if (!scene.isGraphicsShow) return;
        if (obj.type == "img") {
          return (
            <img
              src={obj.src}
              style={{
                zIndex: "100",
                width: obj.width + "px",
                position: "absolute",
                left: obj.left + "px",
                top: obj.top + "px",
              }}
            />
          );
        } else if (obj.type == "div") {
          return (
            <div
              style={{
                position: "absolute",
                left: obj.left + "px",
                top: obj.top + "px",
                width: obj.width + "px",
                height: obj.height + "px",
                backgroundImage: obj.backgroundImage,
              }}
            ></div>
          );
        }
      })}
      <div
        ref={r6}
        style={{
          position: "absolute",
          left: "663px",
          top: "638px",
          width: "65px",
          height: "63px",
          background: scene.isSolidShow ? "blue" : "",
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
