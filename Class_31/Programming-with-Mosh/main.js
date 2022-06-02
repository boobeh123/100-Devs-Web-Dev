/**************************************************************
* OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT: MADE SUPER SIMPLE | MOSH
 - Video examples - 0:00 ~ 1:48
***************************************************************/
/* 
Q: What is OOP?
A: A programming paradigm centered around objects rather than functions.

OOP is not a programming language or tool. It is a style of programming.
Some languages that support OOP: C#, Java, Ruby, Python, JavaScript.

Many popular frameworks are designed with OOP concepts.
OOP is an essential skill for every developer
*/
/**************************************************************
* OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT: MADE SUPER SIMPLE | MOSH
 - Video examples - 0:00 ~ 1:48
***************************************************************/




/**************************************************************
* ENCAPSULATION - Video examples - 1:48 ~ 5:15
***************************************************************/
/*
Q: What are the 4 concepts of OOP?
A: Encapsulation, Abstraction, Inheritance, Polymorphism

Before OOP, we had procedure programming. 
In procedure programming, changing one function will often break other functions.
OOP solves this problem.

With OOP, we group related variables and functions that operate
on these variables. This is called Encapsulation.

"The best functions are those with no parameters" - Uncle Bob AKA Robert C Martin
The fewer number of parameters, the easier it is to use and maintain that function
*/

// Example of procedure programming
let baseSalary = 30_000;   // Why does this have an underscore?
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// OOP example of the code snippet above
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,

    getWage() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
/* In the OOP example, notice that the getWage() function has no parameters, while the procedural example does. 
That's because these parameters are modeled as properties of the employee object. */
/**************************************************************
* ENCAPSULATION - Video examples - 1:48 ~ 5:15
***************************************************************/




/**************************************************************
* ABSTRACTION - Video examples - 5:16 ~ 6:28
***************************************************************/
/*
Imagine a DVD player as an object. 
What happens when you push the "Play" button? 
(disc starts spinning, LED displays hours:minutes:seconds, etc..)
The complexities of what happens internally is hidden from the user.

This is abstraction in practice.
We can use that same technique on our objects. 
We can hide the complex properties and methods from the user.

Why would we want to do that?
This will make the interface simpler.
This will reduce the impact of change.
Fewer properties and methods are easier to use than several.
*/
/**************************************************************
* ABSTRACTION - Video examples - 5:16 ~ 6:28
***************************************************************/




/**************************************************************
* INHERITANCE - Video examples - 6:29 ~ 7:14
***************************************************************/
/*
Inheritance is a mechanism that allows you to eliminate redundant code.

HTML-elements such as text boxes, drop-down lists, and check boxes
all share similar properties and methods.

Instead of redefining all these properties & methods for every type of HTMLElement,
we can define them once in a generic object, HTMLElement.

Other objects can then inherit these properties and methods.
*/
/**************************************************************
* INHERITANCE - Video examples - 6:29 ~ 7:14
***************************************************************/




/**************************************************************
* POLYMORPHISM - Video examples - 7:15 ~ 8:10
***************************************************************/
/*
Polymorphism means many forms.
In OOP, polymorphism is a technique that allows you to get rid of
long if/else statements or switch/case statements.

This is referencing the HTML-elements from inheritance:
The text box, drop-down list, and check box objects should have the ability
to be rendered on the page.

To render objects in a procedural programming way, 
the code would look like a switch statement with several cases.

To render objects in an OOP way,
you would implement a render method in each object.
*/
/**************************************************************
* POLYMORPHISM - Video examples - 7:15 ~ 8:10
***************************************************************/




/**************************************************************
* BENEFITS OF OOP - Video examples - 8:11 ~ 8:53
***************************************************************/
/*
Encapsulation - We group related variables & functions together.
Grouping these together reduces the complexity. 
Objects can now be reused in different parts of a program.

Abstraction - We hide the complex details and show the essentials.
Incorporating abstraction also reduces the complexity and
isolates the impact of changes in the code.

Inheritance - We eliminate redundant code.

Polymorphism - Refactor switch/case statements.
*/
/**************************************************************
* BENEFITS OF OOP - Video examples - 8:11 ~ 8:53
***************************************************************/




/**************************************************************
* SET UP DEVELOPER ENVIRONMENT - 8:54 ~ 11:21
***************************************************************/
/*
 * Download VSCode (or any text editor) 
 * Download Live Server plugin
 * Create index.html
 * Setup html template (html:5 or bang tab)
 * Link script src
 * Create main.js
 */
/**************************************************************
* SET UP DEVELOPER ENVIRONMENT - 8:54 ~ 11:21
***************************************************************/




/**************************************************************
* OBJECT LITERALS - Video examples - 11:53 ~ 14:57
***************************************************************/
/*
Objects are essentially a collection of key value pairs
Property is used to hold values
Method is used to define some logic

Literal notation is a simple way to define an object.
*/

// Creating an object with literal notation
const circle = {
    // Properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    // Method
    draw() {
        console.log('Created with literal notation');
    }
};

// Accessing circle object with dot notation
circle.draw();      // Output -> Created with literal notation
/**************************************************************
* OBJECT LITERALS - Video examples - 11:53 ~ 14:57
***************************************************************/




/**************************************************************
* FACTORIES - Video examples - 14:58 ~ 17:50
***************************************************************/
/*
Imagine we want to create another circle object.
Using literal notation is not a good way to duplicate objects.
Using a factory (or constructor function) is the solution for this.

If we return an object in a function, then the function is referred as a factory.
*/

function CreateCircles(radius) {
    return {
        radius,     // If key & value share same name, we can remove the value
        draw() {
            console.log('Created with a factory function');
        }
    }
}
// Call factory function to create object
const circle2 = new CreateCircles(2);
circle2.draw();     // Output -> Created with a factory function
/**************************************************************
* FACTORIES - Video examples - 14:58 ~ 17:50
***************************************************************/




/**************************************************************
* CONSTRUCTORS - Video examples - 17:51 ~ 23:27
***************************************************************/
/*
Imagine we want to create another circle object.
Using literal notation is not a good way to duplicate objects.
Using a constructor (or factory function) is the solution for this.

If we use this keyword and new operator in a function, then the function
is referred as a constructor. 

The this keyword is a reference to the object that is executing the code.

3 Things happen when using the new operator to call a function
- An empty object is created
- This keyword points to that object
- Return that object from this function
*/

function CreateCircles2(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Created with a constructor function');
    }
}
// Call constructor function to create object
const circle3 = new CreateCircles2(2);
circle3.draw();     // Output -> Created with a constructor function
/**************************************************************
* CONSTRUCTORS - Video examples - 17:51 ~ 23:27
***************************************************************/




/**************************************************************
* CONSTRUCTOR PROPERTY - Video examples - 23:28 ~ 25:51
***************************************************************/
/*
The takeaway:
Every object in JavaScript has a constructor property.
The constructor property references the function that was used to create the object.

When creating an object with literal notation, the JavaScript engine
constructs that object with a built-in constructor function
*/
console.log(circle.constructor);     // Created with built-in constructor
console.log(circle2.constructor);    // Created with built-in constructor (Built with factory. Factory returns object literal. Still uses the built-in constructor)
console.log(circle3.constructor);    // Created with CreateCircles2 constructor
/**************************************************************
* CONSTRUCTOR PROPERTY - Video examples - 23:28 ~ 25:51
***************************************************************/




/**************************************************************
* FUNCTIONS ARE OBJECTS - Video examples - 25:52 ~ 
***************************************************************/
/*
One of the confusing concepts about JavaScript is that functions are objects.

Take a look at the CreateCircles2 constructor function below:
This function has access to methods like: toString and apply.
This function has access to properties like: name and length.

The takeaway is:
Functions are objects.
*/
CreateCircles2.toString();          // Output -> "function CreateCircles2(radius) {...}
CreateCircles2.apply();             // Output -> undefiend
CreateCircles2.name;                // Output -> CreateCircles2
CreateCircles2.length;              // Output -> 1

const CreateCircles3 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('Created with the built-in-Function-Constructor constructor function');
}
`)
const circle4 = new CreateCircles3(2);
circle4.draw();                     // Output -> Created with the built-in-Function-Constructor constructor function
CreateCircles2.call({}, 2)          // Same syntax as line 271
CreateCircles2.apply({}, [2,3,4])   // Same as call, but pass args in an array
/**************************************************************
* FUNCTIONS ARE OBJECTS - Video examples - 25:52 ~ 31:09
***************************************************************/




/**************************************************************
* VALUE VS REFERENCE TYPES - Video examples - 31:10 ~ 36:59
***************************************************************/
/*
There are two categories of types:
Reference Types - Objects, functions, arrays
Value Types     - String, Number, Boolean, Symbol, undefined, null (primitives)

When working with primitives, the value is stored inside the variable.
When copying a variable, the value is copied into the new variable.

When working with objects, the object is NOT stored inside the variable.
When copying an object, the reference is copied into the new variable.

That object is stored in memory and the address of the memory's location
is stored inside the variable.
Both a & b variables are pointing to the same object in memory.

The takeaway:
Primitives are copied by their value.
Objects are copied by their reference.
*/

// Declaring two primitives. X & Y are two independent variables
let x = 5;
let y = x;
x = 50;
console.log(x); // Output -> 50
console.log(y); // Output -> 5

// Same as above, but with reference types
let a = {value: 9};
let b = a;
a.value = 90;
console.log(a); // Output 90
console.log(b); // Output 90

// Value types & functions
let number = 5;
function increase(number) {
    number++;
}
increase(number);           // Call function to increase number. Increased value is out of scope
console.log(number);        // Output -> 5 (still)

// Reference types & functions
let number2 = {value: 50};
function increase2(obj) {
    obj.value++
}
increase2(number2);         // Call function to increase number. Object is passed by its reference
console.log(number2);       // Output -> 51
/**************************************************************
* VALUE VS REFERENCE TYPES - Video examples - 31:10 ~ 36:59
***************************************************************/




/**************************************************************
* ADDING/REMOVING PROPERTIES - Video examples - 37:00 ~ 40:53
***************************************************************/
/*
Objects in JavaScript are dynamic. Properties can be added or removed after creation.

Bracket notation is used when property names contain spaces or special characters.
*/

// Adding properties with dot notation
circle3.location = {x: 3};  

// Adding properties with bracket notation
circle3['location'] = {y: 3};

// Deleting properties
delete circle3.location;
/**************************************************************
* ADDING/REMOVING PROPERTIES - Video examples - 37:00 ~ 40:53
***************************************************************/




/**************************************************************
* ENUMERATING PROPERTIES - Video examples - 40:54 ~ 43:45
***************************************************************/
/*
One way to iterate (enumerate) over properties of an object, is the for in loop

To get the property value use bracket notation

in operator is used to check an object for a given property or method
*/

// Iterating over properties of an object 
for (let i in circle3) {
    console.log(i);                 // Output -> radius draw
}

// Iterating over property values of an object
for (let i in circle3) {
    console.log(circle3[i]);        // Output -> 2 draw() {...}
}

// Properties only and not the methods
for (let i in circle3) {
    if (typeof circle3[i] !== 'function') {
        console.log(i);             // Output -> radius
    }
}

// Property values only and not the methods
for (let i in circle3) {
    if (typeof circle3[i] !== 'function') {
        console.log(circle3[i]);    // Output -> 2
    }
}

// Returns properties in an array
console.log(Object.keys(circle3));

// in operator
if ('radius' in circle3) {
    console.log('This object has a radius property')
}
/**************************************************************
* ENUMERATING PROPERTIES - Video examples - 40:54 ~ 43:45
***************************************************************/




/**************************************************************
* ABSTRACTION - Video examples - 43:46 ~ 47:46
***************************************************************/
/*
Takeaway:
Hide the details, show the essentials

One change in the implementation of an object results in a number of changes in the source code.
*/

// This constructor function will call a method inside the draw() method
function CreateCircles4(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 3, y: 3}
    this.optimumLocation = function() {
        console.log(`${this.defaultLocation }`)
    }
    this.draw = function() {
        this.optimumLocation();
        console.log('Created with a constructor function: Abstraction example');
    }
}
const circle5 = new CreateCircles4(2);
// The problem is the object displays the defaultLocation property and optimumLocation() method. 
// This should not be accessible to the consumer of this object
circle5.defaultLocation = false;
circle5.optimumLocation();
circle5.draw();
/**************************************************************
* ABSTRACTION - Video examples - 43:46 ~ 47:46
***************************************************************/




/**************************************************************
* PRIVATE PROPERTIES AND METHODS - Video examples - 47:47 ~ 51:54
***************************************************************/
/*
Closure determines which variables will be accessible to an inner function.
Do not confuse closure with scope. Scope is temporary. Closure stays.

The draw() method has access to two variables from the parent function: defaultLocation & optimumLocation. 
The draw() method has access to two variables inside the function body: x y
x & y will be initialized each time draw() method is called. Once the method is done the local variables will be out of scope.
defaultLocation & optimumLocation will remain before, during, an after draw() method is called & executed.
*/

// Declaring a local variable inside a constructor function
function CreateCircles5(radius) {
    let color = 'orange';               // This variable will not be a part of the object. It is not a property. 
    let defaultLocation = {x: 3, y: 3}  // Converting a property to a local variable hides it from the consumer.
    let optimumLocation = function() {  // Converting a method to a local variable hides it from the consumer.
        console.log(`${defaultLocation }`)
    }
    this.radius = radius;
    this.draw = function() {
        let x = 'hello'
        let y = 'world'
        optimumLocation();
        console.log(`${x} ${y}: Abstraction in practice`);
    }
}
const circle6 = new CreateCircles5;
// The problem is solved. The object no longer displays defaultLocation or optimumLocation().
// The public interface is simpler and easier to work with
circle6.draw;
circle6.draw();
/**************************************************************
* PRIVATE PROPERTIES AND METHODS - Video examples - 47:47 ~ 51:54
***************************************************************/




/**************************************************************
* GETTERS/SETTERS - Video examples - 51:55 ~
***************************************************************/
/*

*/
/**************************************************************
* GETTERS/SETTERS - Video examples - 51:55 ~
***************************************************************/
