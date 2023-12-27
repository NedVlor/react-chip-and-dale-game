"use client";
function Hurt({ list, scene }) {
  // Check if col is an array and has elements
  if (Array.isArray(list) && list.length) {
    return list.map((obj, i) => {
      return (
        <div
          key={"hurt-" + i}
          ref={obj.ref}
          style={{
            zIndex: "100",
            width: (obj.width || obj.w) + "px",
            position: "absolute",
            left: (obj.left || obj.x) + "px",
            top: (obj.top || obj.y) + "px",
            transform: `rotate(${obj.a}deg)`
          }}
        >
          <div
            className={obj.c}
            key={"hurt-" + i}
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
              i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:
              {obj.height}
            </span>
          )}
        </div>
      );
    });
  } else {
    // Return null or some fallback UI if col is not an array or is empty
    return null;
  }
}
export default Hurt;
