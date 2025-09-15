const pad = document.querySelector(".pad");
const padButton = document.querySelector(".pad-button");

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
  e.target.style.backgroundColor = "lightblue";
}

function getPadSize() {
  let padSize;
  do {
    padSize = +prompt("What size you want the sketch pad to be? Max: 100x100");
  } while (isNaN(padSize) || padSize > 100 || padSize < 1);

  return padSize;
}

let isMouseDown = false;

pad.addEventListener("mousedown", () => (isMouseDown = true));
pad.addEventListener("mouseup", () => (isMouseDown = false));

pad.addEventListener("mouseover", (e) => {
  if (isMouseDown) paintCell(e);
});

padButton.addEventListener("click", () => drawCells(getPadSize()));

drawCells();
