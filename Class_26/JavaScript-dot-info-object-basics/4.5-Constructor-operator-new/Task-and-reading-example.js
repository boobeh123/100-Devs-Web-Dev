// ****************************************************************************************
// JavaScript.info Tasks
// ****************************************************************************************
/*
Two functions-- One object
Is it possible to create functions A and B 
so that new A() == new B()?
If it is, then provide an example of their code.
*/
// function A(name) {
//     this.name = name;
// }
// function B(name) {
//     this.name = name;
// }
// let userA = new A("Hello");
// let userB = new B("Hello");
// alert(userA == userB); // false

let emptyObject = {};

function A() {
    return emptyObject;
}
function B() {
    return emptyObject;
}

let a = new A;
let b = new B;

// alert(a == b); // true




/* Create a constructor function Calculator that creates objects with 3 methods:
read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/

function CFCalculator() {
    this.read = function() {
        this.a = Number(prompt("a:")),
        this.b = Number(prompt("b:"))
    },

    this.sum = function() {
        return this.a + this.b;
    },

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new CFCalculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );




/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:
Store the “current value” in the property value.
The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.
*/

function CFAccumulator(c) {
    this.value = c;

    this.read = function() {
        this.value += Number(prompt("Enter a number:"));
    };
}

let accumulator = new CFAccumulator(1);
// accumulator.read();
// alert(accumulator.value);
// ****************************************************************************************
// JavaScript.info Tasks
// ****************************************************************************************



// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************

/*
Constructor function
*/

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("John");
// console.log(user.name);
// console.log(user.isAdmin);

/*
new.target
Detect whether a function or constructor was called
using the new operator
*/
// function User() {
//     console.log(new.target);
// }
// User();     // undefined
// new User(); // function User { ... }

// function User(name) {
//     if (!new.target) {      // if constructor is called without new
//       return new User(name);// call it with new
//     }
  
//     this.name = name;
// }
// let hello = new User("Hello");
// let world = User("World");  // redirects call to new User
// console.log(hello.name);    // John
// console.log(world.name);    // John




/*
Return from constructors
*/

// function BigUser() {
//     this.name = "John";
//     return { name: "Godzilla" };    // Returns this object
// }
// console.log(BigUser().name);          // Godzilla
// console.log(new BigUser().name);      // Godzilla

// function SmallUser() {
//     this.name = "John";
//     return "hello";
// }
// console.log(SmallUser().name);      // undefined
// console.log(new SmallUser().name);  // John




/*
Methods in constructor
*/

// function User(name) {
//     this.name = name;
//     this.sayHi = function() {
//       console.log("Hello my name is: " + this.name );
//     };
// }
// let world = new User("World");  
// world.sayHi(); // My name is: World

// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************
