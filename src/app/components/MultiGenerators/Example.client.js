"use client";
function Hurt({ list, scene }) {
  // Check if col is an array and has elements
  if (Array.isArray(list) && list.length) {
    return;
  } else {
    // Return null or some fallback UI if col is not an array or is empty
    return null;
  }
}
export default Hurt;
