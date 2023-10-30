var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    autoplay: {
        delay: 2000,
      },
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        421: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        990: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
});

var swiper = new Swiper(".mySwiperPortfolio", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// gsap.from('.first',{duration: 1.5 , delay: 0.3, y:'-100%',opacity: 1})
gsap.from('.main_container', {duration: 2, delay: 1.8,opacity: 0})
gsap.from('.header_logo>h2', {duration: 2.5,opacity: 0, delay: 2.9, y: '100%'})
gsap.from('.header_nav', {duration: 2.9,opacity: 0, delay: 2.9, y: '-100%'})
gsap.from('.col1_left', {x:0,duration: 2.9,opacity: 0, delay: -1.5})
