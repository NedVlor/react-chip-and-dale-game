import { useRef } from "react";

export const level = {
  condition: "run-to-end",
  length: 4000,
  background: "/map.png",
};

const r = () => useRef(null);

const wasp = "/wasp.gif";

export const getEnemy = (useRef) => ({
  wasp: { w: 50, h: 50, x: 100, y: 100, bg: wasp, bgs: "120%", ref: r() },
});

export const getSolidList = (useRef) => [
  //{ left: 0, top: 633, width: 212, height: 67, ref: useRef(null) },
  { left: 98, top: 464, width: 154, height: 8, ref: useRef(null) },
  { left: 288, top: 422, width: 130, height: 8, ref: useRef(null) },
  { left: 866, top: 700, width: 1000, height: 19, ref: useRef(null) },
  { left: 0, top: 337, width: 14, height: 356, ref: useRef(null) },
  // { width: 69, height: 69, left: 661, top: 632, ref: useRef(null) },
  //{ width: 69, height: 69, left: 800, top: 632, ref: useRef(null) },
  { left: 461, top: 383, width: 116, height: 8, ref: useRef(null) },
  { left: 600, top: 344, width: 130, height: 8, ref: useRef(null) },
  { left: 763, top: 308, width: 116, height: 8, ref: useRef(null) },
  { left: 1710, top: 308, width: 116, height: 8, ref: useRef(null) },
  { left: 1800, top: 308, width: 116, height: 8, ref: useRef(null) },

  { left: 1226, top: 308, width: 116, height: 8, ref: useRef(null) },

  { left: 836, top: 196, width: 401, height: 10, ref: useRef(null) },
  { left: 1337, top: 196, width: 401, height: 10, ref: useRef(null) },

  { left: 1865, top: 635, width: 160, height: 39, ref: useRef(null) },
  //{ left: 2018, top: 589, width: 935, height: 39, ref: useRef(null) },
  { left: 2207, top: 254, width: 162, height: 9, ref: useRef(null) },
  { left: 2066, top: 583, width: 116, height: 8, ref: useRef(null) },
  { left: 2166, top: 520, width: 116, height: 8, ref: useRef(null) },
  { left: 2266, top: 460, width: 116, height: 8, ref: useRef(null) },
  { left: 2366, top: 400, width: 116, height: 8, ref: useRef(null) },
  { left: 2595, top: 499, width: 1205, height: 8, ref: useRef(null) },

];

const metal1 = "url(/metal-construction.png)";
//const brickWall = "url(/brick-wall.jpg)";
const brickWall = "url(/brick-wall2.jpg)";
const pipe = "url(/pipe.png)";

export const graphicsList = [
  // clouds
  { type: "img", width: 194, left: 78, top: 411, src: "./cloud6.png" },
  { type: "img", width: 168, left: 274, top: 383, src: "./cloud6.png" },
  { type: "img", width: 147, left: 446, top: 345, src: "./cloud6.png" },
  { type: "img", width: 165, left: 584, top: 304, src: "./cloud6.png" },
  { type: "img", width: 148, left: 747, top: 270, src: "./cloud6.png" },
  { type: "img", width: 148, left: 1212, top: 270, src: "./cloud6.png" },
  { type: "img", width: 148, left: 1695, top: 270, src: "./cloud6.png" },


  { type: "img", width: 452, left: 813, top: 59, src: "./cloud4.png" },
  { type: "img", width: 452, left: 1315, top: 59, src: "./cloud4.png" },

  //animated clouds
  { type: "img", c: "ani-cloud",  width: 194, left: 50, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-2",  width: 194, left: 100, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-3",  width: 194, left: 150, top: 600, src: "./cloud6.png" },


  // wall
  //{ type: "img", width: 148, left: 866, top: 700, src: "./buildingA.jpg" },

  // boxes
  // { type: "img", width: 69, left: 5, top: 632, src: "./box.jpg" },
  // { type: "img", width: 69, left: 74, top: 632, src: "./box.jpg" },
  // { type: "img", width: 69, left: 143, top: 632, src: "./box.jpg" },
  // { type: "img", width: 69, left: 661, top: 632, src: "./box.jpg" },
  // { type: "img", width: 69, left: 800, top: 632, src: "./box.jpg" },
  // metal constractions 1
  { type: "div", width: 1000, height: 31, left: 866, top: 695, bg: pipe },
  { type: "div", width: 1000, height: 31, left: 2701, top: 493, bg: pipe },

  // { type: "div", width: 521, height: 37, left: 1050, top: 700, bg: metal1 },
  // { type: "div", width: 407, height: 36, left: 1, top: 700, bg: metal1 },
  // { type: "div", width: 521, height: 37, left: 900, top: 550, bg: metal1 },
  // brick wall
   { type: "div", w: 100, h: 155, x: 150, y: 645, bg: brickWall, bgs: 100 },
   { type: "div", w: 100, h: 155, x: 2100, y: 645, bg: brickWall, bgs: 100 },
   { type: "div", w: 100, h: 300, x: 2600, y: 500, bg: brickWall, bgs: 100 },
   { type: "div", w: 100, h: 300, x: 3700, y: 500, bg: brickWall, bgs: 100 },

   //animated clouds
   { type: "img", c: "ani-cloud",  width: 194, left: 2050, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-2",  width: 194, left: 2100, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-3",  width: 194, left: 2700, top: 493, src: "./cloud6.png" },


  // { type: "div", w: 800, h: 184, x: 2500, y: 617, bg: brickWall, bgs: 100 },
  // { type: "div", w: 800, h: 230, x: 3370, y: 572, bg: brickWall, bgs: 100 },
];

export const collectable = [
  //nuts
  //  { class: "nut", width: 35, left: 748, top: 643, src: "./nut.png" },
  // { class: "nut", width: 35, left: 948, top: 643, src: "./nut.png" },
  // { class: "nut", width: 35, left: 548, top: 643, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1130, top: 590, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1239, top: 590, src: "./nut.png" },
  //{ class: "nut", width: 35, left: 1739, top: 590, src: "./nut.png" },
];

const thorn = "url(/thorn.png)";
const fire = "url(/fire.gif)";
export const getHurt = (useRef) => [
  // { c: "acute", w: 500, h: 10, x: 1048, y: 689, bg: thorn, bgs: 10, ref: r() },
  { c: "fire", w: 50, h: 10, x: 855, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 938, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1021, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1104, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1187, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1270, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1353, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1436, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1519, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1602, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1685, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 1768, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // next group
  { c: "fire", w: 50, h: 10, x: 2700, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 2780, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 2860, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 2940, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3020, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3100, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3180, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3260, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3340, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3420, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3500, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  { c: "fire", w: 50, h: 10, x: 3580, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
];

export const lowGravity = [
  { from: 0, to: 270 },
  { from: 2000, to: 2250 }
]

export default {
  getSolidList,
  graphicsList,
  collectable,
  getHurt,
  level,
  getEnemy,
  lowGravity
}