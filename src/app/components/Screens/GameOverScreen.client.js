"use client";

function GamePanel(props) {
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
        className="timer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        <img
          src="./game-over.png"
          style={{
            width: "80%",
          }}
        />
        <img
          src="./dale.png"
          style={{
            width: "8rem",
            position: "absolute",
          }}
        />
        <img
          src="./chip.png"
          style={{
            width: "8rem",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}

export default GamePanel;
