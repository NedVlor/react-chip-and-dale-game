export const keyboard = (setChar) => {
  console.log("keyboard connected");
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
};
