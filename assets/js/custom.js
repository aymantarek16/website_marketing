// ================================================== js ================================================== //
 
// ======================================= jquery ======================================= //
$(document).ready(function () {
  AOS.init({ duration: 1000 });

  // add calss header__fixed when scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 72) {
      $(".header").addClass("header__fixed");
    } else {
      $(".header").removeClass("header__fixed");
    }
  });

  // change navbar links color to dimed when hover on sibling

  $(".header .navbar .navbar-nav .nav-item").hover(function () {
    $(this).siblings().toggleClass("dimed");
  });
  // change header theme when scroll
  const body = document.querySelector("body");

  function handleWindowScroll() {
    const sections = document.querySelectorAll("section");
    for (const sec of sections) {
      let att = sec.getAttribute("data-theme");
      if (
        att == "dark" &&
        sec.getBoundingClientRect().top <= 0 &&
        sec.clientHeight >= 0
      ) {
        body.classList.add("header-dark");
      } else if (
        att == "light" &&
        sec.getBoundingClientRect().top <= 0 &&
        sec.clientHeight >= 0
      ) {
        body.classList.remove("header-dark");
      }
    }
  }
  window.addEventListener("scroll", handleWindowScroll , false);

  if ($(".product-features--sticky")[0]) {
    // fixed image while scroll product features

    let features = document.getElementsByClassName("3product-features--item");

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= 400;
    }

    function handleFeaturesScroll() {
      for (let i = 0; i < features.length; i++) {
        if (isInViewport(features[i])) {
          $(document.querySelectorAll(`[data-id= ${features[i].id}]`)[0])
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      }
    }

    window.addEventListener("scroll", handleFeaturesScroll, false);
  }

  $(".our__success .successSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    dotes : true,
    autoplay: true,
    autoplaySpeed: 7000000, 
    // rtl:true
    // centerPadding: '60px',
  });

  if ($(".slider-wrapper")[0]) {
    var time = 2;
    var $bar, $slick, isPause, tick, percentTime;

    $slick = $(".slider");
    $slick.slick({
      arrows: false,
      speed: 1200,
      adaptiveHeight: false,
    });

    $bar = $(".slider-progress .progress");

    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 30);
    }

    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
          width: percentTime + "%",
        });
        if (percentTime >= 100) {
          $slick.slick("slickNext");
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      $bar.css({
        width: 0 + "%",
      });
      clearTimeout(tick);
    }

    startProgressbar();

    $(".slick-next, .slick-prev").click(function () {
      startProgressbar();
    });
  }
});
