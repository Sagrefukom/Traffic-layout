//BURGER
const burger = document.querySelector('.burger__button-item');
const nav = document.querySelector('.nav');

if (burger) {
  burger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
    nav.classList.toggle('nav--burger');
  });
}
//BURGER

//SWIPER
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
//SWIPER