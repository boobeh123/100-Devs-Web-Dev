/*

Description:
The slice() method extracts a section of a string 
and returns it as a new string, 
without modifying the original string.

How it works:
Using this method returns a new string and does not mutate the calling string.

This method can be called with no arguments and accepts up to two arguments.
Both parameters are numbers which represent the starting and ending indexes.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const greeting = 'Hello world olleH dlrow';

// No arguments passed in, copies the entire string.
console.log(greeting.slice());      // Output -> > "Hello world olleH dlrow"

// The first argument represents the starting index at which to begin copying.
console.log(greeting.slice(12));    // Output -> "olleH dlrow"

// Starts copying at index 0 and stops copying at index 11.
console.log(greeting.slice(0, 11)); // Output -> "Hello world"