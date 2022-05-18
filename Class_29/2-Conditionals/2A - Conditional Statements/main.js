/**************************************************************
* WHAT ARE CONDITIONAL STATEMENTS?
***************************************************************/
/*
"If we are tired, we go to bed, 
otherwise, we wake up and start the day."

These if-else decisions can be modeled in code by creating conditional statements.
A conditional statement checks a specific condition(s) 
and performs a task based on the condition(s).
*/
/**************************************************************
* WHAT ARE CONDITIONAL STATEMENTS?
***************************************************************/




/**************************************************************
* IF STATEMENT- Reading examples
***************************************************************/
/*
We often perform a task based on a condition:

If the alarm clock rings, 
then we’ll shut it off. 

In programming, we can also perform a task based on a condition using an if statement

If statements are composed of:
1 - The if keyword followed by a set of parentheses () 
2 - Inside the (), a condition is provided that evaluates to true or false.
3 - If condition evaluates to true, the code inside the curly braces {} runs.
4 - If condition evaluates to false, the block won’t execute.
*/
if (true) {
    console.log('Hello world');
}
/**************************************************************
* IF STATEMENT - Reading examples
***************************************************************/
/**************************************************************
* IF STATEMENT - Tasks
***************************************************************/
// 1 - Using let, declare a variable named sale and assign the value true to it.
let sale = true;
sale = false;       // step 3
// 2 - Provide if statement a condition of sale. Inside the code block, print "Time to buy!"
if (sale) {
    console.log('Time to buy!')
}
// 3 - Reassign sale to false. (Below the sale variable declaration, but before the if statement)
/**************************************************************
* IF STATEMENT - Tasks
***************************************************************/




/**************************************************************
* IF...ELSE STATEMENTS - Reading examples
***************************************************************/
/*
We will have code we want to run if our condition evaluates to false.
Add an else statement to run a block of code when the condition evaluates to false.
if...else statements allow us to automate solutions to yes-or-no questions. (AKA binary decisions)

An else statement must be paired with an if statement.
The else statement is composed of:
1 - Uses the else keyword following the code block of an if statement.
2 - Has a code block that is wrapped by a set of curly braces {}.
3 - The code inside the else statement code block will execute when
the if statement’s condition evaluates to false.
*/
if (false) {
    console.log('This code will not run.')
} else {
    console.log('This code will run.');
}
/**************************************************************
* IF...ELSE STATEMENTS - Reading examples
***************************************************************/
/**************************************************************
* IF...ELSE STATEMENTS - Tasks
***************************************************************/
// 1 - Add an else statement to the existing if statement. 
// 2 - Inside the code block of the else statement, print 'Time to wait for a sale.' 
if (sale) {
    console.log('Time to buy!')
} else {
    console.log('Time to wait for a sale.')
}
/**************************************************************
* IF...ELSE STATEMENTS - Tasks
***************************************************************/




/**************************************************************
* COMPARISON OPERATORS - Reading examples
***************************************************************/
/*
Comparison operators compare the value on the left with the value on the right.
It can be helpful to think of comparison statements as questions.
All comparison statements evaluate to true or false.

List of operators & their syntax:
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

The example below uses the identity operator (===) to check if 
string 'apples' evaluates to string 'oranges'
*/
console.log(10 < 12);                   // Evaluates to true
console.log('apples' === 'oranges');    // Evaluates to false
/**************************************************************
* COMPARISON OPERATORS - Reading examples
***************************************************************/
/**************************************************************
* COMPARISON OPERATORS - Tasks
***************************************************************/
// 1 - Using let, create hungerLevel variable and assign it the value 7.
let hungerLevel = 7;
/* 2 - Using a comparison operator, write an if...else statement. 
The condition checks if hungerLevel is greater than 7, if true, print 'Time to eat!'
Otherwise, print 'We can eat later!' */
if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}
/**************************************************************
* COMPARISON OPERATORS - Tasks
***************************************************************/




/**************************************************************
* LOGICAL OPERATORS - Reading examples
***************************************************************/
/*
There are operators that work with boolean values known as logical operators.
There are three logical operators:
1 - The and operator    (&&)
2 - The or operator     (||)
3 - The not operator    (!) AKA Bang operator
---------------&&-------------------
When using the && operator, 
both conditions must evaluate to true,
for the entire condition to evaluate to true and execute.

if either condition is false, 
the && condition will evaluate to false 
and the else block will execute.
---------------&&-------------------
---------------||-------------------
When using the || operator, 
only one of the conditions must evaluate to true,
for the overall statement to evaluate to true and execute.

Left-hand conditions are checked first and if they evaluate to false, 
the right-hand condition is checked.

If the first and second condition evaluate to false, 
the else block will execute.
---------------||-------------------
----------------!-------------------
The ! operator reverses, or negates, the value of a boolean.
the ! operator will either take a true value and pass back false, 
or it will take a false value and pass back true.
----------------!-------------------

*/

// (The if statement below does not work. Illustrates the && operator)
// When using the && operator, we are checking that 2 things are true.
if ((stopLight === 'green') && (pedestrians === 0)) {
    console.log('Accelerate');
} else {
    console.log('Brakes');
}

// (The if statement below does not work. Illustrates the || operator)
// When using the || operator, only one of the conditions must evaluate to true.
if ((day === 'Saturday') || (day === 'Sunday')) {
    console.log('Have a nice weekend');
} else {
    console.log('Have a good day');
}

let sleepy = true;
console.log(!sleepy);  // Output -> false
/**************************************************************
* LOGICAL OPERATORS - Reading examples
***************************************************************/
/**************************************************************
* LOGICAL OPERATORS - Tasks
***************************************************************/
/*  1 - Create two variables: mood and tirednessLevel.
    2 - Create an if...else statement 
    that checks if mood is 'sleepy' and tirednessLevel is greater than 8.
    3 - If both conditions evaluate to true, then print 'time to sleep'. 
    Otherwise, print 'not bed time yet'.
    4 - Play around with the || operator and the ! operator.
    What happens if you negate the value of the entire statement with ! and switch to || instead of &&? */
let mood = 'sleepy';
let tirednessLevel = 6;
// ---------------&&-------------------
if ((mood == 'sleepy') && (tirednessLevel > 8)) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}
// Output -> not bed time yet
// ---------------&&-------------------
// ---------------&&-!-----------------
if ((mood === 'sleepy') && !(tirednessLevel > 8)) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}
// Output -> time to sleep
// ---------------&&-!-----------------
// ---------------||-------------------
if ((mood == 'sleepy') || (tirednessLevel > 8)) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}
// Output -> time to sleep
// ---------------||-------------------
// ---------------||-!-----------------
if (!(mood == 'sleepy') || (tirednessLevel > 8)) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}
// Output -> not bad time yet
// ---------------||-!-----------------
/**************************************************************
* LOGICAL OPERATORS - Tasks
***************************************************************/




/**************************************************************
* TRUTHY AND FALSY - Reading examples
***************************************************************/
/*
Consider how non-boolean data types, are evaluated when checked inside a condition.

Take a look at the if...else statement below:
The code block in the if statement will run because greet has a truthy value;
even though the value of greet is not explicitly the value true.
When used in a conditional context, it evaluates to true because it has been assigned a non-falsy value.

Which values are falsy or evaluate to false when checked as a condition?:
1 - null
2 - undefined
3 - NaN 
4 - Empty strings '' ""
5 - 0

Take a look at the second if...else statement below:
The condition evaluates to false because the value of the stockOfFruit is 0. 
Since 0 is a falsy value, the code block in the else statement will run.
*/
// Example of a truthy value -> If statement prints greet
let greet = 'Hello world';
if (greet) {
    console.log(greet);
} else {
    console.log('Variable does not exist');
}

// Example of a falsy value -> Else statement prints string
let stockOfFruit = 0;
if (stockOfFruit) {
    console.log('Woohoo');
} else {
    console.log('Come back tomorrow');
}
/**************************************************************
* TRUTHY AND FALSY - Reading examples
***************************************************************/
/**************************************************************
* TRUTHY AND FALSY - Tasks
***************************************************************/
// 1 - Change the value of wordCount so that it is truthy. This value should still be a number.
let wordCount = 2;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
// Output -> Great! You've started your work!

// 2 - Change the value of favoritePhrase so that it is still a string but falsy.
let favoritePhrase = '';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// Output -> This string is definitely empty.
/**************************************************************
* TRUTHY AND FALSY - Tasks
***************************************************************/




/**************************************************************
* TRUTHY AND FALSY ASSIGNMENT - Reading examples
***************************************************************/
/*
Say you have a website and want to take a user’s username to make a personalized greeting. 
Sometimes, the user does not have an account, making the username variable falsy. 
The code below checks if username is defined and assigns a default string if it is not:
*/
let username = '';              // Declares username with falsy value
let defaultName;                // Declares defaultName
if (username) {                 // The code block in the if statement will only run AFTER user creates username
    defaultName = username;     // Displays user's username AFTER account creation
} else {                        // The code block in the else statement will run for first-time-visitors and users without a username
    defaultName = 'Stranger';   // Displays Stranger
}
console.log(defaultName);       // Output -> Stranger

// * JavaScript assigns a truthy value to variables that use the || operator
let username2 = '';                         // Declares username with falsy value
let defaultName2 = username2 || 'Stranger'; // The || operator checks username2 first. If truthy, the variable defaultName will be assigned the actual value of username2 first.
console.log(defaultName)                    // Output -> Stranger
// Referring to the example directly above:
// The variable defaultName will be assigned the actual value of username first. Because empty strings are falsy values,
// it will be assigned the value of 'Stranger'. 
// This concept is also referred to as short-circuit evaluation.
/**************************************************************
* TRUTHY AND FALSY ASSIGNMENT - Reading examples
***************************************************************/
/**************************************************************
* TRUTHY AND FALSY ASSIGNMENT - Tasks
***************************************************************/
// 1 - Assign writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.
let tool = '';      // Do not re-assign until step 1 completed
tool = 'marker'     // Step 2
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);
// 2 -Reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.
/**************************************************************
* TRUTHY AND FALSY ASSIGNMENT - Tasks
***************************************************************/




/**************************************************************
* TERNARY OPERATOR - Reading examples
***************************************************************/
/*
Ternary operators are used to refactor an if...else statement.
Ternary operators can be used for conditions which evaluate to true or false.

Breaking down the ternary syntax in the second example below:
The condition "isNightTime", is provided before the ?.
Two expressions follow the ? and are separated by a :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
*/
let isNightTime = true;
if (isNightTime) {
    console.log('Turn the light on');
} else {
    console.log('Why is the light on?');
}
// Output -> Turn the light on

// Using ternary to simplify the function above
isNightTime ? console.log('Turn the light on') : console.log('Why is the light on?'); 
// Output -> Turn the light on
/**************************************************************
* TERNARY OPERATOR - Reading examples
***************************************************************/
/**************************************************************
* TERNARY OPERATOR - Tasks
***************************************************************/
/* Note from me: I did not include the original if...else code block. Just the answer. */
// 1 - Edit the first if...else block and use a ternary operator
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
// 2 - Edit the second if...else block and use a ternary operator
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');
// 3 - Edit the third if...else block and use a ternary operator
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
/**************************************************************
* TERNARY OPERATOR - Tasks
***************************************************************/




/**************************************************************
* ELSE IF STATEMENTS - Reading examples
***************************************************************/
/*
The else if statement allows for more than two possible outcomes. 
You can add as many else if statements as you would like.
The else if statement always comes after the if statement and before the else statement. 

if/else if/else statements are read from top to bottom, 
so the first condition that evaluates to true from the top to bottom is the block that gets executed.
If none of the conditions evaluate to true, then the else satement executes.
*/
/**************************************************************
* ELSE IF STATEMENTS - Reading examples
***************************************************************/
/**************************************************************
* ELSE IF STATEMENTS - Tasks
***************************************************************/
/* Note from me: I provided one block of code that answers task 1,2, and 3.
    1 - Write a conditional statement that keeps track of seasons,
    add an else if statement that checks if season is equal to 'winter'. 
    Inside the code block, print 'It\'s winter! Everything is covered in snow.'.
    2 - Add another else if statement that checks if season is equal to 'fall'. 
    Inside the code block, print 'It\'s fall! Leaves are falling!'.
    3 - Add a final else if statement that checks if season is equal to 'summer'.
    Inside the code block, print 'It\'s sunny and warm because it\'s summer!'.
    */
let season = 'summer';
if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
      console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
      console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
} else {
    console.log('Invalid season.');
}
/**************************************************************
* ELSE IF STATEMENTS - Tasks
***************************************************************/




/**************************************************************
* THE SWITCH KEYWORD - Reading examples
***************************************************************/
/*
We often find ourselves checking multiple values and handling each of them differently.

When we have a series of conditions checking for a value,
a switch statement provides an alternative syntax that is easier to read and write.

Breaking down the syntax of the example below:
The switch keyword initiates the statement and is followed by parenthesis,
Inside () contains the value that each case will compare. 
The value of the switch statement is groceryItem.

The block following the curly braces, are multiple cases. 
The case keyword checks if the expression matches the specified value that comes after it. 
The value following the first case is 'tomato'. 
If the value of groceryItem was equal to 'tomato', then 'Tomatoes cost $0.00' prints.

The value of groceryItem is 'papaya', 
so the 3rd case would execute its console.log()

The break keyword tells the computer to exit the block (doesn't execute any more code or check other cases) 
Without break keywords, the first matching case will run, but so will every subsequent case.

At the end of each switch statement, 
there is a default statement. 
If none of the cases are true, 
then the code in the default statement will run.
*/
let groceryItem = 'papaya';
switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes cost $0.00');
        break;
    case 'lime':
        console.log('Limes cost $0.00');
        break;
    case 'papaya':
        console.log('Papayas cost $0.00');
        break;
    default:
        console.log('Invalid item.');
        break;
}
// Output -> Papayas cost $0.00
/**************************************************************
* THE SWITCH KEYWORD - Reading examples
***************************************************************/
/**************************************************************
* THE SWITCH KEYWORD - Tasks
***************************************************************/
/*  1 - Write a switch statement to decide what medal to award an athlete.
    2 - Add three cases. The first case checks for the value 'first place'
    if the expression's value matches the case, print 'You get the gold medal!'
    Second case checks for the value 'second place'
    if the expression's value matches the case, print 'You get the silver medal!'
    Third case checks for the value 'third place
    if the expression's value matches the case, print 'You get the bronze medal!'
    3 - Add a default statement that prints 'No medal awarded.' */
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.')
        break;
}
/**************************************************************
* THE SWITCH KEYWORD - Tasks
***************************************************************/
/*
## Summary:
If statements:          Checks a condition and will execute a task if that condition evaluates to true.
If...else statements:   Make binary decisions (yes/no) and execute different code blocks based on a provided condition.
Else if:                We can add more conditions using else if statements.
Comparison operators:   Can compare two values.
Logical operator (&&):  Checks if both provided expressions are truthy.
Logical operator (||):  Checks if either provided expression is truthy.
Bang operator    (!) :  Switches the truthiness and falsiness of a value.
Ternary operator:       Shorthand to simplify concise if...else statements.
Switch statement:       Can be used to simplify the process of writing multiple else if statements. 
Break keyword:          Stops the remaining cases from being checked and executed in a switch statement.
*/