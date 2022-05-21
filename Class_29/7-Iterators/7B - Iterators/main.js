/**************************************************************
* ITERATORS - INTRODUCTION TO ITERATORS
***************************************************************/
/*
When we want to iterate over an array, one tool is the for loop. 
Built-in JavaScript array methods that help us iterate 
are called iteration methods AKA iterators.

Iterators are methods called on arrays to manipulate elements and return values.
*/
/**************************************************************
* ITERATORS - INTRODUCTION TO ITERATORS
***************************************************************/




/**************************************************************
* THE .forEach() METHOD - READING EXAMPLES
***************************************************************/
/*
.forEach() will execute the same code for each element of an array.

Breakdown of the code below:
groceries.forEach() calls the forEach method on the groceries array.
forEach() takes an argument of callback function. (console.log() is the callback function in this example)
forEach() loops through the array and executes the callback function for each element...
...During each execution, the current element is passed as an argument to the callback function. (console.log() in this case)
The return value for .forEach() will always be undefined.
*/
const groceries = ['milk', 'bread', 'eggs', 'toilet papah'];
groceries.forEach(element => console.log(element));
/**************************************************************
* THE .forEach() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .forEach() METHOD - TASKS
***************************************************************/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// 1 - Iterate over the fruits array using forEach() method. Callback console.log and print "I want to eat a " plus the element.
fruits.forEach(element => console.log(`I want to eat a ${element}`));
// Output -> I want to eat a mango/papaya/pineapple/apple
/**************************************************************
* THE .forEach() METHOD - TASKS
***************************************************************/




/**************************************************************
* THE .map() METHOD - READING EXAMPLES
***************************************************************/
/*
.map() takes an argument of a callback function and returns a new array.
.map() is similar to .forEach()— the major difference is that .map() returns a new array.

Breakdown of the code below:
numbers is an array of numbers.
numSquared stores the (implicit) return value of calling .map() on numbers array.
numbers.map iterates through each element in the numbers array and passes...
...that element into the callback function (element*element is the cb func in this example)
element * element is the code we wish to execute upon each element in the array.
*/
const numbers = [2,3,4,5,6];
const numSquared = numbers.map(element => element * element);
// the original array is not altered and numSquared is a new array.
console.log(numbers);       // Output -> [ 2, 3, 4, 5, 6 ]
console.log(numSquared);    // Output -> [ 4, 9, 16, 25, 36 ]
/**************************************************************
* THE .map() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .map() METHOD - TASKS
***************************************************************/
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const bigNumbers = [100, 200, 300, 400, 500];
/* 1 - Declare a variable named secretMessage. Call the .map() method on the animals array 
and create a new array that contains the first letter of each element */
const secretMessage = animals.map(element => element[0]);
console.log(secretMessage.join(''));    // Output -> HelloWorld. NOW THAT'S A NICE HELLO WORLD.
/* 2 - Declare a variable named smallNumbers. Call the .map() method on the bigNumbers array.
and create a new array that contains the result of dividing each element by 100 */
const smallNumbers = bigNumbers.map(element => element / 100);
console.log(smallNumbers);              // Output -> [ 1, 2, 3, 4, 5 ]
/**************************************************************
* THE .map() METHOD - TASKS
***************************************************************/




/**************************************************************
* THE .filter() METHOD - READING EXAMPLES
***************************************************************/
/*
.filter() returns a new array, like .map().
.filter() returns an array of elements after filtering out certain elements from the original array. 

The callback function for the .filter() method should return true or false.
The elements that cause the callback function to return true are added to the new array.

Breakdown of the code below:
words is an array of strings.
shortWords stores the (implicit) return value of calling .filter() on words array.
The callback function is an arrow function that has a single parameter, element... 
...Each element in the words array will be passed to this function as an argument
element.length < 6; is the condition in the callback function. 
Any element from the words array that has less than 6 letters is added to shortWords array.
*/
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(element => element.length < 6);
// .filter() method does not mutate the original array.
console.log(words);     // Output -> [ 'chair', 'music', 'pillow', 'brick', 'pen', 'door' ]
console.log(shortWords);// Output -> [ 'chair', 'music', 'brick', 'pen', 'door' ]
/**************************************************************
* THE .filter() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .filter() METHOD - TASKS
***************************************************************/
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
/* 1 - Declare a variable named smallNumbers. Call .filter() method on the randomNumbers array...
...and filter out values that are less than 250. */
const smallNumbers = randomNumbers.filter(element => element < 250);
console.log(smallNumbers);// Output -> [ 200, 3.14, 7, 13 ]
/* 2 - Declare a variable named longFavoriteWords. Call .filter() method on the favoriteWords array...
...and filter out values that have more than 7 letters. */
const longFavoriteWords = favoriteWords.filter(element => element.length > 7);
console.log(longFavoriteWords);// Output -> [ 'nostalgia', 'hyperbole', 'esoteric' ]
/**************************************************************
* THE .filter() METHOD - TASKS
***************************************************************/




/**************************************************************
* THE .findIndex() METHOD - READING EXAMPLES
***************************************************************/
/*
Calling .findIndex() on an array will return the index of the first element 
that evaluates to true in the callback function.

If there isn’t a single element in the array that satisfies the condition 
in the callback, then .findIndex() will return -1.

Breakdown of the code below:
jumbledNums is an array of numbers.
lessThanTen stores the returned index number from calling .findIndex() on the jumbledNums array.
The callback function is an arrow function that has a single parameter, element... 
...Each element in the jumbledNums array will be passed to this function as an argument.
element < 10; is the condition that elements are checked against. 
*/
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(element => element < 10);
console.log(lessThanTen);   // Output -> 3 (the third index is 5)
/**************************************************************
* THE .findIndex() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .findIndex() METHOD - TASKS
***************************************************************/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
/* 1 - Declare a variable named foundAnimal. Call .findIndex() method on the animals array...
...and compare element to the string 'elephant'. */
const foundAnimal = animals.findIndex(element => element === 'elephant');
console.log(foundAnimal);   // Output -> 7 (the seventh index is elephant)
console.log(animals[7]);    // Output -> elephant
/* 2 - Declare a variable named startsWithS. Call .findIndex() method on the animals array...
...and compare the first letter of element to the letter 's'. */
const startsWithS = animals.findIndex(element => element[0] === 's');
console.log(startsWithS);   // Output -> 3 (the third index is seal)
console.log(animals[3]);    // Output -> seal
/**************************************************************
* THE .findIndex() METHOD - TASKS
***************************************************************/




/**************************************************************
* THE .reduce() METHOD - READING EXAMPLES
***************************************************************/
/*
.reduce() method returns a single value after iterating through 
the elements of an array, thereby reducing the array.
.reduce() method can also take an optional second parameter to set an initial value for acc.

Breakdown of the code below:
numbers is an array of numbers.
summedNums stores the returned value of invoking .reduce() on the numbers array.
numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.

The callback function has two parameters, accumulator and currentValue. (acc, c) 
The value of accumulator starts off as the value of the first element in the array
and the currentValue starts as the second element. 
*/
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((acc, c) => acc + c, 0); // <- 0 is the second argument
console.log(summedNums) // Output: 17
/**************************************************************
* THE .reduce() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .reduce() METHOD - TASKS
***************************************************************/
const newNumbers = [1, 3, 5, 7];
/* Note from me: 
Step 1 asks for the bare mimimum, the answer is newNumbers.reduce() */
// 1 - Declare a variable named newSum and call .reduce() on the newNumbers array.
// 2 - Provide .reduce with an argument of a callback function, accumulator and currentValue. Use an arrow function or function expression.
const newSum = newNumbers.reduce((acc, c) => {
    console.log(`The value of accumulator: ${acc}`);    // Step 3
    console.log(`The value of currentValue: ${c}`);  // Step 3
    return acc + c});                                           // Step 1 & 2
// 3 - Add print statements of acc & c to the function body of the callback.
// 4 - Using console.log(), print the value of newSum
console.log(newSum);
// 5 - Add a second argument of 10 as the initialValue.
/**************************************************************
* THE .reduce() METHOD - TASKS
***************************************************************/




/**************************************************************
* ITERATOR DOCUMENTATION - READING EXAMPLES
***************************************************************/
/*
The MDN provides a complete list & documentation of 
the many built-in array methods.

The documnetation contains information like:
1 - A short definition.
2 - A block with the correct syntax for using the method.
3 - A list of parameters the method accepts or requires.
4 - The return value of the function.
5 -An extended description.
6 -Examples of the method’s use.
7 - Other additional information.
*/
/**************************************************************
* ITERATOR DOCUMENTATION - READING EXAMPLES
***************************************************************/
/**************************************************************
* ITERATOR DOCUMENTATION - TASKS
***************************************************************/
/* Note from me: My code will not work for you. The program wants you to use
their parameters & variable names. I changed these values for readability. */
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// 1 - Using the .some() method on the words array, check if there are words < 6 letters long.
console.log(words.some(element => element.length < 6)); // Output -> true
/* 2 - Declare a variable named interestingWords. Using the .filter() method on the words array...
...filter out values longer than 5 letters and store the result in interestingWords. */
const interestingWords = words.filter(element => element.length > 5);
console.log(interestingWords);                          // Output -> [ 'unique', 'uncanny', 'oxymoron' ]
/* 3 - Using the .every() method on the interestingWords array...
...Check if all array elements have more than 5 letters. */
console.log(interestingWords.every(element => element.length > 5));
/**************************************************************
* ITERATOR DOCUMENTATION - TASKS
***************************************************************/




/**************************************************************
* CHOOSE THE RIGHT ITERATOR - READING EXAMPLES
***************************************************************/
/*
There are many iteration methods you can choose. 
In addition to learning the correct syntax for the use of iteration methods, 
it is also important to learn how to choose the correct method for different scenarios. 
*/
/**************************************************************
* CHOOSE THE RIGHT ITERATOR - READING EXAMPLES
***************************************************************/
/**************************************************************
* CHOOSE THE RIGHT ITERATOR - TASKS
***************************************************************/
/* Note from me: I am only providing the correct answer and not the templated question. */
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];
// 1 - Fill in the blank. Use the method that will do something to each element and return undefined.
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// 2 - Fill in the blank. Use the method that will return a new array with elements longer than 7 letters.
const longCities = cities.filter(city => city.length > 7);
// 3 - Fill in the blank. Use the method that takes an array containing multiple values and returns a single value.
const word = cities.reduce((acc, currVal) => {return acc + currVal[0]}, "C");
// 4 - Fill in the blank. Use the method that will return a new array of numbers returned from the function.
const smallerNums = nums.map(num => num - 5);
// 5 - Fill in the blank. Use the method that will return a boolean value.
nums.some(num => num < 0);
/**************************************************************
* CHOOSE THE RIGHT ITERATOR - TASKS
***************************************************************/




/**************************************************************
* REVIEW - CHALLENGES
***************************************************************/
// 1 - Define a callback function before you use it in an iterator.
/* ANSWER: I don't know. I am guessing that is is an arrow function.
A callback function is a function that is passed into a higher-order function, as an argument.
A callback function before I use it in an interator... is it an arrow function? is it regular function? is it an object method? */
// 2 - Chain two iteration methods on the same array.
let arrayOfWords = ['hello', 'world'];
const chainTwo = array => array.map(element => element[0]).join('');
console.log(chainTwo)           // Output -> hw
// 3 - Use optional arguments in an iterator to include the index or entire array.
const optionalArgs = array => array.map((element, index) => {
    console.log(element, index);// Output ->  hello 0 world 1
})
optionalArgs(arrayOfWords);
// 4 - Using .reduce(), take a multi-layered array and return a single-layered array.
let nestedArray = [[5,6], [7,8], [9,0]];
console.log(nestedArray.reduce(acc, c => acc + c, 0));  // Output -> 05,67,89,0
/**************************************************************
* REVIEW - CHALLENGES
***************************************************************/