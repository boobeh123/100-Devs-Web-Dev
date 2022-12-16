/*

Description:
The toLowerCase() method returns the calling string value converted to lower case.

How it works:
Calling this method on a string returns the entire string as lowercase. 
Lowercasing specific letters in the string requires using additional methods.

Time complexity:
The algorithm described in String.prototype.toLowerCase() of the specification is O(n). 
Each codepoint of the original String is copied and converted to a new codepoint.
The fact that toUpperCase and toLowerCase return new Strings is enough to verify that the operation takes linear time, not constant.

*/

// Examples:
// Lowercasing the entire string
let str = 'HELLO WORLD';
console.log(str.toLowerCase());                         // Output -> 'hello world'

// Lowercasing the first letter of a string
let str2 = 'HELLO WORLD';
let arrayOfLetter = str2.split('');
arrayOfLetter.shift();
arrayOfLetter.unshift(str2[0].toLowerCase());
console.log(arrayOfLetter.join(''));                    // Output -> 'hELLO WORLD'

// Uppercasing the first letter of a string v2
let str3 = 'OLLEH DLROW';
console.log(`${str3[0].toLowerCase()}${str3.slice(1)}`);  // Output -> 'oLLEH DLROW'