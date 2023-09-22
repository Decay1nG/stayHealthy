"use strict";

// const burger = document.querySelector('.burger__menu');
//
// burger.addEventListener('click', (event) => {
//    burger.closest('.header__container').querySelector('.header__navigation').classList.toggle("header__navigation--active");
// });
//
// // ==========-----------> | | сверху шапка | | <-------------=========
//
// let player = videojs(document.querySelector('.video-js'), {});
const slider = document.querySelector('.program__slider--container');

const sliderOne = new Swiper(slider, {
   direction: 'horizontal',
   slidesPreview: 3,

   navigation: {
      nextEl: '.program__slider--prev',
      prevEl: '.program__slider--next',
   },
});
