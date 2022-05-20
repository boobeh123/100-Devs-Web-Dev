/**************************************************************
* HIGHER ORDER FUNCTIONS - INTRODUCTION
***************************************************************/
/*
If we told you to “count to three,” 
we would expect you to say the numbers “one”, “two”, and “three”. 
We assumed you would know to start with “one” and end with “three”. 
This allows us to abstract away a lot of the details and communicate key concepts more concisely.

With programming, we need to be more explicit with our directions to the computer.
In this lesson, we’ll learn how to use “abstraction” in programming by writing functions.
We’re also going to learn about a way to add another level of abstraction to our programming: higher-order functions. 

Higher-order functions are functions that accept other functions as arguments
and/or return functions as output.
*/
/**************************************************************
* HIGHER ORDER FUNCTIONS - INTRODUCTION
***************************************************************/




/**************************************************************
* FUNCTIONS AS DATA - READING EXAMPLES
***************************************************************/
/*
JavaScript functions behave like any other data type in the language; 
we can assign functions to variables & we can reassign them to new variables.
JavaScript functions can have properties and methods.
Functions are special because we can invoke them, but we can still treat them like any other type of data.
*/
// Example of function name impacting readability:
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
// Assigning a suitable name to a variable containing the function
const busy = announceThatIAmDoingImportantWork; // No parentheses -> busy contains the function and not the value of executing the function
busy();                                         // Output -> I’m doing very important work!
/**************************************************************
* FUNCTIONS AS DATA - READING EXAMPLES
***************************************************************/
/**************************************************************
* FUNCTIONS AS DATA - TASKS
***************************************************************/
// 1 - Assign a suitable variable name to the function "checkThatTwoPlusTwoEqualsFourAMillionTimes".
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// 2 - Execute the isTwoPlusTwo function.
isTwoPlusTwo();
// 3 - Chain the .name property to isTwoPlusTwo, to figure out the name of the original function.
console.log(isTwoPlusTwo.name);                 // Output -> checkThatTwoPlusTwoEqualsFourAMillionTimes
/**************************************************************
* FUNCTIONS AS DATA - TASKS
***************************************************************/




/**************************************************************
* FUNCTIONS AS PARAMETERS - READING EXAMPLES
***************************************************************/
/*
A higher-order function is a function that either accepts 
functions as parameters, returns a function, or both!

We call functions that get passed in as parameters are callback functions.
Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, & pass another function in as an argument, 
we don’t invoke the argument function. 
Invoking it would evaluate to passing in the return value of that function call. 

With callback functions, we pass in the function itself by typing the function name without the parentheses.

Breakdown of the code below:
higherOrderFunc that accepts a single parameter, funcParam.
funcParam gets invoked using parentheses.
Below higherOrderFunc is the cbFunc. 
higherOrderFunc is invoked and pases cbFunc as an argument.

Anonymous functions can be arguments too.
*/

// higher-order function is a function that either accepts functions as parameters
const higherOrderFunc = funcParam => {
    // functions that get passed in as parameters are callback functions.
    // Callback functions get invoked during the execution of the higher-order function.
    console.log(funcParam());           // Output -> I'm being invoked by the higher-order function
    return `I invoked ${funcParam.name} as a callback function`
}
// The function that will be passed into higherOrderFunc
const cbFunc = () => {
        return `I'm being invoked by the higher-order function`;
}
// Invoking the higher-order function
console.log(higherOrderFunc(cbFunc));   // Output -> I invoked cbFunc as a callback function
/**************************************************************
* FUNCTIONS AS PARAMETERS - READING EXAMPLES
***************************************************************/
/**************************************************************
* FUNCTIONS AS PARAMETERS - TASKS
***************************************************************/
// 1 - Declare two variables inside of checkConsistentOutput()
// CB func
const addTwo = num => {
    return num + 2;
  }
// Higher order func
const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;               // step 1
    let checkB = func(val);             // step 1
    if (checkA === checkB) {            // step 2
        return checkB;                  // step 2
    } else {                            // step 2
        return `inconsistent results`;  // step 2
    }
}
/* 2 - Compare checkA and checkB if both equal to the same value. 
If true, return the result of the callback function
if false, return a string to let user know */
/* 3 - Using console.log(), Invoke the higher-order function
with addTwo and a number as the arguments.*/
console.log(checkConsistentOutput(addTwo)); // Step 3
/**************************************************************
* FUNCTIONS AS PARAMETERS - TASKS
***************************************************************/




/**************************************************************
* REVIEW - CHALLENGES
***************************************************************/
// CB func
const addTwo = num => {
    return num + 2;
}
// Higher order func
const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
        return checkB;
    } else {
        return `inconsistent results`;
    }
}
console.log(checkConsistentOutput(addTwo));
// 1 - What happens if you change the value of 2 in checkA?
// ANSWER: The control flow that compares checkA & checkB will evaluate to false. The else statement will return a string.
// 2 - Which variable holds the callback function?
// ANSWER: The addTwo variable.
// 3 - What happens if you invoke the function’s argument?
// ANSWER: addTwo is still a function. If you pass a number as an argument, this function will add 2 to the argument and return the new number
// example: addTwo(5); -> Output -> 7
/**************************************************************
* REVIEW - CHALLENGES
***************************************************************/