/*

Description:
The split() method takes a pattern 
and divides a String into an ordered list of substrings 
by searching for the pattern, 
puts these substrings into an array, 
and returns the array.

How it works:
Calling this method on a string will divide the string into an array of substrings.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const greeting = 'Hello world olleH dlrow';

// No arguments passed into the method.
const arrayOfLetters = greeting.split('');
console.log(arrayOfLetters);    // Output -> ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", " ", "o", "l", "l", "e", "H", " ", "d", "l", "r", "o", "w"]

// Passing whitespace as a seperator between each element.
const arrayOfWords = greeting.split(' ');
console.log(arrayOfWords);      // Output -> ["Hello", "world", "olleH", "dlrow"]