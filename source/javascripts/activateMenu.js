var activateMenu = {
  scrollToSection: function(){
    $(".scroll").bind("click", scrollFunction.scrollDown);
    $("ul.global-nav-list li:first").bind("click", scrollFunction.hero);
    $("ul.global-nav-list li:nth-child(2)").bind("click", scrollFunction.works);
    $("ul.global-nav-list li:nth-child(3)").bind("click", scrollFunction.team);
    $("ul.global-nav-list li:nth-child(4)").bind("click", scrollFunction.contact);

    if($(window).width() >= 1024){
      var count = 0;
      $(".balloon_menu").click(function(){
        $("#hamburger").toggleClass("active");


        if(count%2 == 0) {
          $("ul").removeClass("animation_slideOut").addClass("animation_slideIn");

          $($("ul li").get().reverse()).each(function(index){
            var child = $(this);

            setTimeout(function(){
              child.css("opacity", "0");
            }, index*175);
          });
        }
        else {
          $("ul").removeClass("animation_slideIn").addClass("animation_slideOut");

          $("ul li").each(function(index){
            var child = $(this) ;

            setTimeout(function(){
              child.css("opacity", "1");
            }, index*170);
          });

        }
        count++;
      });
    }
  },

  menuColorChange : function(){
    var heroHeight = $(".hero").height();
    var gradientTop = $("#bk_gradient").offset().top;
    var gradientBottom = gradientTop + $("#bk_gradient").position().top;

    $(window).scroll( function(){
      var scroll = $(window).scrollTop();
      if(scroll > heroHeight){
        $("li.global-nav-item").css("color", "#787878");

        if(scroll > gradientTop && scroll < gradientBottom){
          $("li.global-nav-item").css("color", "white");
          $("#service").animate({
            opacity: "1",
            "margin-top": "15%"
          }, 2000);
        }
      }
      else {
        $("li.global-nav-item").css("color", "white");
      }
    });
  }
}
