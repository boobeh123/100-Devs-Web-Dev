/**************************************************************
* Essential JavaScript String Methods
***************************************************************/
/*
The 13 most important JavaScript functions for working with strings. 
Index, slice, split, and trim your way through JS strings methods.

Strings are a fundamental part of every programming language, 
and JavaScript has many powerful built-in functions that 
make working with strings easy for developers. 

This list covers the most important string functions for you to 
begin utilizing in your code.
*/
/**************************************************************
* Essential JavaScript String Methods
***************************************************************/




/**************************************************************
* String Method: .length (Finding the length of the string)
***************************************************************/
/*
This one may seem obvious, 
but it is likely the most important string method 
and undoubtedly the most commonly used one. 

Calling .length on a string will return the number of characters 
that the string contains.
*/

// Using the .length property
const greet = 'Hello World olleh dlrow';
console.log(greet.length);  // Output -> 23
/**************************************************************
* String Method: .length (Finding the length of the string)
***************************************************************/




/**************************************************************
* String Method: .trim() (Removing whitespace)
***************************************************************/
/*
The trim() function removes white space from the beginning & end of a string. 

You will find yourself using this one most often when processing the string 
of a user input field. 

It is easy to accidentally add spaces, 
and this ensures you handle the relevant characters.
*/

// Using the .trim() method
const galaxyNum = '                    42                    ';
console.log(galaxyNum.trim());          // Output -> '42'
console.log(typeof galaxyNum.trim());   // Output -> string
/**************************************************************
* String Method: .trim() (Removing whitespace)
***************************************************************/




/**************************************************************
* String Method: .includes() (Determine if string contains substring)
***************************************************************/
/*
The includes() function determines if a substring is contained 
in a larger string and returns true or false. 

This has many applications, 
but one common use-case is for string matching for searching/parsing.


*/

// Using the .includes() method
const author = 'olleh dlrow';
const userSearchTermA = 'hello';
const userSearchTermB = 'olleh';

console.log(name.includes(userSearchTermA));    // Output -> false
console.log(name.includes(userSearchTermB));    // Output -> true
/**************************************************************
* String Method: .includes() (Determine if string contains substring)
***************************************************************/




/**************************************************************
* String Method: .indexOf() (Finding the index of a substring)
***************************************************************/
/*
Before includes() was introduced to the JavaScript spec, 
indexOf() was the primary way you would check if a substring existed 
in a string. 

It is likely you will still see code that uses indexOf, 
so understanding how it works is important. 

The function returns the index of the substring within the string. 
If the substring is not contained in the original string, it will return -1.

The common pattern for indexOf() which mimics the behavior of includes() 
which is to check if the index is greater than -1:
*/

// Using the .indexOf() method
const author = 'olleh dlrow';
const userSearchTermA = 'world';
const userSearchTermB = 'dlrow';

console.log(name.indexOf(userSearchTermA));    // Output -> -1
console.log(name.indexOf(userSearchTermB));    // Output -> 6

// Mimicing the behavior of .includes() using .indexOf()
const author = 'olleh dlrow';
const userSearchTerm = 'dlrow';
const stringIncludesSubString = author.indexOf(userSearchTerm) > -1;    // Output ->
if (stringIncludesSubString) console.log('Match Found');
/**************************************************************
* String Method: .indexOf() (Finding the index of a substring)
***************************************************************/




/**************************************************************
* String Method: .toUpperCase() (Capitalizes entire string)
***************************************************************/
/*
The toUpperCase() function returns a string with all upper case letters.
*/

const wat = 'r u here tomorrow big';
console.log(wat.toUpperCase());
/**************************************************************
* String Method: .toUpperCase() (Capitalizes entire string)
***************************************************************/




/**************************************************************
* String Method: .toLowerCase() (Lower cases entire string)
***************************************************************/
/*
The toLowerCase() function returns a string with all lower case letters.
*/

const wat = 'r u here tomorrow big?';
console.log(wat.toLowerCase());
/**************************************************************
* String Method: .toLowerCase() (Lower cases entire string)
***************************************************************/




/**************************************************************
* String Method: .replace() (Replaces strings with new values)
***************************************************************/
/*
The replace() function is called on a string and will return a string 
with a pattern replaced by a replacement string. 

It takes either a regex or a string as the pattern. 
With a regex you can globally replace all matches (using the g option), 
but with a string it will only replace the first occurrence. 

In the example below, 
you will notice that world is replaced only once in the first call 
since it uses a string pattern.
*/

// Using the .replace() method

/**************************************************************
* String Method: .replace() (Replaces strings with new values)
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




