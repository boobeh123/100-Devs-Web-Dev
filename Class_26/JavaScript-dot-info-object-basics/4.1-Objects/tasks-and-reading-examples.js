// ****************************************************************************************
// JavaScript.info tasks
// ****************************************************************************************

// ****************************************************************************************
// Hello Object
// ****************************************************************************************
/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. 
*/

let userObject = {};            // Create user object
userObject.name = "John";       // Add name property. Output = John
userObject.surname = "Smith";   // Add surname property. Output = Smith
userObject.name = "Pete";       // Reassign name property. Output = Pete
delete userObject.name;         // Delete name property. Output = undefined

console.log(userObject.name); 
console.log(userObject.surname); 
// ****************************************************************************************
// Hello Object
// ****************************************************************************************




// ****************************************************************************************
// Check for emptiness
// ****************************************************************************************
/*
Write the function isEmpty(obj) 
which returns true if the object has no properties,
false otherwise.

Example:
let schedule = {};            // Literal notation to create object.
alert( isEmpty(schedule) );   // Pass object into function. Object declared with no properties. Function returns true
schedule["8:30"] = "get up";  // Added key and value to object
alert( isEmpty(schedule) );   // Pass object into function. Object has 1 property. Function returns false

PREP:
Parameters:
This function takes in an object

Returns:
This function returns a boolean 

Examples:
If we are given {}, should return true
If we are given {key: "hello"}, should return false

Pseudocode:
// Function takes in an object
  // Iterate through an object using for (let key in obj)
    // Return false. Function ends (Loop ONLY begins if object has a property)
  // Return true. Function ends (Skips loop if no property found in object)
*/

// For in loop
function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

const anotherEmptyObject = {};  // First object to be passed into function.
const onePropertyObject = {     // Second object to be passed into function.
  greeting: "Hello",
};
console.log(isEmpty(anotherEmptyObject)); // true
console.log(isEmpty(onePropertyObject)); // false
// ****************************************************************************************
// Check for emptiness
// ****************************************************************************************




// ****************************************************************************************
// Sum object properties
// ****************************************************************************************
/*
Write the code to sum all salaries and 
store in the variable sum. 

Should be 390 in the example.
If salaries is empty, then the result must be 0.

PREP:
Parameters:
Not a function. No parameters

Returns:
Return sum of all numbers in an object.

Examples:
If we are given {key1: 100, key2: 160, key3: 130}, should return 390
If we are given {key1: 0, key2: 0, key3: 0}, should return 0
If we are given {}, should return 0

Pseudocode:
// Iterate through object using for (let key in object) loop
  // Pull values from object key and add to sum variable
*/
let threeEmployees = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let noEmployees = {
  John: 0,
  Ann: 0,
  Pete: 0
};
let emptyObject = {};

let sumThreeEmployees = 0;        // Sum variable for threeEmployees  
let sumNoEmployees = 0;           // Sum variable for noEmployees 
let sumEmptyObject = 0;           // Sum variable for emptyObject 

for (let key in threeEmployees) {
  sumThreeEmployees += threeEmployees[key];
}
for (let key in noEmployees) {
  sumNoEmployees += noEmployees[key];
}
for (let key in emptyObject) {
  sumEmptyObject += emptyObject[key];
}

console.log(sumThreeEmployees); // 390
console.log(sumNoEmployees);    // 0
console.log(sumEmptyObject);    // 0
// ****************************************************************************************
// Sum object properties
// ****************************************************************************************




// ****************************************************************************************
// Multiply numeric property values by 2
// ****************************************************************************************
/*
Create a function multiplyNumeric(obj) that 
multiplies all numeric property values of obj by 2.

Please note that multiplyNumeric does not need to return anything. 
It should modify the object in-place.

P.S. Use typeof to check for a number here. 

PREP:
Parameters:
This function takes in an object

Returns:
This function returns the product of all numeric properties being multipled by 2

Examples:
If we are given {key1: 200, key2: 300}, should return {key1: 400, key2: 600}
If we are given {key1: 10, key2: 20}, should return {key1: 20, key2: 40}
If we are given {key1: -10, key2: -20}, should return {key1: -20, key2: -40}

Pseudocode:
// Function takes in an object
  // Iterate through object using for (let key in object) loop
  // Pull value from object and calculate product by multiplying value by 2
  // Log object-keys to check for number data type

*/

function multiplyNumeric(object) {
  for (let key in object) {
    object[key] *= 2;
    console.log(object[key]); 
    console.log(typeof object[key])
  }
}

// Object to be passed into function
let exampleOne = {key1: 200, key2: 300};
let exampleTwo = {key1: 10, key2: 20};
let exampleTree = {key1: -10, key2: -20};

multiplyNumeric(exampleOne);  // 400, number, 600, number
multiplyNumeric(exampleTwo);  // 20, number, 40, number
multiplyNumeric(exampleTree); // -20, number, -40, number
// ****************************************************************************************
// Multiply numeric property values by 2
// ****************************************************************************************