"use client";
function Graphics({ graphicsList, scene }) {
  // Check if col is an array and has elements
  if (Array.isArray(graphicsList) && graphicsList.length) {
    return graphicsList.map((obj, i) => {
      if (!scene.isGraphicsShow) return;
      if (obj.type == "img") {
        return (
          <div
            style={{
              zIndex: "100",
              width: obj.width + "px",
              position: "absolute",
              left: obj.left + "px",
              top: obj.top + "px",
            }}
          >
            <img
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
                i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:
                {obj.height}
              </span>
            )}
          </div>
        );
      } else if (obj.type == "div") {
        return (
          <div
            style={{
              zIndex: "100",
              width: (obj.width || obj.w) + "px",
              position: "absolute",
              left: (obj.left || obj.x) + "px",
              top: (obj.top || obj.y) + "px",
            }}
          >
            <div
              key={"graphics-" + i}
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
                i:{i}, x:{obj.left || obj.x}, y:{obj.top || obj.y}, w:
                {obj.width || obj.w}, h:
                {obj.height || obj.h}
              </span>
            )}
          </div>
        );
      }
    });
  } else {
    // Return null or some fallback UI if col is not an array or is empty
    return null;
  }
}
export default Graphics;
