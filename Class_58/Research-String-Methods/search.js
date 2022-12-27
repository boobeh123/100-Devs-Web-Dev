/*

Description:
The search() method executes a search for a match 
between a regular expression and this String object.

How it works:
This method returns an integer which represents the index of the 
first match between the regular expression and the given string.

If there is no match found, -1 is returned.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const greeting = 'hello world-olleh-dLrow';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

// Returns the index of the first character that is not a letter or whitespace.
console.log(greeting.search(regex));                // Output -> 11

// Uses bracket notation to access the specific character and passing in the index returned from the serach() method.
console.log(greeting[greeting.search(regex)]);      // Output -> '-'

console.log(greeting.search(/[A-Z]/g));             // Output -> 19
console.log(greeting[greeting.search(/[A-Z]/g)]);   // Output -> 'L'