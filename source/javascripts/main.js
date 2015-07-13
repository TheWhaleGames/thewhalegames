/* reference :
 * http://stackoverflow.com/questions/9652944/jquery-page-scroll-to-different-page
 */

var jump = function(e) {
  //prevent the "normal" behaviour which would be a "hard" jump
  e.preventDefault();

  console.log("seeMore clicked");
  //Get the target
  var target = $(this);

  //perform animated scrolling
  $('html, body').animate({

    //get top-position of target-element and set it as scroll target
    //scrollTop: $(target).offset().top

    scrollTop : $(target).offset().top

    //scrolldelay: 1 seconds
  }, 1000, function(){
    //attach the hash (#jumptarget) to the pageurl
    location.hash = target;
  });
}

var jumpUp = function(e) {
  console.log("top");
  e.preventDefault();

  var target = $(this);
  //perform animated scrolling
  $('html, body').animate({

    //get top-position of target-element and set it as scroll target
    scrollTop : $(target).parent().prev("section").offset().top - 200

    //scrollTop: $(target).offset().bottom

    //scrolldelay: 1 seconds
  }, 1000, function(){
    //attach the hash (#jumptarget) to the pageurl
    location.hash = target;
  });

}

var jumpDown = function(e) {
  //prevent the "normal" behaviour which would be a "hard" jump
  e.preventDefault();

  console.log("arrow down clicked");
  //Get the target
  var target = $(this);

  //perform animated scrolling
  $('html, body').animate({

    //get top-position of target-element and set it as scroll target

    //scrollTop : $(target.closest("button.arrow")).offset().top

    scrollTop : $(target).parent().next().offset().top - 200

    //scrolldelay: 1 seconds
  }, 1000, function(){
    //attach the hash (#jumptarget) to the pageurl
    location.hash = target;
  });
}

var hero = function(e) {
  e.preventDefault();
  console.log("hero");

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".hero").offset().top
  }, 1000, function(){
    location.hash = target;
  });
}

var team = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#members").offset().top
  }, 1000, function() {
    location.hash = target;
  });
}

var environment = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#environment").offset().top
  }, 1000, function() {
    location.hash = target;
  });
}

var join = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#join_us").offset().top
  }, 1000, function(){
    location.hash = target;
  });
}

$(function(){

  $(".seeMore").bind("click", jump);
  $(".arrow").bind("click", jumpDown);
  $(".arrowReverse").bind("click", jumpUp);
  
  $(".wrap-container .logo-text").bind("click", hero);
  $("ul.global-nav-list li:first").bind("click", team);
  $("ul.global-nav-list li:nth-child(2)").bind("click", environment);
  $("ul.global-nav-list li:nth-child(3)").bind("click", join);

  $('#members section').each(function(){
    console.log("show profile");

    $($(this).find(".profile img")).click(function(){
      $($($(this).closest(".profile")).find("p")).toggle();
      $($($(this).closest(".profile")).find("#example")).toggle();
    });
  });
});
