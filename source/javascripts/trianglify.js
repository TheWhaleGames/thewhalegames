var draw_triangle = {
  drawFirst: function() {
    var pattern = Trianglify({
      width : $("canvas#trianglify").width(), 
      height : $("canvas#trianglify").height(), 
      cell_size: 300, 
      x_colors: ['#bfcccf', '#ced8da', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'], 
      y_colors: ['#91a7ad','#bfcccf', '#ced8da', '#ffffff', '#ffffff', '#ffffff'], 
      variance: 1
    });

    var draw_canvas = document.getElementById("trianglify");
    pattern.canvas(draw_canvas);
  },

  drawSecond: function() {
    $(window).on('load resize', function(){
      var img_height =  $("#members").outerHeight(true) + $("#join_us").outerHeight(true) + $("#environment").outerHeight(true);
      var img_width = $(window).outerWidth(true);
      
      $("#trianglify2 img").css("height", img_height);
      $("#trianglify2 img").css("width", img_width);
    });
  }
}
