// Button listens for clicks
document.querySelector('#spaceButton').addEventListener('click', getDrinkSpaces);
// Function called on click, this function HANDLES spaces (example: e g g = egg)
function getDrinkSpaces() {
    // User input value is a string
        // String are converted as lowercase
        // String is split and space is the seperator. If a string contains spaces, each letter is an array element (example: e g g => ['e','g','g])
        // Array elements are filtered. If the array element is equal to a space ' ', filter it out of the array (example: ['e', ' ', 'g', 'g'] => ['e','g','g])
        // Joins concatenates array elements and returns a string (example: ['e', 'g', 'g'] => egg)
    let choice = document.querySelector('#spaceInput').value.toLowerCase().split(' ').filter(element => element !== ' ').join('');     

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(response => response.json()) 
    .then(data => {
    document.querySelector('h2').innerText = data.drinks[0].strDrink;
    document.querySelector('h3').innerText = data.drinks[0].strInstructions;
    document.querySelector('img').src = data.drinks[0].strDrinkThumb;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// This function DOES NOT HANDLE spaces. The information it returns is displayed on the bottom section on page
document.querySelector('#noSpaceButton').addEventListener('click', getDrinkFail);

function getDrinkFail() {
    let choice = document.querySelector('#noSpaceInput').value.toLowerCase()

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(response => response.json()) 
    .then(data => {
    document.querySelector('#noSpaceH2').innerText = data.drinks[0].strDrink;
    document.querySelector('#noSpaceH3').innerText = data.drinks[0].strInstructions;
    document.querySelector('#noSpaceImg').src = data.drinks[0].strDrinkThumb;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Logging results of passing a string with spaces into the input
function splitDrink(string) {
    return string.split(' ');
}
function noBangFilterDrink(string) {
    return string.split(' ').filter(element => element == ' ');
}
function filterDrink(string) {
    return string.split(' ').filter(element => element !== ' ');
}
function splitFilterJoinDrink(string) {
    return string.split(' ').filter(element => element !== ' ').join('');
}

let exampleOne = splitDrink("e g g")
let exampleTwo = noBangFilterDrink("e g g")
let exampleTree = filterDrink("e g g")
let exampleFinal = splitFilterJoinDrink("e g g")

console.log(exampleOne);        // ['e', 'g', 'g']
console.log(exampleTwo);        // []               => element  == spaces, string filtered out
console.log(exampleTree);       // ['e', 'g', 'g']  => element !== spaces, spaces filtered out
console.log(exampleFinal);      // egg


