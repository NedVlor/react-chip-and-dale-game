"use client";
import React, { useState, useRef, useEffect } from "react";
import Chip from "./Chip.client.js";
import styled from "styled-components";
import level_1 from "./levels/level-1.js";
import level_2 from "./levels/level-2.js";
import level_3 from "./levels/level-3.js";
import { keyboard } from "../core/keyboard.js";
import { scroll } from "../core/scroll.js";
import GamePanel from "./GamePanel.client.js";
import TimePanel from "./TimePanel.client.js";
import LevelPanel from "./LevelPanel.client.js";
import Collectible from "./MultiGenerators/Collectible.client.js";
import Graphics from "./MultiGenerators/Graphics.client.js";
import Solid from "./MultiGenerators/Solid.client.js";
import Hurt from "./MultiGenerators/Hurt.client.js";
import GameOverScreen from "./Screens/GameOverScreen.client.js";
import StartScreen from "./Screens/StartScreen.client.js";
import WinScreen from "./Screens/WinScreen.client.js";
import FinishScreen from "./Screens/FinishScreen.client.js";

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let level = level_1;

const GameContainer = styled.div`
  height: 800px;
  width: 4000px;
  position: relative;
  color: white;
`;

function Game() {

  let levelNumber = 1;

  if (typeof window !== "undefined") {
    levelNumber = +localStorage.getItem('level') || 1;
    if (levelNumber == 1) level = level_1;
    if (levelNumber == 2) level = level_2;
    if (levelNumber == 3) level = level_3;
  }

  if (levelNumber > 3) {
    if (typeof window !== "undefined") localStorage.setItem('level', 1);
    location.reload();
  }

  const [col, setCol] = useState([...level.collectable]);
  const rChar = useRef(null);
  const solidList = level.getSolidList(useRef);
  const enemyList = level.getEnemy(useRef); /// !!!!!!!!!!!!!!!!!!!!!!!!! remove
  const [enemyListR, setEnemyListR] = useState(level.getEnemy(useRef));
  const hurts = level.getHurt(useRef);
  const lowGravity = level.lowGravity;

  const [scene, setScene] = useState({
    isSolidShow: false,
    isGraphicsShow: true,
    isGraphicsInfoShow: false,
    intersection: false,
    lifeAmount: 5,
    health: 250,
    timer: 360,
    isGameOver: false,
    isStarted: false,
    isWin: false,
    isFinish: false,
    level: levelNumber,
    isDamage: false
  });

  const [char, setChar] = useState({
    x: 150,
    y: 150,
    prevX: 400,
    prevY: 200,
    action: "standing",
    direction: "left",
    vector: "",
    jump: false,
    onTheGround: false,
    verticalSpeed: 10,
  });

  const [firebolls, setFirebolls] = useState([])

  const stop = { fall: false };

  const gameOver = () => {
    stopLevelMusic();
    setScene((prevScene) => ({
      ...prevScene,
      isGameOver: true,
    }));
  };

  function win() {
    setChar((prevChar) => ({
      ...prevChar,
      x: 100,
    }));
    stopLevelMusic();
    setTimeout(() => {
      setScene((prevScene) => ({
        ...prevScene,
        isWin: true,
        timer: 60,
      }));
      stopGameLoops();
    }, 1000)
  }

  function finish() {
    //setChar((prevChar) => ({
    //  ...prevChar,
    //  x: 100,
    //}));
    stopLevelMusic();
    setTimeout(() => {
      setScene((prevScene) => ({
        ...prevScene,
        isFinish: true,
        //timer: 60,
      }));
      stopGameLoops();
    }, 1000)
  }

  const reincarnation = () => {
    if (stop.reincarnation) return;
    if (scene.lifeAmount < 2) gameOver();
    setScene((prevScene) => ({
      ...prevScene,
      lifeAmount: prevScene.lifeAmount - 1,
      health: 100,
    }));
    stop.reincarnation = true;
    setTimeout(() => {
      stop.reincarnation = false;
    }, 1000);
  };

  const fall = () => {
    if (stop.fall) return;
    reincarnation();
    stop.fall = true;
    setTimeout(() => {
      stop.fall = false;
    }, 1000);
  };

  const toggleGraphics = () => {
    setScene((prevScene) => ({
      ...prevScene,
      isGraphicsShow: !prevScene.isGraphicsShow,
    }));
  };

  const toggleGraphicsInfo = () => {
    setScene((prevScene) => ({
      ...prevScene,
      isGraphicsInfoShow: !prevScene.isGraphicsInfoShow,
    }));
  };

  const getChip = () => {
    const chipNode = rChar.current;
    const chipRaw = chipNode.getBoundingClientRect(); // cordinates and size for chip
    const chip = {
      left: chipRaw.left + 15,
      top: chipRaw.top,
      bottom: chipRaw.bottom,
      right: chipRaw.right - 15,
    };
    return chip;
  };

  function addHealth() {
    setScene((prevScene) => ({
      ...prevScene,
      health: prevScene.health + 30,
    }));
  }

  const checkCollecting = (char) => {
    setChar((prevChar) => {
      char = { ...prevChar }
      const approximateChip = {
        x: Math.round(char.x / 70),
        y: Math.round(char.y / 70),
      };
      setCol((prev) => {
        return prev.filter((el, i) => {
          const approximateEl = {
            x: Math.round(el.left / 70),
            y: Math.round(el.top / 70),
          };
          if (
            approximateChip.x !== approximateEl.x ||
            approximateChip.y !== approximateEl.y
          ) {
            return true;
          } else {
            addHealth();
            return false;
          }

        });
      });
      return { ...prevChar }
    });
  };

  const checkHurt = () => {
    if (scene.health < 1) reincarnation();
    const chipNode = rChar.current;
    const chip = getChip();
    hurts.forEach((el, i) => {
      const hurtLink = el.ref.current;
      if (hurtLink && chipNode) {
        const hurt = hurtLink.getBoundingClientRect();
        if (
          chip.right > hurt.left &&
          chip.left < hurt.right &&
          chip.bottom > hurt.top &&
          chip.top < hurt.bottom
        ) {
          setScene((prevScene) => ({
            ...prevScene,
            health: prevScene.health - 1,
          }));
        }
      }
    });
  };

  const chipNode = rChar.current;

  const checkIntersection = () => {
    let bariers = []; // for gravity
    let intersection = false; // for X
    let shiftY = 0;
    let shiftX = 0;
    const chip = getChip();

    solidList.forEach((el, i) => {
      const element2 = el.ref.current;
      if (element2 && chipNode) {
        const rect2 = element2.getBoundingClientRect(); // cordinate and size for current solid object
        // graviry intersection checking 1
        if (
          chip.bottom + 1 < rect2.top || // вищe
          !(chip.right > rect2.left && chip.left < rect2.right) // мимо
        ) {
          bariers[i] = false;
        } else {
          bariers[i] = true;
        }
        // gravity intersection checking 2
        if (chip.top > rect2.bottom) { // нижче
          bariers[i] = false;
        }

        setChar((prevChar) => {
          // horizontal intersection (actually any intersection)
          // no vertical intersection
          // no horizontal imtersection
          if (
            !(
              !!(chip.bottom > rect2.top && chip.top < rect2.bottom) &&
              !!(chip.right > rect2.left && chip.left < rect2.right)
            )
          ) {
          } else {
            intersection = true;
          }
          return {
            ...prevChar,
          };
        });
      }
    }); // END forEach

    const barier = bariers.some((b) => b);

    const setPrevChip = (x, y) => {
      if (!window.prev) window.prev = [];
      else {
        if (window.prev.length > 100)
          window.prev = [window.prev.pop(), window.prev.pop()];
        window.prev.push({ x, y });
      }
    };
    const getPrevChip = () => {
      return window.prev ? window.prev.pop() : { x: 0, y: 0 };
    };

    setChar((prevChar) => {
      if (!barier) {
        shiftY = prevChar.verticalSpeed;
        if (prevChar.isLowGravity) shiftY = prevChar.verticalSpeed / 6
      }
      if (prevChar.jump) shiftY = -prevChar.verticalSpeed;
      if (prevChar.x > level.level.length && level.level.condition == "run-to-end") {
        if (levelNumber == 3) finish()
        else win();
      };

      if (prevChar.y > 900) {
        //fall
        fall();
        return {
          ...prevChar,
          y: 0,
          x: 300,
        };
      }

      if (!intersection) {
        setPrevChip(prevChar.x, prevChar.y);
        if (prevChar.vector == "left") shiftX = -4;
        if (prevChar.vector == "right") shiftX = 4;
        return {
          ...prevChar,
          y: prevChar.y + shiftY,
          x: prevChar.x + shiftX,
          onTheGround: barier,
        };
      } else {
        const prev = getPrevChip() || { x: 200, y: 0 };
        setTimeout(() => {
          setChar((prevChar) => ({ ...prevChar, verticalSpeed: 10 }));
        }, 150);

        shiftY = 1;

        let isLowGravity = false;

        lowGravity.forEach((range) => {
          if (prevChar.x > range.from && prevChar.x < range.to) isLowGravity = true;
          console.log('isLowGravity', isLowGravity, prevChar.x, range.from, prevChar.x, range.to)
          console.log('>>>', lowGravity)
        })

        return {
          ...prevChar,
          y: prev.y,
          x: prev.x,
          verticalSpeed: 1,
          isLowGravity
        };
      }
    });
    setScene((prevScene) => {
      return {
        ...prevScene,
        intersection: intersection,
      };
    });
  }; // END checkIntersection

  function countdown() {
    setScene((prevScene) => {
      if (prevScene.timer < 1) gameOver();
      return {
        ...prevScene,
        timer: prevScene.timer - 1,
      };
    });
    scroll(chipNode);

  }

  function nextLevel() {
    let level = scene.level;
    level++;
    localStorage.setItem('level', level);
    location.reload();
  }

  function playAgain() {
    let level = scene.level;
    level = 1;
    localStorage.setItem('level', level);
    location.reload();
  }

  let audio;

  function startButton() {
    document.body.scrollTop = 0; // Для Chrome, Safari и Opera 
    document.documentElement.scrollTop = 0; // Для IE и Firefox
    setTimeout(() => { start() }, 500)
  }

  function start() {
    stopGameLoops()
    window.interval = setInterval(() => {
      checkIntersection();
    }, 50);
    window.interval2 = setInterval(() => {
      checkCollecting(char);
      checkHurt();
    }, 200);
    window.interval3 = setInterval(() => {
      countdown();
    }, 1000);

    if (enemyList.wasp && !scene.isGameOver) {
      window.waspOnterval = setInterval(() => {
        wasp();
      }, 1000);
    }
    if (levelNumber == 3) {
      window.firebolls = setInterval(() => {
        firebollsLoop()
      }, 300)
    }

    if (!window.gamedStarred) window.gamedStarred = true
    else return;

    setCol((prevCol) => { return [...level.collectable] })
    keyboard(setChar);

    const src = "./sounds/level-1-music.mp3";
    window.audio = new Audio(src);
    window.audio
      .play()
      .catch((error) => console.error("Ошибка воспроизведения:", error));

    setScene((prevScene) => ({
      ...prevScene,
      isStarted: true,
    }));
  }

  function stopLevelMusic() {
    window.audio.pause();
    window.audio.currentTime = 0;
  }

  function stopGameLoops() {
    clearInterval(window.interval);
    clearInterval(window.interval2);
    clearInterval(window.interval3);
    clearInterval(window.waspOnterval);
    clearInterval(window.firebolls);
  }

  function firebollsLoop() {
    setFirebolls((prevFirebolls) => {
      const movedPrevFireBolls = prevFirebolls.map((fb) => {
        if (fb.vector == "left") return { x: fb.x - 200 + random(0, 100), y: fb.y + random(-300, 300), vector: fb.vector }
        else return { x: fb.x + 200 + random(0, 100), y: fb.y + random(-300, 300), vector: fb.vector }
      });
      const actualFirebolls = movedPrevFireBolls.filter((fb) => {
        return fb.x > 0
      })
      actualFirebolls.forEach((fb) => {
        const approximateFbX = Math.round(fb.x / 50)
        const approximateFbY = Math.round(fb.y / 400)
        //
        const approximateCharX = Math.round(char.x / 50)
        const approximateCharY = Math.round(char.y / 400)
        // 
        if (approximateFbX == approximateCharX && approximateFbY == approximateCharY) {
          console.warn("damage")
          setScene((prevScene) => ({
            ...prevScene,
            health: prevScene.health - 90,
          }));
        }
      })
      const isAddFireboll = !!random(-1, 1)
      const vector = (char.x < 2378) ? "left" : "right"
      if (isAddFireboll) return [...actualFirebolls, { x: 2378, y: 300, vector }]
      else return actualFirebolls
    })
  }

  function wasp() {
    setEnemyListR(enemy => {
      const wasp = enemy.wasp;
      //
      const differenceX = wasp.x - char.x
      const differenceY = wasp.y - char.y
      //
      const isLeft = differenceX < 0;
      const isUp = differenceY < 0;
      //
      if (isLeft) wasp.x = wasp.x + 20
      else wasp.x = wasp.x - 20;
      //
      if (isUp) wasp.y = wasp.y + 20
      else wasp.y = wasp.y - 20;
      //
      if (Math.abs(differenceX) < 50 && Math.abs(differenceY) < 50) {
        setScene((prevScene) => ({
          ...prevScene,
          health: prevScene.health - 10,
          isDamage: true,
        }));

        if (scene.health < 1) reincarnation();
        setTimeout(() => {
          setScene((prevScene) => ({
            ...prevScene,
            isDamage: false,
          }));
        }, 1000)
      };
      return {
        ...enemy,
        wasp
      }
    })
  }

  useEffect(() => {
    if (scene.isStarted) start();
    return () => {
      stopGameLoops();
    };
  }, [char.vector, scene.timer]);

  useEffect(() => {
    keyboard(setChar);
  }, []);

  return (
    <GameContainer style={{ backgroundImage: `url(${level.level.background})` }}>
      {scene.isGameOver && <GameOverScreen data={scene} />}
      {!scene.isStarted && <StartScreen data={scene} onStart={startButton} />}
      {scene.isWin && <WinScreen data={scene} onNextLevel={nextLevel} />}
      {scene.isFinish && <FinishScreen data={scene} onPlayAgain={playAgain} />}

      {scene.isDamage &&
        <div
          style={{
            position: "fixed",
            zIndex: 10000,
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            backgroundColor: "#ff00006b",
          }}
        ></div>}

      <GamePanel data={scene} />
      <TimePanel data={scene} />
      <LevelPanel data={scene} />
      {/* <div
        style={{
          width: "200px",
          background: "#0000ff21",
          top: "5rem",
          left: "0",
          position: "fixed",
          padding: ".5rem",
        }}
      >
        <div style={{ background: scene.intersection ? "red" : "none" }}>
          intersection
        </div>
        <div style={{ background: char.onTheGround ? "gray" : "none" }}>
          onTheGround
        </div>
        <div>
          CHIP X Y: {char.x}, {char.y}
        </div>
        <div>
          PREV X Y: {char.prevX}, {char.prevY}
        </div>
        <div>verticalSpeed: {char.verticalSpeed}</div>
        <div>isLowGravity: {(char.isLowGravity) ? '+' : '-'}</div>

        <button onClick={toggleGraphics}>Graphics toggle</button>
        <button onClick={toggleGraphicsInfo}>Graphics info</button>
      </div> */}
      <Chip
        ref={rChar}
        data={char}
        style={{
          position: "absolute",
          left: "200px",
          top: "300px",
          width: "100px",
          height: "19px",
          background: "red",
        }}
      />
      <Solid list={solidList} scene={scene} />
      <Hurt list={hurts} scene={scene} />
      <Collectible col={col} scene={scene} />
      <Graphics graphicsList={level.graphicsList} scene={scene} />
      {enemyListR.wasp &&
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            top: `${enemyListR.wasp.y}px`,
            left: `${enemyListR.wasp.x}px`,
            width: `${enemyListR.wasp.w}px`,
            height: `${enemyListR.wasp.h}px`,
            backgroundImage: `url(${enemyListR.wasp.bg})`,
            backgroundSize: `${enemyListR.wasp.bgs}`,
            backgroundPosition: "103% 77%",
            transition: "1s",
          }}>
        </div>}
      {firebolls.map((fb, i) => {
        return (<img
          className="vibration"
          key={"fb-" + i}
          src="Fireball.webp"
          style={{
            position: "absolute",
            zIndex: 1000,
            top: fb.y + "px",
            left: fb.x + "px",
            width: "50px",
            transition: "1s",
          }}
        />)
      })}

    </GameContainer >
  );
}
export default Game;
