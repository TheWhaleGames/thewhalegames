var activate = {
  dance: function(){
    $(".people_dancing img").each(function(){
      var rand = Math.floor((Math.random() * 10000) + 1000);

      $(this).delay(rand).queue(function(){
        $(this).addClass("animation_dance");
      });  

      var count = 0;

      $(this).click(function(){
        console.log('clicked');

        count++;

        if(count%2 == 1) {
          $(this).css("bottom", "5%");
          $(this).addClass("animation_shake");
        }
        else {
          $(this).removeClass("animation_shake");
        }
      });
    });
  },

  scrollToSection: function(){
    $(".scroll").bind("click", scrollFunction.scrollDown);
    $("ul.global-nav-list li:first").bind("click", scrollFunction.hero);
    $("ul.global-nav-list li:nth-child(2)").bind("click", scrollFunction.works);
    $("ul.global-nav-list li:nth-child(3)").bind("click", scrollFunction.team);
    $("ul.global-nav-list li:nth-child(4)").bind("click", scrollFunction.contact);

    if($(window).width() >= 1024){
      var count = 0;
      $(".moving_menu").click(function(){
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

  hoverEffect: function(){
    $("#join_us div").each(function(){
      $(this).mouseenter(function(){
        var target = $(this);

        target.css({
          "background-color": "#a32c2c",
          "opacity": "1"
        });
        target.children("#head").css("opacity", "0");
        target.children("#join_content").css("opacity", "1");
      })
      .mouseleave(function(){
        var target = $(this);

        target.css({
          "background-color" : "#bbb",
          "opacity": ".7"
        });
        target.children("#head").css("opacity", "1");
        target.children("#join_content").css("opacity", "0");
      })
    });
  },

  memberProfile: function(){
    $(".member img").each(function(){
      $(this).bind("click", function(){
        var idName = "#" + $(this).attr('class');

        if(idName == "#skkwon") {
          var content_height= $("#example").outerHeight(true);
          $("#example").css({
            "max-height": $(window).height(),
            "display": "inline-block"
          });
        }
        else {
          var height = -$(this).height();
          $("p#content").css({
            "max-height": $(window).height(),
            "display": "inline-block"
          });
        }

        $(idName).css("display", "block");
        $(idName).children(".profile").css({
          "height" : $(window).height(),
          "width" : 0.5*$(window).width(),
          "display": "block"
        });

        $(idName).children(".black_overlay").css({
          "height" : $(window).height(),
          "width" : $(window).width(),
          "display" : "block"
        });

        /*when window resize, get new window height for the profiles*/
        $(window).resize(function(){
          if(idName == "#skkwon") {
            var content_height= $("#example").outerHeight(true);
            $("#example").css({
              "max-height": $(window).height(),
            });
          }
          else {
            var height = -$(this).height();
            $("p#content").css({
              "max-height": $(window).height(),
            });
          }

          $(idName).css("display", "block");
          $(idName).children(".profile").css({
            "height" : $(window).height(),
            "width" : 0.5*$(window).width(),
          });

          $(idName).children(".black_overlay").css({
            "height" : $(window).height(),
            "width" : $(window).width(),
          });
        });

        /*block display none*/
        $(idName).children(".profile").bind("click", function(){
          $(idName).css("display", "none");
          $(this).css("display", "none");
          $(idName).children(".black_overlay").css("display", "none");
          $("#example").css("display", "none");
          $("p#content").css("display", "none");
        });

        $(idName).children(".black_overlay").bind("click", function(){
          $(idName).css("display", "none");
          $(this).css("display", "none");
          $(idName).children(".profile").css("display", "none");
          $("#example").css("display", "none");
          $("p#content").css("display", "none");
        });
      });
    });
  },

  menuColorChange : function(){
    var heroHeight = $(".hero").height();
    var gradientTop = $("#bk_gradient").offset().top;
    var gradientBottom = gradientTop + $("#bk_gradient").position().top;

    $(window).scroll( function(){
      var scroll = $(window).scrollTop();
      if(scroll > heroHeight){
        $("li.global-nav-item").css("color", "black");

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
