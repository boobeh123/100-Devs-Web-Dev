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
* INHERITANCE - Video examples - 6:29
***************************************************************/
/*

*/
/**************************************************************
* INHERITANCE - Video examples - 6:29
***************************************************************/
