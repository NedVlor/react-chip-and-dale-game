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
  { x: -120, y: 316 },
];

function Chip() {
  const [color, setColor] = useState("green");
  const [still, setStill] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStill((prevStill) => prevStill + 1);
      setColor((prevColor) => (prevColor === "green" ? "red" : "green")); // переключение между красным и зеленым
    }, 1000);

    return () => clearInterval(intervalId); // Очищаем интервал, когда компонент размонтируется
  }, []); // Пустой массив зависимостей означает, что этот useEffect будет запущен один раз при монтировании компонент

  useEffect(() => {
    console.log(still); // Отслеживаем изменение переменной "still"
  }, [still]); // Этот useEffect будет запускаться каждый раз, когда значение "still" изменяется

  return <Container style={{ backgroundColor: color }}></Container>;
}

export default Chip;
