const pad = document.querySelector(".pad");
const createButton = document.querySelector(".create-button");

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

function paintCell(e) {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "lightblue";
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
  if (isMouseDown) paintCell(e);
});

createButton.addEventListener("click", () => drawCells(getPadSize()));

drawCells();
