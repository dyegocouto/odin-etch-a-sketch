const pad = document.querySelector(".pad");
const createButton = document.querySelector(".create-button");
const clearButton = document.querySelector(".clear-button");
const colorCheckbox = document.querySelector(".color-checkbox");

function createCell(fraction) {
  const cellSize = 100 / fraction;

  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `${cellSize}%`;
  cell.style.height = `${cellSize}%`;
  cell.style.opacity = 0.1;

  return cell;
}

function fillPad(fraction) {
  const totalCells = fraction * fraction;

  for (let i = 0; i < totalCells; i++) {
    pad.append(createCell(fraction));
  }
}

function initializePad(fraction = 16) {
  pad.textContent = "";
  fillPad(fraction);
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getColor() {
  return colorCheckbox.checked ? getRandomRGB() : "black";
}

function paintCell(e) {
  const cell = e.target;

  if (!cell.style.backgroundColor) {
    cell.style.backgroundColor = getColor();
    cell.style.opacity = 0.1;
  } else {
    const currentOpacity = parseFloat(cell.style.opacity) || 0.1;
    if (currentOpacity < 1) {
      cell.style.opacity = currentOpacity + 0.1;
    }
  }
}

function getPadSize() {
  let padSize;
  do {
    padSize = +prompt("Choose a new grid size. Between 1 and 100.");
  } while (isNaN(padSize) || padSize > 100 || padSize < 1);

  return padSize;
}

createButton.addEventListener("click", () => initializePad(getPadSize()));

clearButton.addEventListener("click", () => {
  const currentFraction = Math.sqrt(pad.children.length);
  initializePad(currentFraction);
});

let isMouseDown = false;

pad.addEventListener("dragstart", (e) => e.preventDefault());
pad.addEventListener("mousedown", () => (isMouseDown = true));
pad.addEventListener("mouseup", () => (isMouseDown = false));
pad.addEventListener("mouseover", (e) => {
  if (isMouseDown && e.target.classList.contains("cell")) {
    paintCell(e);
  }
});

pad.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

initializePad();
