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

// Animate instructions on mouseover

window.onload = mouseOverInstructions;

function mouseOverInstructions() {

  let instructions = document.getElementById('instructions');
  let instrOriginalFontSize = instructions.style.fontSize;
  let instrOriginalColor = instructions.style.color;
  let lettersArr = instructions.innerText.split('');
  let newInstructions = '';
  for (let letter in lettersArr) {
    newInstructions += `<span class="letter">${lettersArr[letter]}</span>`;
  }
  instructions.innerHTML = newInstructions;

  instructions.onmouseover = function () {
    this.style.color = 'lightgreen';
  };

  instructions.onmouseleave = function () {
    // this.style.fontSize = instrOriginalFontSize;
    this.style.color = instrOriginalColor;
  }
}

// Adjust perspective when deviec is tilted

function handleOrientation(e) {

  document.getElementById('instructions').style.transform =
    `rotateZ(${e.alpha}deg) rotateX(${e.beta}deg) rotateY(${-e.gamma}deg)`;
};

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleOrientation, false);
} else {
  console.info('Device does not support deviceorientation. Text will be static.')
}
