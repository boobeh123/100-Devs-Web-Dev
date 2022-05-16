/**************************************************************
* VARIABLES - Reading examples
***************************************************************/
/*
A variable is a container for a value.
Information stored in variables can then be found in memory.

Variables provide a way of labeling data with a descriptive name.
The information in variables can be retrieved and updated.

It is important to distinguish that variables are not values; 
they contain values and represent them with a name.
*/
/**************************************************************
* VARIABLES - Reading examples
***************************************************************/
/**************************************************************
* VARIABLES - Tasks
***************************************************************/
/**************************************************************
* VARIABLES - Tasks
***************************************************************/




/**************************************************************
* CREATING VARIALBES (VAR) - Reading examples
***************************************************************/
/*
There changes introduced in the ES6 version of JavaScript in 2015.
Prior to the ES6, the Var keyword was used to declare variables.

Variable names are case sensitive: varName and varname would be different.
It is bad practice to declare two variables that use the same name using different cases.
Variables names cannot be the same as keywords.
*/
// var is the JavaScript keyword that declares a new variable
// varName is the variable's name.
// = is the assignment operator. It assigns value to varName
// 'Hello' is the value assigned to the variable, varName.
var varName = 'Hello';
/**************************************************************
* CREATING VARIALBES (VAR) - Reading examples
***************************************************************/
/**************************************************************
* CREATING VARIALBES (VAR) - Tasks
***************************************************************/
// 1 - Using the var keyword, declare favoriteFood and assign it the value 'pizza'.
var favoriteFood = 'pizza';
// 2 - Using the var keyword, declare numOfSlices and assign it the value 8
var numOfSlices = 8;
// 3 - Use console.log() to log the value stored inside of favoriteFood,
// and on the same line, log the value stored inside of numOfSlices.
console.log(favoriteFood, numOfSlices);     // Output -> pizza 8
/**************************************************************
* CREATING VARIALBES (VAR) - Tasks
***************************************************************/




/**************************************************************
* CREATING VARIALBES (LET) - Reading examples
***************************************************************/
/*
The let keyword was introduced in ES6. 
The let keyword signals that the variable can be reassigned a different value. 

The let keyword can declare a variable without assigning a value,
and that variable will be initialized with the value undefined.
*/
// let is the JavaScript keyword that declares a new variable
// meal is the variable's name.
// = is the assignment operator. It assigns value to meal
// 'Taco' is the value assigned to the variable, meal.
let meal = 'Taco';
console.log(meal);      // Output -> Taco
let meal = 'Burrito';   // Reassigning meal's value
console.log(meal)       // Output -> Burrito
let price;              // Declare variable without assigning value
console.log(price);     // Output -> undefined
price = 5.75;           // Assigning value to price
console.log(price);     // Output -> 5.75
/**************************************************************
* CREATING VARIALBES (LET) - Reading examples
***************************************************************/
/**************************************************************
* CREATING VARIALBES (LET) - Tasks
***************************************************************/
// 1 - Using let keyword, declare changeMe and assign it the boolean value, true
let changeMe = true;
// 2 - Reassign changeMe's value and assign it the boolean value, false
// and use console.log() to check if changeMe's value was reassigned
changeMe = false;
console.log(changeMe);  // Output -> false
/**************************************************************
* CREATING VARIALBES (LET) - Tasks
***************************************************************/




/**************************************************************
* CREATING VARIALBES (CONST) - Reading examples
***************************************************************/
/*
The const keyword was introduced in ES6.
Declaring a variable with const works like var and let,
but the variable's value cannot be reassigned and must be assigned a value.

A const cannot be reassigned because it is constant.
Attempting to reassign a const variable results in TypeError.
Attempting to declare a const without a value results in SyntaxError.

Use const unless you know if a variable will be reassigned.
*/
/**************************************************************
* CREATING VARIALBES (CONST) - Reading examples
***************************************************************/
/**************************************************************
* CREATING VARIALBES (CONST) - Tasks
***************************************************************/
// 1 - Using const, declare entree and assign the string 'Enchiladas'.
const entree = 'Enchiladas';
// 2 - Using console.log(), print the value of entree.
console.log(entree);        // Output -> Enchiladas
// 3 - Using const, attempt to reassign a constant variable.
entree = 'Tacos'            // Output -> TypeError
// Bonus - Using const, attempt to declare a constant variable without assigning it value.
const testing;              // Output -> SyntaxError
/**************************************************************
* CREATING VARIALBES (CONST) - Tasks
***************************************************************/




/**************************************************************
* MATHEMATICAL ASSIGNMENT OPERATORS - Reading examples
***************************************************************/
/*
How we can use variables and math operators 
to calculate new values and assign them to a variable?

Built-in mathematical assignment operators can be used to accomplish this.
*/
let w = 4;          // W declared with value of 4
w = w + 2;          // Increases value of w from 4 to 6
console.log(w);     // Output -> 6
let v = 4;          // V declared with value of 4
v += 2;             // Increases value of v from 4 to 6 using built-in math operators
console.log(v);     // Output -> 6
let x = 20;         // X declared with value of 20
x -= 5;             // Decreases value of x from 20 to 15 using built-in math operators
console.log(x);     // Output -> 15
let y = 50;         // Y declared with value of 50
y *= 2;             // Increases value of y from 50 to 100 using built-in math operators
console.log(y);     // Output -> 100
let z = 8;          // Z declared with the value of 8
z /= 2;             // Decreases value of z from 8 to 4 using built-in math operators
console.log(z);     // Output -> 4
/**************************************************************
* MATHEMATICAL ASSIGNMENT OPERATORS - Reading examples
***************************************************************/
/**************************************************************
* MATHEMATICAL ASSIGNMENT OPERATORS - Tasks
***************************************************************/
// 1 - Using the += operator, increase levelUp value by 5
let levelUp = 10;       // levelUp declared with the value of 10
levelUp += 5;           // Increases value of levelUp from 10 to 15
// 2 - Using the -= operator, decrease powerLevel value by 100
let powerLevel = 9001;  // powerLevel declared with the value of 9001
powerLevel -= 100;      // Decreases value of powerLevel from 9001 to 8901
// 3 - Using the *= operator, multiply multiplyMe value by 11
let multiplyMe = 32;    // multiplyMe declared with the value of 32
multiplyMe *= 11;       // Increases value of multiplyMe from 32 to 352
// 4 - Using the /= operator, divide quarterMe value by 4
let quarterMe = 1152;   // quarterMe declared with the value of 1152
quarterMe /= 4;         // Decreases value of quarterMe from 1152 to 288
/**************************************************************
* MATHEMATICAL ASSIGNMENT OPERATORS - Tasks
***************************************************************/




/**************************************************************
* INCREMENT & DECREMENT OPERATOR - Reading examples
***************************************************************/
/*
Other mathematical assignment operators include ++ and --

The increment operator (++) will increase the value of the variable by 1
The decrement operator (--) will decrease the value of the variable by 1

The variable’s value is updated and assigned as the new value of that variable.
*/
let a = 5;
console.log(a);     // Output -> 5
a++;                // Increment by one
console.log(a);     // Output -> 6
a--;                // Decrement by one
a--;                // Decrement by one again
console.log(a)      // Output -> 4
/**************************************************************
* INCREMENT & DECREMENT OPERATOR - Reading examples
***************************************************************/
/**************************************************************
* INCREMENT & DECREMENT OPERATOR - Tasks
***************************************************************/
// 1 - Using the increment operator, increase the value of gainedDollar
let gainedDollar = 3;
gainedDollar++;     // Increment by one (4)
// 2 - Using the decrement operator, decrease the value of lostDollar
let lostDollar = 50;
lostDollar--;       // Decrement by one (49)
/**************************************************************
* INCREMENT & DECREMENT OPERATOR - Tasks
***************************************************************/




/**************************************************************
* STRING CONCATENATION W/ VARIABLES - Reading examples
***************************************************************/
/*
The + operator can be used to combine two string values,
even if those values are being stored in variables

In the example below:
First we assigned the value 'pepe' to the petName variable. 
Second, the + operator is used to combine three strings:
'I have a pet frog, ', the value saved to petName, and '.'. 
We log the result of this concatenation to the console as:
I have a pet frog, pepe.
*/
let petName = 'pepe';
console.log('I have a pet frog, ' + petName + '.'); 
/**************************************************************
* STRING CONCATENATION W/ VARIABLES - Reading examples
***************************************************************/
/**************************************************************
* STRING CONCATENATION W/ VARIABLES - Tasks
***************************************************************/
// 1 - Create a variable named favoriteAnimal and set it equal to your favorite animal.
let favoriteAnimal = 'pepe frog'
// 2 - Using console.log(), print 'My favorite animal: ANIMAL' to the console. 
// Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.
console.log('My favorite animal: ' + favoriteAnimal);
/**************************************************************
* STRING CONCATENATION W/ VARIABLES - Tasks
***************************************************************/




/**************************************************************
* STRING INTERPOLATION - Reading examples
***************************************************************/
/*
In the ES6 version of JavaScript, 
we can insert, or interpolate, variables into strings using template literals. 

The example below is from "STRING CONCATENATION W/ VARIABLES" reading example,
but a template literal is used to log strings together vs concatenating.

Note that:
A template literal is wrapped by backticks `
Inside the template literal, you’ll see a placeholder, ${petName}
When we interpolate `I have a pet frog, ${petName}.`, 
the output printed is the string: I have a pet frog, pepe.
*/
console.log(`I have a pet frog, ${petName}.`); 
/**************************************************************
* STRING INTERPOLATION - Reading examples
***************************************************************/
/**************************************************************
* STRING INTERPOLATION - Tasks
***************************************************************

/* Note from me: Fictional names have been used for this task. */

// 1 - Create a variable called myName and assign it your name.
let myName = 'Boobeh123';
// 2 - Create a variable called myCity and assign it your favorite city’s name.
let myCity = 'Lumbridge';
// 3 - Use a single template literal to interpolate your variables into the sentence below. 
// Use console.log() to print your sentence to the console in the following format:
// "My name is myName. My favorite city is myCity."
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
// Output -> My name is Boobeh123. My favorite city is Lumbridge.
/**************************************************************
* STRING INTERPOLATION - Tasks
***************************************************************/




/**************************************************************
* TYPEOF OPERATOR - Reading examples
***************************************************************/
/*
It can be useful to keep track of the data types of the variables in your program. 

If you need to check the data type of a variable’s value, you can use the typeof operator.
The typeof operator checks the value to its right and returns a string of the data type.
*/
// typeof checks value to its right
console.log(typeof 'hello world');  // Output -> string
console.log(typeof 2);              // Output -> number
console.log(typeof false);          // Output -> boolean
/**************************************************************
* TYPEOF OPERATOR - Reading examples
***************************************************************/
/**************************************************************
* TYPEOF OPERATOR - Tasks
***************************************************************/
// 1 - Using console.log(), print the typeof newVariable.
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);    // Output -> string
// 2 - Reassign newVariable to 1.
newVariable = 1;
// 3 - Using console.log(), print typeof newVariable again.
console.log(typeof newVariable);    // Output -> number
/**************************************************************
* TYPEOF OPERATOR - Tasks
***************************************************************/




/**************************************************************
* REVIEW - Challenges
***************************************************************/
// 1 - Create variables and manipulate the values.
let challengeOne = '2';                     // String
let challengeTwo = 2;                       // Number
// 2 - Concatenate strings using variables of different data types.
console.log(challengeOne + challengeTwo);   // Output -> 22
// 3 - Interpolate multiple variables into a string.
console.log(`This is string: '${challengeOne}' \nThis is number: ${challengeTwo}`);
// 4 - Using console.log(), print variables, before they’re defined. Declare with different keywords
console.log(challengeTree);                 // Output -> undefined
console.log(challengeFour);                 // Output -> ReferenceError
console.log(challengeFive);                 // Output -> ReferenceError
var challengeTree = 'Hello world';
let challengeFour = 'Hello world';
const challengeFive = 'Hello world';
// 5 - Using typeof keyword, find the data type of a variable’s value
const challengeSix =;
const challengeSeven = '';
const challengeEight = true;
const challengeNine = 5;
console.log(typeof challengeSix);           // Output -> SyntaxError
console.log(typeof challengeSeven);         // Output -> String
console.log(typeof challengeEight);         // Output -> Boolean
console.log(typeof challengeNine);          // Output -> Number
// 6 - Using typeof keyword, find the data type of the resulting value after concatenating variables that contains two different data types.
// challengeTen is the result of concatenating a string and a number
let challengeTen = challengeOne + challengeTwo;
console.log(typeof challengeTen);           // Output -> string
/**************************************************************
* REVIEW - Challenges
***************************************************************/