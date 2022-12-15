/*

Description:
The toUpperCase() method returns the calling string value converted to uppercase.
(the value will be converted to a string if it isn't one).

How it works:
Calling this method on a string returns the entire string as uppercase. 
Uppercasing specific letters in the string requires using additional methods.

Time complexity:
The algorithm described in String.prototype.toUpperCase() of the specification is O(n). 
Each codepoint of the original String is copied and converted to a new codepoint.
The fact that toUpperCase and toLowerCase return new Strings is enough to verify that the operation takes linear time, not constant.

*/

// Examples:
// Uppercasing the entire string
let str = 'hello world';
console.log(str.toUpperCase());                         // Output -> 'HELLO WORLD'

// Uppercasing the first letter of a string
let str2 = 'hello world';
let arrayOfLetter = str2.split('');
arrayOfLetter.shift();
arrayOfLetter.unshift(str2[0].toUpperCase());
console.log(arrayOfLetter.join(''));                    // Output -> 'Hello world'

// Uppercasing the first letter of a string v2
let str3 = 'olleh dlrow';
console.log(`${str3[0].toUpperCase()}${str3.slice(1)}`);  // Output -> 'Olleh dlrow'