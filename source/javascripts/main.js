$(function(){
  $(".pattern").css("height", $(".people_dancing img").height()*0.7);
  $(".hero").css("height", $(window).height());
});

$(document).ready(function(){
  if(version != 0 && version < 10){
    detect_ie();
  }
  if(version > 8 || version == 0){
    $(window).on('load resize', function(){
      $(".hero").css("height", $(window).height());
      $(".pattern").css("height", $(".people_dancing img").height()*0.7);

      member_count = $('.member > section').length;

      if($(window).width() <= 800){
        $('.people_dancing img').css('display', 'none');
      }
      else if($(window).width() <= 900) {
        $('.people_dancing img').css({
          'display': 'inline-block',
          "width": $(window).width()/(member_count*2.4),
          "height": "auto"
        });
      }
      else
        {
          $('.people_dancing img').css({
          'display': 'inline-block',
            "width": "auto",
            "height": "50px"
          });
        }
      space = $(window).width() - member_count*$('.people_dancing img').width();
      $('.people_dancing img').css('margin', '0 ' + space/(3*member_count) + 'px');

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
