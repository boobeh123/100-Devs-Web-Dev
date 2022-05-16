/**************************************************************
* CONSOLE - Reading examples
***************************************************************/
/*
The console is a panel that displays important messages, like errors
If we want to see things appear on our screen, we can log, to our console.
What we put inside the parentheses will get printed, to the console.
Later on we can use console.log() to print different kinds of data.
*/
// Example: Print value to the console
console.log(5); // Output -> 5
/**************************************************************
* CONSOLE - Reading examples
***************************************************************/
/**************************************************************
* CONSOLE - Tasks
***************************************************************/
/* 1 - Use the console.log code in the editor to log your age to the console.
*/
console.log(28);

/* 2 - Write another console.log to print out a different number representing 
        the number of weeks you’ve been programming.
*/
console.log(20);
/**************************************************************
* CONSOLE - Tasks
***************************************************************/




/**************************************************************
* COMMENTS - Reading examples
***************************************************************/
/*
Code can become difficult to understand, it’s useful to leave comments
The computer will ignore comments as our program runs.
Comments can explain what the code is doing and 
leave instructions for developers using the code.

There are two types of code comments in JavaScript:
    1 - A single line comment 
        * is denoted with two forward slashes // preceding it.
        * comments out a single line
    2 - A multi-line comment
        * is denoted with one forward slash and one asterisk to start comment
        * and asterisk foward slash to end comment
        * comments out multiple lines
        * Multi-line comments can be used in the middle of a line of code
*/
/**************************************************************
* COMMENTS - Reading examples
***************************************************************/
/**************************************************************
* COMMENTS - Tasks
***************************************************************/
/* 1 - On line 1, write a single line comment that says Opening line.
// Opening line

// 2 - Use a multi-line comment so that the bottom 6 statements are all commented out.
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/
/**************************************************************
* COMMENTS - Tasks
***************************************************************/




/**************************************************************
* DATA TYPES - Reading examples
***************************************************************/
/*
Data types are the classifications 
we give to the different kinds of data that we use in programming. 

In JavaScript, there are seven fundamental data types:
Number, String, Boolean, Null, Undefined, Symbol, Object

Number - Any number and decimal numbers.
String - Letters, numbers, spaces, symbols surrounded by quotes.
Boolean - Has two values, true or false.
Null - Absence of a value.
Undefined - A given value does not exist.
Symbol - Unique identifiers useful for complex code.
Object - Collections of related data.

The first 6 types above are considered primitive data types.
Objects are not a primitive data type.
*/

// This string isn’t just a single word; 
// It includes both capital & lowercase letters, spaces, and punctuation.
console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
// This number 40 does not have quotes. It's data type is a number, not a string.
console.log(40);
/**************************************************************
* DATA TYPES - Reading examples
***************************************************************/
/**************************************************************
* DATA TYPES - Tasks
***************************************************************/
// 1 - On line 1, log the string 'JavaScript' to the console.
console.log('JavaScript');
// 2 - On line 2, log the number 2011 to the console.
console.log(2011);
// 3 - On line 3, print 'Woohoo! I love to code! #codecademy' to the console.
console.log('Woohoo! I love to code! #codecademy')
// 4 - On line 4, print the number 20.49 to the console.
console.log(20.49);
/**************************************************************
* DATA TYPE - Tasks
***************************************************************/




/**************************************************************
* ARITHMETIC OPERATORS - Reading examples
***************************************************************/
/*
An operator is a character that performs a task in our code.
JavaScript has built-in arithmetic operators, 
that allow us to perform mathematical calculations on numbers.

The operators & their symbols:
Addition:           +
Subtraction:        -
Multiplication:     *
Division:           /
Remainder/Modulo:  %
*/
// The computer will evaluate the expression inside the parentheses.
console.log(2+2); // Output -> 4
console.log(3*3); // Output -> 6
// Modulo operator returns the remainder after division.
console.log(11 % 2); // Output -> 1 (11 divided by 2 has a remainder of 1)
console.log(12 % 2); // Output -> 0 (12 divided by 2 has no remainder)
/**************************************************************
* ARITHMETIC OPERATORS - Reading examples
***************************************************************/
/**************************************************************
* ARITHMETIC OPERATORS - Tasks
***************************************************************/
// 1 - Inside of a console.log(), add 3.5 to your age.
console.log(28 + 3.5);      // Output -> 31.5
// 2 - Inside of a console.log(), take the current year and subtract 1969.
console.log(2022 - 1969);   // Output -> 53
// 3 - Inside of a console.log(), divide 65 by 240.
// console.log(240 / 65)    // Wrong answer Output -> 3.6923076923076925
console.log(65 / 240);      // Correct answer Output -> 0.2708333333333333
// 4 - Inside of a console.log(), multiply 0.2708 by 100.
console.log(0.2708 * 100);  // Output -> 27.08
/**************************************************************
* ARITHMETIC OPERATORS - Tasks
***************************************************************/




/**************************************************************
* STRING CONCATENATION - Reading examples
***************************************************************/
/*
When a + operator is used on two strings, 
it appends the right string to the left string

This process of appending one string to another is called concatenation.
*/
// Includes a space at the end of the first string
console.log('hello ' + 'world');        // Output -> 'hello world'
// Includes a space at the front of the second string
console.log('hello' + ' world');        // Output -> 'hello world'
// Includes a space in the middle
console.log('hello' + ' ' + 'world');   // Output -> 'hello world'
// No space included anywhere
console.log('hello' + 'world');         // Output -> 'helloworld'
/**************************************************************
* STRING CONCATENATION - Reading examples
***************************************************************/
/**************************************************************
* STRING CONCATENATION - Tasks
***************************************************************/
// 1 - Inside a console.log(), concatenate the two strings 'Hello' and 'World'.
console.log('Hello' + 'World');         // Output -> 'HelloWorld'
// 2 - Same as above, but include a space (' ') between the two strings.
console.log('Hello' + ' ' + 'World');   // Output -> 'Hello World'
/**************************************************************
* STRING CONCATENATION - Tasks
***************************************************************/




/**************************************************************
* PROPERTIES - Reading examples
***************************************************************/
/*
All data types have access to specific properties 
that are passed down to each instance.

Every string instance has a property called length,
that stores the number of characters in that string.

We can access the length property by concatenating:
The string instance, a period (dot operator), then the length method.
*/
console.log('Hello'.length);    // Output -> 5
/**************************************************************
* PROPERTIES - Reading examples
***************************************************************/
/**************************************************************
* PROPERTIES - Tasks
***************************************************************/
// 1 - Use the length property to log the number of characters in a string
console.log('Teaching the world how to code'.length);   // Output -> 30
/**************************************************************
* PROPERTIES - Tasks
***************************************************************/




/**************************************************************
* METHODS - Reading examples
***************************************************************/
/*
Data types have access to specific methods.
JavaScript provides several string methods.

We can access methods by using the ., dot operator.
*/
// .toUpperCase() method is called on the string instance 'Hello'
console.log('Hello'.toUpperCase());     // Output -> 'HELLO'
// .startsWith() method is called on the string instance 'World'
// This method accepts the character 'W' as an argument,
// checks if string 'World' starts with the letter 'W' and returns the boolean true
console.log('World'.startsWith('W'));   // Output -> true
/**************************************************************
* METHODS - Reading examples
***************************************************************/
/**************************************************************
* METHODS - Tasks
***************************************************************/
// 1 - Use .toUpperCase() to log the string 'Codecademy' in all capital letters.
console.log('Codecademy'.toUpperCase());        // Output -> CODECADEMY
// 2 - Use .trim() to remove whitespace at the beginning and end of the string.
console.log('    Remove whitespace   '.trim()); // Output -> Remove whitespace
/**************************************************************
* METHODS - Tasks
***************************************************************/




/**************************************************************
* BUILT-IN OBJECTS - Reading examples
***************************************************************/
/*
JavaScript has the built-in Math object, 
these built-in objects have methods.
*/
// The random() method from the built-in Math object
console.log(Math.random());     // Output -> Random number between 0 and 1
// To generate a random number between 0 & 50, multiply the result
console.log(Math.random() * 50);// Output -> Random number between 0 and 50
// Takes a decimal number and rounds down to the nearest whole number
console.log(Math.floor(33.33));// Output -> 33
/**************************************************************
* BUILT-IN OBJECTS - Reading examples
***************************************************************/
/**************************************************************
* BUILT-IN OBJECTS - Tasks
***************************************************************/
// 1 - Inside of a console.log(), use Math.random(), then multiply it by 100.
console.log(Math.random() * 100);               // Output -> Random decimal number between 0 & 100
// 2 - Use Math.floor to make the output above, a whole number.
console.log(Math.floor(Math.random() * 100));   // Output -> Random number between 0 & 100, rounded down
// 3 - Use Math.ceil to return the smallest integer >= to the decimal number 43.8.
console.log(Math.ceil(43.8));                   // Output -> 44
// 4 - Use Number.isInteger to check if a number is an integer
console.log(Number.isInteger(2017));            // Output -> true
/**************************************************************
* BUILT-IN OBJECTS - Tasks
***************************************************************/