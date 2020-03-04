let x = 1;
document.onmousemove = function() {
  x++;
  document.getElementById('counter').innerHTML = x;
}
document.ontouchmove = function() {
  x++;
  document.getElementById('counter').innerHTML = x;
}
document.onmouseleave = function() {
}