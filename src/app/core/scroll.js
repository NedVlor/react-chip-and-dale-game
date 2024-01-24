export const scroll = (chipNode) => {

  if (!chipNode){
    console.warn('No Chip NODE !!!!!')
    return;
  } 

  console.log('scroll', new Date())

  function getAbsoluteCoords(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { x: rect.left + scrollLeft, y: rect.top + scrollTop };
  }

  const absChip = chipNode.getBoundingClientRect();
  //getAbsoluteCoords(chipNode);
  // Устанавливаем "буферные" зоны для прокрутки
  var leftThreshold = 300; // Порог слева
  var rightThreshold = window.innerWidth - 300; // Порог справа
  const body = document.querySelector("body");
  // console.log(
  //   absChip.x,
  //   rightThreshold,
  //   absChip.x - rightThreshold,
  //   absChip.x > rightThreshold,
  // );

  // Проверяем, не выходит ли персонаж за левый край
  if (absChip.x < leftThreshold) {
    console.log('logic left-->',  absChip.x - leftThreshold,  absChip.x,  rightThreshold,)
    
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    smoothScrollToHorizontal(document.querySelector('html'), scrollLeft - 300, 3000);

    // Прокрутка влево
    // window.scrollBy({
    //   //left: absChip.x - leftThreshold,
    //   left: -200,
    //   behavior: "smooth",
    // });
  }
  // Проверяем, не выходит ли персонаж за правый край
  else if (absChip.x > rightThreshold) {
    console.log('logic-->',  absChip.x - rightThreshold,  absChip.x,  rightThreshold,)

    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    smoothScrollToHorizontal(document.querySelector('html'), scrollLeft + 300, 3000);

    // Прокрутка вправо
    // window.scrollBy({
    //   //left: (absChip.x - rightThreshold) *7,
    //   left: +200,
    //   behavior: "smooth",
    // });
  }
};


function smoothScrollToHorizontal(element, target, duration) {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
      return Promise.reject("bad duration");
  }
  if (duration === 0) {
      element.scrollLeft = target;
      return Promise.resolve();
  }

  const startTime = Date.now();
  const endTime = startTime + duration;

  const startLeft = element.scrollLeft;
  const distance = target - startLeft;

  const smoothStep = (start, end, point) => {
      if (point <= start) { return 0; }
      if (point >= end) { return 1; }
      const x = (point - start) / (end - start);
      return x * x * (3 - 2 * x);
  }

  return new Promise((resolve, reject) => {
      const scrollFrame = () => {
          if (element.scrollLeft === target) {
              resolve();
              return;
          }

          const now = Date.now();
          const point = smoothStep(startTime, endTime, now);
          const frameLeft = Math.round(startLeft + distance * point);
          element.scrollLeft = frameLeft;

          if (now >= endTime) {
              resolve();
              return;
          }

          window.requestAnimationFrame(scrollFrame);
      }

      window.requestAnimationFrame(scrollFrame);
  });
}
