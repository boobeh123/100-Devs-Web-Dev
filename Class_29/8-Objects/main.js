/**************************************************************
* OBJECTS - INTRODUCTION TO OBJECTS
***************************************************************/
/*
You’re probably already more comfortable with objects than you think, 
many components of JavaScript are actually objects under the hood.
Strings or numbers can still act like objects in some instances.

There are only seven fundamental data types in JavaScript,
six of them are primitive data types, (string,number,boolean,null,undefined,symbol)
the seventh type, is an object.

We can use JavaScript objects to model real-world things, like a ball.
We can use objects to build the data structures that make the web possible.

At their core, JavaScript objects are containers storing related data and functionality.
It’s time to understand the mechanics of objects and start making your own.
*/
/**************************************************************
* OBJECTS - INTRODUCTION TO OBJECTS
***************************************************************/




/**************************************************************
* CREATING OBJECT LITERALS - READING EXAMPLES
***************************************************************/
/*
Objects can be assigned to variables just like any JavaScript type. 
We use curly braces to declare an object literally.

We fill an object with unordered data. 
This data is organized into key-value pairs. 
A key’s value can be of any data type (including functions, objects)

We make a key-value pair by writing the key’s name, 
followed by a colon and then the value. 
We separate each key-value pair in an object literal with a comma (,). 
*/

// Example of creating an object with literal notation
let truck = {               // Truck object has two key-value pairs.
    color: 'silver',        // color is the key. silver is the value. comma separates key-value pairs (color, 'Fuel Type').
    'Fuel Type': 'diesel'   // 'Fuel Type' has quotation marks because it contains a space character.
};
/**************************************************************
* CREATING OBJECT LITERALS - READING EXAMPLES
***************************************************************/
/**************************************************************
* CREATING OBJECT LITERALS - TASKS
***************************************************************/
/* Note from me: This answer is not accepted if you decide to copy it  */
// 1 - Create an object with literal notation. Object contains two properties.
const fasterTruck = {
    color: 'silver',
    'Fuel Type': 'electric'
}
/**************************************************************
* CREATING OBJECT LITERALS - TASKS
***************************************************************/




/**************************************************************
* ACCESSING PROPERTIES (DOT NOTATION) - READING EXAMPLES
***************************************************************/
/*
One way to access an object's property is with dot notation.
Accessing a property that does not exist returns undefined.
*/

// Example of accessing object's property with dot notation
const fasterTruck = {
    color: 'silver',
    'Fuel Type': 'electric'
}
fasterTruck.color;  // Returns 'silver'
fasterTruck.bed;    // Returns undefined
/**************************************************************
* ACCESSING PROPERTIES (DOT NOTATION)  - READING EXAMPLES
***************************************************************/
/**************************************************************
* ACCESSING PROPERTIES (DOT NOTATION)  - TASKS
***************************************************************/
// 1 - Access the numCrew property and save the value to a new variable named crewCount.
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
let crewCount = spaceship.numCrew;
// 2 - Access the flightPath property and save the value to a new variable named planetArray.
let planetArray = spaceship.flightPath;
/**************************************************************
* ACCESSING PROPERTIES (DOT NOTATION)  - TASKS
***************************************************************/




/**************************************************************
* ACCESSING PROPERTIES (BRACKET NOTATION) - READING EXAMPLES
***************************************************************/
/*
The second way to access a key's value is by using bracket notation.

When accessing an object's property containing spaces, special characters, or numbers,
we MUST USE bracket notation.

With bracket notation you can also use a variable 
inside the brackets to select the keys of an object. 
This can be especially helpful when working with functions
*/

// Example of accessing object's property with bracket notation
const fasterTruck = {
    color: 'silver',
    'Fuel Type': 'electric'
}
fasterTruck['Fuel Type'];  // Returns 'electric'

// Example of bracket notation used in a function
let returnAnyProp = (objectName, propName) => objectName[propName];
console.log(returnAnyProp(fasterTruck, 'Fuel Type')); // Returns electric
/**************************************************************
* ACCESSING PROPERTIES (BRACKET NOTATION)  - READING EXAMPLES
***************************************************************/
/**************************************************************
* ACCESSING PROPERTIES (BRACKET NOTATION)  - TASKS
***************************************************************/
// 1 - Access the 'Active Mission' property and save the value to new variable named isActive
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};
  
let propName =  'Active Mission';
let isActive = spaceship['Active Mission'];
// 2 - Using console.log(), print the value of the 'Active Mission' proeprty
console.log(spaceship[propName]);   // Output -> true
/**************************************************************
* ACCESSING PROPERTIES (BRACKET NOTATION)  - TASKS
***************************************************************/




/**************************************************************
* PROPERTY ASSIGNMENT - READING EXAMPLES
***************************************************************/
/*
Objects are mutable meaning we can update them after we create them.
We can add new key-value pairs to an object or change an existing property.

One of two things can happen with property assignment:
1 - If the property already exists on the object, 
whatever value it held before will be overwritten with the newly assigned value.
2 - If there was no property with that name, a new property will be added to the object.

An object declared with const cannot be reassigned. Although we can still mutate it, 
meaning we can add new properties and change the properties that are there.

Properties can be deleted from an object using the delete operator.
*/

// Variable contains a value. That value is an object.
const sedan = {
    type: 'coupe'
};
// The variable's value can't be reassigned to contain a different object or data type.
sedan = {
    type: 'convertible'     // TypeError: Assignment to constant variable.
}
// Mutating the object is allowed. This does not reassign the variable's value (object)
sedan.type = 'convertible'  // Reasssigns existing property value.  No error.
sedan.doors = '2'           // Creates a new property and value.    No error.

// Deleting a property from an object
delete sedan.type;          // Returns undefined when printed.
/**************************************************************
* PROPERTY ASSIGNMENT - READING EXAMPLES
***************************************************************/
/**************************************************************
* PROPERTY ASSIGNMENT - TASKS
***************************************************************/
// 1 - Reassign the value of the color property on the spaceship object.
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
spaceship.color = 'glorious gold';
// 2 - Create a new property containing a number value. Property name is numEngines.
spaceship.numEngines = 8;
// 3 - Using the delete operator, remove the 'Secret Mission' property.
delete spaceship['Secret Mission'];
/**************************************************************
* PROPERTY ASSIGNMENT - TASKS
***************************************************************/




/**************************************************************
* METHODS - READING EXAMPLES
***************************************************************/
/*
A function stored on an object is called a method.
A property is what an object has, a method is what an object does.

Object methods are invoked by appending the object’s name 
with the dot operator 
followed by the method name and parentheses:
*/
const fasterTruck = {
    launchMode: function() {    // launchMode is the key and the function is the value
        console.log('0-60 real quick');
    }

    ludicrousMode() {           // New ES6 method syntax. Omit colon & function keyword 
        console.log('i am speed');
    }
}
fasterTruck.launchMode();   // Output -> 0-60 real quick
fasterTruck.ludicrousMode();// Output -> i am speed
/**************************************************************
* METHODS - READING EXAMPLES
***************************************************************/
/**************************************************************
* METHODS - TASKS
***************************************************************/
// 1 - Create an object using literal notation and include one method.
const alienShip = {
    retreat() { // step 1
        console.log(retreatMessage);
    },

    takeOff() { // step 2
        console.log('Spim... Borp... Glix... Blastoff!');
    }
}
// 2 - Add another method to the object literal.
// 3 - Invoke both methods
alienShip.retreat();    // step 3
alienShip.takeOff();    // step 3
/**************************************************************
* METHODS - TASKS
***************************************************************/




/**************************************************************
* NESTED OBJECTS - READING EXAMPLES
***************************************************************/
/*
An object might have another object as a property 
which in turn could have a property that’s an array of even more objects.

We can chain operators to access nested properties.
*/

// Example of accessing a nested object
const spaceship = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032 
    },
   crew: {
       captain: { 
           name: 'Sandra', 
           degree: 'Computer Engineering', 
           encourageTeam() { console.log('We got this!') } 
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
   }
}; 

spaceship.nanoelectronics['back-up'].battery
// spaceship.nanoelectronics is evaluated which results in an object containing two objects, back-up and computer.
// The back-up object is accessed by appending ['back-up']
// The back-up object has a battery property, accessed with .battery which returns the value: 'Lithium'
/**************************************************************
* NESTED OBJECTS - READING EXAMPLES
***************************************************************/
/**************************************************************
* NESTED OBJECTS - TASKS
***************************************************************/
// 1 - Access the captain's favorite food array and assign the element in the 0th index to a variable named capFave.
const capFave = spaceship.crew.captain['favorite foods'][0];
// 2 - Access the passengers property and reassign its value to an array of objects.
spaceship.passengers = [{
    President: {
      name: 'Joe'
    },
    'Vice-president': {
      name: 'Jane'
    }
}]
// 3 - Access the passengers property and assign the element in the 0th index to a variable named firstPassenger.
const firstPassenger = spaceship.passengers[0];
/**************************************************************
* NESTED OBJECTS - TASKS
***************************************************************/




/**************************************************************
* PASS BY REFERENCE - READING EXAMPLES
***************************************************************/
/*
Objects are passed by reference. 
This means when we pass a variable assigned to an object 
into a function as an argument, 
the computer interprets the parameter name 
as pointing to the space in memory holding that object. 

As a result, functions which change object properties 
actually mutate the object permanently 
(even when the object is assigned to a const variable).
*/
const spaceship = {             // Variable assigned to an object
    homePlanet : 'Earth',
    color : 'silver'
};
let paintIt = obj => {          // Function takes in an object as a parameter
    obj.color = 'glorious gold'
};
paintIt(spaceship);             // Points to the variable in memory
spaceship.color                 // Mutates object permanently (output -> 'glorious gold')
// ------------------------------------------------------------
let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
};
let tryReassignment = obj => {  // Function takes in an object as a parameter
    obj = {                     // This function will reassign object properties
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj)            // Prints object properties. Output -> {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship)      // Points to the variable in memory. The reassignment does not work.
console.log(spaceship)          // Doesn't mutate object at all. Output -> {homePlanet : 'Earth', color : 'red'};
/*
Why does the paintIt function work, while the tryReassignment function doesn't?
Let's break it down:
1 - We declared this spaceship object with let. This allows us to reassign 
it to a new object with different properties.
2 - When we use the function designed to reassign the object passed into it, the reassignment didn’t stick.

3 - Passing spaceship into tryReassignment, 
obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. 
This is because the obj parameter of the tryReassignment() function is a variable in its own right. 
The body of tryReassignment() has no knowledge of the spaceship variable at all!

4 - When we did the reassignment in the body of tryReassignment(), 
the obj variable came to refer to the memory location of the object, 
while the spaceship variable was completely unchanged from its earlier value.
*/
// ------------------------------------------------------------
spaceship = {
    identified : false, 
    'transport type': 'flying'
};                              // Regular reassignment still works
console.log(spaceship);         // Output -> { identified: false, 'transport type': 'flying' }
/**************************************************************
* PASS BY REFERENCE- READING EXAMPLES
***************************************************************/
/**************************************************************
* PASS BY REFERENCE - TASKS
***************************************************************/
// 1 - Create a function that takes in an object. This function reassigns an object's property value.
function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil'
}
// 2 - Create a function that takes in an object. This function creates a property and assigns a value.
function remotelyDisable(obj) {
    obj.disabled = true
}
// 3 - Call both functions and pass spaceship as an argument. Using console.log(), print the spaceship object
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)      // Output -> { 'Fuel Type': 'avocado oil',homePlanet: 'Earth',disabled: true }
/**************************************************************
* PASS BY REFERENCE - TASKS
***************************************************************/




/**************************************************************
* LOOPING THROUGH OBJECTS - READING EXAMPLES
***************************************************************/
/*
Loops are programming tools that repeat a block of code until a condition is met. 

The for in loop executes a given block of code for each property in an object.
*/

// Example of a for in loop iterating through an object
let spaceship = {
    crew: {
        captain: { 
            name: 'Lily', 
            degree: 'Computer Engineering', 
            cheerTeam() { console.log('You got this!') } 
        },
        'chief officer': { 
            name: 'Dan', 
            degree: 'Aerospace Engineering', 
            agree() { console.log('I agree, captain!') } 
        },
        medic: { 
            name: 'Clementine', 
            degree: 'Physics', 
            announce() { console.log(`Jets on!`) } 
        },
        translator: {
            name: 'Shauna', 
            degree: 'Conservation Science', 
            powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// For in iterates through each element of the spaceship.crew object.
for (let crewMember in spaceship.crew) {    // crewMember is a variable. The value is the propery of spaceship.crew
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`); // Template literal that prints the property name followed by the properties' property value
}
/**************************************************************
* LOOPING THROUGH OBJECTS - READING EXAMPLES
***************************************************************/
/**************************************************************
* LOOPING THROUGH OBJECTS - TASKS
***************************************************************/
// 1 - Using a for in loop, iterate through spaceship.crew. Using console.log(), print each crewMember's role and name.
for (let crewMember in spaceship.crew) {    
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
// 2 - Using a for in loop, iterate through spaceship.crew. Using console.log(), print each crewMember's name and degrees
for (let crewMember in spaceship.crew) {    
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}
/**************************************************************
* LOOPING THROUGH OBJECTS - TASKS
***************************************************************/