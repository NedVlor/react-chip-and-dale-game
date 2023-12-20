"use client";
// CounterButton.js
import styled from "styled-components";

import React, { useState, useEffect, forwardRef } from "react";

const Container = styled.div`
  height: 60px;
  width: 60px;
  background-image: url("/main-sprite.png");
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: 0px -316px;
  position: absolute;
`;

const stills = [
  { x: 0, y: -316 },
  { x: -60, y: -316 },
  { x: -120, y: -316 },
  { x: -180, y: -316 },
  { x: -240, y: -316 },
  { x: -298, y: -316 },
  { x: -352, y: -316 },
  { x: -407, y: -316 },
  { x: -463, y: -316 },
  { x: -520, y: -316 },
  { x: -582, y: -316 },
  { x: -647, y: -316 },
  { x: -716, y: -316 },
  { x: -778, y: -316 },
  { x: -829, y: -316 },
];
const action = {
  run: [5, 6, 7],
};

const Chip = forwardRef((props, ref) => {
  const [still, setStill] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [style, setStyle] = useState({});

  useEffect(() => {
    // console.log("effect-switch");
    const intervalId = setInterval(() => {
      switch (props.data.action) {
        case "run":
          setPointer((prevPointer) => prevPointer + 1);
          break;
        case "standing":
          setStill(0);
          break;

        default:
          alert("This action do not exist");
      }
    }, 100);

    return () => clearInterval(intervalId); // Очищаем интервал, когда компонент размонтируется
  }, [props.data.action]);

  useEffect(() => {
    // console.log("effect-width-run");
    // Предполагая, что action.run - это массив и вы хотите сбросить указатель, когда достигнет его конца
    if (props.data.action === "run" && pointer > action.run.length - 1) {
      setPointer(0);
    }
    /*if (props.data.action == "standing") {
      setStill(0);
    }*/
  }, [pointer, props.data.action]);

  useEffect(() => {
    // console.log("effect-pointer-to-still");
    // console.log("still", still);
    // console.log("pointer", pointer, action.run[pointer]);

    // console.log("****");
    setStill(0);
    if (props.data.action == "run") {
      setStill((prevStill) => action.run[pointer]);
    }
    /*if (props.data.action == "standing") {
      setStill(0);
    }*/
  }, [pointer]);

  useEffect(() => {
    // console.log("effect image-position");
    if (still || still == 0)
      setStyle((prevStyle) => ({
        ...prevStyle,
        backgroundPosition: `${stills[still].x}px ${stills[still].y}px`,
      }));
  }, [still]);

  useEffect(() => {
    // console.log("effect-mirror");
    if (props.data.direction == "left")
      setStyle((prevStyle) => ({ ...prevStyle, transform: "scaleX(-1)" }));

    if (props.data.direction == "right")
      setStyle((prevStyle) => ({ ...prevStyle, transform: "scaleX(1)" }));
  }, [props.data.direction]);

  useEffect(() => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      left: props.data.x + "px",
      top: props.data.y + "px",
    }));
  }, [props.data.x, props.data.y]);

  return <Container ref={ref} style={style}></Container>;
});

export default Chip;
