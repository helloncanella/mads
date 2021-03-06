/*global $, d3, window*/
/*jshint -W003*/

'use strict';

var load = build;


// load();

// $(window).on("resize", "load", load);

// $('.layer').sparkle({
//   color: '#FFFFFF',
//   count: 1000,
//   overlap: 0,
//   speed: 0.01,
//   minSize: 1,
//   maxSize: 3,
//   direction: 'both'
// });


$('button').click(function(e) {
  e.preventDefault();
});


$('input').slider();

function build() {

  var colors = ['#907B63', '#E7D382', '#736002', '#D0561A', '#DB8E36'];

  $('svg').remove();

  var height = $('body').height(),
    width = $('body').width(),
    side = 15,
    distance = 18,
    heightN = Math.round(height * 1.2 / distance),
    widthN = Math.round(width * 1.2 / distance),
    total = heightN * widthN,
    line = 0,
    column = 0;


  var group = d3.select('body').append('svg').attr({
    width: width,
    height: height
  }).append('g');


  for (var i = 1; i < total; i++) {
    column = i % widthN;
    if (column === 1) {
      line++;
    }

    var index = Math.round(Math.random() * (colors.length - 1));

    group.append('rect').attr({
      width: side,
      height: side,
      fill: colors[index],
      x: distance * (column - 1),
      y: distance * (line - 1)
    });

  }
}


