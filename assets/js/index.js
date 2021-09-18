'use script';

const divEl = document.querySelectorAll('.divBox');
divEl.forEach((i) => i.addEventListener('click', changeColor1));

function changeColor1(event) {
  this.style.backgroundColor = 'darkblue';
  this.removeEventListener('click', changeColor1);
  this.addEventListener('click', changeColor2);
}

function changeColor2(event) {
  this.style.backgroundColor = 'orangered';
  this.removeEventListener('click', changeColor2);
  this.addEventListener('click', changeColor1);
}
