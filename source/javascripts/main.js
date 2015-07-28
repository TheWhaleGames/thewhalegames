$(function(){
  $(".hero").css("height", $(window).height());

  var resizing;

  if($(window).resize()){
    clearTimeout(resizing);

    resizing = setTimeout(function(){
      $(".hero").css("height", $(window).height());
    }, 500);
  }

  draw_triangle.drawFirst();
  draw_triangle.drawSecond(); 

  activate.dance();
  activate.scrollToSection();
  activate.hoverEffect();
  activate.menuColorChange();


  /*memberProfile possible onely when window width is over 1024px*/
  if($(window).width() >= 1024) {
    activate.memberProfile();
  }
});
