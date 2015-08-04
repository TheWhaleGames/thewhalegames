function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0)      // If Internet Explorer, return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
  else                 // If another browser, return 0
    return 0;
}

var version = msieversion();

if(version < 10 && version != 0)
    alert("IE10 이상 또는 다른 브라우저를 이용해주십시오.");

$(function(){
  $(".hero").css("height", $(window).height());
});

$(document).ready(function(){

  if(version != 0 && version < 10){
    $("#service").css("opacity", "1");
    $(".people_dancing img").css({
      "margin-right": "9%",
      "bottom": "7%"
    });
  }

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
