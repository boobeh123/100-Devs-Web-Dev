/**************************************************************
* UNDERSTANDING OBJECT ORIENTED PROGRAMMING - Reading examples
***************************************************************/
/*
OOP is a programming paradigm that uses objects containing both data and behavior to create programs.

A class is an object-oriented abstraction for a concept manipulated by a program. 
It offers a convenient syntax to create objects.

A JavaScript class is defined with the class keyword. It can only contain methods. 

The constructor() method, called during object creation, is used to initialize the object, 
often by giving it some data properties. 
Inside methods, the this keyword represents the calling object.

Objects are created from a class with the new operator. 
It calls the class constructor to initialize the newly created object.

Prototypes are used to share properties and delegate behavior between objects.
An object has an internal property which is a reference to another object (prototype)

Accessing methods that do not exist JavaScript tries to find this property in the prototype chain.
by first searching its prototype, then its prototype's own prototype.

*/
// alert('hello world');
class Ball {
    constructor(size, color) {
        this.size = size,
        this.color = color
    }

    bounce() {
        console.log('boiiing');
    }

    accel() {
        console.log('gotta go fast');
    }
}

// initializing the ball
let test = new Ball(2,'red');
test.bounce();
test.accel();

// clones properties and methods of an initialized object
let anotha = Object.create(test);           // clones test object's properties and methods
// let anotha = Object.create(1,'gray');    // tried to initialize
anotha.accel();
test.bounce();
/**************************************************************
* UNDERSTANDING TO OBJECT ORIENTED PROGRAMMING - Reading examples
***************************************************************/
/**************************************************************
* CONTEXT A MULTIPLAYER RPG - Reading examples
***************************************************************/
/*
Most object-oriented languages use classes as abstractions for ideas or concepts. 
A class is used to create objects representing a concept. 
It offers a convenient syntax to give both data and behavior to these objects.

A class is created with the class keyword, followed by the name of the class.
There is no separating punctuation between the elements inside a class.
A class can only contain methods, not data properties.
The this keyword represents the calling object.
A special method named constructor() can be added to a class definition. It is called during object creation and is often used to give it data properties.


*/
// Creates character objects with 4 properties and 1 method
class CreateCharacters {
    constructor(name, health, strength, mana) {
        this.name = name
        this.health = health
        this.strength = strength
        this.mana = mana
        this.xp = 0 // New characters begin at 0
    }

        describe() {
            console.log(`${this.name} has ${this.health} hitpoints, level: ${this.strength} strength, ${this.xp} exp.`);
        }
    }

// Characters
const aurora = new CreateCharacters('Aurora',10,1,5);
const glacier = new CreateCharacters('glacier',13,1,5);

// Receive damage
aurora.health -= 2;

// Upgrade equipment
aurora.strength += 5;

// Learn a skill
aurora.xp += 20;
/**************************************************************
* CONTEXT A MULTIPLAYER RPG - Reading examples
***************************************************************/