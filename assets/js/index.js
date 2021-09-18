'use script';

//let board = document.getElementById('container')
let board = document.querySelector('#container');
const NUMBER = 208;

for (let i = 0; i < NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
}
