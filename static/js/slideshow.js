var swiper = new Swiper(".slideshow", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
});

var swiper2 = new Swiper(".gallery", {
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
