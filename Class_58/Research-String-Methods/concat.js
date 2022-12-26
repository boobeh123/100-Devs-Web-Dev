/*

Description:
The concat() method concatenates the string arguments to the calling string 
and returns a new string.

How it works:
Calling this method on a string returns a new string containing 
the combined text of the strings provided.

This method concatenates the string arguments to the calling string.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
let strA = 'Hello';
let strB = 'world'

// strA is the calling string and strB is the argument
console.log(strA.concat(strB));         // Output -> "Helloworld"

// Concat accepts several string argument. Here we concatenate a space to the calling argument, followed by the strB variable.
console.log(strA.concat(' ', strB));    // Output -> "Hello world" 
console.log(strB.concat('-', strA));    // Output -> "world-Hello" 