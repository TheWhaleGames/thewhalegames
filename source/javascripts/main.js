var activate = {
  dance: function(){
    $(".people_dancing img").each(function(){
      var rand = Math.floor((Math.random() * 10000) + 1000);

      $(this).delay(rand).queue(function(){
        $(this).addClass("animation_dance");
      });  

      var count = 0;

      $(this).click(function(){
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
    $(".moving_menu").bind("click", scrollFunction.slide);
  },

  hoverEffect: function(){
    $("#join_us div").each(function(){
      $(this).mouseenter(function(){
        var target = $(this);

        target.css("background-color", "#a32c2c");
        target.children("#head").css("opacity", "0");
        target.children("#join_content").css("opacity", "1");
      })
      .mouseleave(function(){
        var target = $(this);

        target.css("background-color", "#bbb");
        target.children("#head").css("opacity", "1");
        target.children("#join_content").css("opacity", "0");
      })
    });
  },

  memberProfile: function(){
    $(".member img").each(function(){
      $(this).bind("click", function(){
        var idName = "#" + $(this).attr('class');

        //resolution of p#content: #skkwon | #{other_members}
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

        //block display
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

        //block display none
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

var scrollFunction = function(){

  var slide = function(){
    $("ul").toggle("blind");

    if($("#slide_bar").css("left") <= "29.5px"){
      $("#slide_bar").css({
        "top": "22px",
        "left": "31px",
        "-webkit-transform" : "rotate(-90deg)",
        "-moz-transform" : "rotate(-90deg)",
        "transform" : "rotate(-90deg)"
      });
    }
    else {
      $("#slide_bar").css({
        "top": "23.5px",
        "left": "29.5px",
        "-webkit-transform" : "rotate(0deg)",
        "-moz-transform" : "rotate(0deg)",
        "transform" : "rotate(0deg)"
      });
    }
  }

  var scrollDown = function() {
    var jumpHeight = $("header.hero").height() + $(".deco_end").height();

    $('html, body').animate({

      scrollTop : jumpHeight

    }, 500);
  }

  var jump2hero = function(){
    $('html, body').animate({
      scrollTop : $(".hero").offset().top
    }, 500);
  }

  var jump2works = function(){
    $('html, body').animate({
      scrollTop : $(".container section#service").offset().top
    }, 1000);
  }

  var jump2team = function(){
    $('html, body').animate({
      scrollTop : $(".container section#members").offset().top
    }, 1000);
  }

  var jump2contact = function(){
    $('html, body').animate({
      scrollTop : $(".container section#environment #contact").offset().top
    }, 1000);
  }

  return {
    slide: slide,
    scrollDown: scrollDown,
    hero: jump2hero,
    works: jump2works,
    team: jump2team,
    contact: jump2contact
  }
}();

var draw_triangle = {
  drawFirst: function() {
    var pattern = Trianglify({
      width : $("canvas#trianglify").width(), 
      height : $("canvas#trianglify").height(), 
      cell_size: 300, 
      x_colors: ['#bfcccf', '#ced8da', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'], 
      y_colors: ['#91a7ad','#bfcccf', '#ced8da', '#ffffff', '#ffffff', '#ffffff'], 
      variance: 1
    });

    var draw_canvas = document.getElementById("trianglify");
    pattern.canvas(draw_canvas);
  },

  drawSecond: function() {
    var img_height =  $("#gradient").outerHeight(true) + $("#members").outerHeight(true) + $("#join_us").outerHeight(true) + $("#environment").outerHeight();

    $("#trianglify2 img").css("height", img_height);
  }
}

$(function(){

  $(".hero").css("height", $(window).height());
  $(window).resize(function(){
    $(".hero").css("height", $(window).height());
  });

  draw_triangle.drawFirst();
  draw_triangle.drawSecond(); 

  activate.dance();
  activate.scrollToSection();
  activate.hoverEffect();
  activate.memberProfile();

  var heroHeight = $(".hero").height();
  var gradientTop = $("#bk_gradient").offset().top;
  var gradientBottom = gradientTop + $("#bk_gradient").position().top;
  $(window).scroll( function(){

    if($(window).scrollTop() > heroHeight){
      $("li.global-nav-item").css("color", "black");

      if($(window).scrollTop() > gradientTop && $(window).scrollTop() < gradientBottom){
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

});
