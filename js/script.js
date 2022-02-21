// Product Slider
let productSlider = new Swiper('.product-slider', {
  slidesPerView: 1,
  spaceBetween: 35,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  disableOnInteraction: true,
  grabCursor: true,
  breakpoints: {
    670: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});
