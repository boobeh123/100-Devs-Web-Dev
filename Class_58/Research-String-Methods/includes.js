/*

Description:
The includes() method performs a case-sensitive search 
to determine whether one string may be found within another string, 
returning true or false as appropriate.

How it works:


Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const str = "Hello world this is a longer string"


// The argument containing part of a string
console.log(str.includes('long'));      // Output -> true

// The argument containing several strings
console.log(str.includes('is is a'));   // Output -> true

// The argument containing a word, but not case-sensitive
console.log(str.includes('World'));     // Output -> false