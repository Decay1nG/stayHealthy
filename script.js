"use strict";

const burger = document.querySelector('.burger__menu');

burger.addEventListener('click', (event) => {
   burger.closest('.header__container').querySelector('.header__navigation').classList.toggle("header__navigation--active");
});

// ==========-----------> | | сверху шапка | | <-------------=========

let player = videojs(document.querySelector('.video-js'), {
   breakpoints: {
      medium: 500
   }
});
player.breakpoints(true);

