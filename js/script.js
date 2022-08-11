new Swiper('.swiper', {
  navigation: {
    nextEl: '.work__button-next',
    prevEl: '.work__button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensivity: 1,
  },
  autoHeight: true,
});