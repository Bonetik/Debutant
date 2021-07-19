"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); //slider

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 0
      },
      "@0.65": {
        slidesPerView: 2,
        spaceBetween: 20
      },
      "@0.95": {
        slidesPerView: 3,
        spaceBetween: 10
      },
      "@1.15": {
        slidesPerView: 4,
        spaceBetween: 15
      },
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 25
      },
      "@1.70": {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  });
  $(document).ready(function () {
    $('.header__menu-burger').click(function () {
      $('.header__menu-burger').toggleClass('menu__open');
      $('.header__menu').toggleClass('menu__open');
    });
  });
});