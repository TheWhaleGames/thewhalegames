$(function(){
  $(".hero").css("height", $(window).height());

  $(window).resize(function(){
    $(".hero").css("height", $(window).height());
  });

  draw_triangle.drawFirst();
  draw_triangle.drawSecond(); 

  activate.dance();
  activate.scrollToSection();
  activate.hoverEffect();
  activate.menuColorChange();

  /*resize memberProfile screen when window resize*/
  if($(window).width() >= 1024) {
    activate.memberProfile();
  }
});
