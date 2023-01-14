const sidenav = document.querySelector('.sidenav');
const sidenavInstances = M.Sidenav.init(sidenav);

const scrollspy = document.querySelectorAll('.scrollspy');
const scrollspyInstances = M.ScrollSpy.init(scrollspy);

const carousel = document.querySelectorAll('.carousel');
const carouselInstances = M.Carousel.init(carousel, {
    numVisible: 3,
    duration: 50,
    shift: 100,
});
let carouselIntervalId = setInterval(() => {
    carouselInstances[0].next();
}, 3000);