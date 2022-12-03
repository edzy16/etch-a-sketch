const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
// Adds a click event listener to each cell
function addClickEvent() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
      cells[i].classList.toggle("clicked");
    });
  }
}

// Adds a hover event listener to each cell
function addHoverEvent() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", function() {
      cells[i].classList.toggle("hovered");
    });
  }
}

// Clears the grid
function clearGrid() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("clicked");
    cells[i].classList.remove("hovered");
  }
}

// Takes (rows, columns) input and makes a grid
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);
