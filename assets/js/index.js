const board = document.getElementById('board');
const COUNT_SQUARES = 416;
const COLORS = [
  '#F1948A ',
  '#AED6F1',
  '#E67E22',
  '#7D6608',
  '#2ECC71',
  '#DE3163',
];

for (let i = 0; i < COUNT_SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setSquareColor(square));
  square.addEventListener('mouseleave', () => delSquareColor(square));
  board.append(square);
}

function setSquareColor(elem) {
  const newColor = getNewRandomColor();
  elem.style.backgroundColor = newColor;
  elem.style.boxShadow = '0 0 10px black';
}

function delSquareColor(elem) {
  elem.style.backgroundColor = 'gray';
  elem.style.boxShadow = '0 0 2px black';
}

function getNewRandomColor() {
  const indexColor = Math.floor(Math.random() * COLORS.length);
  return COLORS[indexColor];
}
