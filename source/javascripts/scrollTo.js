var scrollFunction = function(){

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
      scrollTop : $("#bk_gradient").offset().top
    }, 500);
  }

  var jump2team = function(){
    $('html, body').animate({
      scrollTop : $("#members").offset().top-100
    }, 500);
  }

  var jump2contact = function(){
    $('html, body').animate({
      scrollTop : $("#map").offset().top
    }, 500);
  }

  return {
    scrollDown: scrollDown,
    hero: jump2hero,
    works: jump2works,
    team: jump2team,
    contact: jump2contact
  }
}();
