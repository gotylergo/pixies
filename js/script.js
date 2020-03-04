function randomGenerator(position) {
  return `${Math.random() * Math.floor(100) + position}px`;
}

document.onmousemove = function (e) {
  document.getElementById('pixie1').style.left = randomGenerator(e.clientX);
  document.getElementById('pixie1').style.top = randomGenerator(e.clientY);
  document.getElementById('pixie2').style.left = randomGenerator(e.clientX);
  document.getElementById('pixie2').style.top = randomGenerator(e.clientY);
  document.getElementById('pixie3').style.left = randomGenerator(e.clientX);
  document.getElementById('pixie3').style.top = randomGenerator(e.clientY);
  document.getElementById('x').innerHTML = e.clientX;
  document.getElementById('y').innerHTML = e.clientY;
}
document.ontouchmove = function (e) {
  document.getElementById('pixie1').style.left = randomGenerator(e.touches[0].clientX);
  document.getElementById('pixie1').style.top = randomGenerator(e.touches[0].clientY);
  document.getElementById('pixie2').style.left = randomGenerator(e.touches[0].clientX);
  document.getElementById('pixie2').style.top = randomGenerator(e.touches[0].clientY);
  document.getElementById('pixie3').style.left = randomGenerator(e.touches[0].clientX);
  document.getElementById('pixie3').style.top = randomGenerator(e.touches[0].clientY);
  document.getElementById('x').innerHTML = e.touches[0].clientX;
  document.getElementById('y').innerHTML = e.touches[0].clientY;
}
document.onmouseleave = function () {

}
document.ontouchend = function () {

}
