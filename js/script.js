$(document).ready(function() {

  printGrid(16);

});

// Prints the 16x16 grid.
function printGrid(numBoxes) {
  var numOfBoxes = numBoxes * numBoxes;
  // returns the rounded number as an int.
  var boxSize = Math.floor(960 / numBoxes);

  // Empty the container before populating it with a new grid.
  // if this function isn't called then the new grid fails to load.
  $('.container').empty();
  for (var i = 0; i <= numOfBoxes; i++) {
    var $boxes = $('<div class="boxes"></div>');
    $('.container').append($boxes);
    $boxes.css({'width': boxSize + 'px', 'height': boxSize + 'px'});
  }

  // changes the background-color of the box.
  $('.container').find('.boxes').hover(function() {
    $(this).css({'background-color': '#000000'});
  })

  // resets the color of the grid to its default(grey).
  $('.clear').click(function() {
    $('.boxes').css('background-color', 'grey');
    var newValue = prompt('how many rows and columns would you like(1 - 64): ');
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > 64) {
      newValue = 64;
    }
    
    printGrid(newValue);
  })

};
