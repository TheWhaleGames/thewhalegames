var activateEffect = {
  dance: function(){
    $(".people_dancing img").each(function(){
      var rand = Math.floor((Math.random() * 10000) + 1000);

      $(this).delay(rand).queue(function(){
        $(this).addClass("animation_dance");
      });  

      var count = 0;

      $(this).click(function(e){

        console.log("click");

        count++;

        if(count%2 == 1) {
          $(this).css("bottom", "5%");
          $(this).addClass("animation_shake");

          $(".hammer").css("display", "inline-block").offset({
            left: e.pageX,
            top: e.pageY - 70
          }).delay(200).queue(function(){

            console.log("delay!");
            $(".hammer").css("display", "none");
            $(".hammer_active").css("display", "inline-block").offset({
              left: e.pageX,
              top: e.pageY - 70
            }).delay(200).queue(function(){
              $(".hammer_active").css("display", "none");
            });
          });
        }
        else {
          $(this).removeClass("animation_shake");
        }

      });

      //$(this).click(function(){
      //count++;

      //if(count%2 == 1) {
          //$(this).css("bottom", "5%");
          //$(this).addClass("animation_shake");
        //}
        //else {
          //$(this).removeClass("animation_shake");
        //}
      //});
    });
  },

  //hammering: function(){
    //$(".hammer").bind("click", function(){
      //activateEffect.hammer_follow();
      //});

  //},

  //hammer_follow: function(){

    //$(".people_dancing img").each(function(){
      //$(this).click(function(){
        //$(this).data('clicked', true);
      //});
    //});

    //$(window).mousemove(function(e){
      //$(".hammer").offset({
        //left: e.pageX+10,
        //top: e.pageY-50
      //});

      //$(".people_dancing img").each(function(){
        //if($(this).data('clicked')){
          //$(this).css("bottom", "5%");
          //$(this).addClass("animation_shake");

          //console.log("clicked");
          //$(this).data('clicked', false);
        //}
      //});
    //});
  //},

  hoverEffect: function(){
    $("#join_us div").each(function(){
      $(this).mouseenter(function(){
        var target = $(this);

        target.css({
          "background-color": "#a32c2c",
          "opacity": "1"
        });
        target.children("#title").css("opacity", "0");
        target.children("#join_content").css("opacity", "1");
      })
      .mouseleave(function(){
        var target = $(this);

        target.css({
          "background-color" : "#bbb",
          "opacity": ".7"
        });
        target.children("#title").css("opacity", "1");
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
  }
}
