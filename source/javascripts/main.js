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

  }, 15000);

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

var works = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#service").offset().top
  }, 1000);
}

var team = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#members").offset().top
  }, 1000);
}

var contact = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#environment #contact").offset().top
  }, 1000);
}

$(function(){

  //MAC에서 '산돌SD고딕'으로 한글 표시 -- check whether or not a valid func
  if(navigator.appVersion.indexOf("Mac") != -1) {
    $(html).css("%base-font-kr", "산돌SD고딕");
  }

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

  var team_height = $("#members").outerHeight(true);
  var join_height = $("#join_us").outerHeight(true);
  var environment_height = $("#environment").outerHeight(true);
  var total_height = team_height + join_height + environment_height;

  $("#trianglify2").css("height", total_height);

  console.log($("#trianglify2").height());

  var pattern2 = Trianglify({
    width : $("canvas#trianglify2").width(), 
    height : $("canvas#trianglify2").height(), 
    cell_size: 300, 
    x_colors: ['#989898', '#91a7ad', '#bfcccf', '#ced8da', '#d9e1e2', '#d9e1e2', '#d9e1e2', '#ced8da', '#ced8da', '#bfcccf', '#91a7ad', '#989898'],
    y_colors: ['#d9e1e2', '#d9e1e2', '#f0f0f0', '#f0f0f0', '#bfcccf', '#91a7ad', '#ffffff']
  });

  var draw_canvas2 = document.getElementById("trianglify2");

  pattern2.canvas(draw_canvas2);

  var pull_down= $("#environment").css("margin-bottom");
  $("#trianglify2").css("bottom", -pull_down);

  $("img.center_logo").css("margin-left", -$('img.center_logo').width()/2);
  $(".vision").css("margin-left", -$('.vision').width()/2);


  $(".people_dancing img:even").addClass("animation_dance").addClass("dance_property");
  $(".people_dancing img:odd").addClass("animation_danceReverse").addClass("dance_property");


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


  $("#button").css("margin-left", -$("#button").width()/2);

  $(".scroll").bind("click", jump);
  $(".arrow").bind("click", jumpDown);
  $(".arrowReverse").bind("click", jumpUp);

  $(".global-nav-item .logo .banner_logo").bind("click", hero);
  $("ul.global-nav-list li:first").bind("click", works);
  $("ul.global-nav-list li:nth-child(2)").bind("click", team);
  $("ul.global-nav-list li:nth-child(3)").bind("click", contact);

  $('#members section').each(function(){
    $($(this).find(".profile img")).click(function(){
      $($($(this).closest(".profile")).find("p")).toggle();
      $($($(this).closest(".profile")).find("#example")).toggle();
    });
  });
});
