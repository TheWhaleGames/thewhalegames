$(function(){
  $(".hero").css("height", $(window).height());

  var resizing;
  if($(window).resize()){
    clearTimeout(resizing);

    resizing = setTimeout(function(){
      $(".hero").css("height", $(window).height());
    }, 500);
  }

  $.easing.def = 'easeOutCubic';

  draw_triangle.drawFirst();
  draw_triangle.drawSecond(); 

  activateMenu.scrollToSection();
  activateMenu.menuColorChange();

  activateEffect.dance();
  activateEffect.hoverEffect();

  if($(window).width() >= 1024) {
    activateEffect.memberProfile();
  }
});
