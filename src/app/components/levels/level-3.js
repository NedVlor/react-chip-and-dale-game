import { useRef } from "react";

export const level = {
  condition: "run-to-end",
  length: 3784,
  background: "/bgs3.png",
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
  { left: 413, top: 700, width: 5000, height: 19, ref: useRef(null) },
  { left: 0, top: 337, width: 14, height: 356, ref: useRef(null) },
  { left: 1086, top: 653, width: 75, height: 48, ref: useRef(null) },
  { left: 1000, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 914, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 828, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 742, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 656, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 570, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 484, top: 641, width: 52, height: 62, ref: useRef(null) },
  { left: 398, top: 641, width: 52, height: 62, ref: useRef(null) },




  // { width: 69, height: 69, left: 661, top: 632, ref: useRef(null) },
  //{ width: 69, height: 69, left: 800, top: 632, ref: useRef(null) },
  //{ left: 1128, top: 600, width: 483, height: 9, ref: useRef(null) },
  //{ left: 3329, top: 600, width: 483, height: 9, ref: useRef(null) },
 // { left: 1854, top: 600, width: 121, height: 9, ref: useRef(null) },
  //{ left: 2000, top: 600, width: 121, height: 9, ref: useRef(null) },
  //{ left: 2820, top: 600, width: 121, height: 9, ref: useRef(null) },

  //{ left: 2018, top: 589, width: 935, height: 39, ref: useRef(null) },

];

const metal1 = "url(/metal-construction.png)";
//const brickWall = "url(/brick-wall.jpg)";
const brickWall = "url(/brick-wall2.jpg)";
const bigPipe = "url(/pipa.png)";
const pipe = "url(/pipe.png)";

export const graphicsList = [
  { type: "img", c: "fsg", width: 194, left: 2300, top: 290, src: "./fireSfereGenerator.gif" },
  { type: "img", c: "fg",width: 194, left: 2300, top: 300, src: "./FireGenerator.gif" },
  
  // drons
   { type: "img", width: 113, left: 294, top: 421, src: "./dron1.png" },
   { type: "img", width: 113, left: 117, top: 462, src: "./dron2.png" },
   { type: "img", width: 113, left: 388, top: 216, src: "./dron2.png" },
   { type: "img", width: 113, left: 483, top: 216, src: "./dron2.png" },
   { type: "img", width: 113, left: 1265, top: 462, src: "./dron2.png" },
   { type: "img", width: 113, left: 3060, top: 462, src: "./dron2.png" },
   { type: "img", width: 113, left: 3182, top: 462, src: "./dron2.png" },
   { type: "img", width: 113, left: 3290, top: 462, src: "./dron2.png" },

   //robots
  { type: "img", width: 52, left: 1000, top: 634, src: "./robot1.png" },
  { type: "img", width: 75, left: 1086, top: 653, src: "./r2.png" },
  { type: "img", width: 52, left: 914, top: 634, src: "./robot1.png" },
  { type: "img", width: 52, left: 828, top: 634, src: "./robot1.png" },
  { type: "img", width: 52, left: 742, top: 634, src: "./robot1.png" },
  { type: "img", width: 52, left: 656, top: 634, src: "./robot1.png" },
  { type: "img", width: 52, left: 570, top: 634, src: "./robot1.png" },
  { type: "img", width: 52, left: 484, top: 634, src: "./robot1.png" },
  { type: "img", width: 52, left: 398, top: 634, src: "./robot1.png" },
  { type: "img", width: 61, left: 352, top: 720, src: "./r.png" },

 



   // team
   { type: "img", width: 175, left: 3826, top:612, src: "./team.png" },

  // clouds
  // { type: "img", width: 168, left: 274, top: 383, src: "./cloud6.png" },
  // { type: "img", width: 147, left: 446, top: 345, src: "./cloud6.png" },
  // { type: "img", width: 165, left: 584, top: 304, src: "./cloud6.png" },
  // { type: "img", width: 148, left: 747, top: 270, src: "./cloud6.png" },
  // { type: "img", width: 148, left: 1212, top: 270, src: "./cloud6.png" },
  // { type: "img", width: 148, left: 1695, top: 270, src: "./cloud6.png" },
  // { type: "img", width: 152, left: 1780, top: 270, src: "./cloud6.png" },
  // { type: "img", width: 156, left: 2045, top: 546, src: "./cloud6.png" },
  // { type: "img", width: 163, left: 2148, top: 479, src: "./cloud6.png" },
  // { type: "img", width: 172, left: 2250, top: 416, src: "./cloud6.png" },
  // { type: "img", width: 157, left: 2349, top: 366, src: "./cloud6.png" },
  // { type: "img", width: 228, left: 1839, top: 581, src: "./cloud6.png" },
  // { type: "img", width: 148, left: 3788, top: 402, src: "./cloud6.png" },
  // { type: "img", width: 115, left: 3897, top: 376, src: "./cloud6.png" },
 
  // metal floor
  { type: "img", width: 5000, left: 413, top: 700, src: "./b1.jpg" },


// big clouds
  // { type: "img", width: 452, left: 813, top: 59, src: "./cloud4.png" },
  // { type: "img", width: 452, left: 1315, top: 59, src: "./cloud4.png" },
  // { type: "img", width: 202, left: 2190, top: 198, src: "./cloud4.png" },
  //animated clouds
  // { type: "img", c: "ani-cloud",  width: 194, left: 50, top: 600, src: "./cloud6.png" },
  // { type: "img", c: "ani-cloud-2",  width: 194, left: 100, top: 600, src: "./cloud6.png" },
  // { type: "img", c: "ani-cloud-3",  width: 194, left: 150, top: 600, src: "./cloud6.png" },
  // wall
  //{ type: "img", width: 148, left: 866, top: 700, src: "./buildingA.jpg" },
  // boxes
  // { type: "img", width: 69, left: 5, top: 632, src: "./box.jpg" },
  // metal constractions 1
  // { type: "div", width: 1000, height: 31, left: 866, top: 695, bg: pipe },
  // { type: "div", width: 1000, height: 31, left: 2701, top: 493, bg: pipe },
  // brick wall
  //  { type: "div", w: 100, h: 155, x: 150, y: 645, bg: bigPipe, bgs: 100 },
  //  { type: "div", w: 100, h: 155, x: 2100, y: 645, bg: bigPipe, bgs: 100 },
  //  { type: "div", w: 100, h: 300, x: 2600, y: 500, bg: bigPipe, bgs: 100 },
  //  { type: "div", w: 100, h: 300, x: 3700, y: 500, bg: bigPipe, bgs: 100 },
   // trash box 
   //{ type: "img", w: 38, h: 300, x: 3652, y: 446, src: "./trash-box.png", a:0 },

   //animated clouds
  // { type: "img", c: "ani-cloud",  width: 194, left: 2050, top: 600, src: "./cloud6.png" },
  // { type: "img", c: "ani-cloud-2",  width: 194, left: 2100, top: 600, src: "./cloud6.png" },
  // { type: "img", c: "ani-cloud-3",  width: 194, left: 2700, top: 493, src: "./cloud6.png" },
  
];

export const collectable = [
  //nuts
   { class: "nut", width: 35, left: 422, top: 302, src: "./nut.png" },
   { class: "nut", width: 35, left: 520, top: 302, src: "./nut.png" },
   { class: "nut", width: 35, left: 1008, top: 590, src: "./nut.png" },
   { class: "nut", width: 35, left: 1008, top: 590, src: "./nut.png" },
   { class: "nut", width: 35, left: 1186, top: 653, src: "./disk.png" },
   { class: "nut", width: 35, left: 2382, top: 653, src: "./disk.png" },
  // { class: "nut", width: 35, left: 2682, top: 653, src: "./disk.png" },
   { class: "nut", width: 35, left: 3756, top: 653, src: "./disk.png" },

   { class: "nut", width: 35, left: 1134, top: 590, src: "./nut.png" },
   { class: "nut", width: 35, left: 843, top: 590, src: "./nut.png" },
   { class: "nut", width: 35, left: 677, top: 590, src: "./nut.png" },
   { class: "nut", width: 35, left: 477, top: 590, src: "./nut.png" },
   { class: "nut", width: 35, left: 1301, top: 541, src: "./nut.png" },
   { class: "nut", width: 35, left: 3100, top: 537, src: "./nut.png" },
   { class: "nut", width: 35, left: 3222, top: 537, src: "./nut.png" },
   { class: "nut", width: 35, left: 3329, top: 537, src: "./nut.png" },
   { class: "nut", width: 35, left: 1618, top: 649, src: "./nut.png" },
   { class: "nut", width: 35, left: 1711, top: 649, src: "./nut.png" },
   { class: "nut", width: 35, left: 1810, top: 649, src: "./nut.png" },




  // { class: "nut", width: 35, left: 806, top: 242, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1267, top: 242, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1064, top: 652, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1312, top: 652, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1570, top: 652, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1570, top: 652, src: "./nut.png" },
  // { class: "nut", width: 35, left: 2305, top: 401, src: "./nut.png" },
  // { class: "nut", width: 35, left: 2209, top: 457, src: "./nut.png" },
  // { class: "nut", width: 35, left: 2102, top: 525, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1833, top: 242, src: "./nut.png" },
  // { class: "nut", width: 35, left: 1751, top: 242, src: "./nut.png" },
  // { class: "nut", width: 35, left: 2408, top: 348, src: "./nut.png" },
  // { class: "nut", width: 35, left: 2625, top: 448, src: "./nut.png" },
  // { class: "nut", width: 35, left: 2915, top: 448, src: "./nut.png" },
  // { class: "nut", width: 35, left: 3149, top: 448, src: "./nut.png" },
  // { class: "nut", width: 35, left: 3391, top: 448, src: "./nut.png" },
  // { class: "nut", width: 35, left: 3390, top: 448, src: "./nut.png" },
  // { class: "nut", width: 35, left: 3735, top: 448, src: "./nut.png" },

];

const thorn = "url(/thorn.png)";
const fire = "url(/fire.gif)";
const hl= "url(/homeless.gif)";
export const getHurt = (useRef) => [
  // { c: "acute", w: 500, h: 10, x: 1048, y: 689, bg: thorn, bgs: 10, ref: r() },
  // { c: "fire", w: 50, h: 10, x: 855, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 938, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1021, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1104, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1187, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1270, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1353, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1436, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1519, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1602, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1685, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 1768, y: 694, bg: fire, bgs: 100, ref: r(), a: 180 },
  // next group
  // { c: "fire", w: 50, h: 10, x: 2700, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 2780, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 2860, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 2940, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3020, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3100, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3180, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3260, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3340, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3420, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // { c: "fire", w: 50, h: 10, x: 3500, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  //{ c: "fire", w: 50, h: 10, x: 3580, y: 490, bg: fire, bgs: 100, ref: r(), a: 180 },
  // houmsless
  // { c: "", w: 50, h: 50, x: 3646, y: 453, bg: hl, bgs: 50, ref: r(), a: 0 },
  // { c: "", w: 100, h: 100, x: 3627, y: 407, bg: hl, bgs: 100, ref: r(), a: 0 },
  // { c: "", w: 100, h: 100, x: 2202, y: 156, bg: hl, bgs: 100, ref: r(), a: 0 },
  // { c: "", w: 100, h: 100, x: 81, y: 368, bg: hl, bgs: 100, ref: r(), a: 0 },
  // { c: "", w: 40, h: 40, x: 125, y: 428, bg: hl, bgs: 40, ref: r(), a: 0 },
  // { c: "", w: 100, h: 100, x: 50, y: 852, bg: hl, bgs: 100, ref: r(), a: 0 },


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