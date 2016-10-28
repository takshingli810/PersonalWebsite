$(function(){
  console.log("loaded!!");
  //global variable
  var $hello = $("<h1 id='hello'>Hello World!</h1>"); //For hello animation

  //scrolling
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop(); // scrolling var

    console.log(wScroll); // console logging where it is scrolling

    //calling functions
    parallaxIntro();
    scrollOffset();


    //parallax for intro
    function parallaxIntro(){
      $("#name").css({ //scrolling down name
        'transform' : 'translate(0px, '+ wScroll * 0.4 +'%)'
      });

      $("#macBook").css({ //scrolling macbook down
        'transform' : 'translate(0px, '+ wScroll * 0.2 +'%)'
      });

      $("#iPhone").css({ //scrolling iPhone down
        'transform' : 'translate(0px, '+ wScroll * 0.24 +'%)'
      });

      //resetting rotation for intro
      if(wScroll <= 50){

        $("#macBook").css({
          "transform" : "rotateZ(4deg)"
        });

        $("#iPhone").css({
          "transform" : "rotateZ(-5deg)"
        });
      }
    }

    //offset animation
    function scrollOffset() {
      if (wScroll >= $("#aboutMeDiv").offset().top - ($(window).height() * 0.5)) {
        $("#macBook").hide("1"); //fading macBook out
        $("#iPhone").hide("1"); //fading iphone out
        $("#name").fadeOut("4000");

        $($hello).appendTo("#aboutMeDiv")
                 .animate({
                   top: '400px',
                   left: '500px',
                   opacity: '1',
                   height: '1000px',
                   width: '1000px',
                   fontSize: '100px'
                 }, 500);
      }
      else if (wScroll < $("#aboutMeDiv").offset().top - ($(window).height() / 8)) {
        $("#macBook").fadeIn("slow");
        $("#iPhone").fadeIn("slow");  //fading iphone back in
        $("#name").fadeIn("slow");
        $("#hello").remove();


      }
    }

});


}); //closing bracket for onload
