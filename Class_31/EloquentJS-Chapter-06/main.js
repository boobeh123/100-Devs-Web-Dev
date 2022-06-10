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
It is possible for multiple interfaces to use the same property name for different things. 
We could define an interface in which the toString method is supposed to convert the object into a piece of yarn. 
It would not be possible for an object to conform to both that interface and the standard use of toString.
That would be a bad idea, and this problem isn’t that common.

Property names are usually strings, but they can also be symbols. 
Symbols are values created with the Symbol function. 
Newly created symbols are unique—you cannot create the same symbol twice.

The string you pass to Symbol is included when you convert it to a string 
and can make it easier to recognize a symbol
Being both unique and usable as property names makes symbols suitable for defining interfaces 


It is possible to include symbol properties in object expressions and classes 
by using square brackets around the property name. 
That causes the property name to be evaluated, 
much like the square bracket property access notation, 
which allows us to refer to a binding that holds the symbol.
*/

// Symbol with the description 'name'. This symbol is stored in the variable sym
let sym = Symbol('name');

// Two symbols with the same description—they are not equal
console.log(sym == Symbol('name')); // Output -> false

// Adding Symbol as a property
Rabbit2.prototype[sym] = 55;
console.log(friendlyRabbit[sym]);               // Output -> 55
console.log(focusedRabbit[sym]);                // Output -> 55

// Symbol with the description 'toString'
const toStringSymbol = Symbol('toString');
// Define custom prototype of toString. Custom prototype is stored in Symbol('toString')
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};
// Standard prototype of toString
console.log([2,3].toString());                  // Output -> 2,3
// Custom prototype of toString. Called using variable containing Symbol('toString')
console.log([2,3][toStringSymbol]());           // Output -> 2 cm of blue yarn

// Object created with literal notation
let stringObject = {
    // Define custom prototype of toString. This method returns a string. 
    [toStringSymbol]() {return "a jute rope";}
};
// Using standard & custom toString methods
console.log(stringObject.toString());           // Output -> [object Object]
console.log(stringObject[toStringSymbol]());    // Output -> a jute rope
/**************************************************************
* SYMBOLS - READING EXAMPLES
***************************************************************/




/**************************************************************
* THE ITERATOR INTERFACE - READING EXAMPLES
***************************************************************/
/*
The object given to a for/of loop is expected to be iterable. 
This means it has a method named with the Symbol.iterator symbol 

When called, 
that method should return an object 
that provides a second interface, iterator. 
This is the actual thing that iterates. 

It has a next method that returns the next result. 
That result should be an object with a value property 
that provides the next value, if there is one, and a done property, 
which should be true when there are no more results and false otherwise.

Note that the next, value, and done property names are plain strings, not symbols. 
Only Symbol.iterator, 
which is likely to be added to a lot of different objects, is an actual symbol.

Let’s implement an iterable data structure. 
We’ll build a matrix class, acting as a two-dimensional array.
The elements are stored row by row.
*/

// Using the Symbol.iterator method to iterate over a string, "Hi"
let hiIterator = "Hi"[Symbol.iterator]();
// Returns an object. The object contains two properties. The value property contains letters of the string.
console.log(hiIterator.next()); // Output -> {value: 'H', done: false}
console.log(hiIterator.next()); // Output -> {value: 'i', done: false}
// The done property is true, iterating further returns no more results
console.log(hiIterator.next()); // Output -> {value: undefined, done: true}

// Matrix class acts as a two-dimensional array
class Matrix {
    // The constructor function takes a width, a height,
    // and an optional element function that will be used to fill in the initial values.
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        // Matrix class stores its content in a single array of width × height elements.
        this.content = [];

        // When looping over a matrix, 
        // look for position of elements and elements themselves 
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    
    // Retrieves elements in the matrix
    get(x, y) {
        return this.content[y * this.width + x];
    }
    // Update elements in the matrix
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

// Our Matrix iterator produces objects with x, y, and value properties.
class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    // Tracks progress of iterating over x & y properties
    next() {
        // Checks if bottom of the matrix has been reached
        if (this.y == this.matrix.height) return {done: true};
        
        // if bottom hasn't reached, create an object holding the current value
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }
        // then update its position
        this.x++;
        // moving to the next row if necessary
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

// Defining our own iterator. Allows matrix class to be iterable
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

// Looping over a matrix with for of
let daMatrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of daMatrix) {
    console.log(x, y, value);
}
/**************************************************************
* THE ITERATOR INTERFACE - READING EXAMPLES
***************************************************************/




/**************************************************************
* GETTERS, SETTERS, AND STATICS - READING EXAMPLES
***************************************************************/
/*
Interfaces often consist mostly of methods, 
but it is also okay to include properties that hold non-function values.

Getters are defined by 
writing get in front of the method name in an object expression or class declaration.

Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype. 
Such methods won’t have access to a class instance but can, 
for example, be used to provide additional ways to create instances.

Inside a class declaration, 
methods that have static written before their name are stored on the constructor. 
*/

// Object created with literal notation
let varyingSize = {
    // Whenever someone reads this object's size property, the getter method is called.
    get size() {
        // This method returns a random number between 1 and 100
        return Math.floor(Math.random() * 100);
    } 
}
console.log(`Reading varyingSize's size property: ${varyingSize.size}`);

// Temperature class allows read and write with celsius and fahrenheit 
class Temperature {
    // Only celsius is stored
    // Automatically converts to & from celsius using fahrenheit getter and setter
    constructor(celsius) {
        this.celsius = celsius;
    }
    // Reading the fahrenheit property calls the getter method
    get fahrenheit() {
        // This method calculates the formula to convert from celsius to fahrenheit
        return this.celsius * 1.8 + 32;
    }

    // Writing the fahrenheit property calls the setter method
    set fahrenheit(value) {
        // This method calculates the formula to convert from fahrenheit to celsius. This.celsius is reassigned to the result of calculating the formula.
        this.celsius = (value - 32) / 1.8;
    }

    // Methods that have static written before their name are stored on the constructor. 
    static fromFahrenheit(value) {
        // Creates a temperature using degrees fahrenheit
        return new Temperature((value - 32) / 1.8);
    }
}

// Constructing the object
let temp = new Temperature(22);
// Reading the fahrenheit property
console.log(`Reading temp.fahrenheit property: ${temp.fahrenheit} degrees fahrenheit`);   // Output -> 75
// Reassigning the fahrenheit property
temp.fahrenheit = 85;
// Reading the celsius property after reassigning celsius value
console.log(`Reading temp.celsius property: ${temp.celsius} degrees celsius`);
/**************************************************************
* GETTERS, SETTERS, AND STATICS - READING EXAMPLES
***************************************************************/




/**************************************************************
* INHERITANCE - READING EXAMPLES
***************************************************************/
/*
Some matrices are known to be symmetric. 
If you mirror a symmetric matrix around its top-left to bottom-right diagonal, it stays the same. 
The value stored at x,y is always the same as that at y,x.
Imagine we need a data structure like Matrix 
but one that enforces the fact that the matrix is and remains symmetrical. 
We could write it from scratch, but that would involve repeating some code very similar to what we already wrote.

JavaScript’s prototype system 
makes it possible to create a new class, much like the old class, 
but with new definitions for some of its properties. 
This is called inheritance. 
The new class inherits properties and behavior from the old class.

Inside class methods, super provides a way to call methods as they were defined in the superclass.

Inheritance allows us to build slightly different data types 
from existing data types with relatively little work. 
It is a fundamental part of the object-oriented tradition, alongside encapsulation and polymorphism. 

Encapsulation and polymorphism can be used to separate pieces of code from each other, 
reducing the tangledness of the overall program.

Inheritance fundamentally ties classes together, creating more tangle. 
When inheriting from a class, 
you usually have to know more about how it works than when simply using it. 
*/

// extends indicates SymmetricMatrix is based on Matrix
// Matrix is the superclass (parent) and SymmetricMatrix is the subclass (child)
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        // SymmetricMatrix needs the properties that Matrix has
        super(size, size, (x, y) => {
            // Conditional checks if SymmetricMatrix is Symmetrical:
            // By wrapping element function to swap coordinates for values below the diagonal
            if (x < y) return element(y, x); 
            else return element(x, y);
        })
    }
    // Setter method uses super keyword
    set(x, y, value) {
        // Redefining set method
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}
let daMatrix2 = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(daMatrix2.get(2, 3));   // Output -> 3, 2
/**************************************************************
* INHERITANCE - READING EXAMPLES
***************************************************************/




/**************************************************************
* THE INSTANCEOF OPERATOR - READING EXAMPLES
***************************************************************/
/*
It is occasionally useful to know 
whether an object was derived from a specific class. 
For this, JavaScript provides a binary operator called instanceof.

The operator will see through inherited types, 
so a SymmetricMatrix is an instance of Matrix. 
The operator can also be applied to standard constructors like Array. 
Almost every object is an instance of Object.
*/
// SymmetricMatrix is an instance of SymmetricMatrix
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); // → true
// SymmetricMatrix is an instance of Matrix
console.log(new SymmetricMatrix(2) instanceof Matrix);          // → true
// Matrix is NOT an instance of SymmetricMatrix
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);       // → false
// Array is an instance of Array
console.log([1] instanceof Array);                              // → true
/**************************************************************
* THE INSTANCEOF OPERATOR - READING EXAMPLES
***************************************************************/




/**************************************************************
* A VECTOR TYPE - TASKS
***************************************************************/
/*
[X] Write a class Vec that represents a vector in two-dimensional space. 
[X] It takes x and y parameters (numbers), which it should save to properties of the same name.

[X] Give the Vec prototype two methods, plus and minus, 
[X] that take another vector as a parameter and return a new vector 
[X] that has the sum or difference of the two vectors’ x and y values.
(this and the parameter) 

[X] Add a getter property length to the prototype that computes the length 
of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

// Create a class
class Vec {
    // The constructor takes x & y parameters, both are numbers
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Plus method takes a vector and returns a new vector
    plus(vec2) {
        // Takes both vector's properties and adds them together 
        let sumX = this.x + vec2.x;
        let sumY = this.y + vec2.y;
        // Create a new vector with the result from plus method. Return the new vector
        return (new Vec(sumX, sumY))
    }
    // Minus method takes a vector and returns a new vector
    minus(vec2) {
        // Take another vector and return a new vector
        let diffX = this.x - vec2.x;
        let diffY = this.y - vec2.y;
        // Create a new vector with plus method's result. Return the new vector
        return (new Vec(diffX, diffY))
    }

    // Getter length property
    get length() {
        // We are given two points on a graph. The formula to find a hypotenuse is C = sqrt(a² + b²)
        // Compute the distance from origin (0, 0) to the point (x, y)
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3))); // Output -> Vec {x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));// Output -> Vec {x: -1, y: -1}
console.log(new Vec(3, 4).length);              // Output -> 5
/**************************************************************
* A VECTOR TYPE - TASKS
***************************************************************/




/**************************************************************
* GROUPS - TASKS
***************************************************************/
/*
The standard JavaScript environment provides another data structure called Set. 
Like an instance of Map, a set holds a collection of values. 
Unlike Map, it does not associate other values with those—
it just tracks which values are part of the set. 
A value can be part of a set only once—adding it again doesn’t have any effect.

[X] Write a class called Group (since Set is already taken). 
[X] Like Set, it has add, delete, and has methods. 
[X] Its constructor creates an empty group, 
[X] add adds a value to the group (but only if it isn’t already a member), 
[X] delete removes its argument from the group (if it was a member), 
[X] has returns a Boolean value indicating whether its argument is a member of the group.

[X] Use the === operator, or something equivalent such as indexOf, 
to determine whether two values are the same. (Used includes)

[X] Give the class a static from method that takes an iterable object as argument 
and creates a group that contains all the values produced by iterating over it.

*/

// Create a class
class Group {
    constructor() {
        // Create an empty array
        this.group = [];
    }
    add(value) {
        // Adds a value to the array
        if (!this.has(value)) {                                 // If this array does not contain value
            this.group.push(value);                             // Then add value to the array
        }
    }

    delete(value) {
        // Removes its argument from the group (if it was a member)
        if (this.has(value)) {                                  // If this array contains value
            this.group.splice(this.group.indexOf(value), 1);    // Then locate the value's index and remove that element
        }
    }

    has(value) {
        // Returns a boolean indicating whether its argument is a member of the group
        // Includes method determines whether an array contains a certain element, returing a boolean
        return this.group.includes(value)
    }

    // Static from method 
    // Takes in an iterable object
    static from(obj) {
        // Create a group containing values produced by iterations
        let newGroup = new Group()
        for (let i of obj) {
            newGroup.add(i);
        }
        return newGroup;
    }
    
}
let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(50);
console.log(group);         // Output -> [10, 20, 50]
group.delete(10);
console.log(group);         // Output -> [20, 50]
console.log(group.has(10)); // → false
/**************************************************************
* GROUPS - TASKS
***************************************************************/




/**************************************************************
* ITERABLE GROUPS - TASKS
***************************************************************/
/*
Make the Group class from the previous exercise iterable. 
Refer to the section about the iterator interface 
earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, 
don’t just return the iterator created 
by calling the Symbol.iterator method on the array. 
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely 
when the group is modified during iteration.
*/

// The Group class from the previous exercise. Renamed to Group2.
class Group2 {
    constructor() {
        this.group = [];
    }
    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.group.splice(this.group.indexOf(value), 1);
        }
    }

    has(value) {
        return this.group.includes(value)
    }

    static from(obj) {
        let newGroup = new Group2()
        for (let i of obj) {
            newGroup.add(i);
        }
        return newGroup;
    }
}

// The MatrixIterator from the reading
// This iterator should return the same output as Symbol.iterator
class Group2Iterator {
    // The constructor takes in an object
    // We need two things to iterate over anything: An index and the object
    constructor(obj) {
        this.index = 0;
        this.group = obj.group
    }

    // next method should return a value and a status
    next() {
        // Checks if looping is done by comparing index to length
        if (this.index == this.group.length) return {done: true};

        // If looping is not done, check where we are at
        let value = this.group[this.index];
        this.index++;
        return {value, done: false};
    }
}

// Prototype assignment 
Group2.prototype[Symbol.iterator] = function() {
    return new Group2Iterator(this);
};

// Call a loop on a group. An array is passed into the static from method.
// We want to generate the group, loop through the group, and log each value in the group.
for (let value of Group2.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
/**************************************************************
* ITERABLE GROUPS - TASKS
***************************************************************/




/**************************************************************
* BORROWING A METHOD - TASKS
***************************************************************/
/*
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/
/**************************************************************
* BORROWING A METHOD - TASKS
***************************************************************/