export const scroll = (chipNode) => {
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
  console.log(
    absChip.x,
    rightThreshold,
    absChip.x - rightThreshold,
    absChip.x > rightThreshold,
  );

  // Проверяем, не выходит ли персонаж за левый край
  if (absChip.x < leftThreshold) {
    // Прокрутка влево
    window.scrollBy({
      left: absChip.x - leftThreshold,
      behavior: "smooth",
    });
  }
  // Проверяем, не выходит ли персонаж за правый край
  else if (absChip.x > rightThreshold) {
    // Прокрутка вправо
    window.scrollBy({
      left: absChip.x - rightThreshold,
      behavior: "smooth",
    });
  }
};
