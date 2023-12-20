import { useRef } from "react";

export const level = {
  condition: "run-to-end",
  length: 3000,
};

const r = () => useRef(null);
export const getSolidList = (useRef) => [
  { left: 0, top: 633, width: 212, height: 67, ref: useRef(null) },
  { left: 0, top: 700, width: 408, height: 8, ref: useRef(null) },
  { left: 479, top: 700, width: 519, height: 19, ref: useRef(null) },
  { left: 1050, top: 700, width: 519, height: 19, ref: useRef(null) },
  { left: 809, top: 583, width: 37, height: 37, ref: useRef(null) },
  { left: 0, top: 337, width: 14, height: 356, ref: useRef(null) },
  { left: 900, top: 550, width: 521, height: 19, ref: useRef(null) },
  { left: 1630, top: 645, width: 800, height: 155, ref: useRef(null) },
  { left: 2500, top: 617, width: 800, height: 184, ref: useRef(null) },
  { left: 3370, top: 572, width: 800, height: 230, ref: useRef(null) },
  { left: 1300, top: 480, width: 521, height: 19, ref: useRef(null) },
  { width: 69, height: 69, left: 661, top: 632, ref: useRef(null) },
  { width: 69, height: 69, left: 5, top: 497, ref: useRef(null) },
  { width: 69, height: 69, left: 74, top: 566, ref: useRef(null) },
  { width: 69, height: 69, left: 1414, top: 414, ref: useRef(null) },
  { width: 69, height: 69, left: 1688, top: 414, ref: useRef(null) },
  { width: 69, height: 69, left: 1619, top: 349, ref: useRef(null) },
  { width: 69, height: 69, left: 1481, top: 349, ref: useRef(null) },
  { width: 69, height: 69, left: 1548, top: 286, ref: useRef(null) },
  { width: 69, height: 69, left: 2617, top: 553, ref: useRef(null) },
  { width: 69, height: 69, left: 2750, top: 553, ref: useRef(null) },
  { width: 69, height: 69, left: 2887, top: 553, ref: useRef(null) },
  { width: 69, height: 69, left: 3023, top: 553, ref: useRef(null) },
  { width: 69, height: 69, left: 2360, top: 581, ref: useRef(null) },
  { width: 69, height: 69, left: 2360, top: 522, ref: useRef(null) },
  { width: 69, height: 69, left: 2291, top: 581, ref: useRef(null) },
  { width: 69, height: 69, left: 1997, top: 576, ref: useRef(null) },

];

const metal1 = "url(/metal-construction.png)";
//const brickWall = "url(/brick-wall.jpg)";
const brickWall = "url(/building.jpg)";

export const graphicsList = [
  // boxes
  { type: "img", width: 69, left: 5, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 5, top: 497, src: "./box.jpg" },
  { type: "img", width: 69, left: 5, top: 566, src: "./box.jpg" },
  { type: "img", width: 69, left: 74, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 74, top: 566, src: "./box.jpg" },
  { type: "img", width: 69, left: 143, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 661, top: 632, src: "./box.jpg" },
  { type: "img", width: 69, left: 1414, top: 414, src: "./box.jpg" },
  { type: "img", width: 69, left: 1481, top: 414, src: "./box.jpg" },
  { type: "img", width: 69, left: 1550, top: 414, src: "./box.jpg" },
  { type: "img", width: 69, left: 1619, top: 414, src: "./box.jpg" },
  { type: "img", width: 69, left: 1688, top: 414, src: "./box.jpg" },
  { type: "img", width: 69, left: 1550, top: 349, src: "./box.jpg" },
  { type: "img", width: 69, left: 1619, top: 349, src: "./box.jpg" },
  { type: "img", width: 69, left: 1481, top: 349, src: "./box.jpg" },
  { type: "img", width: 69, left: 1548, top: 286, src: "./box.jpg" },
  { type: "img", width: 69, left: 1997, top: 576, src: "./box.jpg" },
  { type: "img", width: 69, left: 2360, top: 581, src: "./box.jpg" },
  { type: "img", width: 69, left: 2291, top: 581, src: "./box.jpg" },
  { type: "img", width: 69, left: 2360, top: 522, src: "./box.jpg" },
  { type: "img", width: 69, left: 2617, top: 553, src: "./box.jpg" },
  { type: "img", width: 69, left: 2750, top: 553, src: "./box.jpg" },
  { type: "img", width: 69, left: 2887, top: 553, src: "./box.jpg" },
  { type: "img", width: 69, left: 3023, top: 553, src: "./box.jpg" },

  // metal constractions 1
  { type: "div", width: 521, height: 37, left: 479, top: 700, bg: metal1 },
  { type: "div", width: 521, height: 37, left: 1050, top: 700, bg: metal1 },
  { type: "div", width: 407, height: 36, left: 1, top: 700, bg: metal1 },
  { type: "div", left: 900, top: 550, width: 519, height: 37, bg: metal1 },
  { type: "div", left: 1300, top: 480, width: 519, height: 37, bg: metal1 },
  { type: "div", left: 809, top: 583, width: 37, height: 37, bg: metal1 },

  // brick wall
  { type: "div", w: 800, h: 155, x: 1630, y: 645, bg: brickWall},
  { type: "div", w: 800, h: 184, x: 2500, y: 617, bg: brickWall },
  { type: "div", w: 800, h: 230, x: 3370, y: 572, bg: brickWall },
];

export const collectable = [
  //nuts
  { class: "nut", width: 35, left: 931, top: 651, src: "./nut.png" },
  { class: "nut", width: 35, left: 606, top: 650, src: "./nut.png" },
  { class: "nut", width: 35, left: 1659, top: 590, src: "./nut.png" },
  { class: "nut", width: 35, left: 1740, top: 590, src: "./nut.png" },
  { class: "nut", width: 35, left: 1821, top: 590, src: "./nut.png" },
  { class: "nut", width: 35, left: 160, top: 578, src: "./nut.png" },
  { class: "nut", width: 35, left: 23, top: 446, src: "./nut.png" },
  { class: "nut", width: 35, left: 529, top: 648, src: "./nut.png" },
  { class: "nut", width: 35, left: 850, top: 651, src: "./nut.png" },
  { class: "nut", width: 35, left: 934, top: 502, src: "./nut.png" },
  { class: "nut", width: 35, left: 1015, top: 502, src: "./nut.png" },
  { class: "nut", width: 35, left: 1096, top: 502, src: "./nut.png" },
  { class: "nut", width: 35, left: 1177, top: 502, src: "./nut.png" },
  { class: "nut", width: 35, left: 1258, top: 502, src: "./nut.png" },
  { class: "nut", width: 35, left: 1015, top: 502, src: "./nut.png" },
  { class: "nut", width: 35, left: 1051, top: 593, src: "./nut.png" },
  { class: "nut", width: 35, left: 1132, top: 593, src: "./nut.png" },
  { class: "nut", width: 35, left: 1213, top: 593, src: "./nut.png" },
  { class: "nut", width: 35, left: 1294, top: 593, src: "./nut.png" },
  { class: "nut", width: 35, left: 1375, top: 593, src: "./nut.png" },
  { class: "nut", width: 35, left: 1361, top: 437, src: "./nut.png" },
  { class: "nut", width: 35, left: 1436, top: 369, src: "./nut.png" },
  { class: "nut", width: 35, left: 1500, top: 303, src: "./nut.png" },
  { class: "nut", width: 35, left: 1569, top: 239, src: "./nut.png" },
  { class: "nut", width: 35, left: 1636, top: 299, src: "./nut.png" },
  { class: "nut", width: 35, left: 1706, top: 365, src: "./nut.png" },
  { class: "nut", width: 35, left: 1770, top: 431, src: "./nut.png" },
  { class: "nut", width: 35, left: 2012, top: 525, src: "./nut.png" },
  { class: "nut", width: 35, left: 2235, top: 598, src: "./nut.png" },
  { class: "nut", width: 35, left: 2310, top: 536, src: "./nut.png" },
  { class: "nut", width: 35, left: 2378, top: 475, src: "./nut.png" },
  { class: "nut", width: 35, left: 2905, top: 509, src: "./nut.png" },
  { class: "nut", width: 35, left: 2768, top: 509, src: "./nut.png" },
  { class: "nut", width: 35, left: 2636, top: 509, src: "./nut.png" },
  { class: "nut", width: 35, left: 3044, top: 516, src: "./key.png" },
];

const thorn = "url(/thorn.png)";
export const getHurt = (useRef) => [
  { c: "acute", w: 521, h: 10, x: 1048, y: 689, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 301, h: 10, x: 1881, y: 636, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 70, h: 10, x: 730, y: 689, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 70, h: 10, x: 210, y: 689, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 70, h: 10, x: 74, y: 556, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 70, h: 10, x: 2683, y: 607, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 70, h: 10, x: 2820, y: 607, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 70, h: 10, x: 2953, y: 607, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 120, h: 10, x: 2498, y: 607, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 211, h: 10, x: 3091, y: 607, bg: thorn, bgs: 10, ref: r() },
  { c: "acute", w: 10, h: 370, x: 0, y: 336, bg: thorn, bgs: 10, ref: r() },
];

export default {
  getSolidList,
  graphicsList,
  collectable,
  getHurt,
  level,
}