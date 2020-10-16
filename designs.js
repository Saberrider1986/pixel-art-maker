// Developer Simon Wolf
// Date: 21.09.20 - v 0.1 02.10.2020 v 0.2
// Udacity Pixel Art Maker - Project

//DOM variables
var size = document.getElementById('sizePicker');
var canvas = document.getElementById('pixelCanvas');
var color = document.getElementById('colorPicker');
var gridHeight = document.querySelector('#inputHeight').value;
var gridWidth = document.querySelector('#inputWidth').value;

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function (event) {
  gridHeight = document.querySelector('#inputHeight').value;
  gridWidth = document.querySelector('#inputWidth').value;
  makeGrid(gridHeight, gridWidth);
});

// makeGrid Function details & loops for making the canvas
function makeGrid(gridHeight, gridWidth) {
event.preventDefault();
canvas.innerHTML = "";
for (var h = 0; h < gridHeight; h++) {
  var row = canvas.insertRow(h);
    for (var w = 0; w < gridWidth; w++) {
      var cell = row.insertCell(w);
      // Coloring cells with click
      cell.addEventListener('click', function (event) {
        event.target.style.backgroundColor = color.value;
      });
    }
  }
}
