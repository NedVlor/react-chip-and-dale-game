export const keyboard = (setChar) => {

  if (!window.keyboardStarred) window.keyboardStarred = true
  else return;

  console.log("keyboard connected");
  document.addEventListener("keydown", (event) => {
    if (!window.ke) window.ke = 0;
    window.ke++;
   // console.log('window.ke: ', window.ke);

    event.preventDefault();
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
      // console.log("Goright");
      setChar((prevChar) => ({
        ...prevChar,
        vector: "right",
        direction: "right",
        action: "run",
      }));
    }
    if (event.key == "ArrowLeft") {
      // console.log("Left");
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
