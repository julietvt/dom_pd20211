'use script';

let sliderEl = document.getElementById('slider');
let thumbEL = document.getElementById('thumb');

thumbEL.onmousedown = function (e) {
  e.preventDefault();
  let shift = e.clientX - thumbEL.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {
    let x = e.clientX - shift - sliderEl.getBoundingClientRect().left;
    if (x < 0) x = 0;
    // style width у элмента slider sliderEl.offsetWidth
    let rightX = sliderEl.offsetWidth - thumbEL.offsetWidth;
    if (x > rightX) x = rightX;
    thumbEL.style.left = x + 'px';
  }

  function onMouseUp(e) {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};
