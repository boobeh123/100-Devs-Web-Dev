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

const searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', searchBar);

function searchBar(e) {
    e.preventDefault()
    const searchInput = document.querySelector('#search')
    let allElements = document.querySelectorAll('*');
    let inputValue = searchInput.value.toLowerCase();

    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].textContent.toLowerCase().includes(inputValue)) {
            allElements[i].scrollIntoView({ behavior: 'smooth' });
        } 
    }
    searchInput.value = ''; 
}