/**************************************************************
* ADVANCED OBJECTS INTRODUCTION
***************************************************************/
/*
Remember, objects in JavaScript are containers that store data and functionality.

The concepts covered in this chapter:
Using the this keyword
Privacy in JavaScript methods
Object getters and setters
Creating constructors
Using destructuring techniques
*/
/**************************************************************
* ADVANCED OBJECTS INTRODUCTION
***************************************************************/




/**************************************************************
* THIS KEYWORD - READING EXAMPLES
***************************************************************/
/*
The scope of the object methods, don’t automatically have access to other properties
Here’s where the this keyword comes to the rescue.

The this keyword references the calling object 
which provides access to the calling object’s properties.

The code below are examples of methods accessing properties.
*/
// -----------------------W/O THIS-------------------------
const goat = {
    dietType: 'herbivore',      // A property with the value 'herbivore'
    makeSound() {
        console.log('baaa');    // A method that prints 'baaa'
    },
    diet() {
        console.log(dietType);  // A method accessing a property on goat object
    }
};
goat.diet();                    // Output -> ReferenceError
// -----------------------W/O THIS-------------------------
// -----------------------WITH THIS------------------------
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType); // The calling object is goat. Using this keyword accesses the goat object itself
    }
};
goat.diet();                        // Output -> herbivore
// -----------------------WITH THIS------------------------
/**************************************************************
* THIS KEYWORD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THIS KEYWORD - TASKS
***************************************************************/
// 1 - Create an object with literal notation. Object contains two properties.
const robot = {
    model: '1E78V2',    // step 1
    energyLevel: 100,   // step 1
    provideInfo() {     // step 2
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
};
// 2 - Create a method that accesses other properties and return their value in a template literal.
// 3 - Using console.log, call the .provideInfo() method on robot object
console.log(robot.provideInfo());   // Output -> I am 1E78V2 and my current energy level is 100.
/**************************************************************
* THIS KEYWORD - TASKS
***************************************************************/




/**************************************************************
* ARROW FUNCTIONS AND THIS - READING EXAMPLES
***************************************************************/
/*
We saw in the previous exercise that for a method, 
the calling object is the object the method belongs to.
If we use this keyword in a method then the value of this is the calling object.

It becomes more complicated when we start using arrow functions for methods.

Arrow functions inherently bind an already defined this value
to the function itself that is NOT the calling object. 
The value of this is the global object, or an object that exists in the global scope.

The key takeaway is to avoid using arrow functions when using this in a method!
*/

// Previous example goat object, using an arrow function in a method
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {                   // Arrow functions define this value to the function itself, not the calling object.
        console.log(this.dietType); // this refers to a Global Object. Not the calling object.
    }
};
goat.diet();                        // Output -> undefined -> dietType doesn't exist in the global scope.
/**************************************************************
* ARROW FUNCTIONS AND THIS - READING EXAMPLES
***************************************************************/
/**************************************************************
* ARROW FUNCTIONS AND THIS - TASKS
***************************************************************/
/* Note from me: The 'method provided' will be commented out for you to compare the changes. */
// 1 - The method provided uses an arrow function and is not producing the correct output. Refactor the function and product the correct output.
const robot = {
    energyLevel: 100,

    /* original
    checkEnergy: () => { 
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    } */

    // refactored
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
robot.checkEnergy();
/**************************************************************
* ARROW FUNCTIONS AND THIS - TASKS
***************************************************************/




/**************************************************************
* PRIVACY - READING EXAMPLES
***************************************************************/
/*
Accessing and updating properties is fundamental in working with objects.
There are cases in which we don’t want other code accessing & updating an object’s properties.

When discussing privacy in objects, we define it as 
the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature.
JavaScript developers follow naming conventions 
that signal to other developers how to interact with a property.

One common convention is to place an underscore _ 
before the name of a property to mean that the property should not be altered.
*/
const bankAccount = {
    _amount: 1      // The _amount is not intended to be manipulated
}
// This naming convention signals to other devs. It is still possible to reassign.
bankAccount._amount = 115000
/**************************************************************
* PRIVACY - READING EXAMPLES
***************************************************************/
/**************************************************************
* PRIVACY - TASKS
***************************************************************/
// 1 - Reassign the _energyLevel property value to high
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
robot._energyLevel = 'high';    // step 1
// 2 - Call .recharge() method on robot object. What happens?
robot.recharge();               // step 2 -> Causes unwanted side-effects when mutating objects & properties
/**************************************************************
* PRIVACY - TASKS
***************************************************************/




/**************************************************************
* GETTERS - READING EXAMPLES
***************************************************************/
/*
Getters are methods 
that get and return the internal properties of an object. 

They can do more than just retrieve the value of a property!
Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.

Properties cannot share the same name as the getter/setter function. 
If we do so, then calling the method will result in an infinite call stack error.
*/
// Example of a getter method
const person = {
    _firstName: 'John',                                     // property prepended with _ . Value is a string
    _lastName: 'Doe',
    get fullName() {                                        // get keyword followed by a function
        if (this._firstName && this._lastName) {            // if property value exists, then condition is truthy
            return `${this._firstName} ${this._lastName}`;  // this references the calling object (person)
        } else {
            return 'First or Last name is missing.';        // else return a different value
        }
    }
}

// Invoke getter method
person.fullName;    // Getter methods do not need to be called with a set of parentheses.
/**************************************************************
* GETTERS - READING EXAMPLES
***************************************************************/
/**************************************************************
* GETTERS - TASKS
***************************************************************/
// 1 - Create a getter method named energyLevel. Leave the function body blank.
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {                                                 // step 1
        if (typeof this._energyLevel === 'number') {                    // step 2
            return `My current energy level is ${this._energyLevel}`    // step 2
        } else {                                                        // step 3
        return "System malfunction: cannot retrieve energy level"       // step 3
        }
    }
};
console.log(robot.energyLevel);                                         // step 4
// 2 - In the function body, check if this._energyLevel is a number using the typeof operator. If the condition is truthy, return a string.
// 3 - Add an else statement that returns a default statement when such a scenario arises.
// 4 - Using console.log(), call the getter method, energyLevel.
/**************************************************************
* GETTERS - TASKS
***************************************************************/




/**************************************************************
* SETTERS - READING EXAMPLES
***************************************************************/
/*
Setters are methods 
which reassign values of existing properties within an object. 

Setter methods can also check input, perform actions on properties,
and display a clear intention for how the object is supposed to be used.

It is still possible to directly reassign properties.
*/

// Example of a setter method
const person = {
    _age: 30,
    set age(newAge) {
        if (typeof newAge === 'number') {   // Checks for number values
            this._age = newAge;             // Only numbers can reassign this._age
        } else {                            // Different outputs depending on what values are passed in
            console.log('Your age must be a positive whole number.');
        }
    }
}
// Using the setter method
person.age = 40;            // Setter methods do not need (). Syntactically, looks like reassigning the value of a property.
console.log(person._age);   // Output -> 40
// Pass string into setter
person.age = '40';          // Output -> Your age must be a positive whole number.
// Directly reassign properties
person._age = 'forty';
console.log(person._age);   // Output -> forty
/**************************************************************
* SETTERS - READING EXAMPLES
***************************************************************/
/**************************************************************
* SETTERS - TASKS
***************************************************************/
// 1 - Create a setter method named numOfSensors. Provide parameter of num and leave the function body blank.
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    // getter method
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number') {    // If numOfSensors is a number
            return this._numOfSensors;                  // Return number
        } else {
            return 'Sensors are currently down.'        // Else return string
        }
    },

    set numOfSensors(num) {                             // step 1
        if ((typeof num === 'number') && (num >= 0)) {  // step 2 -> checks if num is a number and if num is >= 0.
            this._numOfSensors = num;                   // step 2 -> Reassigns this._numOfSensors to num
        } else {                                        // step 3
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};
// 2 - Check if num is a number using typeof. Check if num is greater than or equal to 0. If both conditions are true, reassign this._numOfSensors to num.
// 3 - Add an else statement that prints a string.
// 4 - Use the numOfSensors setter method and assign a value of 100
robot.numOfSensors = 100;                               // step 4
// 5 - Using console.log(), print robot.numOfSensors
console.log(robot.numOfSensors);                        // step 5 Output -> 100
/**************************************************************
* SETTERS - TASKS
***************************************************************/




/**************************************************************
* FACTORY FUNCTIONS - READING EXAMPLES
***************************************************************/
/*
We’ve been creating objects individually, 
there are times where we want to create many instances of an object quickly.

A real world factory manufactures multiple copies of an item quickly and on a massive scale. 
A factory function is a function that returns an object and can be reused to make multiple object instances. 
Factory functions can also have parameters allowing us to customize the object that gets returned.
*/
// A factory function that creates monster objects.
const MonsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age, age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase)''
        }
    }
}
// Creating a specific monster with the factory function
const ghost = MonsterFactory('Ghosty', 9999, 'Glob of Ectoplasm', 'BOO!!!')
ghost.scare()   // Output -> BOO!!!
/**************************************************************
* FACTORY FUNCTIONS - READING EXAMPLES
***************************************************************/
/**************************************************************
* FACTORY FUNCTIONS - TASKS
***************************************************************/
/* Note from me: Only lowercase R is accepted. */
/* 1 - Create a factory function named robotFactory. 
Provide two parameters, one method and have the function return an object. */
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}
// 2 - Create an object using the robotFactory function. Pass in P-500 and true as arguments.
const tinCan = robotFactory('P-500', true);
// 3 - Invoke your objects method
tinCan.beep();
/**************************************************************
* FACTORY FUNCTIONS - TASKS
***************************************************************/




/**************************************************************
* PROPERTY VALUE SHORTHAND - READING EXAMPLES
***************************************************************/
/*
ES6 introduced some new shortcuts for assigning properties to variables.
(AKA destructuring)

The code below has two snippets of code. 
One is the monsterFactory in the previous exercise.
Second displays property value shorthand version. 
*/
// Truncated version of monsterFactory
const monsterFactory = (name, age) => {
    return {
        name: name,     // Contains a key:value pair
        age: age        // Contains a key:value pair
    }
}
// Example of property value shorthand (Perform same as truncated version)
const monsterFactory = (name,age) => {
    return {
        name,           // Destructured, parameter is still the value
        age             // Destructured, parameter is still the value
    }
}
/**************************************************************
* PROPERTY VALUE SHORTHAND - READING EXAMPLES
***************************************************************/
/**************************************************************
* PROPERTY VALUE SHORTHAND - TASKS
***************************************************************/
/* Note from me: The commented out code is the original. */
// 1 - Refactor the factory Function to use property value shorthand.
function robotFactory(model, mobile) {
    return {
    // original
    // model: model,
    // mobile: mobile,

    // refactored
    model,              // step 1
    mobile,             // step 1
    beep() {
        console.log('Beep Boop');
        }
    }
}
/**************************************************************
* PROPERTY VALUE SHORTHAND - TASKS
***************************************************************/




/**************************************************************
* DESTRUCTURED ASSIGNMENT - READING EXAMPLES
***************************************************************/
/*
We often want to extract key-value pairs from objects and save them as variables.
We could declare a variable and assign a property's value to do this.
We could also use a technique called destructured assignment.

In destructured assignment we create a variable 
with the name of an object’s key 
that is wrapped in curly braces { } 
and assign to it the object. 

Destructured assignment can also grab nested properties of an object.

The two snippets below extract key-value pairs from an object:
One declares a variable and assigns a property's value.
Second uses destructured assignment to do the same.
*/
const vampire = {
    name: 'Dracula',
    residence: 'Translyvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
}
// Declare variable & assign a property's value
const name = vampire.name;  // Contains the name key inside vampire object
console.log(name);          // Output -> Dracula

// Destructured assignment
const {residence} = vampire;// The variable's name is the object's key wrapped in {}
console.log(residence);     // Output -> Transylvania

// Destructured assignment w/ nested properties
const {day} = vampire.preferences;
console.log(day);           // Output -> stay inside
/**************************************************************
* DESTRUCTURED ASSIGNMENT - READING EXAMPLES
***************************************************************/
/**************************************************************
* DESTRUCTURED ASSIGNMENT - TASKS
***************************************************************/
// 1 -  Using destructured assignment, extract the functionality property of the robot object.
const {functionality} = robot;  // Extracts two methods -> beep() & fireLaser()
// 2 - Call a method through the destrutured assignment variable.
functionality.beep();           // Output -> Beep Boop
/**************************************************************
* DESTRUCTURED ASSIGNMENT - TASKS
***************************************************************/




/**************************************************************
* BUILT-IN OBJECT METHODS - READING EXAMPLES
***************************************************************/
/*
We’ve been creating instances of objects that have their own methods. 
We can also take advantage of built-in methods for Objects!

Built-in methods:
* .hasOwnProperty() method - Returns a boolean indicating whether the object 
has the specified property as its own property.
* .valueOf() method - JavaScript calls the valueOf method to convert an object to a primitive value. 
You rarely need to invoke the valueOf method yourself; 
JavaScript automatically invokes it when encountering an object where a primitive value is expected

Object-class methods:
* Object.assign() method - Copies properties from an object to a target object.
Properties in the target object are overwritten by properties in the sources if they have the same key. 
Later sources' properties overwrite earlier ones.
* Object.entries() method - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
* Object.keys() method - Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
*/
// .hasOwnProperty()
const objectOne = {
    propertyOne: 42
}
console.log(objectOne.hasOwnProperty());                // Output -> false
console.log(objectOne.hasOwnProperty('propertyOne'));   // Output -> true
console.log(objectOne.hasOwnProperty('valueOf'));       // Output -> false

// .valueOf()
console.log(objectOne.valueOf('PropertyOne'));          // Output -> Object

// Object.assign(). Seems to mutate the original objects.
const objectTwo = {
    propertyOne: '42',
    propertyTwo: 42
}
const returnedTarget = Object.assign(objectOne, objectTwo);
const returnedTarget2 = Object.assign(objectTwo, objectOne);
console.log(returnedTarget);                            // Output -> {propertyOne: '42', propertyTwo: 42}
console.log(returnedTarget2);                           // Output -> {propertyOne: '42', propertyTwo: 42}

// Object.entries()
for (const [key, value] of Object.entries(objectTwo)) {
    console.log(`${key}: ${value}`);                    // Output -> propertyOne: 42 propertyTwo: 42
}

// Object.keys()
console.log(Object.keys(objectTwo));                    // Output -> ['propertyOne', 'propertyTwo']
/**************************************************************
* BUILT-IN OBJECT METHODS - READING EXAMPLES
***************************************************************/
/**************************************************************
* BUILT-IN OBJECT METHODS - TASKS
***************************************************************/
// 1 - Using Object.keys() method, return an array containing every property from the object and store in a variable.
const robotKeys = Object.keys(robot);
console.log(robotKeys); // Output -> [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
// 2 - Using Object.entries() method, return an array containing every property and value from the object and store in a variable.
const robotEntries = Object.entries(robot);
console.log(robotEntries);  // Output -> [ [ 'model', 'SAL-1000' ],[ 'mobile', true ],[ 'sentient', false ],[ 'armor', 'Steel-plated' ],[ 'energyLevel', 75 ] ]
// 3 - Using Object.assign() method, create a new object containing every property & value as robot and two additional properties. Do not change the original object.
const additionalFeatures = {
    laserBlaster: true,
    voiceRecognition: true,
}
const newRobot = Object.assign(additionalFeatures, robot);
/**************************************************************
* BUILT-IN OBJECT METHODS - TASKS
***************************************************************/




/**************************************************************
* OBJECT - CHALLENGES
***************************************************************/
// Find the value of this in a function inside of a method.

// Learn the outcome of using a property that has the exact same name as a setter/getter method.

// Create a new factory function that can create object instances of your choice.

// Read documentation on other destructuring techniques and apply it to your code.

// Try out other built-in object methods and learn what they do.

/**************************************************************
* OBJECT - CHALLENGES
***************************************************************/