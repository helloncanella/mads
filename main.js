/*global Trianglify*/

var mosaic = $('#mosaic');
var palettes = ['YlGn','YlGnBu','GnBu','BuGn','PuBuGn','PuBu','BuPu','RdPu','PuRd','OrRd','YlOrRd','YlOrBr','Purples','Blues','Greens','Oranges','Reds','Greys','PuOr','BrBG','PRGn','PiYG', 'RdBu','RdGy','RdYlBu','Spectral','RdYlGn'];
var colorItems = ['q0-9','q1-9','q2-9','q3-9','q4-9','q5-9','q6-9','q7-9','q8-9']; 
var selectedPalette;



start();

$('button').click(function (e) {
  e.preventDefault();
  mosaic.html('');
  
  $(this).css('background','#E6E6E6');
  $(this).siblings().css('background','white');
  
  var id = $(this).get(0).id;

  if(id=='original'){
    original();
  }else if (id=='trianglify'){
    mosaic.css('background','none');
    $('#trianglify-box').css('visibility','visible');
    trianglify();
  }

});

$('a').on('click', function(e){
  
  var patternCanvas = $('.sparkle-canvas').siblings()[0];
  
  $(this).attr({
    'href':patternCanvas.toDataURL(),
    'download': "mypainting.png"
  });
  
})




generatePalettes();

function generatePalettes(){
  
  palettes.forEach(function(palette,i){

    $("<div class='palette "+palette+"' data-palette="+palette+"></div>").appendTo("#palettes");

    colorItems.forEach(function(colorItem){

      $("<div class='color-item "+colorItem+"'></div>").appendTo("."+palette);
    
      //Making th color-item a square
      var width = $('.color-item').width();
      $('.color-item').css('height', width);
    
    });

  });
  
  $('.palette').click(function(){
    $(this).siblings().css('border','none');
    $(this).css('border','3px solid #484848');
    
    selectedPalette = $(this).data('palette');
    trianglify(selectedPalette);
  });
  
  
}

function start(){
  $('#original').css('background','#E6E6E6');
  $('#settings').click(function(e){
    $('#config').toggleClass('show-slide');
  });
  original();
  config();
}

function original (){
  mosaic.css('background',"url('assets/wall.jpg')");
  sparkle();
  $('#trianglify-box').css('visibility','hidden');
}

function trianglify (){
  
  $("a#download").css('display', 'inline');
  
  mosaic.html('');
 
  sparkle();
  
  var options = {
    height: $(window).height(),
    width: $(window).width(),
    cell_size: $('input#cell-size').slider('getValue'),
    variance: $('input#variance').slider('getValue'),
    x_colors: selectedPalette || 'YlOrBr'
  }

  mosaic.append(Trianglify(options).canvas());
}

function configPaletteSelector(){
  $('input#variance').slider({
    min:0,
    max:1,
    value:0.50,
    precision:2,
    step:0.01
  });

  $('input#cell-size').slider({
    min:10,
    max:400,
    value:100,
    step:5
  });
  
  $('#trianglify-box *').on('slide',function(e){
    trianglify();
  });
}

function config (){
  // configSparkle();
  configPaletteSelector();
}


function sparkle(){
  
  mosaic.html('');
  
  var options = {
    color: "#FFFFFF",
    count: 700,
    overlap: 0,
    speed: 0,
    minSize: 2,
    maxSize: 5,
    direction: "both"
  }
  
  mosaic.sparkle(options);
  mosaic.trigger("start.sparkle");
  
}

// // function configSparkle(){
  
//   $('input#count').slider({
//     min:100,
//     max:1000,
//     value:300,
//     step:10
//   });

//   $('input#speed').slider({
//     min:0,
//     max:10,
//     value:0.5,
//     precision:1,
//     step:0.1
//   });
  
//   $('input#minSize').slider({
//     min:1,
//     max:10,
//     value:2,
//     step:1
//   });
  
//   $('input#maxSize').slider({
//     min:1,
//     max:10,
//     value:4,
//     step:1
//   });
  
//   $('#sparkle *').on('slide',function(e){
//     // console.log('sparkle');
//     sparkle();
//   });
  
 
// }