export const getSolidList = (useRef) => [
  { left: 0, top: 633, width: 212, height: 67, ref: useRef(null) },
  { left: 0, top: 700, width: 408, height: 8, ref: useRef(null) },
  { left: 300, top: 300, width: 100, height: 100, ref: useRef(null) },
  { left: 479, top: 700, width: 521, height: 19, ref: useRef(null) },
  { left: 1050, top: 700, width: 521, height: 19, ref: useRef(null) },
  { left: 0, top: 337, width: 14, height: 356, ref: useRef(null) },
  { left: 500, top: 474, width: 100, height: 17, ref: useRef(null) },
  { width: 69, height: 69, left: 661, top: 632, ref: useRef(null) },
  { width: 69, height: 69, left: 800, top: 632, ref: useRef(null) },
];

const metal1 = "url(/metal-construction.png)";
export const graphicsList = [
  // boxes
  { type: "img", width: 69, left: 5, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 74, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 143, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 661, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 800, top: 632, src: "./box.jpg" },
  // metal constractions 1
  { type: "div", width: 521, height: 37, left: 479, top: 700, bg: metal1 },
  { type: "div", width: 521, height: 37, left: 1050, top: 700, bg: metal1 },
  { type: "div", width: 407, height: 36, left: 1, top: 700, bg: metal1 },
];
