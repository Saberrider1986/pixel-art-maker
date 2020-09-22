// Developer Simon Wolf
// Date: 21.09.20 - v0.1
// Udacity Pixel Art Maker - Project

// Grid information variables
var size = document.getElementById('sizePicker');
var color = document.getElementById('colorPicker');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
var canvas = document.getElementById('pixelCanvas');
var table = document.getElementById('table');


// Select color input
const colorValue =  color.value();
colorValue.addEventListener('click', function(e1))

function e2 () {
if ($(this).attr('style')) {
    $(this).removeAttr('style')
  } else {
    $(this).attr('style', 'background-color' + color.value());
  }

$(colorValue.removeEventListener('click', function(e1))

// Select size input
const gridHeight = document.querySelectorAll('.inputHeight');
const gridWidth = document.querySelectorAll('.inputWidth');

// When size is submitted by the user, call makeGrid()
const heightValue = height.value();
const widthValue = width.value();

$(size).addEventListener('click', function(e2))
$(size).submit(function(e2)) {
  e.preventDefault();
  makeGrid(heightValue, widthValue) {
}
$(size).removeEventListener('click', function(e2))
// Loop

function makeGrid(x,y) {
    $('tr').remove();

    for (var tally = 1; tally <= x; tally++) {
      $('canvas').append('<tr id=table' + meter +'></tr>'');
      for (var meter = 1; meter <= y; meter++) {
        $('table').append('<td' + meter +'></td>'');
      }
    }
// Your code goes here!
