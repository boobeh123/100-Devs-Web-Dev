// ****************************************************************************************
// JavaScript.info Tasks
// ****************************************************************************************
/*
Using "this" in object literal

Here the function makeUser returns an object.
What is the result of accessing its ref? Why?

Parameters:
This function has no parameters

Returns:
This function returns an object
This object has a name property and a value of string
This object has a ref property and a value of this
*/

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();
// console.log(user.name);     // John
// console.log(user.ref);      // Window object
// console.log(user.ref.name); // What is the result? The result is blank

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     };
// }
  
// let user = makeUser();
  
// console.log(user.ref().name); // What is the result? The result is John
// This works because user.ref is a method. The value of this is set to the object before dot





/*
Create a calculator

Create an object calculator with three methods:

read() prompts for two values 
then saves them as object properties with names a and b respectively.

sum() returns the sum of saved values.

mul() multiplies saved values and returns the result.

PREP:
Parameters:
This function prompts for two integers and stores value in a property

Returns:
The sum method adds values of property a & b, then returns the sum
The mul method multuiplies values of property a & b, then returns the product

Examples:
If we are given 1 and 2, sum returns 3, mul returns 2
If we are given 0 and 0, sum returns 0, mul returns 0
If we are given 2 and -1, sum returns 1, mul returns -2

Pseudocode:
// Read method prompts user for two integers
    // Read method stores value as properties, named a & b
    
// Sum method returns a plus b
// Mul method returns a times b
 
*/

// let calculator = {
// /* ignore start
//     // Error
//     // read() {
//     //     a: Number(prompt("a:")),
//     //     b: Number(prompt("b:"))
//     // },

//     // Error
//     // read() {
//     //     this.a: Number(prompt("a:")),
//     //     this.b: Number(prompt("b:"))
//     // },

//     // Returns NaN
//     // read() {
//     //     a = Number(prompt("a:")),
//     //     b = Number(prompt("b:"))
//     // },
// ignore end */

//     // Returns integers
//     read() {
//         this.a = Number(prompt("a:")),
//         this.b = Number(prompt("b:"))
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());




/*
Chaining
There’s a ladder object that allows to go up and down:
Step begins at 0, 
up method increments step by 1
down method decrements step by 1
shopstep method displays current count of step

Modify the code of up, down and showStep to make the calls chainable
*/

let ladder = {
    step: 0,

    showStep() {
        console.log(this.step);
        return this;
    },

    up() {
        this.step++;
        return this;

    },

    down() {
        this.step--;
        return this;

    }
}

// ladder.showStep();  // 0
// ladder.up();        // increment by 1
// ladder.showStep();  // 1
// ladder.down();      // decrement by 1
// ladder.showStep();  // 0

// ladder.showStep().up().showStep();
ladder
.up()
.up()
.down()
.showStep()
.down()
.showStep();

// ****************************************************************************************
// JavaScript.info Tasks
// ****************************************************************************************



// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************

/*
Method examples
Function expression to create a function
Then assign it to property user.sayHello 
*/
// let user = {
//     name: "John",
//     age: 30
// };  
// user.sayHello = function() {
//     console.log("Hello!");
// };
// user.sayHello(); // Hello!

// // Declare function with literal notation
// function sayHi() {
//     console.log("Hi!");
// }
// // Assign it to property user.sayHi 
// user.sayHi = sayHi();



/*
Method shorthand

Both objects methods are the same
We can omit function() and write the method shorthand
*/

// let hello = {
//     sayHello: function() {
//       console.log("Hello");
//     }
// };
// let world = {
//     sayHi() {
//         console.log("Hi");
//     }
// };
// hello.sayHello();
// world.sayHi();




/*
"this" keyword in methods

During the execution of user.sayHi(),
the value of this will be user.
*/

// let user = {
//     name: "World",
//     age: 30,
//     sayHi() {
//       console.log(`Hello ${this.name}`);
//     }
// };
// user.sayHi(); // Hello World

/*
Accessing object without this keyword

This is unreliable
If we decide to copy admin = user
then overwrite user.

Result is it will access the wrong object
*/

// let user = {
//     name: "World",
//     age: 30,
//     sayHi() {
//       console.log(`Hello ${user.name}`); // user instead of this
//     }
// };
// user.sayHi(); // Hello World

// let admin = user;
// user = null; 
// admin.sayHi(); // TypeError





/*
This keyword is not bound

The value of this is evaluated during run-time

If there’s this inside a function, 
it expects to be called in an object context.

In non-strict mode the value of this in such case 
will be the global object (window in a browser
*/
// function sayHi() {
//     console.log(`Hello ${this.name}`);
// }
// sayHi(); // Hello

// // Create two objects
// let user = {
//     name: "John"
// }
// let admin = {
//     name: "Admin"
// };
// // Then assign sayHi to property
// user.hw = sayHi;
// admin.hw = sayHi;
// // Call the function
// user.hw(); // Hello John
// admin.hw(); // Hello Admin



/*
Arrow functions and this keyword
*/

// let user = {
//     name: "John",
//     sayHi() {
//         let arrow = () => console.log(`Hello ${this.name}`);
//         arrow();
//     }
// }
// user.sayHi(); // Hello John

// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************