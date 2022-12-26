/*

Description:
The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

How it works:
Calling this method on a string returns a new string with whitespace removed from the start & end of a string. 

Trimming whitespace from just one end, can be done with the trimStart() or trimEnd() method.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const greeting = '   Hello world!   ';

// Trimming whitespace from both ends
console.log(greeting.trim());   // Output -> "Hello world!";

// Trimming whitespace from the start
console.log(greeting.trimStart());   // Output -> "Hello world!   "

// Trimming whitespace from the end
console.log(greeting.trimEnd());   // Output -> "   Hello world!"