/*

Description:
The repeat() method constructs and returns a new string 
which contains the specified number of copies of the string 
on which it was called, concatenated together.

How it works:
This method accepts an integer as a parameter, 
which represents the amount of times the calling string will be repeated.

Using this method on the calling string returns a new string that is concatenated.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const greeting = 'Hello world';
const greetingV2 = 'Hello world ';

// The greeting variable is the calling string which is repeated 3x.
console.log(greeting.repeat(3));                // Output -> "Hello worldHello worldHello world"

// The greetingV2 variable contains white space at the end.
console.log(greetingV2.repeat(3));              // Output -> "Hello world Hello world Hello world "

// Uses the trimEnd() method to remove the whitespace.
console.log(greetingV2.repeat(3).trimEnd());    // Output -> "Hello world Hello world Hello world"