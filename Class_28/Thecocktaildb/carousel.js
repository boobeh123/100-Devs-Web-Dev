// Button listens for clicks
document.querySelector('button').addEventListener('click', getDrink);

// Function called on click
function getDrink() {
    // Variable converts string to lowercase and removes spaces between letters (if passed in -> example: e g g = egg)
    let choice = document.querySelector('input').value.toLowerCase().split(' ').filter(element => element !== ' ').join('');     

    // Variable is a string, and the string the name of a drink. The name of the drink is used as a search parameter
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(response => response.json())      // Parse response as JSON
    .then(data => {
        // This function takes in the array length of data.drinks
        // The array starts at the end and decrements downward 
        function rotation(i) {
            // Condition stops being true at -1 (console.log(i) to see)
            if (i >= 0) {
                // Displays on page
                document.querySelector('h2').innerText = data.drinks[i].strDrink
                document.querySelector('img').src = data.drinks[i].strDrinkThumb
                document.querySelector('h3').innerText = data.drinks[i].strInstructions
                // this calls back the function AFTER the first time its been called
                // function() {rotation(i-1)} is the functionRef for setTimeout parameters
                // #### is the delay for setTimeout parameters
                return setTimeout(function() {rotation(i - 1)}, 1500)
            }
        }
        // This calls the function the FIRST time
        // Parameter passed in is the end of the array
        rotation(data.drinks.length - 1)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
