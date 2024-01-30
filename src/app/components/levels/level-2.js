import { useRef } from "react";

export const level = {
  condition: "run-to-end",
  length: 3920,
  background: "/night-city.jpg",
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

  { left: 1865, top: 635, width: 160, height: 9, ref: useRef(null) },
  //{ left: 2018, top: 589, width: 935, height: 39, ref: useRef(null) },
  { left: 2207, top: 254, width: 162, height: 9, ref: useRef(null) },
  { left: 2066, top: 583, width: 116, height: 8, ref: useRef(null) },
  { left: 2166, top: 520, width: 116, height: 8, ref: useRef(null) },
  { left: 2266, top: 460, width: 116, height: 8, ref: useRef(null) },
  { left: 2366, top: 400, width: 116, height: 8, ref: useRef(null) },
  { left: 2595, top: 499, width: 1205, height: 8, ref: useRef(null) },
  { left: 3802, top: 438, width: 116, height: 8, ref: useRef(null) },
  { left: 3912, top: 405, width: 87, height: 8, ref: useRef(null) },

];

const metal1 = "url(/metal-construction.png)";
//const brickWall = "url(/brick-wall.jpg)";
const brickWall = "url(/brick-wall2.jpg)";
const bigPipe = "url(/pipa.png)";
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
  { type: "img", width: 152, left: 1780, top: 270, src: "./cloud6.png" },
  { type: "img", width: 156, left: 2045, top: 546, src: "./cloud6.png" },
  { type: "img", width: 163, left: 2148, top: 479, src: "./cloud6.png" },
  { type: "img", width: 172, left: 2250, top: 416, src: "./cloud6.png" },
  { type: "img", width: 157, left: 2349, top: 366, src: "./cloud6.png" },
  { type: "img", width: 228, left: 1839, top: 581, src: "./cloud6.png" },
  { type: "img", width: 148, left: 3788, top: 402, src: "./cloud6.png" },
  { type: "img", width: 115, left: 3897, top: 376, src: "./cloud6.png" },
 

// big clouds
  { type: "img", width: 452, left: 813, top: 59, src: "./cloud4.png" },
  { type: "img", width: 452, left: 1315, top: 59, src: "./cloud4.png" },
  { type: "img", width: 202, left: 2190, top: 198, src: "./cloud4.png" },
  //animated clouds
  { type: "img", c: "ani-cloud",  width: 194, left: 50, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-2",  width: 194, left: 100, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-3",  width: 194, left: 150, top: 600, src: "./cloud6.png" },
  // wall
  { type: "img", width: 148, left: 866, top: 700, src: "./buildingA.jpg" },
  //boxes
  { type: "img", width: 69, left: 5, top: 632, src: "./box.jpg" },
  //metal constractions 1
  { type: "div", width: 1000, height: 31, left: 866, top: 695, bg: pipe },
  { type: "div", width: 1000, height: 31, left: 2701, top: 493, bg: pipe },
  // brick wall
   { type: "div", w: 100, h: 155, x: 150, y: 645, bg: bigPipe, bgs: 100 },
   { type: "div", w: 100, h: 155, x: 2100, y: 645, bg: bigPipe, bgs: 100 },
   { type: "div", w: 100, h: 300, x: 2600, y: 500, bg: bigPipe, bgs: 100 },
   { type: "div", w: 100, h: 300, x: 3700, y: 500, bg: bigPipe, bgs: 100 },
   // trash box 
   //{ type: "img", w: 38, h: 300, x: 3652, y: 446, src: "./trash-box.png", a:0 },

   //animated clouds
  { type: "img", c: "ani-cloud",  width: 194, left: 2050, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-2",  width: 194, left: 2100, top: 600, src: "./cloud6.png" },
  { type: "img", c: "ani-cloud-3",  width: 194, left: 2700, top: 493, src: "./cloud6.png" },
  
];

export const collectable = [
  //nuts
  { class: "nut", width: 35, left: 509, top: 317, src: "./nut.png" },
  { class: "nut", width: 35, left: 806, top: 242, src: "./nut.png" },
  { class: "nut", width: 35, left: 1267, top: 242, src: "./nut.png" },
  { class: "nut", width: 35, left: 1064, top: 652, src: "./nut.png" },
  { class: "nut", width: 35, left: 1312, top: 652, src: "./nut.png" },
  { class: "nut", width: 35, left: 1570, top: 652, src: "./nut.png" },
  { class: "nut", width: 35, left: 1570, top: 652, src: "./nut.png" },
  { class: "nut", width: 35, left: 2305, top: 401, src: "./nut.png" },
  { class: "nut", width: 35, left: 2209, top: 457, src: "./nut.png" },
  { class: "nut", width: 35, left: 2102, top: 525, src: "./nut.png" },
  { class: "nut", width: 35, left: 1833, top: 242, src: "./nut.png" },
  { class: "nut", width: 35, left: 1751, top: 242, src: "./nut.png" },
  { class: "nut", width: 35, left: 2408, top: 348, src: "./nut.png" },
  { class: "nut", width: 35, left: 2625, top: 448, src: "./nut.png" },
  { class: "nut", width: 35, left: 2915, top: 448, src: "./nut.png" },
  { class: "nut", width: 35, left: 3149, top: 448, src: "./nut.png" },
  { class: "nut", width: 35, left: 3391, top: 448, src: "./nut.png" },
  { class: "nut", width: 35, left: 3390, top: 448, src: "./nut.png" },
  { class: "nut", width: 35, left: 3735, top: 448, src: "./nut.png" },
  { class: "nut", width: 100, left: 3930, top: 323, src: "./teleport.gif" },

];

const thorn = "url(/thorn.png)";
const fire = "url(/fire.gif)";
const hl= "url(/homeless.gif)";
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
  //{ c: "fire", w: 50, h: 10, x: 3580, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // houmsless
  { c: "", w: 50, h: 50, x: 3646, y: 453, bg: hl, bgs: 50, ref: r(), a: 0 },
  { c: "", w: 100, h: 100, x: 3627, y: 407, bg: hl, bgs: 100, ref: r(), a: 0 },
  { c: "", w: 100, h: 100, x: 2202, y: 156, bg: hl, bgs: 100, ref: r(), a: 0 },
  { c: "", w: 100, h: 100, x: 81, y: 368, bg: hl, bgs: 100, ref: r(), a: 0 },
  { c: "", w: 40, h: 40, x: 125, y: 428, bg: hl, bgs: 40, ref: r(), a: 0 },
  { c: "", w: 100, h: 100, x: 50, y: 852, bg: hl, bgs: 100, ref: r(), a: 0 },


 // { c: "", w: 100, h: 100, x: 3557, y: 407, bg: hl, bgs: 100, ref: r(), a: 0 },

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