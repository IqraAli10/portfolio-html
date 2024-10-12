var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
       delay: 2500
    },
    breakpoints:{
      1200:{
        slidesPerView: 3,
      },
      900:{
        slidesPerView: 2,
      },
      600:{
        slidesPerView: 1,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });