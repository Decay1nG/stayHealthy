"use strict";

const burger = document.querySelector('.burger__menu');

burger.addEventListener('click', (event) => {
   burger.closest('.header__container').querySelector('.header__navigation').classList.toggle("header__navigation--active");
});

// ==========-----------> | | сверху шапка | | <-------------=========

let player = videojs(document.querySelector('.video-js'), {});

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        720: {
            pagination: {
                el: '',
            },
        },
        560: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                slidesPerView: 3,
            },
        },

        200: {
            slidesPerView: 2,
        }

    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});
