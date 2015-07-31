var activateMenu = {
  scrollToSection: function(){
    $(".scroll").bind("click", scrollFunction.scrollDown);
    $("ul.global-nav-list li:first").bind("click", scrollFunction.hero);
    $("ul.global-nav-list li:nth-child(2)").bind("click", scrollFunction.works);
    $("ul.global-nav-list li:nth-child(3)").bind("click", scrollFunction.team);
    $("ul.global-nav-list li:nth-child(4)").bind("click", scrollFunction.contact);

    if($(window).width() >= 1024){
      var count = 0;
      $("li:first").css("margin-left", "$base-spacing");
      $("li:nth-child(4)").css("margin-right", "$base-spacing");
      $(".balloon_menu").click(function(){

        if(count%2 == 0) {
        $(".balloon_menu img").removeClass("animation_turnClockwise").addClass("animation_turnAntiClockwise");
          $("ul").removeClass("animation_slideOut").addClass("animation_slideIn");

          $($("ul li").get().reverse()).each(function(index){
            var child = $(this);

            setTimeout(function(){
              child.css("opacity", "0");
            }, index*180);
          });
        }
        else {
        $(".balloon_menu img").removeClass("animation_turnAntiClockwise").addClass("animation_turnClockwise");
          $("ul").removeClass("animation_slideIn").addClass("animation_slideOut");

          $("ul li").each(function(index){
            var child = $(this) ;

            setTimeout(function(){
              child.css("opacity", "1");
            }, index*120);
          });

        }
        count++;
      });
    }
  },

  whileWindowScroll: function(){
    var heroHeight = $(".hero").height() - 20;
    var gradientTop = $("#bk_gradient").offset().top - 20;
    var gradientBottom = gradientTop + $("#bk_gradient").position().top;

    $(window).scroll( function(){
      var scroll = $(window).scrollTop();
      if(scroll >= heroHeight){
        $("li.global-nav-item").css("color", "#787878");

        if(scroll >= gradientTop && scroll < gradientBottom){
          $("li.global-nav-item").css("color", "white");
          $("#service").addClass("animation_slideAppear");
        }
      }
      else {
        $("li.global-nav-item").css("color", "white");
      }
    });
  }
}
