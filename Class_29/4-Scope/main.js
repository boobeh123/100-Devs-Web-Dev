/**************************************************************
* SCOPE
***************************************************************/
// Scope defines where variables can be accessed or referenced.
/**************************************************************
* SCOPE
***************************************************************/




/**************************************************************
* BLOCKS AND SCOPE - READING EXAMPLES
***************************************************************/
/*
A block is the code found inside a set of curly braces {}.
Blocks help us group one or more statements together.
*/
/**************************************************************
* BLOCKS AND SCOPE - READING EXAMPLES
***************************************************************/
/**************************************************************
* BLOCKS AND SCOPE - TASKS
***************************************************************/
// 1 - Declare a variable named city and assign it the string 'New York City'.
const city = 'New York City';
// 2 - Declare a function named logCitySkyline.
function logCitySkyline() {
    let skyscraper = 'Empire State Building';                   // Step 3
    return 'The stars over the ' + skyscraper + ' in ' + city;  // Step 4
}
console.log(logCitySkyline());                                  // Step 5
// 3 - Declare a variable, inside the function body, named skyscraper and assign it the string 'Empire State Building'. 
// 4 - Use a return statement including skyscraper and city.
// 5 - Using console.log(), call the logCitySkyline function.
/* Notice that: this function can access the city variable declared outside the function.*/
/**************************************************************
* BLOCKS AND SCOPE - TASKS
***************************************************************/




/**************************************************************
* GLOBAL SCOPE - READING EXAMPLES
***************************************************************/
/*
Scope is the context in which our variables are declared.
Variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks.
These variables are called global variables. 
Global variables are not bound inside a block.
*/
// The color variable is declared outside of the block.
// This function can access the global variable color in the function block,
const color = 'blue';
const returnSkyColor = () => color;
console.log(returnSkyColor());
/**************************************************************
* GLOBAL SCOPE - READING EXAMPLES
***************************************************************/
/**************************************************************
* GLOBAL SCOPE - TASKS
***************************************************************/
// 1 - Declare 3 global variables.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
// 2 - Create a function named callMyNightSky. This function will return a string containing the 3 global variables.
function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
// 3 - Using console.log, call callMyNightSky function.
console.log(callMyNightSky());  // Output -> Night Sky: The Moon, North Star, and The Milky Way
/**************************************************************
* GLOBAL SCOPE - TASKS
***************************************************************/




/**************************************************************
* BLOCK SCOPE - READING EXAMPLES
***************************************************************/
/*
When a variable is declared inside a block, 
it is only accessible to the code within the curly braces {}.
Variables that are declared with block scope are known as local variables.
*/
// Example of block scope:
const logSkyColor = () => {
    let color = 'green';
    console.log(color);     // Output -> green
}
logSkyColor();              // Output -> green
console.log(color);         // Output -> ReferenceError
/* Notice that:
We declared a function named logSkyColor().
We declared a variable named color within the function body.
If we print the variable color outside the function body, it throws a referenceError.
/**************************************************************
* BLOCK SCOPE - READING EXAMPLES
***************************************************************/
/**************************************************************
* BLOCK SCOPE - TASKS
***************************************************************/
// 1 - Declare a function named logVisibleLightWaves().
function logVisibleLightWaves() {
    const lightWaves = 'Moonlight'; // Step 2
    console.log(lightWaves);        // Step 3
}
logVisibleLightWaves();             // Step 4
console.log(lightWaves);            // Step 5 -> Output -> ReferenceError
// 2 - Declare a local variable named lightWaves and assign it the string 'Moonlight'.
// 3 - Using console.log(), print the lightWaves variable.
// 4 - Call the logVisibleLightWaves() function
// 5 - Using console.log(), print the lightWaves variable below the call.
/**************************************************************
* BLOCK SCOPE - TASKS
***************************************************************/




/**************************************************************
* SCOPE POLLUTION - READING EXAMPLES
***************************************************************/
/*
Having too many global variables can cause problems in a program.
When declaring global variables, they go to the global namespace.
The global namespace allows variables to be accessible from anywhere in the program.

Scope pollution is when we have too many global variables that exist in the global namespace.
Scope pollution makes it difficult to keep track of our different variables.

Globally scoped variables can collide with other variables that are more locally scoped

It's best practice to not define variables in the global scope.
*/

let num = 5;        // Global variable
const logNum = () => {
    num = 50;       // Reassigns variable value instead of declaring a local variable with let keyword
    console.log(num);
}
logNum();           // Output -> 50
console.log(num);   // Output -> 50 -> This line will print 5 if 'let num = 50;' was used in the logNum function body.
/**************************************************************
* SCOPE POLLUTION - READING EXAMPLES
***************************************************************/
/**************************************************************
* SCOPE POLLUTION - TASKS
***************************************************************/
/* Note from me: Reading/answering the questions from my perspective will not make sense. Read the task question from the course material. */
// 1 - Inside the callMyNightSky() function body, reassign stars value to 'Sirius'
const callMyNightSky = () => {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
// 2 - Outisde the function, print the stars variable
console.log(stars); // Output -> Sirius
/**************************************************************
* SCOPE POLLUTION - TASKS
***************************************************************/




/**************************************************************
* PRACTICE GOOD SCOPING - READING EXAMPLES
***************************************************************/
/*
We should follow best practices for scoping our variables 
as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways:
1 - It will make your code more legible.
2 - It makes your code more understandable.
3 - It’s easier to maintain your code.
4 - It will save memory in your code. (it will cease to exist after the block finishes running.)

Block scope is a powerful tool in JavaScript, 
it allows us to define variables with precision, 
and not pollute the global namespace. 
*/
/**************************************************************
* PRACTICE GOOD SCOPING - READING EXAMPLES
***************************************************************/
/**************************************************************
* PRACTICE GOOD SCOPING - TASKS
***************************************************************/
// 1 - Check if region evaluates to 'The Arctic'
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {          // Step 1
        let lightWaves = 'Northern Lights'; // Step 2
        console.log(lightWaves);            // Output -> Northern Lights(Step 3)
    }
    console.log(lightWaves);                // Output -> Moonlight
};
logVisibleLightWaves();
// 2 - Declare a lightWaves variable inside the if statement and assign it the value 'Northern Lights'
// 3 - Using console.log(), print lightWaves inside the if statement. Should print Northern Lights and Moonlight
/**************************************************************
* PRACTICE GOOD SCOPING - TASKS
***************************************************************/