$(function(){
  $(".hero").css("height", $(window).height());
});

$(document).ready(function(){
  $(window).on('load resize', function(){
    $(".pattern").css("height", $(".people_dancing img").height()*0.7);
    if($(window).width() >= 1024) {
      activateEffect.memberProfile();
    }
  });

  draw_triangle.drawFirst();
  draw_triangle.drawSecond(); 

  activateMenu.scrollToSection();
  activateMenu.whileWindowScroll();

  activateEffect.dance();
  activateEffect.hoverEffect();
});
