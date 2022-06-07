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
JavaScript’s prototype system can be interpreted as 
a somewhat informal take on an object-oriented concept called classes. 

A class defines the shape of a type of object—what methods and properties it has. 
Such an object is called an instance of the class.

Prototypes are useful for defining properties 
for which all instances of a class share the same value, such as methods.
Properties that differ per instance, need to be stored directly in the objects themselves.
(such as our rabbits’ type property)

A constructor function creates an instance of a given class. 
It makes an object that derives from the proper prototype.
It has properties that instances of this class are supposed to have.

If you put the keyword new in front of a function call, 
the function is treated as a constructor.

Functions automatically get a property named prototype, 
which by default holds a plain, empty object that derives from Object.prototype. 
You can overwrite it with a new object or you can add properties to the existing object

A constructor's name are capitalized so it is easily distinguished.

It is important to understand the distinction between 
the way a prototype is associated with a constructor and 
the way objects have a prototype

The actual prototype of a constructor is Function.prototype since constructors are functions. 
Its prototype property holds the prototype used for instances created through it.
*/
//------------------------------------------------------------
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
const testRabbit = makeRabbit('test');
testRabbit.speak('testing testing one two test'); // Output -> The test rabbit says testing testing one two test
//------------------------------------------------------------
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}
const dorkyRabbit = new Rabbit('dorky');
dorkyRabbit.speak('let me adjust my glasses');      // Output -> The dorky rabbit says let me adjust my glasses
//------------------------------------------------------------
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);   // → true
console.log(Object.getPrototypeOf(dorkyRabbit) == Rabbit.prototype);// → true
/**************************************************************
* CLASSES - READING EXAMPLES
***************************************************************/




/**************************************************************
* CLASS NOTATION - READING EXAMPLES
***************************************************************/
/*
JavaScript classes are constructor functions with a prototype property.

A class allows methods and a constructor to be defined. The class keywords starts the class declaration. Classes allow only methods.
Methods are properties that hold functions. 
Class can be used in statements and in expressions.
When used as an expression it produces the constructor as a value.
You are allowed to omit the class name in a class expression.
*/

// Using a class as a statement
class Rabbit2 {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`)
    }
}
const friendlyRabbit = new Rabbit2('friendly');
const focusedRabbit = new Rabbit2('focused');
friendlyRabbit.speak('Hello');
focusedRabbit.speak('world');

// Using class as an expression
let object2 = new class {
    greetMethod() {
        console.log("Hello world");
    }
};
object2.greetMethod();
/**************************************************************
* CLASS NOTATION - READING EXAMPLES
***************************************************************/




/**************************************************************
* OVERRIDING DERIVED PROPERTIES - READING EXAMPLES
***************************************************************/
/*
When you add a property to an object, whether it is present in the prototype or not, 
the property is added to the object itself.

The Rabbit and Object prototypes lie behind friendlyRabbit on the prototype chain, 
if properties do not exist in the object itself, it looks up the prototype chain.

Overriding is useful. It's used to make individual objects stand out.
Overriding is also used to give the standard function and array prototypes 
a different toString method than the basic object prototype.

Calling toString on an array 
gives a result similar to calling .join(",") on it—
it puts commas between the values in the array. 

Calling Object.prototype.toString with an array produces a different string.
That function doesn’t know about arrays, 
so it simply puts the word object and 
the name of the type 
between square brackets.
*/

// Adding a property to the prototype
Rabbit2.prototype.paw = "soft and spongy underneath";

// Adding a property to the object itself. (Overrides property value from Rabbit2 prototype)
friendlyRabbit.paw = "fuzzy fingers"

// Both objects are of the same prototype
console.log(focusedRabbit.paw);     // Output -> soft and spongy underneath
console.log(friendlyRabbit.paw);    // Output -> fuzzy fingers

// Going up the prototype chain
friendlyRabbit.paw          // Property of the friendlyRabbit object
friendlyRabbit.type         // Property of the Rabbit2 prototype
friendlyRabbit.speak()      // Method of the Rabbit2 prototype
friendlyRabbit.toString()   // Method of the Global Object prototype

// Using toString() on an array
const arrayToString = [2,3].toString();
console.log(arrayToString); // Output -> '2, 3'

// Using toString() on an object with an array
const objectToString = Object.prototype.toString.call([2,3]);
console.log(objectToString);// Output -> [object Array]

// Comparing array vs object toString() methods
console.log(Array.prototype.toString == Object.prototype.toString); // Output -> false
/**************************************************************
* OVERRIDING DERIVED PROPERTIES - READING EXAMPLES
***************************************************************/




/**************************************************************
* MAPS - READING EXAMPLES
***************************************************************/
/*
The word map has two different meanings in programming.

Map is an operation that transforms a data structure by applying a function to its elements.
(map is an array method. Map applies a function to every element in the array.)

A map (noun) is a data structure that associates values with other values.
(map is an object. Map associates keys with other keys. For example, map names to ages)

Using plan objects as maps is dangerous. There are several ways to avoid this problem.
It's possible to create objects with no prototype by passing null into Object.create
The resulting object will not derive from Object.prototype and can be used as a map.

Object property names must be strings. You cannot use an object as your map. 
JavaScript comes with a class called Map. It stores a mapping and allows any type of keys.

It is useful to know that Object.keys returns only an object’s own keys, not those in the prototype.
The hasOwnProperty method ignores the object’s prototype.

*/
// Object created with literal notation. 
let ages = {
    // Properties of the age object. People's names are object properties. People's ages are property values.
    Boris: 39,
    Liang: 22,
    Julia: 62
};

// Accessing object properties with bracket notation
console.log(`Julia is ${ages['Julia']}`);                       // Output -> Julia is 62

// Enumerating object properties with for in
// toString is not in our map. toString is a plain object. It derives from Object.prototype
console.log(`Is Jack's age known?`, 'Jack' in ages);            // Output -> Is Jack's age known? false
console.log(`Is toString available?`, 'toString' in ages);      // Output -> Is toString available? true

// An object with no prototype
console.log("toString" in Object.create(null));                 // Output -> false

// The set, get, has methods are part of the interface of the Map object.
let ages2 = new Map();
// Set method
ages2.set("Borris", 39);
ages2.set("Liang", 22);
ages2.set("Julia", 62);
// Get method
console.log(`Julia is ${ages2.get("Julia")}`);                  // Output -> Julia is 62
// Has method
console.log(`Is Jack's age known?`, ages2.has("Jack"));         // Output -> Is Jack's age known? false
console.log(`Is toString available?`, ages2.has("toString"));   // Output -> Is toString available? true

// The two objects created from Rabbit2 class. 
// focusedRabbit has a paw property from its prototype.
// friendlyRabbit added a paw property explicitly (line #303)
console.log(Object.keys(focusedRabbit));                        // Output -> [type]
console.log(Object.keys(friendlyRabbit));                       // Output -> [type, paw]
console.log(focusedRabbit.hasOwnProperty("paw"));               // Output -> false          
console.log(friendlyRabbit.hasOwnProperty("paw"));              // Output -> true
/**************************************************************
* MAPS - READING EXAMPLES
***************************************************************/




/**************************************************************
* POLYMORPHISM - READING EXAMPLES
***************************************************************/
/*
When you call the String function on an object, 
it will call the toString method on that object 
to try to create a meaningful string from it.

Some of the standard prototypes 
define their own version of toString 
so they can create a string that contains 
more useful information than "[object Object]". 

When a piece of code is written to work with objects
that have a certain interface—in this case, a toString method—
any kind of object that happens to support this interface can be plugged into the code, and it will just work.

This technique is called polymorphism. 
Polymorphic code can work with values of different shapes, 
as long as they support the interface it expects.

A for/of loop can loop over several kinds of data structures.
This is another case of polymorphism—
such loops expect the data structure to expose a specific interface, 
which arrays and strings do. 
We can also add this interface to our own objects! 
*/

// Standard prototype of toString with objects
console.log(friendlyRabbit.toString()); // Output -> [object Object]
console.log(String(friendlyRabbit));    // Output -> [object Object]

// Define own version of toString
Rabbit2.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}
console.log(String(friendlyRabbit));    // Output -> a friendly rabbit
/**************************************************************
* POLYMORPHISM - READING EXAMPLES
***************************************************************/




/**************************************************************
* SYMBOLS - READING EXAMPLES
***************************************************************/
/*
It is possible for multiple interfaces 
to use the same property name for different things. 

Property names are usually strings, but they can also be symbols. 
Symbols are values created with the Symbol function. 
Newly created symbols are unique—you cannot create the same symbol twice.

The string you pass to Symbol is included 
when you convert it to a string and 
can make it easier to recognize a symbol when, 
for example, showing it in the console. 
But it has no meaning beyond that—multiple symbols may have the same name.

Being both unique and usable as property names 
makes symbols suitable for defining interfaces 
that can peacefully live alongside other properties, 
no matter what their names are.
*/

// Symbol with the description 'name'. This symbol is stored in the variable sym
let sym = Symbol('name');

// Two symbols with the same description—they are not equal
console.log(sym == Symbol('name')); // Output -> false

// Adding Symbol as a property
Rabbit2.prototype[sym] = 55;
console.log(friendlyRabbit[sym]);       // Output -> 55
console.log(focusedRabbit[sym]);        // Output -> 55

//
const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};
console.log([2,3].toString());          // Output -> 2,3
console.log([2,3][toStringSymbol]());   // Output -> 2 cm of blue yarn
/**************************************************************
* SYMBOLS - READING EXAMPLES
***************************************************************/