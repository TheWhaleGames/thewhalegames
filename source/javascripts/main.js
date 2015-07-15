/* reference :
 * http://stackoverflow.com/questions/9652944/jquery-page-scroll-to-different-page
 */

var jump = function(e) {
  e.preventDefault();

  $('html, body').animate({

    scrollTop : $("header.hero").height()

  }, 500);
}

var jumpUp = function(e) {
  e.preventDefault();

  var target = $(this);
  $('html, body').animate({

    scrollTop : $(target).parent().prev("section").offset().top - 200

  }, 500);

}

var jumpDown = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({

    scrollTop : $(target).parent().next().offset().top - 200

  }, 500);
}

var hero = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".hero").offset().top
  }, 1000);
}

var team = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#members").offset().top
  }, 1000);
}

var environment = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#environment").offset().top
  }, 1000);
}

var join = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#join_us").offset().top
  }, 1000);
}

$(function(){

  //canvas : HTML5
  //old vers. IE에서 HTML5 지원 안되는데 이런 경우에 대한 처리 -> image 삽입 or polyfill?
  //src :  http://www.yjn.kr/bbs/board.php?bo_table=prog_html&wr_id=771

  var pattern = Trianglify({
    width : $("canvas").outerWidth(), height : $("body").height()
  });

  pattern.canvas(document.getElementById("trianglify"));

  //$(".container section").css("opacity", "0");

  $(window).scroll(function(){
    
    //$(".container section").animate({
      //opacity : "1"
    //}, 20000);

    //src : www.ordinarycoder.com/jquery-fade-content-scroll

    $(".container section").each(function(){
      if(this.id == "members"){
        $(".container section#members section").each(function(){
          $(this).addClass("fadeInBlock");
        });
      }
      else {
        $(this).addClass("fadeInBlock");
      }
    });

    $(".fadeInBlock").each(function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      //adjust the added number to either have a delay of that the content starts fading a bit before you reach it
      bottom_of_window = bottom_of_window + 200;

      if(bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity' : '1'}, 1000);
      }
    })
  });

  $(".seeMore").bind("click", jump);
  $(".arrow").bind("click", jumpDown);
  $(".arrowReverse").bind("click", jumpUp);
  
  $(".wrap-container .logo-text").bind("click", hero);
  $("ul.global-nav-list li:first").bind("click", team);
  $("ul.global-nav-list li:nth-child(2)").bind("click", environment);
  $("ul.global-nav-list li:nth-child(3)").bind("click", join);

  $('#members section').each(function(){
    $($(this).find(".profile img")).click(function(){
      $($($(this).closest(".profile")).find("p")).toggle();
      $($($(this).closest(".profile")).find("#example")).toggle();
    });
  });

  /*
  * source : jsfiddle.net/tcloninger/e5qad/
  */

});
