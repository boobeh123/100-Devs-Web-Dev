/**************************************************************
* Array methods - Add/remove items
***************************************************************/
/*

Methods that add and remove items from the beginning or the end of an array:

arr.push()      – Adds items to the end of an array.
arr.pop()       – Extracts an item from the end of an array.
arr.shift()     – Extracts an item from the beginning of an array.
arr.unshift()   – Adds items to the beginning of an array.

*/

// Adding/Removing from an array:
let arrayOfNumbers = [];
arrayOfNumbers.push(2,3,4)
console.log(arrayOfNumbers) // Output -> [2, 3, 4]
arrayOfNumbers.pop()
console.log(arrayOfNumbers) // Output -> [2, 3]
arrayOfNumbers.shift()
console.log(arrayOfNumbers) // Output -> [3]
arrayOfNumbers.unshift(1, 2)
console.log(arrayOfNumbers) // Output -> [1, 2, 3]
/**************************************************************
* Array methods - Add/remove items
***************************************************************/




/**************************************************************
* Array methods - Delete
***************************************************************/
/*

How to delete an element from the array?
The arrays are objects, so we can try to use delete:

The element was removed, 
but the array still has 3 elements, 
we can see that arr.length == 3.

That’s natural, 
because delete obj.key removes a value by the key. 
It’s all it does. Fine for objects. 

But for arrays 
we usually want the rest of elements to shift and occupy the freed place. 
We expect to have a shorter array now.

*/

// Delete
let arr = ["I", "go", "home"];
console.log(arr, arr[2] ,arr.length);   // Output -> ['I', 'go', 'home'], 'home', 3
delete arr[2];
console.log(arr, arr[2] ,arr.length);   // Output -> ['I', 'go', empty], 'undefined', 3
/**************************************************************
* Array methods - Delete
***************************************************************/




/**************************************************************
* Array methods - Splice
***************************************************************/
/*

The arr.splice method is a swiss army knife for arrays.
It can do everything: insert, remove and replace elements.

Splice allows negative indexes. This specifies the position from the end of the array.

*/

// Deleting with splice
let arr = ["I", "study", "JavaScript"];
console.log(arr); // Output -> ['I', 'study', 'JavaScript']
arr.splice(0, 1); // From index 0, remove 1 element
console.log(arr); // Output -> ['study', 'JavaScript']

// Replacing with splice
let arr = ["I", "study", "JavaScript"];
console.log(arr);       // Output -> ['I', 'study', 'JavaScript']
arr.splice(0, 1, 'We')  // From index 0, remove 1 element, replace element with string
console.log(arr);       // Output -> ['We', 'study', 'JavaScript']

// Return removed elements
let arr = ["I", "study", "JavaScript"];
console.log(arr);       // Output -> ['I', 'study', 'JavaScript']
let removed = arr.splice(0, 2); // From index 0, remove two elements, store (removed) elements into variable
console.log(removed);   // Output -> ['I', 'study']
console.log(arr);       // Output -> ['JavaScript']

// Inserting with splice
let arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "the", "language"); // From index 2, remove 0 elements, insert strings
console.log(arr); // Output -> ['I', 'study', 'the', 'language', 'JavaScript']

// Using negative indexes
let arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);    // From the last index, remove 0 elements, insert integers
console.log(arr);           // Output ->  [1, 2, 3, 4, 5]
/**************************************************************
* Array methods - Splice
***************************************************************/




/**************************************************************
* Array methods - Slice
***************************************************************/
/*

The method arr.slice returns a new array 
copying to it all items from index start to end (not including end). 
Both start and end can be negative, 
in that case position from array end is assumed.

It’s similar to a string method str.slice, 
but instead of substrings it makes subarrays.

We can also call slice without arguments: 
arr.slice() creates a copy of arr. 
That’s often used to obtain a copy for further transformations 
that should not affect the original array.

*/

let arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3));   // Output -> ['e', 's']
console.log(arr.slice(-2));     // Output -> ['s', 't']
/**************************************************************
* Array methods - Slice
***************************************************************/




/**************************************************************
* Array methods - Concat
***************************************************************/
/*

The method arr.concat 
creates a new array that includes values from other arrays 
and additional items.

It accepts any number of arguments – either arrays or values.
The result is a new array containing items from arr, then arg1, arg2 etc.

If an array-like object has a special Symbol.isConcatSpreadable property, 
then it’s treated as an array by concat and its elements are added instead.

*/

// Concat returns a new array, doesn't mutate the original
let arr = [1, 2];
console.log(arr.concat([3, 4]));        // Output -> [1, 2, 3, 4]
console.log(arr)                        // Output -> [1, 2]
console.log(arr.concat([3, 4], [5, 6]));// Output -> [1, 2, 3, 4, 5, 6]
console.log(arr)                        // Output -> [1, 2]
console.log(arr.concat([3, 4], 5, 6));  // Output -> [1, 2, 3, 4, 5, 6]
console.log(arr)                        // Output -> [1, 2]

// Concatenating an object to an array. Objects are added as a whole.
let arr = [1, 2];
let arrayLike = {
  0: "hello",
  1: "world"
};
console.log(arr.concat(arrayLike)); // Output -> [1, 2, {…}]

// Concatenating an object to an array. Treated as an array
let arr = [1, 2];
let arrayLike = {
    0: "hello",
    1: "world",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
console.log(arr.concat(arrayLike)); // Output -> [1, 2, 'hello', 'world']
/**************************************************************
* Array methods - Concat
***************************************************************/




/**************************************************************
* Array methods - Iterate: forEach
***************************************************************/
/*

The arr.forEach method allows to run a function for every element of the array.

The result of the function (if it returns any) is thrown away and ignored.

*/

// Iterating through an array
let lotr = ["Bilbo", "Gandalf", "Nazgul"]
lotr.forEach((element, index, array) => console.log(`${element} is at index ${index} within ${array}`));
// Output -> Bilbo is at index 0 within Bilbo,Gandalf,Nazgul
// Output -> Gandalf is at index 1 within Bilbo,Gandalf,Nazgul
// Output -> Nazgul is at index 2 within Bilbo,Gandalf,Nazgul
/**************************************************************
* Array methods - Iterate: forEach
***************************************************************/




/**************************************************************
* Array methods - Searching: indexOf/lastIndexOf and includes
***************************************************************/
/*

arr.indexOf(item, from) – looks for item starting from index from, 
and returns the index where it was found, otherwise -1.

arr.includes(item, from) – looks for item starting from index from, 
returns true if found.

These methods are used with one argument: the item to search. 
By default, the search is from the beginning.
The method arr.lastIndexOf is the same as indexOf, 
but looks for from right to left.

If we want to check if item exists in the array, 
and don’t need the exact index, then arr.includes is preferred.

Please note that indexOf uses the strict equality === for comparison. 

Please note that includes() correctly handles NaN.
includes() uses up-to-date comparison algorithm internally.

*/

// indexOf returns the index if an item is found. Returns -1 if not found.
let arr = [1, 0, false];
console.log(arr.indexOf(0));    // Output -> 1
console.log(arr.indexOf(false));// Output -> 2
console.log(arr.indexOf(null)); // Output -> -1

// Includes returns a boolean if an item is found. Returns false if not found.
console.log(arr.includes(1));   // Output -> true
// Includes handling NaN
let arr = [NaN];
console.log(arr.includes(NaN)); // Output -> true

// lastIndexOf returns the index if an item is found, from right to left.
let fruits = ['Apple', 'Orange', 'Apple']
console.log(fruits.indexOf('Apple'));       // Output -> 0
console.log(fruits.lastIndexOf('Apple'));   // Output -> 2
/**************************************************************
* Array methods - Searching: indexOf/lastIndexOf and includes
***************************************************************/




/**************************************************************
* Array methods - Searching: find and findIndex/findLastIndex
***************************************************************/
/*

Imagine we have an array of objects. 
How do we find an object with the specific condition?
Here the arr.find(fn) method comes in handy.

If find returns true, the search is stopped, the item is returned. 
If nothing found, undefined is returned.

In real life arrays of objects is a common thing, so 
the find method is very useful.

The arr.findIndex method has the same syntax, 
but returns the index where the element was found 
instead of the element itself. 
The value of -1 is returned if nothing is found.

The arr.findLastIndex method is like findIndex, 
but searches from right to left, similar to lastIndexOf.

*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "Mary"}
  ];

// Find
let user = users.find((element) => element.id == 3)
console.log(user);      // Output -> {id: 3, name: 'Mary'}
console.log(user.name)  // Output -> Mary
console.log(user.id)    // Output -> 3

// findIndex returns index of first search, left to right.
console.log(users.findIndex(user => user.name == 'Mary'));      // Output -> 2

// findLastIndex returns index of first search, right to left.
console.log(users.findLastIndex(user => user.name == 'Mary'));  // Output -> 3
/**************************************************************
* Array methods - Searching: find and findIndex/findLastIndex
***************************************************************/




/**************************************************************
* Array methods - Searching: filter
***************************************************************/
/*

The find method looks for a single (first) element 
that makes the function return true.

If there may be many, we can use arr.filter(fn).
Filter returns an array of all matching elements.

*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "Mary"}
  ];
let arr = users.filter(user => user.id < 5);
console.log(arr.length);    // Output -> 4
/**************************************************************
* Array methods - Searching: filter
***************************************************************/




/**************************************************************
* Array methods - Transforming - map
***************************************************************/
/*

The arr.map method is one of the most useful and often used.
It calls the function for each element of the array 
and returns the array of results.

*/

let lotr = ["Bilbo", "Gandalf", "Nazgul"]
lotr.map((element) => element.toLowerCase());   // Output -> ['bilbo', 'gandalf', 'nazgul']
/**************************************************************
* Array methods - Transforming - map
***************************************************************/




/**************************************************************
* Array methods - Transforming - sort
***************************************************************/
/*

The call to arr.sort() sorts the array in place, 
changing its element order.

It also returns the sorted array, 
but the returned value is usually ignored, as arr itself is modified.

The items are sorted as strings by default.
All elements are converted to strings for comparisons. 
For strings, lexicographic ordering is applied and indeed "3" > "22".

For many alphabets, 
it’s better to use str.localeCompare method to correctly sort letters, 
such as Ö.

*/

// Sorting strings
let arr = ['b', 'a', 'd']
let arr2 = [3, 22, 2]
arr.sort();
arr2.sort();
console.log(arr);   // Output -> ['a', 'b', 'd']
console.log(arr2);  // Output -> [2, 22, 3]

// Sorting numeric
function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
}
let arr2 = [3, 22, 2]
arr2.sort(compare);
console.log(arr2);      // Output -> [2, 3, 22]

// Sorting alphabetically with localeCompare
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a.localeCompare(b)));  // Output -> Andorra,Österreich,Vietnam
/**************************************************************
* Array methods - Transforming - sort
***************************************************************/




/**************************************************************
* Array methods - Transforming - reverse
***************************************************************/
/*

The method arr.reverse reverses the order of elements in arr.
It also returns the array arr after the reversal.

*/

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);   // Output -> [5, 4, 3, 2, 1]
/**************************************************************
* Array methods - Transforming - reverse
***************************************************************/




/**************************************************************
* Array methods - Transforming - split and join
***************************************************************/
/*

Here’s the situation from real life. 
We are writing a messaging app, 
and the person enters the comma-delimited list of receivers: 
John, Pete, Mary. 

But for us an array of names would be much more comfortable 
than a single string. How to get it?

The str.split(delim) method does exactly that. 
It splits the string into an array by the given delimiter delim.

The split method has an optional second numeric argument – 
a limit on the array length. 
If it is provided, then the extra elements are ignored. 
In practice it is rarely used though:

Split can split the string into an array of letters.

The call arr.join(glue) does the reverse to split. 
It creates a string of arr items joined by glue between them.

*/

// Split by a comma followed by space
let lotr = 'Bilbo, Gandalf, Nazgul';
let arr = lotr.split(', ');
for (let name of arr) {
    console.log(`A message to ${name}`);   
}
// Output -> A message to Bilbo
// Output -> A message to Gandalf
// Output -> A message to Nazgul

// Limiting array length
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arr); // Output -> Bilbo, Gandalf

// Array of letters
let str = "test";
console.log(str.split('')); // Output ->  ['t', 'e', 's', 't']

// Join
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join('-'); // glue the array into a string using -
console.log(str) // Output -> Bilbo-Gandalf-Nazgul
/**************************************************************
* Array methods - Transforming - split and join
***************************************************************/




/**************************************************************
* Array methods - reduce/reduceRight
***************************************************************/
/*

The methods arr.reduce and arr.reduceRight are used to calculate
a single value based on the array.

The function is applied to all array elements one after another 
and “carries on” its result to the next call.

As function is applied, 
the result of the previous function call is passed to the next one 
as the first argument.
The first argument is essentially the accumulator that stores 
the combined result of all previous executions. 
And at the end it becomes the result of reduce.

It’s advised to always specify the initial value.

The method arr.reduceRight does the same, but goes from right to left.

*/

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, current) => acc + current, 0);
console.log(result);    // Output -> 15

let arr = ['a', 'b', 'c'];
let result = arr.reduceRight((acc, current) => acc + current);
console.log(result);    // Output -> cba
/**************************************************************
* Array methods - reduce/reduceRight
***************************************************************/




/**************************************************************
* Array methods - Array.isArray
***************************************************************/
/*

typeof does not help to distinguish a plain object from an array:

Array.isArray(value) returns true if the value is an array, false otherwise.

*/

console.log(typeof {});         // Output -> object
console.log(typeof []);         // Output -> object
console.log(Array.isArray([])); // Output -> true
console.log(Array.isArray({})); // Output -> false
/**************************************************************
* Array methods - Array.isArray
***************************************************************/




/**************************************************************
* Array methods - thisArg
***************************************************************/
/*

Almost all array methods that call functions – 
like find, filter, map, with a notable exception of sort, 
accept an optional additional parameter thisArg.

*/

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
};
  
let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];
  
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
/**************************************************************
* Array methods - thisArg
***************************************************************/




/**************************************************************
* Additional array methods
***************************************************************/
/*

arr.some(fn)/arr.every(fn) check the array.
The function fn is called on each element of the array similar to map. 
If any/all results are true, returns true, otherwise false.

arr.fill(value, start, end) – Fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – Copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) - Create a new flat array from a multidimensional array.

*/
/**************************************************************
* Additional array methods
***************************************************************/




/**************************************************************
* TASK: Translate border-left-width to borderLeftWidth
***************************************************************/
/*

Write the function camelize(str) 
that changes dash-separated words 
like “my-short-string” 
into camel-cased “myShortString”.

That is: removes all dashes, 
each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns a string.

Examples:
If we are given:        should return:
('background-color')    'backgroundColor'
('list-style-image')    'listStyleImage'
('-webkit-transition')  'WebkitTransition'

Pseudocode:
// This function takes in one parameter, it is a string.
    // We want to remove all dashes from the string.
    // We want to uppercase each letter after the dash is removed.

    // I use the split('-') method to convert the string into an array of strings.
        // I pass in a hyphen as the seperator. This describes where each split should occur.
    // I use the map method() to iterate over the array of strings and provide a function to each element.
        // I pass in the element and index as a callback function.
            // I use a ternary operator to determine what should happen to every element.
                // I compare the index of each element to the 0th index.
                    // If the index of the current element compared to the number 0 evaluates as true,
                        // I implicitly return that element.
                    // If the index of the current element compared to the number 0 evaluates as false,
                        // I use bracket notation to access the first index of that element.
                        // I use the toUpperCase() method to capitalize the first letter of that element.
                        // I use the slice() method and pass in 1 to copy elements after the second index.
    // I use the join() method to concatenate every element in the array of strings.
*/

function camelize(string) {
    return string
    .split('-')
    .map((element, index) => index === 0 ? element : element[0].toUpperCase() + element.slice(1))
    .join('');
}

const exampleOne = camelize('background-color');
const exampleTwo = camelize('list-style-image');
const exampleThree = camelize('-webkit-transition');

console.log(exampleOne);
console.log(exampleTwo);
console.log(exampleThree);
/**************************************************************
* TASK: Translate border-left-width to borderLeftWidth
***************************************************************/




/**************************************************************
* TASK: Filter range
***************************************************************/
/*

Write a function filterRange(arr, a, b) 
that gets an array arr, 
looks for elements with values higher or equal to a 
and lower or equal to b 
and return a result as an array.

The function should not modify the array. 
It should return the new array.

For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)

PREP:
Parameters:
This function takes in three parameters.

Returns:
This function returns an array.

Examples:
If we are given:                should return:
([5,3,8,1], 1, 4)               [3, 1]
([2,4,6,7,5,3,8,1,9,], 5, 18)   [6, 7, 5, 8, 9]
([2,4,6,7,5,3,8,1,9,], 3, 9)    [4, 6, 7, 5, 3, 8, 9]

Pseudocode:
// This function takes in 3 parameters.
    // The first parameter is an array of numbers.
    // The second parameter is a number.
    // The third parameter is a number.
    // We want to compare which elements from the array-argument against the 2nd && 3rd number-arguments.
        // We want to determine if the elements are greater than or equal to the second number-argument.
            // If the element compared to BOTH arguments evaluate as true, we want to store this element
        // We want to determine if the elements are less than or equal to the third number-argument.
            // If the element compared to BOTH arguments evaluate as true, we want to store this element

    // I declare a variable containing an empty array. This array will store elements from the array-argument.
    // I use the map() method to iterate through every element in the array-argument.
        // I use a conditional with the and operator (&&) to compare the current element against two number-arguments.
            // If the element is greater than or equal to the 2nd number-argument AND less than or equal to the 3rd number-argument,
                // I store the element into the variable containing an array.
    // I return the array.

*/

function filterRange(array, a, b) {
    let emptyArray = [];

    array.map((element) => {
        if ((element >= a) && (element <= b)) {
            emptyArray.push(element);
        }
    })

    return emptyArray;
}

const exampleOne = filterRange([5,3,8,1], 1, 4);
const exampleTwo = filterRange([2,4,6,7,5,3,8,1,9], 5, 18);
const exampleThree = filterRange([2,4,6,7,5,3,8,1,9], 3, 9);

console.log(exampleOne);
console.log(exampleTwo);
console.log(exampleThree);
/**************************************************************
* TASK: Filter range
***************************************************************/




/**************************************************************
* TASK: Filter range "in place"
***************************************************************/
/*

Write a function filterRangeInPlace(arr, a, b) 
that gets an array arr 
and removes from it all values 
except those that are between a and b. 
The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. 
It should not return anything.

For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

PREP:
Parameters:
This function takes in three parameters.

Returns:
This function returns an array.

Examples:
If we are given:        should return:
([5,3,8,1], 1, 4)       [3, 1]

Pseudocode:
// This function takes in 3 parameters.
    // The first parameter is an array of numbers.
    // The second parameter is a number.
    // The third parameter is a number.
    // We want to compare which elements from the array-argument against the 2nd && 3rd number-arguments.
        // We want to determine if the elements are greater than or equal to the second number-argument.
            // If the element compared to BOTH arguments evaluate as true, 
                // We want to modify the array-argument & remove elements from the array-argument passed in.
        // We want to determine if the elements are less than or equal to the third number-argument.
            // If the element compared to BOTH arguments evaluate as true, 
                // We want to modify the array-argument & remove elements from the array-argument passed in.

    // I use the forEach() method to iterate through the array-argument.
        // I pass in an element and index as callback functions.
            // I use a ternary operator to determine what should happen to each element.
                // I use a conditional with the and operator (&&) to compare the current element against two number-arguments.
                    // If the element is greater than or equal to the 2nd number-argument AND less than or equal to the 3rd number-argument,
                        // The element is unmodified,
                    // Otherwise I use the splice() method to remove one element at the index provided from forEach's callback function.
*/

function filterRange(array, a, b) {
    array.forEach((element, index) => element >= a && element <= b ? element : array.splice(index, 1))
}

let exampleOne = [5,3,8,1];
let exampleTwo = [2,4,6,7,5,3,8,1,9,];
let exampleThree = [2,4,6,7,5,3,8,1,9]

console.log(exampleOne);    // Output -> [5, 3, 8, 1]
console.log(exampleTwo);    // Output -> [2, 4, 6, 7, 5, 3, 8, 1, 9]
console.log(exampleThree);  // Output -> [2, 4, 6, 7, 5, 3, 8, 1, 9]

filterRange(exampleOne, 1, 4);      // Mutates original array
filterRange(exampleTwo, 5, 18);     // Mutates original array
filterRange(exampleThree, 3, 9);    // Mutates original array

console.log(exampleOne);    // Output -> [3, 1]
console.log(exampleTwo);    // Output -> [4, 6, 7, 5, 8, 9]
console.log(exampleThree);  // Output -> [4, 6, 7, 5, 3, 8, 9]
/**************************************************************
* TASK: Filter range "in place"
***************************************************************/




/**************************************************************
* TASK: Sort in decreasing order
***************************************************************/
/*
PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:        should return:
([5, 2, 1, -10, 8])     [8, 5, 2, 1, -10]

Pseudocode:
// This function takes in one parameter, it is an array of numbers.
    // We want to sort the array-argument in descending order.
        // We want to modify the original argument.

    // I use the sort() method and pass in two parameters which represent the first and second element to be compared.
        // I subtract the second parameter by the first parameter to sort elements from high to low.
            // This sort method modifies the original argument.
*/

function sortDescending(array) {
    return array.sort((a,b) => Number(b) - Number(a))
}

let exampleOne = [5, 2, 1, -10, 8, 11, 22, 33, 88]
let exampleTwo = [2, 4, 6, 7, 5, 3, 8, 1, 9]
let exampleThree = [3, 5, 2, 1, -10, 8, 4, 6, 7, 9]

console.log(exampleOne);        // Output -> [5, 2, 1, -10, 8, 11, 22, 33, 88]
console.log(exampleTwo);        // Output -> [2, 4, 6, 7, 5, 3, 8, 1, 9]
console.log(exampleThree);      // Output -> [3, 5, 2, 1, -10, 8, 4, 6, 7, 9]

sortDescending(exampleOne);
sortDescending(exampleTwo);
sortDescending(exampleThree);

console.log(exampleOne);        // Output -> [88, 33, 22, 11, 8, 5, 2, 1, -10]
console.log(exampleTwo);        // Output -> [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(exampleThree);      // Output -> [9, 8, 7, 6, 5, 4, 3, 2, 1, -10]
/**************************************************************
* TASK: Sort in decreasing order
***************************************************************/




/**************************************************************
* TASK: Copy and sort array
***************************************************************/
/*

We have an array of strings arr. 
We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:                should return:
(["HTML", "JavaScript", "CSS"]) ["CSS", "HTML", "JavaScript"]

Pseudocode:
// This function takes in one parameter, it is an array of strings.
    // We want to create a copy of the array-argument.
    // We want to sort the array-argument.

    // I use the slice() method to create a copy of the array-argument.
        // I pass in 0 to start copying elements at the 0th index.
    // I use the sort() method on the copy of the array-argument.
        // I pass in two parameters which represent the first and second element to be compared.
            // I use the localeCompare() method to determine whether a reference string comes before, or after, or is the same as the given string in sort order.
            // I compare sorts first parameter against sorts second parameter to rearrange elements in alphabetical order.
*/

function copySorted(array) {
    return array.slice(0).sort((a, b) => a.localeCompare(b))
}

let exampleOne = copySorted(["HTML", "JavaScript", "CSS"]);
let exampleTwo = copySorted(['Zebra', 'World', 'Hello', 'Olleh', 'Dlrow']);
let exampleThree = copySorted(['f', 'q', 'l', 'e', 'p', 'i', 'y', 'z', 'd', 'k', 'c', 'g', 'v', 'x', 'u', 'w', 'j', 's', 'h', 'b', 'a', 'm', 'n', 'o', 'r', 't'])

console.log(exampleOne);        // Output -> ['CSS', 'HTML', 'JavaScript']
console.log(exampleTwo);        // Output -> ['Dlrow', 'Hello', 'Olleh', 'World', 'Zebra']
console.log(exampleThree);      // Output -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
/**************************************************************
* TASK: Copy and sort array
***************************************************************/




/**************************************************************
* TASK: Create an extendable calculator
***************************************************************/
/*

Create a constructor function Calculator 
that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) 
that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited)
and returns the result. 
Should understand plus + and minus -.

Usage example:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) 
that teaches the calculator a new operation. 
It takes the operator name 
and the two-argument function func(a,b) that implements it.

For instance, 
let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.

*/

class Calculator {
    constructor() {
        this.firstNum = Number(0),
        this.operator = '',
        this.secondNum = Number(0)
    }

    calculate(string) {
        let equation = string.split(' ');
        equation.map((element, index) => {
            if (index === 0) {
                this.firstNum += Number(element);
            } else if (index === 1) {
                this.operator = element;
            } else if (index === 2) {
                this.secondNum += Number(element);
            }
        })

        if (this.operator === '+') {
            return this.firstNum + this.secondNum;
        } else if (this.operator === '-') {
            return this.firstNum - this.secondNum;
        } else if (this.operator === '*') {
            return this.firstNum * this.secondNum;
        } else if (this.operator === '/') {
            return this.firstNum / this.secondNum;
        } else if (this.operator === '**') {
            return this.firstNum ** this.secondNum;
        }
    }
    // Couldn't implement addMethod
    addMethod(operator, func) {
        console.log(`Calculator can now use ${operator}`)
    }
}

let exampleOne = new Calculator
exampleOne.calculate('33 + 7')
exampleOne.calculate('33 - 7')
exampleOne.calculate('33 * 7')
exampleOne.addMethod('*', (a,b) => a * b)

/**************************************************************
* TASK: Create an extendable calculator
***************************************************************/




/**************************************************************
* TASK: Map to names
***************************************************************/
/*

You have an array of user objects,
each one has user.name. 
Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  ... your code 

alert( names ); // John, Pete, Mary

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:                        
[
    { name: "John", age: 25 }, 
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
]

should return:
['John', 'Pete', 'Mary']

Pseudocode:
// This function takes in one parameter, it is an array of objects.
    // We want to store the name property-value of each object into an array.
    // We want to iterate through the array of objects
        // We want to access the name property of every object
            // We want to store the name property-value

    // I declare a variable containing an empty array. This array will store the name property-value from every object.
    // I use a for of loop to iterate through every element in the array-argument.
        // I use dot notation to access the name property on each object within the array.
            // I use the push() method to store the name property-value from the current object.
    // I return the variable containing the name property-value from every object.
*/

function usernamesToArray(array) {
    let arrayOfNames = [];

    for (let object of array) {
        arrayOfNames.push(object.name);
    }

    return arrayOfNames
}
let users = [ 
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
];
const exampleOne = usernamesToArray(users);
console.log(exampleOne);    // Output -> ['John', 'Pete', 'Mary']
/**************************************************************
* TASK: Map to names
***************************************************************/




/**************************************************************
* TASK: Map to objects
***************************************************************/
/*

You have an array of user objects, 
each one has name, surname and id.

Write the code to create another array from it, 
of objects with id and fullName, 
where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped =  ... your code ... 

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. 
Try using => here. There’s a small catch.

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:
[ 
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
];

should return:
[
    { "fullName": "John Smith", "id": 1 },
    { "fullName": "Pete Hunt", "id": 2 },
    { "fullName": "Mary Key", "id": 3 }
]

Pseudocode:
// This function takes in one parameter, it is an array of objects.
    // We want to create a new array containing objects with different properties and property-values.
        // We want to iterate through the array-argument.
        // We want to create a new object.
            // This object will have a new property that combines the property-values of the previous object.
    
    // I use the map() method to iterate through the array-argument.
        // I use literal notation to create an object.
            // I create a fullName property and set the value to a string.
                // I use template strings with placeholders to concatenate several elements into one string.
                    // I use dot notation to access the property value of both the name and surname properties.
                        // The placeholder contains the property value from the name & surname properties.
            // I create an id property and set the value to a number.
                // I use dot notation to access the id property-value from the previous object.
    // I return a new array containing new objects
*/

function mapObjectToObject(array) {
    return array.map((element) => ({
        fullName: `${element.name} ${element.surname}`,
        id: element.id
    }))
}

let users = [ 
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
];
const exampleOne = mapObjectToObject(users)
console.log(exampleOne);
/**************************************************************
* TASK: Map to objects
***************************************************************/




/**************************************************************
* TASK: Sort users by age
***************************************************************/
/*

Write the function sortByAge(users) 
that gets an array of objects 
with the age property 
and sorts them by age.

For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:
[ 
    { name: "John", age: 25 },
    { name: "Pete", age: 35 },
    { name: "Mary", age: 28 },
    { name: "Abe", age: 26 },
    { name: "Donald", age: 32 },
    { name: "Zack", age: 22 }
]

should return:
[
    { "name": "Zack", "age": 22 },
    { "name": "John", "age": 25 },
    { "name": "Abe", "age": 26 },
    { "name": "Mary", "age": 28 },
    { "name": "Donald", "age": 32 },
    { "name": "Pete", "age": 35 }
]

Pseudocode:
// This function takes in one parameter, it is an array of objects.
    // We want to sort the array of objects by the objects age property.

    // I use the sort() method on the array-argument.
        // I pass in two parameters which represent the first and second element to be compared.
            // I use dot notation to access the age property-value on sorts first and second arguments.
                // I use the Number() constructor to convert the age property-value to a number.
                    // I subtract the first property-value by the second property-value to sort from low to high.
*/

function sortByAge(array) {
    array.sort((a, b) => Number(a.age) - Number(b.age));
}
let users = [ 
    { name: "John", age: 25 },
    { name: "Pete", age: 35 },
    { name: "Mary", age: 28 },
    { name: "Abe", age: 26 },
    { name: "Donald", age: 32 },
    { name: "Zack", age: 22 }
];

users.forEach((user) => console.log(`Before sort: ${user.name} is ${user.age}`));
sortByAge(users);
users.forEach((user) => console.log(`After sort: ${user.name} is ${user.age}`));
/**************************************************************
* TASK: Sort users by age
***************************************************************/




/**************************************************************
* TASK: Shuffle an array 
***************************************************************/
/*

Write the function shuffle(array) 
that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. 
For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:    should return:
[1, 2, 3]           [2, 3, 1] or [2, 1, 3] or [3, 1, 2] or [3, 2, 1] or [1, 3, 2]

Pseudocode:
// This function takes in one parameter, it is an array.
    // We want to rearrange the elements of the array randomly.

    // In short: I used the fisher-yates shuffle to shuffle the array randomly.
    // I declare 3 variables which represent randomized indexes and temporary indexes??
        // The first variable represents a randomized index based off array.length
        // The second variable represents the element of the array-argument
        // The third variable represents the array.length
    // I use a for loop to generate indexes.
        // I initialized the for loop to start at the array.length - 1. This accounts for 0 indexing.
        // I stop the for loop when the initialized variable is no longer greater than 0.
        // I decrement the for loop by one by each iteration.
    // Fisher-yates shuffle happens.
    // I return the shuffled array.

*/

function shuffle(array) {
    // fisher-yates shuffle
    let j, x, i;
    
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    return array;
}
let exampleOne = shuffle([1, 2, 3]);
let exampleTwo = shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
let exampleThree = shuffle([{ "name": "Zack", "age": 22 },{ "name": "John", "age": 25 },{ "name": "Abe", "age": 26 },{ "name": "Mary", "age": 28 },{ "name": "Donald", "age": 32 },{ "name": "Pete", "age": 35 }]);

console.log(exampleOne);
console.log(exampleTwo);
console.log(exampleThree);
/**************************************************************
* TASK: Shuffle an array 
***************************************************************/




/**************************************************************
* TASK: Get average age
***************************************************************/
/*

Write the function getAverageAge(users) 
that gets an array of objects with property age 
and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns a number.

Examples:
If we are given:
[
    { name: "John", age: 20 },
    { name: "Pete", age: 50 },
    { name: "Mary", age: 29 }
]

should return: 
33

Pseudocode:
// This function takes in one parameter, it is an array of objects.
    // We want to calculate the average from every objects age property-value.
    
    // I declare a variable containing an empty array. This array will store the property-value from every objects age property.
    // I use the forEach() method to iterate through the array-argument.
        // I use the push() method to store the objects age property-value into the variable containing an array.
    // I use the reduce() method to add every number stored in the variable containing the array.
        // I use the .length property on the array-argument.
            // I divide the sum by the array-arguments length to calculate the average age.
    // I return the result.
*/

function getAverageAge(array) {
    let emptyArray = [];
    array.forEach((element) => emptyArray.push(element.age));
    return emptyArray.reduce((acc, c) => acc + c, 0) / array.length;
}

const exampleOne = getAverageAge([
    { "name": "Zack", "age": 22 },
    { "name": "John", "age": 25 },
    { "name": "Abe", "age": 26 },
    { "name": "Mary", "age": 28 },
    { "name": "Donald", "age": 32 },
    { "name": "Pete", "age": 35 }
])
const exampleTwo = getAverageAge([
    { name: "John", age: 20 },
    { name: "Pete", age: 50 },
    { name: "Mary", age: 29 }
])

console.log(exampleOne);
console.log(exampleTwo);
/**************************************************************
* TASK: Get average age
***************************************************************/




/**************************************************************
* TASK: Filter unique array members
***************************************************************/
/*

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an array.

Examples:
If we are given:
["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"]

should return:
['Hare', 'Krishna', ':-O']

Pseudocode:
// This function takes in one parameter, it is an array.
    // We want to store element into a new array.
    // We want to iterate through the array-argument.
        // We want to determine if the new array includes elements from the array-argument
    
    // I declare a variable containing an empty array. This variable will store elements from the array-argument.
    // I use the forEach() method to iterate through the array-argument.
        // I use a conditional, the not operator (!), and the includes() method to determine if the variable contains any elements from the array-argument
            // If the variable does not include the current element,
                // I store that element into the variable containing the array.

    // I return the array.
*/
function unique(array) {
    let emptyArray = [];

    array.forEach((element) => {
        if (!emptyArray.includes(element)) {
            emptyArray.push(element)
        }
    })

    return emptyArray;

    // One-liner
    // return [...new Set(array)]
}
let exampleOne = unique(["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"]);
let exampleTwo = unique([2, 6, 7, 4, 5, 4, 1, 8, 9, 0, 7, 4]);
console.log(exampleOne);
console.log(exampleTwo);
/**************************************************************
* TASK: Filter unique array members
***************************************************************/




/**************************************************************
* TASK: Create keyed object from array
***************************************************************/
/*

Let’s say we received an array of users 
in the form {id:..., name:..., age:... }.

Create a function groupById(arr) 
that creates an object from it, 
with id as the key, 
and array items as values.

For example:
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let usersById = groupById(users);
// after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.

PREP:
Parameters:
This function takes in one parameter.

Returns:
This function returns an object.

Examples:
If we are given:
[
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
]

should return:
{
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Pseudocode:
// This function takes in one parameter, it is an array of objects.
    // We want to create a new object.
        // The property of the new object will be the previous objects id property-value.
        // The property-value of the new object will be an object containing several key-value pairs.
    
    // I declare a variable containing an empty object. This object will be assigned key-value pairs after declaration.
    // I use a for of loop to iterate through an array of objects.
        // I use bracket notation to access the new object.
            // I reassign the property of the new object.
                // I use dot notation to access the property-value of the previous objects id property.
                    // The previous objects property-value is assigned to be the new objects property.
                // I reassign the new objects property-value to be an object literal.
                    // I use literal notation to create an object. 
                        // I assign the object literal an id key
                            // I assign the id key-value as the previous objects element.id
                        // I assign the object literal a name key
                            // I assign the id key-value as the previous objects element.name
                        // I assign the object literal an age key
                            // I assign the id key-value as the previous objects element.age
    // I return the variable containing an object.
*/

function groupById(array) {
    let emptyObj = {};

    for (const element of array) {
        emptyObj[element.id] = {
            id: element.id,
            name: element.name,
            age: element.age
        }        
    }
    return emptyObj
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
const exampleOne = groupById(users);
console.log(exampleOne);
/**************************************************************
* TASK: Create keyed object from array
***************************************************************/