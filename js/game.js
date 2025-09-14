const pad = document.querySelector(".pad");

function drawCells(cells = 16) {
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

let isMouseDown = false;

pad.addEventListener("mousedown", () => (isMouseDown = true));
pad.addEventListener("mouseup", () => (isMouseDown = false));

pad.addEventListener("mouseover", (e) => {
  if (isMouseDown) paintCell(e);
});

drawCells();
