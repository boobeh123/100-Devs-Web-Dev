/**************************************************************
* UNDERSTANDING OBJECT ORIENTED PROGRAMMING - Reading examples
***************************************************************/
/*
OOP is a programming paradigm that uses objects containing both data and behavior to create programs.

A class is an object-oriented abstraction for a concept manipulated by a program. 
It offers a convenient syntax to create objects.

A JavaScript class is defined with the class keyword. It can only contain methods. 

The constructor() method, called during object creation, is used to initialize the object, 
often by giving it some properties. 
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




/**************************************************************
* UNDER THE HOOD: OBJECTS AND PROTOTYPES - Reading examples
***************************************************************/
/*
To create relationships between objects, JavaScript uses prototypes.

In addition to its own particular properties, 
any JavaScript object has an internal property which is a reference 
to another object called its prototype. 

When trying to access a property that does not exist in an object, 
JavaScript tries to find this property in the prototype of this object.

If the prototype of an object does not have a desired property, 
then the search continues in the object's own prototype 
until we get to the end of the prototype chain. 
If the end of this chain is reached without having found the property, 
an attempted access to the property returns the value undefined.

This type of relationship between JavaScript objects is called delegation: 
an object delegates part of its operation to its prototype.
*/

// Object created with literal notation
const ball = {
    color: 'orange'
};
// Object created using ball as a prototype
const basketball = Object.create(ball)
// When the statement basketball.color is run, the color property of ball is used since color doesn't exist in basketball.
console.log(basketball);        // Output -> {} (empty object)
console.log(basketball.color);  // Output -> orange

// Object created using basketball as a prototype
const baseball = Object.create(basketball)
// Color is found in baseball's prototype chain (ball)
console.log(baseball);          // Output -> {} (empty object)
console.log(baseball.color);    // Output -> orange
// Size property does not exist. Can't be found in baseball's prototype chain (basketball / ball)
console.log(baseball.size);     // Output -> undefined
/**************************************************************
* UNDER THE HOOD: OBJECTS AND PROTOTYPES - Reading examples
***************************************************************/




/**************************************************************
* THE TRUE NATURE OF JAVASCRIPT CLASSES - Reading examples
***************************************************************/
/*
In class-based object-oriented languages like C++, Java and C#, 
classes are static blueprints (templates). 

When an object is created, the methods and properties of the class 
are copied into a new entity, called an instance. 
After instantiation, the newly created object has no relation whatsoever with its class.

JavaScript's object-oriented model is based on prototypes, not classes, 
to share properties and delegate behavior between objects. 
In JavaScript, a class is itself an object, not a static blueprint. 

"Instantiating" a class creates a new object linked to a prototype object. 
Regarding classes behavior, the JavaScript language is quite different from C++, Java or C#, 
but close to other object-oriented languages like Python, Ruby and Smalltalk.

The JavaScript class syntax is merely a more convenient way 
to create relationships between objects through prototypes. 
Classes were introduced to emulate the class-based OOP model on top of JavaScript's own prototype-based model.
It's an example of what programmers call syntactic sugar.
*/
/**************************************************************
* THE TRUE NATURE OF JAVASCRIPT CLASSES - Reading examples
***************************************************************/




/**************************************************************
* OBJECT-ORIENTED PROGRAMMING - Reading examples
***************************************************************/
/*
Now back to our RPG, which is still pretty boring. 
What does it lack? Monsters and fights, of course!

Following is how a fight will be handled. 
If attacked, a character sees their life points decrease. 
If its health value falls below zero, the character is considered dead and cannot attack anymore. 
Its vanquisher receives a fixed number of 10 experience points.

In the code below,
let's add the capability for our characters to fight one another. 
Since it's a shared ability, we define it as a method named attack() in the Character class.
*/
class Characters {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0 // New characters begin at 0
    }

    // Display character description
    describe() {
        console.log(`${this.name} has ${this.health} hitpoints, level ${this.strength} strength, ${this.xp} exp.`);
    }

    // Attack target
    attack(target) {

        // Character inflicting damage
        if (this.health > 0) {                  // If this character is alive
            const damage = this.strength;
            target.health -= damage;            // Then inflict damage against target
            console.log(`${this.name} attacks ${target.name}. ${damage} damage dealt.`)

            // Target after receiving damage
            if (target.health > 0) {            // If enemy is alive...Then display their healthbar
                console.log(`${target.name} has ${target.health} hp left.`);
            } else {
                const bonusXP = 5;              // Otherwise enemy is dead
                this.xp += bonusXP;             // Then grant xp to this character
                console.log(`${this.name} eliminated ${target.name} and is awarded ${bonusXP} xp.`)
            }
        } else {
            console.log('You cannot attack that.');
        }
    }
}

const auroraTwo = new Characters("Aurora", 150, 25, 0);
const glaciusTwo = new Characters("Glacier", 130, 30, 0);
console.log("Adventurer.. The legends have fortold your coming.");
console.log("Aurora, Glacier. Please escort our ally to the citadel.");
auroraTwo.describe();
glaciusTwo.describe();

// Constructing a monster
const monster = new Characters('Ectoplasm', 50, 20, 0);
console.log(`A foul odor can only mean one thing.. ${monster.name}.`);

// Monster attacking heroes
monster.attack(auroraTwo);
monster.attack(glaciusTwo);

// Heroes attacking monster
auroraTwo.attack(monster);
glaciusTwo.attack(monster);

auroraTwo.describe();
glaciusTwo.describe();
/**************************************************************
* OBJECT-ORIENTED PROGRAMMING - Reading examples
***************************************************************/
console.log('------------------------------------------------------------------ Reading examples above');
console.log('------------------------------------------------------------------Tasks below');
console.log('------------------------------------------------------------------');

/**************************************************************
* DOGS - Tasks
***************************************************************/
/*
Complete the following program to add the definition of the Dog class.
Dogs taller than 60:
Print "Grrr! Grrr!" when they bark
Dogs shorter than 60:
Print "Woof! Woof!" when they bark
*/

class Dogs {
    constructor(name, breed, height) {
        this.name = name
        this.breed = breed
        this.height = height
    }

    bark() {
        if (this.height >= 60) {
            return 'Grrr! Grrr!';
        } else {
            return 'Woof! Woof!';
        }
    }
}

const fang = new Dogs("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.breed} dog measuring ${fang.height}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dogs("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.breed} dog measuring ${snowy.height}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
/**************************************************************
* DOGS - Tasks
***************************************************************/
console.log('------------------------------------------------------------------');




/**************************************************************
* CHARACTER INVENTORY - Tasks
***************************************************************/
/*
Improve the example RPG 
to add character inventory management
according to the following rules:
[X] A character's inventory contains a number of gold and a number of keys.
[X] Each character begins with 10 gold and 1 key.
[X] The character description must show the inventory state.
[X] When a character slays another character, the victim's inventory goes to its vanquisher.
[X] expected execution result
*/

class Character {
    constructor(name, health, strength, gold, key) {
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
        this.gold = gold                // Character inventory
        this.key = key                  // Character inventory
    }

    describe() {                        // Shows inventory state
        console.log(`${this.name} has ${this.health} hitpoints, level ${this.strength} strength, ${this.xp} experience points, ${this.gold} gold and ${this.key} key(s)`);
    }

    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            target.health -= damage;
            console.log(`${this.name} attacks ${target.name}. ${damage} damage dealt.`)
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} hp left.`);
            } else {
                const bonusXP = 5;
                const bonusGold = 10;
                const bonusKey = 1;
                this.xp += bonusXP;
                this.gold += bonusGold; // Enemy drops
                this.key += bonusKey;   // Enemy drops
                console.log(`${this.name} eliminated ${target.name} and is awarded ${bonusXP} xp, ${bonusGold} gold, and ${bonusKey} key.`)
            }
        } else {
            console.log('You cannot attack that.');
        }
    }

}

const auroraFinal = new Character("Aurora", 150, 25, 10, 1);
const glaciusFinal = new Character("Glacier", 130, 30, 10, 1);
console.log("Adventurer.. The legends have fortold your coming.");
console.log("Aurora, Glacier. Please escort our ally to the citadel.");
auroraFinal.describe();
glaciusFinal.describe();

// Constructing a monster
const monsterFinal = new Character('Banshee', 50, 20, 0, 10, 1);
console.log(`COVER YOUR EARS! ${monsterFinal.name}!`);

// Monster attacking heroes
monsterFinal.attack(auroraFinal);
monsterFinal.attack(glaciusFinal);

// Heroes attacking monster
auroraFinal.attack(monsterFinal);
glaciusFinal.attack(monsterFinal);

auroraFinal.describe();
glaciusFinal.describe();
/**************************************************************
* CHARACTER INVENTORY - Tasks
***************************************************************/
console.log('------------------------------------------------------------------');



/**************************************************************
* ACCOUNT LIST - Tasks
***************************************************************/
/*
Let's build upon a previous account object exercise. 
A bank account is still defined by:
[X] A name property.
[X] A balance property, initially set to 0.
[X] A credit method adding the value passed as an argument to the account balance.
[X] A describe method returning the account description.

Write a program that creates three accounts: 
[X] one belonging to Sean, 
[X] another to Brad 
[X] and the third one to Georges. 
[?] These accounts are stored in an array. 
[X] Next, the program credits 1000 to each account and shows its description.
*/
class Accounts {
    constructor(name) {
        this.name = name            // Name property
        this.balance = 0            // Balance property -> Initially set as 0
    }

    describe() {                    // Describe method
        return `Welcome back ${this.name}! You have an available balance of ${this.balance}`
    }

    credit(amount) {                // Credit method
        this.balance += amount
    }
}

// Constructor creates accounts,
const Sean = new Accounts('Sean');
const Brad = new Accounts('Brad');
const George = new Accounts('George');
// Accounts are stored into an array
const arrayOfAccounts = [Sean, Brad, George];
// Credits 1000 to each account 
Sean.credit(1000);
Brad.credit(1000);
George.credit(1000);
// Show description
Sean.describe();
Brad.describe();
George.describe();
/**************************************************************
* ACCOUNT LIST - Tasks
***************************************************************/