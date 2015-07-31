var activateEffect = {
  dance: function(){
    $(".people_dancing img").each(function(){
      var rand = Math.floor((Math.random() * 10000) + 1000);
      var target_img = $(this);

      $(this).delay(rand).queue(function(){
        $(this).addClass("animation_dance");
      });  

      var count = 0;

      $(this).click(function(e){

        count++;

        if(count%2 == 1) {
          $(this).css("bottom", "5%");
          $(this).addClass("animation_shake");

          $(".hammer").css("display", "inline-block").offset({
            left: e.pageX,
            top: e.pageY - 70
          }).delay(200).queue(function(){
            $(".hammer").css("display", "none");
            $(".hammer_active").css("display", "inline-block").offset({
              left: e.pageX - 20,
              top: e.pageY - 80
            }).delay(200).queue(function(){
              $(".hammer_active").css("display", "none")
              .delay(100).queue(function(){
                target_img.addClass("animation_rocket");
                $(".hammer_active").dequeue();
              });
              $(".hammer_active").dequeue();
            });
            $(".hammer").dequeue();
          });
        }
        else {
          $(this).removeClass("animation_rocket");
          $(this).removeClass("animation_shake");
        }

      });
    });
  },

  hoverEffect: function(){
    $("#join_us div").each(function(){
      $(this).mouseenter(function(){
        var target = $(this);

        target.css({
          "background-color": "#be1e2d",
          "opacity": "1"
        });
        target.children("#title").css("opacity", "0");
        target.children("#join_content").css("opacity", "1");
      })
      .mouseleave(function(){
        var target = $(this);

        target.css({
          "background-color" : "#323232",
          "opacity": ".4"
        });
        target.children("#title").css("opacity", "1");
        target.children("#join_content").css("opacity", "0");
      })
    });
  },

  memberProfile: function(){
    $(".member img").each(function(){
      var idName = "#" + $(this).attr('class');

      if(idName == "#skkwon") {
        $("#example").css({
          "max-height": $(window).height()
        });
      }
      else {
        $("p#content").css({
          "max-height": $(window).height()
        });
      }
      $(idName).children(".profile").css({
        "height" : $(window).height(),
        "width" : 0.5*$(window).width()
      });
      $(idName).children(".black_overlay").css({
        "height" : $(window).height(),
        "width" : $(window).width()
      });

      $(this).bind("click", function(){
        /*display block when clicked*/
        if(idName == "#skkwon") {
          $("#example").css("display", "inline-block");
        }
        else {
          $("p#content").css("display", "inline-block");
        }
        
        $(idName).css("display", "block");

        $(idName).children(".profile").css("display", "block");
        $(idName).children(".black_overlay").css("display", "block");

        /*display none*/
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
  }
}
