/**************************************************************
* A brief introduction to array destructuring in ES6
***************************************************************/
/*

Destructuring in JavaScript is a simplified method 
of extracting multiple properties from an array by taking the structure 
and deconstructing it down into its own constituent parts through assignments 
by using a syntax that looks similar to array literals.

It creates a pattern 
that describes the kind of value you are expecting and makes the assignment. 
Array destructuring uses position.

Numbers cannot be variable names and cannot be used for destructuring.

Destructuring has made extracting data from an array very simple and readable.
Imagine trying to extract data from a nested array with 5 or 6 levels. 
You use an array literal on the left-hand side of the assignment.

It takes each variable on the array literal on the left-hand side 
and maps it to the same element at the same index in the array.

Declaration and assignment can be done separately in destructuring.

If the number of variables passed to the destructuring array literals 
are more than the elements in the array, 
then the variables which aren’t mapped to any element in the array 
return undefined.

If the number of variables passed to the destructuring array literals 
are lesser than the elements in the array, 
the elements without variables to be mapped to are just left. 
There are no errors whatsoever.

*/

// With Destructuring
let [first, second, third] = ['Hello', 'world', 'olleh']
console.log(first)  // Output -> Hello
console.log(second) // Output -> world
console.log(third)  // Output -> olleh
let thing = ['Hello', 'world', 'olleh']
let [a, b, c] = thing;
console.log(thing)  // Output -> ['Hello', 'world', 'olleh']
console.log(a)      // Output -> Hello
console.log(b)      // Output -> world
console.log(c)      // Output -> olleh

// Without array literal brackets []
let first, second, third = ['Hello', 'world', 'olleh']
console.log(first)  // Output -> undefined
console.log(second) // Output -> undefined
console.log(third)  // Output -> ['Hello', 'world', 'olleh']

// Without destructuring
let first = 'Hello',
    second = 'world',
    third = 'olleh'
console.log(first)  // Output -> Hello
console.log(second) // Output -> world
console.log(third)  // Output -> olleh  

// Using Numbers as variable names 
let [1, 2, 3] = ['Hello', 'world', 'olleh'] // Output -> SyntaxError: Invalid destructuring assignment target

// Declaration & Assignment done seperately
let a, b;
[a, b] = ['olleh', 'dlrow']
console.log(a)      // Output -> olleh
console.log(b)      // Output -> dlrow

// Declaring more variables than elements exist
let things = ["hello", "world", "olleh", "dlrow"];
let [a, b, c, d, e] = things;
console.log(c);     //Output: olleh
console.log(d);     //Output: dlrow
console.log(e);     //Output: undefined
/**************************************************************
* A brief introduction to array destructuring in ES6
***************************************************************/




/**************************************************************
* Destructuring Returned Arrays
***************************************************************/
/*

Destructuring makes working with a function that returns an array 
as a value more precise. 
It works for all iterables.

*/

function greetings() {
    return ["Hello", "Hey", "hi"];
}
let [a, b, c] = greetings();
console.log(a); // Output -> Hello
console.log(b); // Output -> Hey
console.log(c); // Output -> hi
/**************************************************************
* Destructuring Returned Arrays
***************************************************************/




/**************************************************************
* Default Value
***************************************************************/
/*

Destructuring allows a default value to be assigned to a variable
if no value or undefined is passed. 
It is like providing a fallback when nothing is found.

*/

let a, b;
[a = 30, b = 3] = [];
console.log(a); // Output -> 30
console.log(b); // Output -> 3

[a = 30, b = 3] = [22, 2];
console.log(a); // Output -> 22
console.log(b); // Output -> 2

let [first = 'olleh', second = first] = [];
console.log(first);     // Output -> olleh
console.log(second);    // Output -> olleh

let [first = 'olleh', second = first] = ['hello'];
console.log(first);     // Output -> hello
console.log(second);    // Output -> hello

let [first = 'olleh', second = first] = ['hello', 'world'];
console.log(first);     // Output -> hello
console.log(second);    // Output -> world
/**************************************************************
* Default Value
***************************************************************/




/**************************************************************
* Ignoring Some Values
***************************************************************/
/*

Destructuring lets you map a variable to the elements you are interested in.
You can ignore or skip the other elements in the array 
by using trailing commas.

*/

let a, b;
[a, , b] = ['olleh', 'ignored', 'dlrow'];
console.log(a); // Output -> olleh
console.log(b); // Output -> dlrow
/**************************************************************
* Ignoring Some Values
***************************************************************/




/**************************************************************
* The Rest Parameter & Spread Syntax
***************************************************************/
/*

The new (…) operator that was added in ES6 can be used in destructuring. 

If the (…) operator appear on the left-hand side in destructuring 
then it is a REST PARAMETER. 
A Rest parameter is used to map all the remaining elements in the array 
that have not been mapped to the rest variable itself. 

The Rest variable must always be the last otherwise a SyntaxError is thrown.

If the (…) operator appears on the right-hand in destructuring
then it is a SPREAD SYNTAX. 
It takes all the other elements in the array which have no variable mapped to 
them and then maps it to the rest variable.

When you can have more variables on the left-hand side, 
it maps the single elements in the array equally to the variables.

*/

// Rest Parameter (... appears on the left-handside)
let planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
let [first, , third, ...others] = planets;
console.log(first);     // Output -> Mercury
console.log(third);     // Output -> Venus
console.log(others);    // Output -> ['Mars', 'Pluto', 'Saturn']

// Spread Syntax (... appears on the right-handside)
let planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
let [first, second, ...others] = ["Mercury", "Earth", ...planets, "Saturn"];
console.log(first);     // Output -> Mercury
console.log(second);     // Output -> Earth
console.log(others);    // Output -> ['Mercury', 'Earth', 'Venus', 'Mars', 'Pluto', 'Saturn', 'Saturn']

// Maps single elements equally
let planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
let [first, second, ...others] = ["Mercury", ...planets];
console.log(first);     //Output -> Mercury
console.log(second);    //Output -> Mercury
console.log(others);    //Output -> ['Earth', 'Venus', 'Mars', 'Pluto', 'Saturn']
// Maps single elements equally
let planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
let [first, second, third, fourth, ...others] = ["Mercury", "Earth", ...planets];
console.log(first);     //Output -> Mercury
console.log(second);    //Output -> Earth
console.log(third);     //Output -> Mercury
console.log(fourth);    //Output -> Earth
console.log(others);    //Output -> ['Venus', 'Mars', 'Pluto', 'Saturn']
/**************************************************************
* The Rest Parameter & Spread Syntax
***************************************************************/




/**************************************************************
* Interchanging or Swapping Variables
***************************************************************/
/*

One destructuring expression can be used in swapping the values
of two variables.

*/

let a, b;
[a, b] = ["Hello", "World"];
[a, b] = [b, a];
console.log(a); // Output -> World
console.log(b); // Output -> Hello
/**************************************************************
* Interchanging or Swapping Variables
***************************************************************/




/**************************************************************
* Nested Array Destructuring
***************************************************************/
/*

You can also do nested destructuring with arrays. 
The corresponding item must be an array in order 
to use a nested destructuring array literal 
to assign items in it to local variables.

*/

let numbers = [8, [1, 2, 3], 10, 12];
let [a, [d, e, f], g] = numbers;

console.log(a); // Output -> 8
console.log(d); // Output -> 1
console.log(e); // Output -> 2
console.log(f); // Output -> 3
console.log(g); // Output -> 10
/**************************************************************
* Nested Array Destructuring
***************************************************************/




/**************************************************************
* Multiple Array Destructuring
***************************************************************/
/*

You can destructure an array more than once in the same code snippet.

*/

let things = ["hello", "world", "olleh", "dlrow"];
let [a, b, , d] = [f, ...others] = things;

console.log(a);     // Output -> hello
console.log(d);     // Output -> dlrow
console.log(f);     // Output -> hello
console.log(others);// Output -> ['world', 'olleh', 'dlrow']
/**************************************************************
* Multiple Array Destructuring
***************************************************************/