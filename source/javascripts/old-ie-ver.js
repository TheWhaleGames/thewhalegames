function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0)      
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
  else            
    return 0;
}

var version = msieversion();

function detect_ie() {
  if(version < 10 && version != 0){
    alert("IE10 이상 또는 다른 브라우저를 이용해주십시오.");
  }

  if(version == 9){
    $(".people_dancing img").css({
      "margin-right": "9%",
      "bottom": "7%"
    });
    $("#service").css("opacity", "1");
  }
  else if(version != 0 && version < 9){
    $('.gradient').css({
      "height": "800px",
      "background-color": "#ab4375",
      "color": "white",
      "text-align": "center",
    });
    $('.people_dancing').css({
      "background-color": "#ab4375",
      "text-align": "center"
    });


    $(".people_dancing img").css({
      "margin-right": "3%",
      "width": "3%",
      "bottom": "0"
    });

    $(".center_logo").attr("src", "../images/mainlogo.png").css("margin-top", "300px");
    $(".content").css({
      "margin-bottom": "100px"
    });
    
    $(".rocket").attr("src", "../images/roket.png").css("margin-top", "500px");
    $(".bulb").attr("src", "../images/bulb.png");
    $('.chinaflag').attr('src', "../images/chinaflag.png").css("margin-top", "200px");
    $('.clock').attr("src", "../images/clock.png");
    $('.health').attr('src', '../images/health.png');
    $('.coffee').attr('src', '../images/coffee.png');
    $('.cookie').attr('src', '../images/cookie.png');
    $('.monitor').attr('src', '../images/monitor.png');

    $("#bk_gradient").css("margin-top", "500px");
    $(".phone.L, .phone.R").css("margin-bottom", "50px");
    $("#china_intro").css("margin-bottom", "0");

    $(".member img").css("width", "5%");

    $(".communication, .responsibility, .value").css({
      "display": "inline-block",
      "vertical-align": "top",
      "margin" : "300px 50px",
      "border": "1px solid black",
      "height": "335px",
      "width": "25%"
    }).children("#title").css({
      "margin": "0",
      "position": "relative",
      "top": "10%",
      "font-weight": "700"
    });

    $(".communication, .value").children("#join_content").css({
      "margin": "0",
      "position": "relative",
      "top": "20%"
    });

    $(".responsibility #join_content").css({
      "margin": "0",
      "position": "relative",
      "top": "30%"
    });

    $(".time, .facility, .coffee, .cookie, .employees").css({
      "display": "inline-block",
      "margin-right": "50px",
      "margin-bottom": "200px",
      "vertical-align": "top"
    }).children("img").css("margin", "0");

    $("#contact").css({
      "display": "inline-block",
      "padding": "10px 40px",
      "border": "1px solid gray",
      "margin-top": "50px",
      "margin-bottom": "100px"
    });

    $(".detail").css("display", "none");
    $(".global-nav").css("display", "none");
    $(".wrap_right #balloon").css("display", "none");
    $(".hammer").css("display", "none");
    $(".hammer_active").css("display", "none");
    $(".black_overlay").css("display", "none");
    $(".profile").css("display", "none");
    $("#trianglify2 img").css("display", "none");
  }
}
