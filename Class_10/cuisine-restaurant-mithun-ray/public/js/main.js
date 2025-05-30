// Initialize MCSS Components
const sidenav = document.querySelector('.sidenav');
const sidenavInstances = M.Sidenav.init(sidenav);

const scrollspy = document.querySelectorAll('.scrollspy');
const scrollspyInstances = M.ScrollSpy.init(scrollspy);

const modal = document.querySelectorAll('.modal');
const modalInstances = M.Modal.init(modal);


// Searchbar functionality
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

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.footer-copyright span');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Bobby Asakawa`;
    }
});