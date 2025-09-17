const pad = document.querySelector(".pad");
const createButton = document.querySelector(".create-button");
const colorCheckbox = document.querySelector(".color-checkbox");

function drawCells(cells = 16) {
  pad.textContent = "";

  const totalCells = cells * cells;
  const cellSize = 100 / cells;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.classList.add("cell");
    pad.append(cell);
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function paintCell(e) {
  if (colorCheckbox.checked) {
    e.target.style.backgroundColor = getRandomRGB();
  } else {
    e.target.style.backgroundColor = "lightgray";
  }
}

function getPadSize() {
  let padSize;
  do {
    padSize = +prompt("Choose a new grid size. Something between 1 and 100.");
  } while (isNaN(padSize) || padSize > 100 || padSize < 1);

  return padSize;
}

let isMouseDown = false;

pad.addEventListener("mousedown", () => (isMouseDown = true));
pad.addEventListener("mouseup", () => (isMouseDown = false));

pad.addEventListener("mouseover", (e) => {
  if (isMouseDown && e.target.classList.contains("cell")) paintCell(e);
});

createButton.addEventListener("click", () => drawCells(getPadSize()));

drawCells();
