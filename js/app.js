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
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  $(document).ready(function () {
    $('.header__menu-burger').click(function () {
      $('.header__menu-burger').toggleClass('menu__open');
      $('.menu').toggleClass('menu__open');
    });
  });
});