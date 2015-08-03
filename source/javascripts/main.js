function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE");

  if(msie > 0)
    return parseInt(ua.substring(msie+5, ua.indexOf(".", msie)));
  else
    return 0;
}

$(function(){
  var version = msieversion();
  console.log(version);

  if(version < 10 && version > 4){
    alert("IE10 이상 또는 다른 브라우저를 이용해주십시오.");
    $("#service").css("opacity", "1");
  }

  $(".hero").css("height", $(window).height());
});

$(document).ready(function(){
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
});
