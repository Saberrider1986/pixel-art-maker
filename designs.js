// Developer Simon Wolf
// Date: 21.09.20 - v 0.1 02.10.2020 v 0.2
// Udacity Pixel Art Maker - Project

var size = document.getElementById('sizePicker');
var canvas = document.getElementById('pixelCanvas');
var table = document.getElementById('table');
// Select color value input
var color = document.getElementById('colorPicker');
// Select size input
var gridHeight = document.querySelector('#inputHeight').value;
var gridWidth = document.querySelector('#inputWidth').value;
// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function () {
  gridHeight = document.querySelector('#inputHeight').value;
  gridWidth = document.querySelector('#inputWidth').value;
  //event.preventDefault();
  // Grid information variables

  makeGrid(gridHeight, gridWidth);
});

// makeGrid Function details
function makeGrid(gridHeight, gridWidth) {
// Clear old grid first
canvas.innerHTML = "";
console.log("gridHeight, gridHeight")
color = document.getElementById('colorPicker');
// Loop grid creation
for (var h = 0; h <= gridHeight; h++) {
var row = canvas.insertRow(h);
    for (var w = 0; w <= gridWidth; w++) {
        var cell = row.insertCell(w);

        cell.addEventListener('click', function (event) {
          cell.style.backgroundColor = color.value;
        })
    }
  }
}
// Your code goes here!
