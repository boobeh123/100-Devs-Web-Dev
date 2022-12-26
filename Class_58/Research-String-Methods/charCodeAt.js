/*

Description:
The charCodeAt() method returns an integer between 0 and 65535 
representing the UTF-16 code unit at the given index.

How it works:
Calling this method on a string returns an integer which represents a UTF-16 character code. 

This method can be used to retrieve specific characters codes which can be displayed by
using with the String.fromCharCode() method.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const str = '©Hello world™'

// Retrieving the UTF-16 code from index 0
console.log(str.charCodeAt(0))              // Output -> "169"

// Retrieving the UTF-16 code from the last index 
console.log(str.charCodeAt(str.length - 1)) // Output -> "8482"

// Retrieving the UTF-16 code from index 1
console.log(str.charCodeAt(1))              // Output -> "72"

// Displaying the character with the codes from charCodeAt()
console.log(String.fromCharCode(169))       // Output -> "©"
console.log(String.fromCharCode(8482))      // Output -> "™"
console.log(String.fromCharCode(72))        // Output -> "H"