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

console.log(author.includes(userSearchTermA));    // Output -> false
console.log(author.includes(userSearchTermB));    // Output -> true
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

console.log(author.indexOf(userSearchTermA));    // Output -> -1
console.log(author.indexOf(userSearchTermB));    // Output -> 6

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
let twoWorlds = 'Hi folx, My name is also folx. How funny.';
const removeTheseWords = /folx/ig;
const removeThisWord = 'folx';
const replaceWith = 'world';

// Original string
console.log(twoWorlds);                                         // Output -> Hi folx, My name is also folx. How funny.
// Using regex pattern
console.log(twoWorlds.replace(removeTheseWords, replaceWith));  // Output ->​ Hi world, My name is also world. How funny.
// Using string pattern
console.log(twoWorlds.replace(removeThisWord, replaceWith));    // Output ->​ Hi world, My name is also folx. How funny.
/**************************************************************
* String Method: .replace() (Replaces strings with new values)
***************************************************************/




/**************************************************************
* String Method: .slice() (Return a section of a string)
***************************************************************/
/*
The slice() method will extract a section of a string based on 
the index supplied and return it as a new string. 

This is useful when you know the structure of a string 
and want to retrieve a certain portion, 
or it can be used with the indexOf method where you can find the index of the 
first occurrence of a substring and use that as a reference point for slicing.

slice() takes the beginning index as the first parameter 
and an optional ending index as the second parameter.

If no ending index is supplied, 
it slices to the end of the string starting with your beginIndex. 
If a negative beginIndex is used, 
it will slice backwards from the end of the string. 
*/

// Using the slice() method
let str = 'User input: Hello there friends';
console.log(str.slice(12,17));          // Output -> Hello

// Using .indexOf() and slice()
let str = `We don't get got, we go get`;
let firstIndex = str.indexOf(',') + 1;  // Without the +1 the ',' is not extracted. Account for the , character
let newStr = str.slice(firstIndex);
console.log(newStr);                    // Output -> we go get

// Using negative index
let str = 'Test test one two three';
console.log(str.slice(-5));             // Output -> three
console.log(str.slice(-13, -6));        // Output -> one two
/**************************************************************
* String Method: .slice() (Return a section of a string)
***************************************************************/




/**************************************************************
* String Method: .split() (Converts string into an array of strings)
***************************************************************/
/*
The split() method takes a separator 
which you want to split apart the string on, 
and it returns an array of strings. 

This is useful when you know your string uses 
a certain character to separate data, 
or if you want to operate on specific substrings individually.
*/

// Using the split() method
let str = 'The cow jumped over the moon';
let words = str.split(' ');
let letters = str.split('');
console.log(words);             // Output -> ['The', 'cow', 'jumped', 'over', 'the', 'moon']
console.log(words.length);      // Output -> 6
console.log(letters);           // Output -> ['T', 'h', 'e', ' ', 'c', 'o', 'w', ' ', 'j', 'u', 'm', 'p', 'e', 'd', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'm', 'o', 'o', 'n']
console.log(letters.length);    // Output -> 28

// Splitting string by character
let strColumns = 'username:firstName:lastName:email';
let columIds = strColumns.split(':');
console.log(columIds);          // Output -> ['username', 'firstName', 'lastName', 'email']
/**************************************************************
* String Method: .split() (Converts string into an array of strings)
***************************************************************/




/**************************************************************
* String Method: .repeat() (Repeats a string a specified number of times)
***************************************************************/
/*
The repeat() function returns a string 
consisting of the elements of the object 
repeated the given number of times.
*/

// Using the repeat() method
let nums = '21 ';
console.log(nums.repeat(21));   // Output -> 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 21 
/**************************************************************
* String Method: .repeat() (Repeats a string a specified number of times)
***************************************************************/




/**************************************************************
* String Method: .match() (Returns array of matching strings)
***************************************************************/
/*
match() retrieves the matches when matching a string against a regular expression.

The example below searches our string for all capital letters. 
It returns an array of strings for the values that match the regex.
*/

let js = `How Can Mirrors Be Real If Our Eyes Aren't Real`;
let capitalRegex = /[A-Z]/g;
let capitalLetters = js.match(capitalRegex);
console.log(capitalLetters);    // Output -> ['H', 'C', 'M', 'B', 'R', 'I', 'O', 'E', 'A', 'R']
/**************************************************************
* String Method: .match() (Returns array of matching strings)
***************************************************************/




/**************************************************************
* String Method: .charAt() (Returns the character at an index)
***************************************************************/
/*
The charAt() function returns the string character at a given index.
*/

// Using charAt() method
const greet = 'Hello world';
console.log(greet.charAt(0));   // Output -> H
console.log(greet.charAt(6));   // Output -> W
/**************************************************************
* String Method: .charAt() (Returns the character at an index)
***************************************************************/




/**************************************************************
* String Method: .charAt() (Returns the character at an index)
***************************************************************/
/*
charCodeAt() returns the unicode of the character 
at a specified index in a string. 

This an UTF-16 cone integer between 0 and 65535.
*/

// Using charCodeAt() method
const greet = 'Hello world 🤠';
console.log(greet.charAt(12));   // Output -> Output -> � (cowboy emoji)
console.log(greet.charCodeAt(12));   // Output -> Output -> 55358
/**************************************************************
* String Method: .charAt() (Returns the character at an index)
***************************************************************/




/**************************************************************
* Conclusion
***************************************************************/
/*
This list covers an essential list of string methods used in JavaScript.

Methods not covered in this list include:
lastIndexOf, 
search, 
substring, 
substr, 
concat, 
localeCompare, and others. 

It’s not that these functions are not important, 
but they are not core methods utilized in JavaScript, 
and you are much less likely to see or need them. 

For a more comprehensive list, refer to the MDN string documentation.
*/
/**************************************************************
* Conclusion
***************************************************************/