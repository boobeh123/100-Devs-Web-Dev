/**************************************************************
* ARRAYS
***************************************************************/
/*
Organizing and storing data is a foundational concept of programming.
One way we organize data in real life is by making lists. 
Let’s make one here:

New Year's Resolutions:
1. Keep a journal 
2. Take a falconry class
3. Learn to juggle

Arrays are JavaScript’s way of making lists. 
Arrays can store any data types including strings, numbers, and booleans. 
Arrays are ordered, meaning each item has a numbered position.
*/
// Writing the New Year's Resolutions list in JavaScript, as an array:
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
/**************************************************************
* ARRAYS
***************************************************************/




/**************************************************************
* ARRAYS - READING EXAMPLES
***************************************************************/
/*
One way we can create an array is to use an array literal.
Arrays can store any data type.
Each item inside an array is called an element.
We can also save arrays to a variable.
*/
// Example of creating an array with literal notation
// The array is represented by the square brackets [] and the content inside.
let arrayExample = ['string', true, 5];
/**************************************************************
* ARRAYS - READING EXAMPLES
***************************************************************/
/**************************************************************
* ARRAYS - TASKS
***************************************************************/
// 1 - Create an array containing 3 strings. Store the array in the variable hobbies.
const hobbies = ['hello', 'world', 'three'];
// 2 - Using console.log(), print hobbies
console.log(hobbies);
/**************************************************************
* ARRAYS - TASKS
***************************************************************/




/**************************************************************
* ACCESSING ELEMENTS - READING EXAMPLES
***************************************************************/
/*
Each element in an array has a numbered position known as its index.
Arrays in JavaScript are zero-indexed, 
meaning the positions start counting from 0 rather than 1.

We can access individual elements using their index.
To access elements use bracket notation [] with the index after the name of the array.

We can access individual characters in a string using bracket notation & index.
*/
// Example of accessing elements in an array
const cities = ['Seattle', 'Sydney' ,'New York City']   // array w/ three elements
const secondIndex = cities[1];                          // accessing the second index with bracket notation
console.log(secondIndex);                               // Output -> Sydney
// Example of accessing characters in a string
const greet = 'Hello world';                            // string with 11 characters
const fifththIndex = greet[4];                          // accessing the fifth index
console.log(fifththIndex)                               // Output -> o
/**************************************************************
* ACCESSING ELEMENTS - READING EXAMPLES
***************************************************************/
/**************************************************************
* ACCESSING ELEMENTS - TASKS
***************************************************************/
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
// 1 - Access the first index and store the element in a variable.
const listItem = famousSayings[0];
// 2 - Using console.log(), print the third element in famousSayings array.
console.log(famousSayings[2]);      // Output -> Where there is love there is life.
// 3 - Using console.log(), print an element that doesn't exist.
console.log(famousSayings[3]);      // Output -> undefined
/**************************************************************
* ACCESSING ELEMENTS - TASKS
***************************************************************/




/**************************************************************
* UPDATE ELEMENTS - READING EXAMPLES
***************************************************************/
/*
In the previous exercise, 
you learned how to access elements inside an array by using an index. 
Once you have access to an element in an array, you can update its value.
*/
// Example of changing elements in an array
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';  // Access the 3rd index. Replace the element at index 3 with the string 'Autumn'
console.log(seasons);   //Output: ['Winter', 'Spring', 'Summer', 'Autumn']
/**************************************************************
* UPDATE ELEMENTS - READING EXAMPLES
***************************************************************/
/**************************************************************
* UPDATE ELEMENTS - TASKS
***************************************************************/
// 1 - Access the second element of groceryList and update the value to 'avocados'
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
/**************************************************************
* UPDATE ELEMENTS - TASKS
***************************************************************/




/**************************************************************
* ARRAYS WITH LET AND CONST - READING EXAMPLES
***************************************************************/
/*
We can change the contents of a const array, 
but cannot reassign a new array or a different value.
Elements in an array declared with const remain mutable.
*/
/**************************************************************
* ARRAYS WITH LET AND CONST - READING EXAMPLES
***************************************************************/
/**************************************************************
* ARRAYS WITH LET AND CONST - TASKS
***************************************************************/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
// 1 - Access the condiments array at index 0 and update the value to 'Mayo'
condiments[0] = 'Mayo';
console.log(condiments);    // Output -> [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
// 2 - Reassign the entire condiments array to a new array containing a single string 'Mayo'
condiments = ['Mayo'];
console.log(condiments);    // Output -> [ 'Mayo' ]
// 3 - Access the last index of the utensils array and update the value to 'Spoon'
utensils[3] = 'Spoon';
console.log(utensils);      // Output -> [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
/**************************************************************
* ARRAYS WITH LET AND CONST - TASKS
***************************************************************/




/**************************************************************
* THE .LENGTH PROPERTY - READING EXAMPLES
***************************************************************/
/*
One of an array’s built-in properties is length,
it returns the number of elements in the array.

When we want to know how many elements are in an array, 
we can access the .length property.
*/
// Example of using the .length property with an array
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
// Using dot notation, chain the array name and length property.
console.log(newYearsResolutions.length);    // Output -> 2
/**************************************************************
* THE .LENGTH PROPERTY - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .LENGTH PROPERTY - TASKS
***************************************************************/
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
// 1 - Using console.log(), print the length of the objectives array.
console.log(objectives.length);             // Output -> 3
/**************************************************************
* THE .LENGTH PROPERTY - TASKS
***************************************************************/




/**************************************************************
* THE .PUSH() METHOD - READING EXAMPLES
***************************************************************/
/*
.push() allows us to add items to the end of an array. 
.push() can take a single argument or multiple arguments separated by commas.
.push() referred to as a destructive array method since it changes the initial array.

*/
// Example of push method adding elements to an array
const itemTracker = ['item 0', 'item 1', 'item 2']; // 3 element array
itemTracker.push('item 3', 'item 4');               // Dot notation used to chain the array and method
console.log(itemTracker);                           // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
/**************************************************************
* THE .PUSH() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .PUSH() METHOD - TASKS
***************************************************************/
const chores = ['wash dishes', 'do laundry', 'take out trash'];
// 1 - Add two elements to the chores array, using push method
chores.push('hello', 'world');
// 2 - Using console.log(), print the chores array
console.log(chores);
/**************************************************************
* THE .PUSH() METHOD - TASKS
***************************************************************/




/**************************************************************
* THE .POP() METHOD - READING EXAMPLES
***************************************************************/
/*
.pop() allows us to remove elements from the end of an array. 
.pop() does not take any arguments, it simply removes the last element of arrays.
.pop() returns the value of the last element. 
.pop() mutates the initial array.
*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();   // Dot notation used to chain array and method
console.log(newItemTracker);            // Output: [ 'item 0', 'item 1' ]
console.log(removed);                   // Output: item 2
/**************************************************************
* THE .POP() METHOD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE .POP() METHOD - TASKS
***************************************************************/
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// 1 - Remove the last element of the chores array using pop method
chores2.pop();
console.log(chores2);   // Output -> [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]
/**************************************************************
* THE .POP() METHOD - TASKS
***************************************************************/




/**************************************************************
* MORE ARRAY METHODS - READING EXAMPLES
***************************************************************/
/*
Be sure to check the MDN to understand the behfavior of the method you use.

Here are a few array methods available:
.Join()
.slice()
.splice()
.shift()
.unshift()
.concat()
*/
/**************************************************************
* MORE ARRAY METHODS - READING EXAMPLES
***************************************************************/
/**************************************************************
* MORE ARRAY METHODS - TASKS
***************************************************************/
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// 1 - Using the shift() method, remove the first element from the groceryList array
groceryList.shift();            // Removes 'orange juice' from groceryList
console.log(groceryList);       // Output -> [ 'bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]
// 2 - Using the unshift() method, add 'popcorn' to the front of groceryList
groceryList.unshift('popcorn'); // Adds 'popcorn' to the front of groceryList
console.log(groceryList);       // Output -> [ 'popcorn','bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]
// 3 - Grab index 1,2,3 using slice() method and print the result in one line.
console.log(groceryList.slice(1,4));
// 4 - Print the grocery list after calling slice
console.log(groceryList);       // Slice method doesn't mutate the original array
// 5 - Find 'pasta' inside of groceryList using indexOf() method. Save the value to pastaIndex and print this variable
const pastaIndex = groceryList.indexOf('pasta');    // Output -> 4
/**************************************************************
* MORE ARRAY METHODS - TASKS
***************************************************************/




/**************************************************************
* ARRAYS AND FUNCTIONS - READING EXAMPLES
***************************************************************/
/*
what happens if we try to change an array inside a function? 
Does the array keep the change after the function call 
or is it scoped to inside the function?

Answer: If the array is mutated inside the function, 
that change will be maintained outside the function as well.

You might also see this concept explained as pass-by-reference 
since what we’re actually passing to the function is a reference to 
where the variable memory is stored and changing the memory.
*/
const flowers = ['peony', 'daffodil', 'marigold'];  // Array has 3 elemejnts
function addFlower(array) {
  array.push('lily');   // This function adds a string to the end of an array
}
addFlower(flowers);     // Calls function, passes original flowers array as argument, adds lily to the end of flowers array
console.log(flowers);   // Output -> ['peony', 'daffodil', 'marigold', 'lily']
/**************************************************************
* ARRAYS AND FUNCTIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* ARRAYS AND FUNCTIONS - TASKS
***************************************************************/
const concept = ['arrays', 'can', 'be', 'mutated']; // 4 element array
function changeArr(arr){
  arr[3] = 'MUTATED';                               // this function updates index 3 to MUTATED
}
changeArr(concept);                                 // calls the function and passes in concept
// 1 - Using console.log(), print the concept array.
console.log(concept);                               // Output -> [ 'arrays', 'can', 'be', 'MUTATED' ]
/* 2 - Declare a function named removeElement with a parameter of newArray.
In the function body, chain newArray to the pop() method. */
function removeElement(newArray) {
    newArray.pop();
}
// 3 - Call removeElement() and pass in concept.
removeElement(concept);
// 4 - Using console.log(), Print the value of concept.
console.log(concept);                               // Output -> [ 'arrays', 'can', 'be' ]
/**************************************************************
* ARRAYS AND FUNCTIONS - TASKS
***************************************************************/




/**************************************************************
* NESTED ARRAYS - READING EXAMPLES
***************************************************************/
/*
Arrays can store other arrays AKA nested array.
To access the nested arrays we can use bracket notation with the index value.
*/
// Example of accessing an array & accessing a nested array
const nestedArr = [[1], [2, 3]];    // A nested array
// Accessing an array
console.log(nestedArr[1]);          // Output -> [2, 3] -> Index 1 is the array [2, 3]
// Accessing a nested array
console.log(nestedArr[1][0]);       // Output -> 2      -> Accessing index 0 of the nested array 
/**************************************************************
* NESTED ARRAYS - READING EXAMPLES
***************************************************************/
/**************************************************************
* NESTED ARRAYS - TASKS
***************************************************************/
// 1 - Create a nested array.
const numberClusters = [[1,2], [3,4], [5,6]];
// 2 - Target the element 6 inside the nested array.
const target = numberClusters[2][1];    // Accessing the 3rd element, then accessing the second element of the nested array
/**************************************************************
* NESTED ARRAYS - TASKS
***************************************************************/




/**************************************************************
* ARRAYS - CHALLENGES
***************************************************************/
// 1 - Use the .length property to find the last element of an array.
let randomArray = [9,8,7,6,5,4,3,2,0];
console.log(randomArray.length);                          // Output -> 9
// 2 - Use other methods not mentioned in the lesson
console.log(randomArray.reduce((acc, c) => acc + c, 0));  // Output -> 44
console.log(greetArray.reverse());                        // Output -> ['world', 'Hello']
console.log(randomArray.map(element => element + 2));     // Output -> [ 11, 10, 9, 8, 7, 6, 5, 4, 2 ]
// 3 - Take all the elements in an array and make it a string.
let greetArray = ['Hello', 'world'];
let greetString = greetArray.join(' ');
console.log(greetString);                                 // Output -> Hello world
console.log(typeof greetString);                          // Output -> string
// 4 - Find the return value of calling .push on an array
let anothaArray = ['Test', 'tesT']
let anothaaArray = anothaArray.push('test');
console.log(anothaaArray;)                                // Output -> 3
// 5 - Nest an array within an array
let nestedArray = [5, [4,3], [2,0]];
console.log(nestedArray);                                 // Output -> [ 5, [ 4, 3 ], [ 2, 0 ] ]
let targetNest = nestedArray[2][0];     
console.log(targetNest);                                  // Output -> 2
/**************************************************************
* ARRAYS - CHALLENGES
***************************************************************/