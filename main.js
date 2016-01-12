var mosaic = $('#mosaic');
var palettes = ['YlGn','YlGnBu','GnBu','BuGn','PuBuGn','PuBu','BuPu','RdPu','PuRd','OrRd','YlOrRd','YlOrBr','Purples','Blues','Greens','Oranges','Reds','Greys','PuOr','BrBG','PRGn','PiYG', 'RdBu','RdGy','RdYlBu','Spectral','RdYlGn'];
var colorItems = ['q0-9','q1-9','q2-9','q3-9','q4-9','q5-9','q6-9','q7-9','q8-9']; 

$('input').slider();

$('button').click(function (e) {
  e.preventDefault();
  mosaic.html('');
  
  $(this).css('background','#E6E6E6');
  $(this).siblings().css('background','white');
  
  var id = $(this).get(0).id;

  if(id=='original'){
    original();
  }else if (id=='trianglify'){
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
  
  
}


function original (){
  mosaic.css('background',"url('assets/wall.jpg')");
}

function trianglify (){
  mosaic.css('background','royalblue');
}