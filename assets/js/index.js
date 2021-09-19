const board = document.getElementById('board');
const COUNT_SQUARES = 416;

for (let i = 0; i < COUNT_SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'green';
    square.style.boxShadow = '0 0 10px black';
  });
  square.addEventListener('mouseleave', () => {
    square.style.backgroundColor = 'gray';
    square.style.boxShadow = '0 0 2px black';
  });
  board.append(square);
}
