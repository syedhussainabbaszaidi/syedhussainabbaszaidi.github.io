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

let items = gsap.utils.toArray(".items"),
    pageWrapper = document.querySelector(".page-wrapper");

items.forEach((container, i) => {
  let localItems = container.querySelectorAll(".item"),
      distance = () => {
        let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
            containerBounds = container.getBoundingClientRect();
        return Math.max(0, lastItemBounds.right - containerBounds.right);
      };
  gsap.to(container, {
    x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top 20%",
      pinnedContainer: pageWrapper,
      end: () => "+=" + distance(),
      pin: pageWrapper,
      scrub: true,
      invalidateOnRefresh: true // will recalculate any function-based tween values on resize/refresh (making it responsive)
    }
  })
});


gsap.from('.first',{duration: 1.5 , delay: 0.3, y:'-100%',opacity: 1})
gsap.from('.main_container', {duration: 2, delay: 1.8,opacity: 0})
gsap.from('.header_logo>h2', {duration: 2.5,opacity: 0, delay: 2.9, y: '100%'})
gsap.from('.header_nav', {duration: 2.9,opacity: 0, delay: 2.9, y: '-100%'})

gsap.from('.col1_left', {x:0,duration: 2.9,opacity: 0, delay: -1.5})

// gsap.from('header',{duration: 1,x:'-100%'})
// gsap.from('h2', {duration: 1, opacity: 0, rotation:90 })
// gsap.from('#image1',{duration: 1.5 , delay: 0.8, y:'-100%'})
// gsap.from('h3', {duration: 1.7,opacity: 0, delay: 1.9, y: '100%'})
// gsap.from('h4', {duration: 1.8, opacity:0, delay: 2.1,x:'50%'})