let count = 0;
let mousePos = 0;
let currentPos = 0;
let position = 0;
let draggable = false;
const offset = 95;
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const stepper = document.getElementById("stepper");

btnDecrease.addEventListener("click", () => numberCounter("decrease"));
btnIncrease.addEventListener("click", () => numberCounter("increase"));
stepper.addEventListener("mousedown", function (e) {
  currentPos = mousePos;
  draggable = true;
});

// Handle dragging the counter towards the increment or decrement sign
document.addEventListener("mousemove", function (event) {
  mousePos = event.pageX;

  if (draggable) {
    position = mousePos - currentPos;
    stepper.style.transform = `translateX(${position / 2}px)`;
  }

  if (position <= offset * -1 && draggable) {
    numberCounter("decrease");
    center();
  }

  if (position >= offset && draggable) {
    numberCounter("increase");
    center();
  }
});

document.addEventListener("mouseup", center);

// Increase or decrease the number
function numberCounter(action) {
  if (action == "increase") {
    count++;
  } else {
    count--;
  }

  stepper.textContent = count;
}

// Place the counter in the middle
function center() {
  draggable = false;
  stepper.style.transform = `translateX(0px)`;
}