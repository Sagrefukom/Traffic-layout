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
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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

//COUNTDOWN
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    let t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
 
let deadline = new Date(Date.parse(new Date()) + 16 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline);
//COUNTDOWN

//SCROLL
  window.addEventListener('scroll', ()=> {
    const scrolled = window.pageYOffset;
    const aside = document.querySelector('#scroll');

      if(scrolled >= 1900  && scrolled <= 2590) {
        aside.classList.add('fixed');
      } else {
        aside.classList.remove('fixed');
      }
  });
//SCROLL

//ACCORDION
var acc = document.querySelectorAll(".footer__block-title--accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
//ACCORDION

//POPUP
  const popupsOpen = document.querySelectorAll('.open-popup');
  const popupsClose = document.querySelectorAll('.popup-close');

    popupsOpen.forEach(function(item) {
      item.addEventListener('click', function() {
        const popupName = item.getAttribute('data-popup');
        document.getElementById(popupName).style.opacity = 1 ;
        document.getElementById(popupName).style.visibility = 'visible';

        window.onclick = function(e) {
          if(e.target.classList.contains('popup-body')) {
            document.getElementById(popupName).style.opacity = 0 ;
            document.getElementById(popupName).style.visibility = 'hidden';
          }
        }
      });
    });
    popupsClose.forEach(function(item) {
      item.addEventListener('click', function() {
        const popup = item.closest('.popup');
            popup.style.opacity = 0 ;
            popup.style.visibility = 'hidden';
      });
    });
//POPUP