$(function(){
  $(".hero").css("height", $(window).height());

  draw_triangle.drawFirst();
  draw_triangle.drawSecond(); 

  activate.dance();
  activate.scrollToSection();
  activate.hoverEffect();
  activate.menuColorChange();

  if($(window).resize()){
    $(".hero").css("height", $(window).height());
  }

  /*memberProfile possible onely when window width is over 1024px*/
  if($(window).width() >= 1024) {
    activate.memberProfile();
  }
});
