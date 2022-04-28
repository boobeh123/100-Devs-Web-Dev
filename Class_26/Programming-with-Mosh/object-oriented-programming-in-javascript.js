// alert('hello world');
// ****************************************************************************************
// Stopwatch Exercise 
// ****************************************************************************************
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.')

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.')

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });

}

// ****************************************************************************************
// Stopwatch Exercise 
// ****************************************************************************************




// ****************************************************************************************
// Creating an object using literal notation
// ****************************************************************************************
// Circle object
const circle = {
    // Object has two properties
    radius: 1,
    // One property is an object 
    location: {
        x: 1,
        y: 1
    },
    // Object has one method
    draw: function() {
        // Method logs 
        console.log('Hello world');
    }
};
console.log(circle.radius); // 1
circle.draw(); // Hello world
// ****************************************************************************************
// Creating an object using literal notation
// ****************************************************************************************



// ****************************************************************************************
// Creating multiple objects - General info
// ****************************************************************************************
/*
When creating multiple objects use 
1) Factory Function
2) Constructor Function

The javascript engine has a built-in factory function
Creating an object using literal notation uses this built-in factory function.

// Object created with literal notation
let a = {};

// Object created with function constructors
let a = new Object();

// String created with function constructors
'' "" `` = new String();

// Boolean created with function constructors
true false = new Boolean();

// Number created with function constructors
1, 2, 3 = new Number();
*/
// ****************************************************************************************
// Creating multiple objects - General info
// ****************************************************************************************
// ****************************************************************************************
// Creating multiple objects - Factory Function
// ****************************************************************************************
// Factory function that creates circle objects
function factoryCreateCircle(radius) {
// remove const and return an object
    return {
    // Avoid hard coding and set parameter as value
    // radius: radius,

    // if key&value share the same name, remove value
    radius,
    draw: function() {
        console.log('Hello factory');
        }
    };
}
// Creating an object from factory function
const circleCreatedFromFactory = factoryCreateCircle(69);
circleCreatedFromFactory.draw(); // Hello factory
console.log(circleCreatedFromFactory.radius); // 69
// ****************************************************************************************
// Creating multiple objects - Factory function
// ****************************************************************************************
// ****************************************************************************************
// Creating multiple objects - Constructor function
// ****************************************************************************************
// Constructor function
function constructorCreateCircle(radius) {
    console.log('this points to object:', this);
    // Unlike factory functions we won't use return
    this.radius = radius;

    // abstraction
    // this.defaultLocation = {x: 0, y: 0};
    // this.computeOptimumLocation = function(factor) {
    // }
    // Implement private properties and methods
    // Declare defaultLocation as a local variable 
    // so it isn't accessible from the outside
    let defaultLocation = {x: 0, y: 0};

    // Declare computeOptimumLocation as a private method
    let computeOptimumLocation = function(factor) {
    }

    // Getters/Setters
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function draw() {
        // computeOptimumLocation is not a method. This keyword cannot be used
        // this.computeOptimumLocation();

        computeOptimumLocation(0.1);
        console.log('Hello constructor');
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
            if (!value.x || !value.y)
                throw new Error('invalid location')
        }
    });
}
//1 Create an empty object {}
//2 Sets this keyword to point to the object
//3 Returns object from this constructor function
//*Removing new operator will set this to point to global
const circleCreatedFromConstructor = new constructorCreateCircle(68);
circleCreatedFromConstructor.draw(); // Hello constructor
console.log(circleCreatedFromConstructor.radius); // 68

console.log(typeof circleCreatedFromConstructor);
console.log(typeof constructorCreateCircle);
console.log(`object.length returns ${constructorCreateCircle.length} argument(s) \n(in the constructor function)`);

// Adding properties with dot notation
circleCreatedFromConstructor.location = {
    x: 1
};
console.log(circleCreatedFromConstructor); // x location added to object

// Adding properties with bracket notation
// if there's spaces or special characters, use bracket notation
circleCreatedFromConstructor['location'] = {
    y: 2
};
console.log(circleCreatedFromConstructor); // y location overwrite x location

// Deleting properties from an object. Dot & bracket notation works here
delete circleCreatedFromConstructor.location;
// delete circleCreatedFromConstructor['location'];
console.log(circleCreatedFromConstructor); // location removed

// abstraction -> hide details, show essentials
// circle.defaultLocation = false; // hide this property
// circle.computeOptimumLocation(0.1); // hide this method
circle.draw();
circle.defaultLocation = 1;
// ****************************************************************************************
// Creating multiple objects - Constructor function
// ****************************************************************************************




// ****************************************************************************************
// Creating constructor function using a function constructor
// ****************************************************************************************
// Function declared literally
function literal() {
    console.log('function created literally')
}

// Constructor Function declared using Function Constructor
// The function constructor parameters are passed in as strings
// example: ('radius')
const ConstructorFunctionCreateCircle = new Function('radius', `
this.radius = radius;
this.draw = function draw() {
    console.log('Hello function constructor');
}`)

// Pass in (radius) parameter when creating the object
// Otherwise logging radius returns undefined
const circleCreatedFromFunctionConstructor = new ConstructorFunctionCreateCircle(420);
circleCreatedFromFunctionConstructor.draw();
console.log(circleCreatedFromFunctionConstructor.radius);

// Enumerating through an object with for-in loop
for (let key in circleCreatedFromConstructor) {
    // console.log(key); // radius draw
    console.log(circle[key]); // 1 draw function

    // if (typeof circle[key] !== 'function')
    //     console.log(circle[key]); // 1
}

// Returns all keys in an object as an array
const objectKeysArray = Object.keys(circle);
console.log(objectKeysArray); // radius location draw


// In operator to find out if object has a property
if ('radius' in circle) 
    console.log('circle has a radius'); // circle has a radius

// Abstraction
// ****************************************************************************************
// Creating constructor function using a function constructor
// ****************************************************************************************




// ****************************************************************************************
// Calling a function using a function constructor
// ****************************************************************************************
// Call method takes a thisArg as parameter. An empty object pointed by thisArg
constructorCreateCircle.call({}, 419) // radius 419

// Call method with an object passed as an Arg.
constructorCreateCircle.call(circle, 418) // radius 418

// Call method using factory function
console.log(factoryCreateCircle.call(circle, 417)) // radius 417

// Calling a function with a function constructor is the same as the new operator being used
// Example: const circleCreatedFromConstructor = new constructorCreateCircle(68);

// console.log(ConstructorFunctionCreateCircle.call(circle, 416)) // undefined
// ****************************************************************************************
// Calling a function using a function constructor
// ****************************************************************************************




// ****************************************************************************************
// Applying a function using a function constructor
// ****************************************************************************************
// Apply method is similar to call method, but passes arguments (after object) in an array
constructorCreateCircle.apply({}, [3,2,1]) // radius 3
// ****************************************************************************************
// Applying a function using a function constructor
// ****************************************************************************************




// ****************************************************************************************
// Values Types VS Reference types
// ****************************************************************************************
// Primitives are independent variables
let x = 10; // output 10
let y = x; // output 10

x = 20; // output 20

console.log(`primitive x = ${x}`); // output 20
console.log(`primitive y = ${y}`); // output 10

/*  Objects are not stored in this variable
    The object is stored somewhere else in memory 
    & the address of the memory location is stored in the variable

    xx & yy are both pointing to the same object in memory
*/
let xx = {
    value: 10 // output 10
}
let yy = xx; // output 10

xx.value = 20; // xx & yy output = 20

console.log(xx); // output 20
console.log(yy); // output 20

// Primitives with functions
let number = 10;
function increase(number){
    number++;
}
increase(number); // function increases number to 11 
console.log(`primitive number = ${number}`); // number logs as 10 since variable is out of scope

// Reference with functions
let numberobj = {
    value: 10
}
function increaseobj(obj) {
    obj.value++;
}
increaseobj(numberobj); // 11
console.log(numberobj); // numberobj logs 11 since variable points to the object
