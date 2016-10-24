$(function(){
  console.log("loaded!!");

  //scrolling
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop(); // scrolling var

    $("#name").css({ //scrolling down name
      'transform' : 'translate(0px, '+ wScroll * 0.4 +'%)'
    });

    $("#macBook").css({ //scrolling macbook down
      'transform' : 'translate(0px, '+ wScroll * 0.19 +'%)'
    });

    $("#iMac").css({ //scrolling iMac down
      'transform' : 'translate(0px, '+ wScroll * 0.16 +'%)'
    });

    $("#iPad").css({ //scrolling ipad down
      'transform' : 'translate(0px, '+ wScroll * 0.2 +'%)'
    });

    $("#iPhone").css({ //scrolling iPhone down
      'transform' : 'translate(0px, '+ wScroll * 0.13 +'%)'
    });

    if(wScroll <= 10){
      //tilting iphone back
      $("#iMac").css({
        "transform" : "rotateZ(-3deg)"
      });
      //tilting macbook back
      $("#macBook").css({
        "transform" : "rotateZ(4deg)"
      });
      //tiling iPad back
      $("#iPad").css({
        "transform" : "rotateZ(-4deg)"
      });
      //tiling iPhone back
      $("#iPhone").css({
        "transform" : "rotateZ(3deg)"
      });
    }

    if(wScroll >= $("#aboutMeDiv").offset().top - ($(window).height() / 1.5)) {
      $("#iPad").fadeOut("1"); //fading ipad out
      $("#iPhone").fadeOut("1"); //fading iphone out
      $("#iMac").fadeOut("1"); //fading iMac out
      $("#macBook").fadeOut("1"); //fading macBook out
    }

    if(wScroll === 0) {
      $("#iPad").fadeIn("slow");  //fading ipad back in
      $("#iPhone").fadeIn("slow");  //fading iphone back in
      $("#iMac").fadeIn("slow");
      $("#macBook").fadeIn("slow");
    }


    console.log(wScroll); // console logging where it is scrolling can comment out later
  });
});
