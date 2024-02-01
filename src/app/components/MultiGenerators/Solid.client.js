"use client";
function Collectible({ list, scene }) {
  // Check if col is an array and has elements
  if (Array.isArray(list) && list.length) {
    return list.map((obj, i) => {
      return (
        <div
          key={"collision-" + i}
          ref={obj.ref}
          style={{
            position: "absolute",
            left: obj.left + "px",
            top: obj.top + "px",
            width: obj.width + "px",
            height: obj.height + "px",
            background: scene.isSolidShow ? "blue" : "",
          }}
        >
         {scene.isSolidShow ? ( <span> i:{i}, x:{obj.left}, y:{obj.top}, w:{obj.width}, h:{obj.height} </span>) : null}
        </div>
      );
    });
  } else {
    // Return null or some fallback UI if col is not an array or is empty
    return null;
  }
}
export default Collectible;
