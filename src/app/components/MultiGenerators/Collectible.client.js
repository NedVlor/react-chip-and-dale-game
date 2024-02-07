"use client";
function Collectible({ col, scene }) {
  // Check if col is an array and has elements
  if (Array.isArray(col) && col.length) {
    return col.map((obj, i) => {
      return (
        <div
          key={"colectible-" + i}
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
              {/* i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:
              {obj.height} */}
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
export default Collectible;
