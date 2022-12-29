const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
var message = document.getElementById("message");
function inputValue() {
  let size = document.getElementById("size");
  let sizeValue = size.value;
  if (sizeValue < 2 || sizeValue > 100) {
    message.innerHTML = "Please enter a number greater than 1 & less than 100";
  } 
  else {
    message.innerHTML = "";
  } 
  return sizeValue;
}

// Takes (rows, columns) input and makes a grid
function makeRows(canvasSize) {
  canvasSize = inputValue();
  let square = container.querySelectorAll(".grid-item");
  square.forEach((div) => div.remove());
  container.style.setProperty("--grid-rows", canvasSize);
  container.style.setProperty("--grid-cols", canvasSize);
  for (c = 0; c < canvasSize * canvasSize; c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  }
}

sizeValue = inputValue();
console.log(sizeValue);
makeRows(sizeValue);
var black = document.getElementById("black");
black.addEventListener("click", blackColor);

// Changes color of grid item on mouseover
function blackColor() {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
}

// Clears grid
function clearGrid() {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

var reset = document.getElementById("reset");
reset.addEventListener("click", clearGrid);

var eraser = document.getElementById("eraser");
eraser.addEventListener("click", erase);

// Erases grid item on mouseover
function erase() {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "white";
    });
  });
}

var rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", rainbowColor);

// Changes color of grid item on mouseover to random color
function rainbowColor() {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = randomColor();
    });
  });
}

// Generates random color
function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




