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
* CONSTRUCTOR PROPERTY - Video examples - 23:28 ~
***************************************************************/
/*

*/
/**************************************************************
* CONSTRUCTOR PROPERTY - Video examples - 23:28 ~
***************************************************************/