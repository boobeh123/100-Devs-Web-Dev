/*

Description:
The indexOf() method returns the first index at which a given element 
can be found in the array, or -1 if it is not present.

How it works:
Calling this method returns an integer which represents the index of the given element.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const arrayOfStrings = ['Hello', 'world', 'olleH', 'dlrow', 'hello'];

console.log(arrayOfStrings.indexOf('hello'));   // Output -> 4
console.log(arrayOfStrings.indexOf('olleh'));   // Output -> -1
console.log(arrayOfStrings.indexOf('Hello'));   // Output -> 0