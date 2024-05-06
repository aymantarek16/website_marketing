$(document).ready(function () {
       // add calss header__solutions when scroll
       $(window).scroll(function () {
        if ($(this).scrollTop() < 1) {
          $(".header").addClass("header__solutions");
        } else {
          $(".header").removeClass("header__solutions");
        }
      });
});
