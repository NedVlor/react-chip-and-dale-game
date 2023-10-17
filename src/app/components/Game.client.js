"use client";
import { useState, useRef, useEffect } from "react";
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
    //action: "run",
    action: "standing",
    direction: "left",
  });

  setInterval(() => {
    setChar((prevChar) => ({
      ...prevChar,
      y: prevChar.y++,
    }));
  }, 100);

  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  useEffect(() => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;

    console.log(element1, element2);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("!!!!!!!! intersecting");
          entry.target.style.backgroundColor = "green";
        } else {
          console.log("no");
          ntry.target.style.backgroundColor = entry.target.classList.contains(
            "element1",
          )
            ? "red"
            : "blue";
        }
      });
    };

    const observerOptions = {
      root: null, // null означает viewport
      rootMargin: "0px",
      threshold: 0.5, // Порог пересечения (50% видимости)
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    observer.observe(element1);
    observer.observe(element2);
  }, []);

  return (
    <GameContainer>
      <Chip ref={element1Ref} data={char} />
      <div
        ref={element2Ref}
        style={{
          position: "absolute",
          left: "200px",
          top: "300px",
          width: "400px",
          height: "50px",
          background: "brown",
        }}
      ></div>
    </GameContainer>
  );
}
export default Game;
