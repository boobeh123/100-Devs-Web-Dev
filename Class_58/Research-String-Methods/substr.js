/*

Description:
The substr() method returns a portion of the string, 
starting at the specified index 
and extending for a given number of characters afterwards.

The substring() method returns the part of the string 
from the start index up to and excluding the end index, 
or to the end of the string if no end index is supplied.

How it works:
The substr() method is deprecated & not part of the main ECMAScript specification.
It is advised to use the substring() or slice() method.

Calling the substr() (& substring()) method returns a portion of the calling string.
This method does not mutate the original string.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const greeting = 'Hello world olleH dlrow';

console.log(greeting.substr(1, 2));     // Output -> "el"
console.log(greeting.substr(2));        // Output -> "llo world olleH dlrow"
console.log(greeting.substring(1, 2));  // Output -> "e"
console.log(greeting.substring(2));     // Output -> "llo world olleH dlrow"