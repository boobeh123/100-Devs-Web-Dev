/**************************************************************
* WHAT ARE FUNCTIONS?
***************************************************************/
/*
When learning how to calculate the area of a rectangle, 
there are steps to do this:
1 - Measure the width.
2 - Measure the height.
3 - Multiply the width and the height.

What if you were tasked with calculating the area of many rectangles,
with different dimensions for each task?

Instead of rewriting the same steps over & over for each task,
we can use code to perform this specific task, multiple times.
This is done by creating a function.

A function is a reusable block of code that groups together 
a sequence of statements to perform a specific task.
*/
// Calculating the area of a rectangle:
const width = 10;
const height = 5;
const area = width * height;
console.log(area);  // Output -> 50
/**************************************************************
* WHAT ARE FUNCTIONS?
***************************************************************/




/**************************************************************
* FUNCTION DECLARATIONS - READING EXAMPLES
***************************************************************/
/*
One way to create a function is by using a function declaration.
A function declaration binds a function to a identifier (name).

A function declaration consists of:
1 - The function keyword.
2 - The function name followed by parenthesis.
3 - The function body followed by curly braces. The body contains 
a block of statements required to perform a specific task.

Be aware of the hoisting feature in JavaScript.
Hoisting allows access to a function declaration before they're defined.
Hoisting is NOT good practice, just be aware of the feature.
*/
// Example of hoisting:
greet();    // Output -> Hello world
function greet() {
    console.log('Hello world');
}
/**************************************************************
* FUNCTION DECLARATIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* FUNCTION DECLARATIONS - TASKS
***************************************************************/
// 1 - Declare a function named getReminder().
function getReminder() {
    console.log('Water the plants.');   // Step 2
}
// 2 - Add a console.log() to the function body. Print a reminder.
// 3 - Declare a function named greetInSpanish().
function greetInSpanish(){
    console.log('Buenas Tardes');       // Step 4
}
// 4 - Add a console.log() to the function body. Print a greeting.
/**************************************************************
* FUNCTION DECLARATIONS - TASKS
***************************************************************/




/**************************************************************
* CALLING A FUNCTION - READING EXAMPLES
***************************************************************/
/*
The code inside a function body executes only when the function is called.
To call a function, type the function name followed by parenthesis.

The function call executes all of the statements between the curly braces.
*/

// Function declared with the name greetings
function greetings() {
    // Statement between curly braces (function body)
    console.log('Hello world');
}
// Calling the function
greetings();    // Output -> Hello world
/**************************************************************
* CALLING A FUNCTION - READING EXAMPLES
***************************************************************/
/**************************************************************
* CALLING A FUNCTION - TASKS
***************************************************************/
// 1 - Declare a function named sayThanks(). This function prints a string.
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
// 2 - Call the sayThanks() function.
sayThanks();
sayThanks();    // Step 3
sayThanks();    // Step 3
// 3 - Call the sayThanks() function three times.
/**************************************************************
* CALLING A FUNCTION - TASKS
***************************************************************/




/**************************************************************
* PARAMETERS AND ARGUMENTS - READING EXAMPLES
***************************************************************/
/*
Functions can take inputs and use the inputs to perform a task.
Parameters allow functions to accept input(s) & perform a task using the input(s).
We can specify parameters when declaring a function.

Use parameters as placeholders for information that will be passed to the function.

Values that are passed to the function, are called arguments.
Arguments can be passed to the function as values or variables.
Take notice of the order in which arguments are passed passed and assigned 
follows the order that the parameters are declared.

With parameters, the calculateAreaOfRectangle function can be reused to
calculate the area of any rectangle.
*/
// Specifying parameters in a function:
// The parameters are specified between the parenthesis.
// This function has two parameters, width and height.
function calculateAreaOfRectangle(width, height) {
    // Inside the function body, width & height act just like regular variables.
    // The parameters act as placeholders for values that will be multiplied.
    console.log(width * height);
}

// Calling a function that has parameters:
// Specify the values in the parenthesis that follow the function name.
// Values that are passed to the function, are called arguments.
// The number 10 is passed as the width, and number 5 is passed as the height.
calculateAreaOfRectangle(10, 5);

// Calling a function that has arguments as variables:
let rectangleWidth = 10;    // Initialized with value of 10
let rectangleHeight = 5;    // Initialized with value of 5
calculateAreaOfRectangle(rectangleWidth, rectangleHeight);
/**************************************************************
* PARAMETERS AND ARGUMENTS - READING EXAMPLES
***************************************************************/
/**************************************************************
* PARAMETERS AND ARGUMENTS - TASKS
***************************************************************/
// 1 - Declare a new sayThanks() function and add a name parameter.
function sayThx(name) {
    // console.log(`Thank you for your purchase ${name}! We appreciate your business.`)
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');  // Step 2
}
// 2 - Concatenate name into the string provided.
// 3 - Call sayThx and pass 'Cole' as an argument.
sayThx('Cole'); // Output -> Thank you for your purchase Cole! We appreciate your business.
/**************************************************************
* PARAMETERS AND ARGUMENTS - TASKS
***************************************************************/




/**************************************************************
* DEFAULT PARAMETERS - READING EXAMPLES
***************************************************************/
/*
A feature added in ES6 is the ability to use default parameters.
Default parameters allow parameters to have a predetermined value,
in case there is no argument passed into the function.
This also applies if the argument is undefined when called.

By using a default parameter, we account for situations when an argument 
isn’t passed into a function.
*/
// Example of a default parameter:
// The name parameter is assigned the default value of 'world'
function greeting2(name = 'world') {
    console.log(`Hello ${name}`);
}
// What happens if argument passed in and no-argument passed in.
greeting2('Stranger');  // Output -> Hello Stranger -> overrides default parameter
greeting2();            // Output -> Hello world    -> uses default parameter
/**************************************************************
* DEFAULT PARAMETERS - READING EXAMPLES
***************************************************************/
/**************************************************************
* DEFAULT PARAMETERS - TASKS
***************************************************************/
// 1 - Assign default parameters to item1, item2, item3
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
/**************************************************************
* DEFAULT PARAMETERS - TASKS
***************************************************************/




/**************************************************************
* RETURN - READING EXAMPLES
***************************************************************/
/*
To pass back information from the function call, we use a return statement.
To create a return statement, 
we use the return keyword followed by the value that we wish to return.

When a return statement is used in a function body, 
the execution of the function is stopped and 
the code that follows it will not be executed. 

The return keywords allows functions to produce an output.
*/
/**************************************************************
* RETURN - READING EXAMPLES
***************************************************************/
/**************************************************************
* RETURN - TASKS
***************************************************************/
// 1 - Declare a function named monitorCount(). This function has two parameters, rows and columns.
function monitorCount(rows, columns) {
    return rows * columns;      // Step 2
}
// 2 - Return the value after multiplying rows and columns
// 3 - Declare a numOfMonitors variable. Call the monitorCount function and pass 5 and 4 as arguments.
const numOfMonitors = monitorCount(5, 4);
// 4 - Call the function and print numOfMonitors.
console.log(numOfMonitors);     // Output -> 20
/**************************************************************
* RETURN - TASKS
***************************************************************/




/**************************************************************
* HELPER FUNCTIONS - READING EXAMPLES
***************************************************************/
/*
We can also use the return value of a function inside another function.
These functions being called within another function are often 
referred to as helper functions.

Writing helper functions can help take large and difficult tasks and 
break them into smaller and more manageable tasks.
*/
// Function that converts temperature from celsius to fahrenheit
function multiplyByNineFifths(number) {
    return number * (9/5);
}
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
getFahrenheit(15);
/* Take a look at the example above:
1 - getFahrenheit() is called and 15 is passed as an argument.
2 - getFahrenheit calls the multiplyByNineFifths function and passes 15 as an argument.
3 - multiplyByNineFifths takes 15 as for the number parameter.
4 - multiplyByNineFifths multiplies 15 by 9/5 and evaluates to 27.
5 - 27 is returned to getFahrenheit.
6 - getFahrenheit continues its execution and adds 32 to 27. This evaluates to 59 and returns 59. */
/**************************************************************
* HELPER FUNCTIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* HELPER FUNCTIONS - TASKS
***************************************************************/
// 1 - Declare a function named costOfMonitors. This function has two parameters, rows and columns.
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;   // Step 2
}
// 2 - Add a return statement. The value of return calls a different function and multiplies it by 200.
// 3 - Declare a variable named totalCost. Call costOfMonitors with the arguments, 5 and 4.
const totalCost = costOfMonitors(5, 4);         // Step 3
// 4 - Print totalCost to check if the function works properly.
console.log(totalCost);                         // Output -> 4000
/**************************************************************
* HELPER FUNCTIONS - TASKS
***************************************************************/




/**************************************************************
* FUNCTION EXPRESSIONS - READING EXAMPLES
***************************************************************/
/*
Another way to define a function is to use a function expression.
To define a function inside an expression, we can use the function keyword.

In a function expression, the function name is usually omitted.
A function with no name is called an anonymous function.
A function expression is often stored in a variable in order to refer to it.

Function expressions are not hoisted-- and cannot be called before declaration.
*/
// Declaring a function expression:
const calculateArea = function(width, height) {
    return width * height;
}
calculateArea(5, 5);
/* In the example above:
1 - A variable is declared and the variable's name is the functions name.
2 - Assign that variable's value to an anonymous function.
3 - To call the function expression, 
write the variable's name followed by parenthesis and include any arguments. */
/**************************************************************
* FUNCTION EXPRESSIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* FUNCTION EXPRESSIONS - TASKS
***************************************************************/
// 1 - Create a variable named plantNeedsWater. Assign an anonymous function with a parameter, day.
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}
// 2 - Check if day === 'Wednesday'. If true, return true. (LOL)
// 3 - Add an else statement that returns false.
// 4 - Call plantNeedsWater function and pass 'Tuesday' as an argument.
plantNeedsWater('Tuesday');
// 5 - Using console.log(), repeat step 4.
console.log(plantNeedsWater('Tuesday'));    // Output -> false
/**************************************************************
* FUNCTION EXPRESSIONS - TASKS
***************************************************************/




/**************************************************************
* ARROW FUNCTIONS - READING EXAMPLES
***************************************************************/
/*
ES6 Introduced arrow function syntax, a shorter way to write functions 
by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the function keyword 
every time you need to create a function.

Instead, you first include the parameters inside the () and 
then add an arrow => that points to the function body surrounded in {}.

It’s important to be familiar with the multiple ways of writing functions 
because you will come across each of these when reading other JavaScript code.
*/
const rectangleArea = (width, height) => {
    return width * height;
}
console.log(rectangleArea(5, 6));           // Output -> 30
/**************************************************************
* ARROW FUNCTIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* ARROW FUNCTIONS - TASKS
***************************************************************/
// 1 - Rewrite plantNeedsWater() function to use arrow function syntax.
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
}
/**************************************************************
* ARROW FUNCTIONS - TASKS
***************************************************************/




/**************************************************************
* CONCISE BODY ARROW FUNCTIONS - READING EXAMPLES
***************************************************************/
/*
Functions that contain a single parameter,
do not need that parameter to be enclosed in parentheses. 

Functions that contain zero or multiple parameters,
require that parameter to be enclosed in parentheses.

A function body composed of a single-line block does not need curly braces. 
Without the curly braces, whatever that line evaluates will be automatically returned.

The contents of the block should immediately follow the arrow => 
and the return keyword can be removed. 
This is referred to as implicit return.
*/
// One parameter:
const test = paramOne => {};                // No () around paramOne
// Two or more parameters:
const test2 = (paramOne, paramTwo) => {};   // () around both parameters
// Zero paramaters:
const test3 = () => {};                     // () where params would be
// Function body w/ Single-line block:
const test4 = number => number + number;    // No {} around body. Sum of number+number is implicitly returned.
// Function body w/ Multi-line block:
const test5 = number => {                   // {} around body
    let sum = number + number;
    return sum;                             // sum is returned explicitly.
}
/**************************************************************
* CONCISE BODY ARROW FUNCTIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* CONCISE BODY ARROW FUNCTIONS - TASKS
***************************************************************/
// 1 - Rewrite plantNeedsWater() arrow function to use concise-body arrow function syntax.
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
/* Notice that:
The parenthesis around day have been removed. It contains a single parameter.
The curly braces have been removed. The function body contains a single-line block.
The return keyword has been removed. Using a single-line block will use implicit return. */
/**************************************************************
* CONCISE BODY ARROW FUNCTIONS - TASKS
***************************************************************/
