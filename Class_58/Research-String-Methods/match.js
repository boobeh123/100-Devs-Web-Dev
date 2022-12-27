/*

Description:
The match() method retrieves the result of matching a string 
against a regular expression.

How it works:
Calling this method returns an array of strings. These strings are the result
of matching a string against a regular expression.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const str = '98765Hello world 1 2 3 I am Olleh Dlrow43210'
const upperCase = /[A-Z]/g;
const lowercase = /[a-z]/g;
const numbers = /\d+/g;

// Finds every uppercase letter in the string
console.log(str.match(upperCase));  // Output -> ["H", "I", "O", "D"]

// Finds every lowercase letter in the string
console.log(str.match(lowercase));  // Output -> ["e", "l", "l", "o", "w", "o", "r", "l", "d", "a", "m", "l", "l", "e", "h", "l", "r", "o", "w"]

// Finds every digit in the string
console.log(str.match(numbers));    // Output -> ["98765", "1", "2", "3", "43210"]