$(document).ready(function(){
  if(version != 0 && version < 10){
    detect_ie();
  }
  if(version > 8 || version == 0){
    $(window).on('load resize', function(){
      $(".hero").css("height", $(window).height());
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
  }
});
