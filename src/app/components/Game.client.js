"use client";
import React, { useState, useRef, useEffect } from "react";
import Chip from "./Chip.client.js";
import styled from "styled-components";
import { getSolidList, graphicsList, collectable } from "./data.js";
import { keyboard } from "../core/keyboard.js";
import { scroll } from "../core/scroll.js";

const GameContainer = styled.div`
  height: 800px;
  width: 4000px;
  background-image: url(/city.png);
  position: relative;
  color: white;
`;

function Game() {
  const [scene, setScene] = useState({
    isSolidShow: true,
    isGraphicsShow: true,
    isGraphicsInfoShow: false,
    intersection: false,
  });
  const [char, setChar] = useState({
    x: 500,
    y: 200,
    prevX: 400,
    prevY: 200,
    action: "standing",
    direction: "left",
    vector: "",
    jump: false,
    onTheGround: false,
    verticalSpeed: 10,
  });
  const [col, setCol] = useState([...collectable]);
  const toggleGraphics = () => {
    setScene((prevScene) => ({
      ...prevScene,
      isGraphicsShow: !prevScene.isGraphicsShow,
    }));
  };
  const toggleGraphicsInfo = () => {
    setScene((prevScene) => ({
      ...prevScene,
      isGraphicsInfoShow: !prevScene.isGraphicsInfoShow,
    }));
  };
  const rChar = useRef(null);
  const solidList = getSolidList(useRef);
  const getChip = () => {
    const chipNode = rChar.current;

    const chipRaw = chipNode.getBoundingClientRect(); // cordinates and size for chip
    const chip = {
      left: chipRaw.left + 15,
      top: chipRaw.top,
      bottom: chipRaw.bottom,
      right: chipRaw.right - 15,
    };
    return chip;
  };
  const checkCollecting = () => {
    const chip = getChip();
    const approximateChip = {
      x: Math.round(chip.left / 60),
      y: Math.round(chip.top / 60),
    };
    setCol((prev) => {
      return prev.filter((el) => {
        const approximateEl = {
          x: Math.round(el.left / 60),
          y: Math.round(el.top / 60),
        };
        return (
          approximateChip.x !== approximateEl.x ||
          approximateChip.y !== approximateEl.y
        );
      });
    });
  };
  const checkIntersection = () => {
    let bariers = []; // for gravity
    let intersection = false; // for X
    let shiftY = 0;
    let shiftX = 0;
    const chipNode = rChar.current;
    const chip = getChip();
    solidList.forEach((el, i) => {
      const element2 = el.ref.current;
      //console.log("---i---", i);

      if (element2 && chipNode) {
        const rect2 = element2.getBoundingClientRect(); // cordinate and size for current solid object

        // graviry intersection checking 1
        if (
          chip.bottom + 1 < rect2.top || // вищe
          !(chip.right > rect2.left && chip.left < rect2.right) // мимо
        ) {
          bariers[i] = false;
        } else {
          //  console.log("first barier");
          bariers[i] = true;
        }
        // gravity intersection checking 2
        if (
          chip.top > rect2.bottom //|| // нижче
        ) {
          bariers[i] = false;
        } else {
          // console.log("secound barier");
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

    const setPrevChip = (x, y) => {};
    const getPrevChip = () => {
      return {
        x: window.prevX,
        y: window.prevY,
      };
    };

    setChar((prevChar) => {
      if (!barier) {
        // console.log("No barier, should falling");
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
        //   console.log("no intersection");
        setPrevChip(prevChar.x, prevChar.y);

        if (prevChar.vector == "left") shiftX = -4;
        if (prevChar.vector == "right") shiftX = 4;
        return {
          ...prevChar,
          prevX: getPrevChip().x,
          prevY: getPrevChip().y,
          y: prevChar.y + shiftY,
          x: prevChar.x + shiftX,
          onTheGround: barier,
        };
      } else {
        //        console.log("intersection");
        setTimeout(() => {
          //        console.log(" reset to 10");
          setChar((prevChar) => ({ ...prevChar, verticalSpeed: 10 }));
        }, 150);

        shiftY = 1;
        return {
          ...prevChar,
          y: getPrevChip().y,
          x: getPrevChip().x,
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
    scroll(chipNode);
    //   console.log(chipNode);
  }; // END checkIntersection

  useEffect(() => {
    const interval = setInterval(() => {
      // Проверяем пересечение при каждом обновлении положения
      checkIntersection();
    }, 50);
    const interval2 = setInterval(() => {
      // Проверяем пересечение при каждом обновлении положения
      checkCollecting();
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [char.vector]);

  useEffect(() => {
    keyboard(setChar);
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
        <button onClick={toggleGraphics}>Graphics toggle</button>
        <button onClick={toggleGraphicsInfo}>Graphics info</button>
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
      {solidList.map((obj, i) => {
        return (
          <div
            key={"collision-" + i}
            ref={obj.ref}
            style={{
              position: "absolute",
              left: obj.left + "px",
              top: obj.top + "px",
              width: obj.width + "px",
              height: obj.height + "px",
              background: scene.isSolidShow ? "blue" : "",
            }}
          >
            i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:{obj.height}
          </div>
        );
      })}
      {col.map((obj, i) => {
        return (
          <div
            style={{
              zIndex: "100",
              width: obj.width + "px",
              position: "absolute",
              left: obj.left + "px",
              top: obj.top + "px",
            }}
          >
            <img
              className={obj.class}
              key={"graphics-" + i}
              src={obj.src}
              style={{
                width: obj.width + "px",
                position: "absolute",
                left: 0,
                top: 0,
              }}
            />
            {scene.isGraphicsInfoShow && (
              <span
                style={{
                  position: "absolute",
                  background: "#00000082",
                }}
              >
                i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:
                {obj.height}
              </span>
            )}
          </div>
        );
      })}
      {graphicsList.map((obj, i) => {
        if (!scene.isGraphicsShow) return;
        if (obj.type == "img") {
          return (
            <div
              style={{
                zIndex: "100",
                width: obj.width + "px",
                position: "absolute",
                left: obj.left + "px",
                top: obj.top + "px",
              }}
            >
              <img
                key={"graphics-" + i}
                src={obj.src}
                style={{
                  width: obj.width + "px",
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              {scene.isGraphicsInfoShow && (
                <span
                  style={{
                    position: "absolute",
                    background: "#00000082",
                  }}
                >
                  i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:
                  {obj.height}
                </span>
              )}
            </div>
          );
        } else if (obj.type == "div") {
          return (
            <div
              style={{
                zIndex: "100",
                width: (obj.width || obj.w) + "px",
                position: "absolute",
                left: (obj.left || obj.x) + "px",
                top: (obj.top || obj.y) + "px",
              }}
            >
              <div
                key={"graphics-" + i}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: (obj.width || obj.w) + "px",
                  height: (obj.height || obj.h) + "px",
                  backgroundImage: obj.bg,
                  backgroundSize: obj.bgs + "px",
                }}
              ></div>
              {scene.isGraphicsInfoShow && (
                <span
                  style={{
                    position: "absolute",
                    background: "#00000082",
                  }}
                >
                  i:{i}, x:{obj.left || obj.x}, y:{obj.top || obj.y}, w:
                  {obj.width || obj.w}, h:
                  {obj.height || obj.h}
                </span>
              )}
            </div>
          );
        }
      })}
    </GameContainer>
  );
}
export default Game;
