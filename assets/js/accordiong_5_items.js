  // ====================================== Start Accordiong with 5 items ====================================== //
$(document).ready(function () {
  if ($(".panel")[0]){
    let parent1 = document.getElementById("1");
    let parent2 = document.getElementById("2");
    let parent3 = document.getElementById("3");
    let parent4 = document.getElementById("4");
    let parent5 = document.getElementById("5");

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");

    let pro1 = document.getElementById("pro1");
    let pro2 = document.getElementById("pro2");
    let pro3 = document.getElementById("pro3");
    let pro4 = document.getElementById("pro4");
    let pro5 = document.getElementById("pro5");

    // Global Variables
    var count;
    var sec = 5000;

    function ActivateSection1() {
      $(".progressBar").width(0);
      $(parent1)
        .addClass("activeSection")
        .siblings()
        .removeClass("activeSection");
      $(img1).addClass("active").siblings().removeClass("active");
      $(pro1).animate(
        {
          width: "100%",
        },
        sec,
        "linear",
        function () {
          // Animation complete.
          ActivateSection2();
        }
      );
    }

    function ActivateSection2() {
      $(".progressBar").width(0);
      $(parent2)
        .addClass("activeSection")
        .siblings()
        .removeClass("activeSection");
      $(img2).addClass("active").siblings().removeClass("active");
      $(pro2).animate(
        {
          width: "100%",
        },
        sec,
        "linear",
        function () {
          // Animation complete.
          ActivateSection3();
        }
      );
    }

    function ActivateSection3() {
      $(".progressBar").width(0);
      $(parent3)
        .addClass("activeSection")
        .siblings()
        .removeClass("activeSection");
      $(img3).addClass("active").siblings().removeClass("active");
      $(pro3).animate(
        {
          width: "100%",
        },
        sec,
        "linear",
        function () {
          // Animation complete.
          ActivateSection4();
        }
      );
    }

    function ActivateSection4() {
      $(".progressBar").width(0);
      $(parent4)
        .addClass("activeSection")
        .siblings()
        .removeClass("activeSection");
      $(img4).addClass("active").siblings().removeClass("active");
      $(pro4).animate(
        {
          width: "100%",
        },
        sec,
        "linear",
        function () {
          // Animation complete.
          ActivateSection5();
        }
      );
    }

    function ActivateSection5() {
      $(".progressBar").width(0);
      $(parent5)
        .addClass("activeSection")
        .siblings()
        .removeClass("activeSection");
      $(img5).addClass("active").siblings().removeClass("active");
      $(pro5).animate(
        {
          width: "100%",
        },
        sec,
        "linear",
        function () {
          // Animation complete.
          ActivateSection1() ;
        }
      );
    }

    ActivateSection1();

    // handle accordion  in click
    function handleAccordionClick(id){
      count = id;
      switch (count) {

        case 1:
          $(pro2).stop();
          $(pro3).stop();
          $(pro4).stop();
          $(pro5).stop();
          ActivateSection1();
          break;

        case 2:
          $(pro1).stop();
          $(pro3).stop();
          $(pro4).stop();
          $(pro5).stop();
          ActivateSection2();
          break;

        case 3:
          $(pro1).stop();
          $(pro2).stop();
          $(pro4).stop();
          $(pro5).stop();
          ActivateSection3();
          break;

        case 4:
          $(pro1).stop();
          $(pro2).stop();
          $(pro3).stop();
          $(pro5).stop();
          ActivateSection4();
          break;

          case 5:
            $(pro1).stop();
            $(pro2).stop();
            $(pro3).stop();
            $(pro4).stop();
            ActivateSection5();
            break;
      }
    }

    // handle accordion hover in
    function handleMouseEnter(id){
      switch (id) {
        case 1:
          $(pro1).stop();
          break;
        case 2:
          $(pro2).stop();
          break;
        case 3:
          $(pro3).stop();
          break;
        case 4:
          $(pro4).stop();
          break;
          case 5:
            $(pro5).stop();
            break;
      }
    }

    // handle accordion hover out
    function handleMouseLeave(id){
      switch (id) {
        
        case 1:
          ActivateSection1();
          break;

        case 2:
          ActivateSection2();
          break;

        case 3:
          ActivateSection3();
          break;

        case 4:
          ActivateSection4();
          break;

          case 5:
            ActivateSection5();
            break;

      }
    }

    // =============== On Single Click =============== //
    parent1.addEventListener("click", function () {
      handleAccordionClick(1);
    });
    parent2.addEventListener("click", function () {
      handleAccordionClick(2);
    }); 
    parent3.addEventListener("click", function () {
      handleAccordionClick(3);
    });
    parent4.addEventListener("click", function () {
      handleAccordionClick(4);
    });
    parent5.addEventListener("click", function () {
      handleAccordionClick(5);
    });

    $(parent1)
      .find(".panel")
      .mouseenter(function () {
        handleMouseEnter(1);
      })
      .mouseleave(function () {
        handleMouseLeave(1);
      });

    $(parent2)
      .find(".panel")
      .mouseenter(function () {
        handleMouseEnter(2);
      })
      .mouseleave(function () {
        handleMouseLeave(2);
      });

    $(parent3)
      .find(".panel")
      .mouseenter(function () {
        handleMouseEnter(3);
      })
      .mouseleave(function () {
        handleMouseLeave(3);
      });

    $(parent4)
      .find(".panel")
      .mouseenter(function () {
        handleMouseEnter(4);
      })
      .mouseleave(function () {
        handleMouseLeave(4);
      });

      $(parent5)
      .find(".panel")
      .mouseenter(function () {
        handleMouseEnter(5);
      })
      .mouseleave(function () {
        handleMouseLeave(5);
      });
  }
  // ====================================== End Accordiong with 5 items ====================================== //
});
