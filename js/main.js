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
new Swiper('.slider-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,


  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  observer: true,
  observParents: true,
  observSlideChildren: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
 new Swiper('.games__swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: 1.5,
  spaceBetween: 20,

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.games__swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
  observSlideChildren: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    }
  }

});
new Swiper('.type__slider-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: 1.5,
  spaceBetween: 30,

  // centeredSlides: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.type__slider-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  observer: true,
  observeParents: true,
  observSlideChildren: true,

});
new Swiper('.racing__swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: 1.5,
  spaceBetween: 30,

  // centeredSlides: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.racing__swiper-pagination',
    clickable: true,
  },
  observer: true,
  observParents: true,
  observSlideChildren: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

});
//SWIPER

//TABS
let tab = function () {
  let tabNav = document.querySelectorAll('.tabs__nav-item'),
      tabContent = document.querySelectorAll('.tabs__tab'),
      tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });
  function selectTabNav () {
    tabNav.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach (item => {
      item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    })
  }
};
tab();
//TABS