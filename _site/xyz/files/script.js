$(function () {
  "use strict";

  // fixed menu js
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 145) {
      $(".header_area").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $(".header_area").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // client slider js
  $(".productivity-carousel").owlCarousel({
    items: 9,
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    nav: false,
    responsive: {
     0: {
        items: 3,
      },
      768: {
          items: 3,
      },
      992: {
          items: 5,
      },
      1200: {
          items: 5,
      },
      1400: {
        items: 7,
      },
      1900: {
        items: 9,
      }
  }
  });



  $(".info_tool_slider").slick({
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000

  });

  //partner slider js
  $(".partner_slider").slick({
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#004499"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon arrow arrow_left icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>',
    nextArrow: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#004499"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon arrow arrow_right icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>',
  });

  $('.partner_arrow_prev').on('click', function () {
    $('.partner_slider').slick('slickPrev');
  });

  $('.partner_arrow_next').on('click', function () {
    $('.partner_slider').slick('slickNext');
  });


  // scroll to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        800
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });















  // Mobile menu js start

  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});