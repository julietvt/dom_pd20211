'use script';

let counter = 0;

let counterButEl = document.getElementById('counterBut');
let counterValEl = document.getElementById('counterVal');

counterValEl.innerText = counter;

counterButEl.onclick = function () {
  counter++;
  counterValEl.innerText = counter;
};
