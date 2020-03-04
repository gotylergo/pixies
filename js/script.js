function randomGenerator(position) {
  return `${Math.random() * Math.floor(100) + position}px`;
}

let isTouchDevice = 'ontouchstart' in document.documentElement;

if (isTouchDevice) {
  document.getElementById('deviceSpecific').innerHTML = 'Touch the screen';
} else {
  document.getElementById('deviceSpecific').innerHTML = 'Move the mouse';
}

// For touch devices
document.ontouchmove = function (e) {
  document.getElementById('pixie1').style.left = randomGenerator(e.touches[0].clientX);
  document.getElementById('pixie1').style.top = randomGenerator(e.touches[0].clientY);
  document.getElementById('pixie2').style.left = randomGenerator(e.touches[0].clientX);
  document.getElementById('pixie2').style.top = randomGenerator(e.touches[0].clientY);
  document.getElementById('pixie3').style.left = randomGenerator(e.touches[0].clientX);
  document.getElementById('pixie3').style.top = randomGenerator(e.touches[0].clientY);
}
// For mouse devices
document.onmousemove = function (e) {
  document.getElementById('pixie1').style.left = randomGenerator(e.clientX);
  document.getElementById('pixie1').style.top = randomGenerator(e.clientY);
  document.getElementById('pixie2').style.left = randomGenerator(e.clientX);
  document.getElementById('pixie2').style.top = randomGenerator(e.clientY);
  document.getElementById('pixie3').style.left = randomGenerator(e.clientX);
  document.getElementById('pixie3').style.top = randomGenerator(e.clientY);
}