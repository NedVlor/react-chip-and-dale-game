"use client";
import React, { useState, useRef, useEffect } from "react";

function StartScreen(props) {
  const src = "./sounds/chip-and-dale.mp3";
  const [audio] = useState(new Audio(src));

  // Эффект для автоматического воспроизведения при монтировании
  useEffect(() => {
    audio
      .play()
      .catch((error) => console.error("Ошибка воспроизведения:", error));

    // Очистка при размонтировании компонента
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  function start() {
    props.onStart();
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.54)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        right: 0,
        display: "flex",
        padding: "0 1rem",
        justifyContent: "center",
        alignItem: "center",
        backdropFilter: "blur(5px)",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        <img
          src="./logo.png"
          style={{
            width: "100%",
          }}
        />
        <button
          onClick={start}
          style={{
            transform: "scale(3)",
            marginTop: "3rem",
          }}
        >
          START
        </button>
        <img
          src="./dale.png"
          style={{
            width: "8rem",
            position: "absolute",
            left: "10rem",
            animation: "jump 5s infinite",
          }}
        />
        <img
          src="./chip.png"
          style={{
            width: "8rem",
            position: "absolute",
            right: "10rem",
            animation: "jump 5s infinite",
          }}
        />
      </div>
    </div>
  );
}

export default StartScreen;
