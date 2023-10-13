"use client";
// CounterButton.js
import styled from "styled-components";

import React, { useState, useEffect } from "react";

const Container = styled.div`
  background-color: tomato;
  height: 60px;
  width: 60px;
  background-image: url("/main-sprite.png");
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: 0px -316px;
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
  run: [4, 5, 6],
};

function Chip(props) {
  const [color, setColor] = useState("green");
  const [still, setStill] = useState(0);
  const [pointer, setPointer] = useState(0);
  let style = {};

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (props.data.action) {
        case "run":
          setPointer((prevPointer) => prevPointer + 1);
          break;

        default:
          alert("Default case");
      }
      setColor((prevColor) => (prevColor === "green" ? "red" : "green")); // переключение между красным и зеленым
    }, 1000);

    return () => clearInterval(intervalId); // Очищаем интервал, когда компонент размонтируется
  }, [props.data.action]); // Пустой массив зависимостей означает, что этот useEffect будет запущен один раз при монтировании компонент

  // Отдельный useEffect для слежения за изменениями pointer
  useEffect(() => {
    // Предполагая, что action.run - это массив и вы хотите сбросить указатель, когда достигнет его конца
    if (props.data.action === "run" && pointer >= action.run.length - 1) {
      setPointer(0);
    }
  }, [pointer, props.data.action]); // Зависимости этого эффекта

  useEffect(() => {
    console.log(still);
    console.log(props); // Отслеживаем изменение переменной "still"
    console.log("pointer", pointer, action.run[pointer]);

    setStill((prevStill) => action.run[pointer]);
  }, [pointer]); // Этот useEffect будет запускаться каждый раз, когда значение "still" изменяется

  //useEffect(() => {
  style = {
    backgroundColor: color,
    backgroundPosition: `${stills[still].x}px ${stills[still].y}px`,
  };
  //}, [still]);

  return <Container style={style}>{still}</Container>;
}

export default Chip;
