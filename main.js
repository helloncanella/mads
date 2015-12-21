/*global $, d3, window*/
/*jshint -W003*/

'use strict';

var colors = ['#907B63','#E7D382','#736002','#D0561A','#DB8E36'];

build();

$(window).resize(build);

console.log($('.layer'));

$('.layer').sparkle({
  color: '#FFFFFF',
  count: 10000,
  overlap: 0,
  speed: 1,
  minSize: 4,
  maxSize: 7,
  direction: 'both'
});

function build(){
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

    let index = Math.round(Math.random()*(colors.length-1));

    group.append('rect').attr({
      width:side,
      height:side,
      fill: colors[index],
      x: distance*(column-1),
      y: distance*(line-1)
    });

  }
}
