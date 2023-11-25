"use client";
function Collectible({ col, scene }) {
  // Check if col is an array and has elements
  if (Array.isArray(col) && col.length) {
    return col.map((obj, i) => {
      return (
      );
    });
  } else {
    // Return null or some fallback UI if col is not an array or is empty
    return null;
  }
}
export default Collectible;
