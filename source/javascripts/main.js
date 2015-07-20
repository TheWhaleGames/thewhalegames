var activate = {
  dance: function(){
    $(".people_dancing img").each(function(){
      var rand = Math.floor((Math.random() * 10000) + 1000);

      $(this).delay(rand).queue(function(){
        $(this).addClass("animation_dance").addClass("dance_property");
      });  
    });
  },

  scrollToSection: function(){
    $(".scroll").bind("click", scrollFunction.scrollDown);
    $("ul.global-nav-list li:first").bind("click", scrollFunction.hero);
    $("ul.global-nav-list li:nth-child(2)").bind("click", scrollFunction.works);
    $("ul.global-nav-list li:nth-child(3)").bind("click", scrollFunction.team);
    $("ul.global-nav-list li:nth-child(4)").bind("click", scrollFunction.contact);
    $("button.slide_menu").bind("click", scrollFunction.slide);
  },

  adjustPlacement: function(){
    $("#join_us div").each(function(){
      if(this.class != "resposibility")
        {
          $($(this).children("p#content")).css("margin-top", -0.7*$($(this).children("p#content")).height());
        }
        else {
          $($(this).children("p#content")).css("margin-top", -0.9*$($(this).children("p#content")).height());

        }
    });

    $("img.center_logo").css("margin-left", -$('img.center_logo').width()/2);
    $("img.center_logo").css("margin-top", -$('img.center_logo').height());
    $(".vision").css("margin-left", -$('.vision').width()/2);
  },

  hoverEffect: function(){
    $("#join_us div").each(function(){
      $(this).mouseenter(function(){
        var target = $(this);

        target.css("background-color", "#a32c2c");
        target.children("#head").css("opacity", "0");
        target.children("#content").css("opacity", "1");
      })
      .mouseleave(function(){
        var target = $(this);

        target.css("background-color", "#bbb");
        target.children("#head").css("opacity", "1");
        target.children("#content").css("opacity", "0");
      })
    });
  },

  memberProfile: function(){
    $("#members img").each(function(){
      $(this).bind("click", function(){
        //window.open("", $(this).attr('class'), "fullscreen=1", "true");
      });
    });
    //$('#members section').each(function(){
      //$($(this).find(".profile img")).click(function(){
        //$($($(this).closest(".profile")).find("p")).toggle();
        //$($($(this).closest(".profile")).find("#example")).toggle();
      //});
    //});
  }
}

var scrollFunction = function(){
  var slide = function(){
    $("ul").fadeToggle("slow", "linear");
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

    console.log(img_height);

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
  activate.adjustPlacement();
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
      }
    }
    else {
      $("li.global-nav-item").css("color", "white");
    }
  });

});
