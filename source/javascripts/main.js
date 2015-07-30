$(function(){
  $(".hero").css("height", $(window).height());

  $(window).on('load resize', function(){

    $(".hero").css("height", $(window).height());

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
