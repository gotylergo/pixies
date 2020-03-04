document.onmousemove = function(e) {
  document.getElementById('x').innerHTML = e.clientX;
  document.getElementById('y').innerHTML = e.clientY;
}
document.ontouchmove = function(e) {
  document.getElementById('x').innerHTML = e.touches[0].clientX;
  document.getElementById('y').innerHTML = e.touches[0].clientY;
}
document.onmouseleave = function() {
}