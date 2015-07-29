var scrollFunction = function(){

  var scrollDown = function() {
    var jumpHeight = $("header.hero").height() + $(".deco_end").height();

    $('html, body').animate({

      scrollTop : jumpHeight

    }, 1000);
  }

  var jump2hero = function(){
    $('html, body').animate({
      scrollTop : $(".hero").offset().top
    }, 2000);
  }

  var jump2works = function(){
    $('html, body').animate({
      scrollTop : $(".container section#service").offset().top
    }, 1500);
  }

  var jump2team = function(){
    $('html, body').animate({
      scrollTop : $(".container section#members").offset().top
    }, 1500);
  }

  var jump2contact = function(){
    $('html, body').animate({
      scrollTop : $("#map").offset().top
    }, 1500);
  }

  return {
    scrollDown: scrollDown,
    hero: jump2hero,
    works: jump2works,
    team: jump2team,
    contact: jump2contact
  }
}();
