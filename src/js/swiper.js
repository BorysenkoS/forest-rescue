import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
  centeredSlides: true,
});

const nextButton = document.querySelector('.swiper-button-next');
nextButton.addEventListener('click', () => {
  swiper.slideNext();
});

const prevButton = document.querySelector('.swiper-button-prev');
prevButton.addEventListener('click', () => {
  swiper.slidePrev();
});
