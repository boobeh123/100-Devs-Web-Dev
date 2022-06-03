/**************************************************************
* THE SECRET LIFE OF OBJECTS - ELOQUENT JS CHAPTER 06
***************************************************************/
/*
"An abstract data type is realized 
by writing a special kind of program […] 
which defines the type 
in terms of the operations 
which can be performed on it." - Barbara Liskov

Object-oriented programming - A set of techniques that use objects 
(and related concepts) as the central principle of program organization.
*/
/**************************************************************
* THE SECRET LIFE OF OBJECTS - ELOQUENT JS CHAPTER 06
***************************************************************/



/**************************************************************
* ENCAPSULATION - ELOQUENT JS CHAPTER 06
***************************************************************/
/*
The core idea in object-oriented programming 
is to divide programs into smaller pieces 
and make each piece responsible for managing its own state.

This way, some knowledge about the way a piece of the program works can be kept local to that piece

Different pieces of such a program interact with each other through interfaces
Such program pieces are modeled using objects. 
Their interface consists of a specific set of methods and properties. 
Properties that are part of the interface are called public. 
The others, which outside code should not be touching, are called private.

Many languages provide a way to distinguish public and private properties 
and prevent outside code from accessing the private ones altogether.

It is also common to put an underscore (_) character 
at the start of property names to indicate that those properties are private.

Separating interface from implementation is a great idea. 
It is usually called encapsulation.
*/
/**************************************************************
* ENCAPSULATION - ELOQUENT JS CHAPTER 06
***************************************************************/




/**************************************************************
* METHODS - READING EXAMPLES
***************************************************************/
/*
Methods are (nothing more than) properties that hold function values.

A method needs to do something with the object it was called on.
The binding called 'this' in its body points at the object that it was called on.

You can think of 'this' as an extra parameter that is passed in a different way. 
If you want to pass it explicitly, you can use a function’s call method.
It takes the 'this' value as its first argument and treats further arguments as normal parameters.

Since each function has its own this binding, 
whose value depends on the way it is called, 
you cannot refer to the this 
of the wrapping scope 
in a regular function defined with the function keyword.

Arrow functions are different—they do not bind their own this 
but can see the this binding of the scope around them. 
*/
//------------------------------------------------------------------------
// Object crated with literal notation
let rabbit = {};
// Adding a method after declaration
rabbit.speak = function(line) {
    console.log(`The rabbit says ${line}`)
}
// Calling the method
rabbit.speak('hello world');                    // Output -> The rabbit says hello world
//------------------------------------------------------------------------
function speak(line) {
    // This points at the object it was called on
    console.log(`The ${this.type} rabbit says '${line}'`);
}
// Two objects with one property and one method
let fuzzyRabbit = {type: "fuzzy", speak};
let hungryRabbit = {type: "hungry", speak};
// Calling the method
fuzzyRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");  // → The fuzzy rabbit says 'Oh my ears and whiskers, how late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");                      // → The hungry rabbit says 'I could use a carrot right now.'
//------------------------------------------------------------------------
// Using a function's call method and passing 'this' explicitly
speak.call(hungryRabbit, "dlrow olleh");        // Output -> The hungry rabbit says 'dlrow olleh'
//------------------------------------------------------------------------
function normalize() {
    // Coords is an object's property. The property value is an array of numbers. 
    // We iterate through the array using map. Map takes each array element and applies the condition: element divided by array.length
    console.log(this.coords.map(element => element / this.length));
}
// Pass in the object property (coords), value ([0,2,3]), and length (5)
normalize.call({coords: [0, 2, 3], length: 5}); // → [0, 0.4, 0.6]
/**************************************************************
* METHODS - READING EXAMPLES
***************************************************************/




/**************************************************************
* PROTOTYPES - READING EXAMPLES
***************************************************************/
/*
Most objects also have a prototype. 
A prototype is another object that is used as a fallback source of properties. 

When an object gets a request for a property that it does not have,
its prototype will be searched for the property, then the prototype’s prototype, and so on.

Object.getPrototypeOf returns the prototype of an object.

The prototype relations of JavaScript objects form a tree-shaped structure, 
and at the root of this structure sits Object.prototype. 
It provides a few methods that show up in all objects
(such as toString, which converts an object to a string representation)

Many objects have another object that provides a different set of default properties.
Functions derive from Function.prototype
Arrays derive from Array.prototype

Object.create creates an object with a specific prototype.
The “proto” rabbit acts as a container 
for the properties that are shared by all rabbits. 

An individual rabbit object, like the happy rabbit, 
contains properties that apply only to itself—in this case 
its type—and derives shared properties from its prototype.
*/

// Empty object with no properties or methods
let empty = {};
// Q: Who is the prototype of the empty object?
console.log(empty.toString);                                    // Output -> ƒ toString() { [native code] }
console.log(empty.toString());                                  // Output -> [object Object]
// A: Object.prototype. It's the entity behind all objects
console.log(Object.getPrototypeOf(empty) == Object.prototype);  // Output -> true
console.log(Object.getPrototypeOf({}) == Object.prototype);     // Output -> true
console.log(Object.getPrototypeOf(Object.prototype));           // Output -> null
// Object that provide a different set of default properties
console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // Output -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);          // Output -> true

// Creating an object with a specific prototype
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
};
let happyRabbit = Object.create(protoRabbit);
happyRabbit.type = "happy";
happyRabbit.speak("Hello your outfit is on point and you smell good");
/**************************************************************
* PROTOTYPES - READING EXAMPLES
***************************************************************/




/**************************************************************
* CLASSES - READING EXAMPLES
***************************************************************/
/*
*/
/**************************************************************
* CLASSES - READING EXAMPLES
***************************************************************/