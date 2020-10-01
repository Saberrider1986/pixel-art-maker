// Developer Simon Wolf
// Date: 21.09.20 - v 0.1
// Udacity Pixel Art Maker - Project

// Grid information variables
var size = document.getElementById('sizePicker');
var canvas = document.getElementById('pixelCanvas');
var table = document.getElementById('table');

// Select color value input
var color = document.getElementById('colorPicker').value;

// Select size input
const gridHeight = document.querySelector('#inputHeight').value;
const gridWidth = document.querySelector('#inputWidth').value;

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid(gridHeight, gridWidth);
})

// makeGrid Function details

function makeGrid(x,y) {
// Clear old grid first
canvas.innerHTML = null;
// Loop
    for (var x = 1; x <= gridHeight; x++) {
      var row = canvas.insertRow(); {
        for (var y = 1; y <= gridWidth; y++);
        row.insertCell();
      };
    }
  };
// Your code goes here!
