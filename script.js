const inputTimer = document.querySelector("#duration");
const startTimer = document.querySelector("#start");
const stopTimer = document.querySelector("#pause");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let total;
const timer = new Timer(inputTimer, startTimer, stopTimer, {
  onStart(totalDur) {
    total = totalDur;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / total - perimeter
    );
  },
});
