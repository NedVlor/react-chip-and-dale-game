import { useRef } from "react";

export const level = {
  condition: "run-to-end",
  length: 1000,
};

const r = () => useRef(null);
export const getSolidList = (useRef) => [
  { left: 0, top: 633, width: 212, height: 67, ref: useRef(null) },
  { left: 0, top: 700, width: 408, height: 8, ref: useRef(null) },
  { left: 479, top: 700, width: 521, height: 19, ref: useRef(null) },
  { left: 1050, top: 700, width: 521, height: 19, ref: useRef(null) },
  { left: 0, top: 337, width: 14, height: 356, ref: useRef(null) },
  { width: 69, height: 69, left: 661, top: 632, ref: useRef(null) },
  { width: 69, height: 69, left: 800, top: 632, ref: useRef(null) },
  { left: 900, top: 550, width: 521, height: 19, ref: useRef(null) },
  { left: 1630, top: 645, width: 800, height: 155, ref: useRef(null) },
  { left: 2500, top: 617, width: 800, height: 184, ref: useRef(null) },
  { left: 3370, top: 572, width: 800, height: 230, ref: useRef(null) },
];

const metal1 = "url(/metal-construction.png)";
//const brickWall = "url(/brick-wall.jpg)";
const brickWall = "url(/brick-wall2.jpg)";

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
  { type: "div", width: 521, height: 37, left: 900, top: 550, bg: metal1 },
  // brick wall
  { type: "div", w: 800, h: 155, x: 1630, y: 645, bg: brickWall, bgs: 100 },
  { type: "div", w: 800, h: 184, x: 2500, y: 617, bg: brickWall, bgs: 100 },
  { type: "div", w: 800, h: 230, x: 3370, y: 572, bg: brickWall, bgs: 100 },
];

export const collectable = [
  //nuts
  { class: "nut", width: 35, left: 748, top: 643, src: "./nut.png" },
  { class: "nut", width: 35, left: 948, top: 643, src: "./nut.png" },
  { class: "nut", width: 35, left: 548, top: 643, src: "./nut.png" },
  { class: "nut", width: 35, left: 1130, top: 590, src: "./nut.png" },
  { class: "nut", width: 35, left: 1239, top: 590, src: "./nut.png" },
  { class: "nut", width: 35, left: 1739, top: 590, src: "./nut.png" },
];

const thorn = "url(/thorn.png)";
export const getHurt = (useRef) => [
  { c: "acute", w: 500, h: 10, x: 1048, y: 689, bg: thorn, bgs: 10, ref: r() },
];
