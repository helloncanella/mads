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
  $('#trianglify-box').css('visibility','hidden');
}

function trianglify (){
  mosaic.html('');
 
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
  configPaletteSelector()
}