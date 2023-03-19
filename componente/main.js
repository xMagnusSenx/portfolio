$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up-btn").fadeIn();
    } else {
      $(".scroll-up-btn").fadeOut();
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 10);
    return false;
  });
});


var typed = new Typed(".typing", {
    strings: ["Magram", "frontend entwickler",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
var typed = new Typed(".typing-2", {
    strings: ["Ich heiße: Magram Zijaev","ich bin: 26 jahre alt"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });



  

 
  