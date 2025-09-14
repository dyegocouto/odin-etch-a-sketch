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

drawCells();
