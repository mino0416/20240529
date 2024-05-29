import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.biginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;

function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.strokeStyle = "#ffff00";
  context.lineTo(x, y);
  context.stroke();
}

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;