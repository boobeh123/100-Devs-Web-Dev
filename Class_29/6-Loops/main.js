/**************************************************************
* LOOPS
***************************************************************/
/*
A loop is a programming tool that repeats a set of instructions
until a specified condition, called a stopping condition is reached.

Loops allow us to create efficient code that 
automates processes to make scalable, manageable programs.
*/
/**************************************************************
* LOOPS
***************************************************************/




/**************************************************************
* REPEATING TASKS MANUALLY - READING EXAMPLES
***************************************************************/
/*
This portion of the lesson will show you how cumbersome it would be 
if a repeated task required you to type out the same code every single time.
*/
/**************************************************************
* REPEATING TASKS MANUALLY - READING EXAMPLES
***************************************************************/
/**************************************************************
* REPEATING TASKS MANUALLY - TASKS
***************************************************************/
// 1 - Create an array containing 3 strings 
let vacationSpots = ['Kitchen', 'Bed', 'Bathroom'];
// 2 - Print each element in the array. Do not use a loop.
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
/* 3 - Now imagine if the array contained 100 elements. Printing each element
by hand would be a tedious task. Loops can make this task more efficient. */
/**************************************************************
* REPEATING TASKS MANUALLY - TASKS
***************************************************************/




/**************************************************************
* THE FOR LOOP - READING EXAMPLES
***************************************************************/
/*
A for loop contains three expressions separated by ; inside the parentheses:
1 - An initialization starts the loop & can also be used to declare the iterator variable.
2 - A stopping condition is the condition that the iterator variable is evaluated against— 
if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
3 - an iteration statement is used to update the iterator variable on each loop.
*/
// Example for a for loop
for (let i = 0; i < 11; i++) {
    console.log(i);                 // Output -> 0,1,2,3,4,5,6,7,8,9,10
}
/* Breakdown of the 3 expressions inside the for loop
1 - let i = 0; is the initialization. The loop will begin the count at 0.
2 - i < 11; is the stopping condition. The loop will run as long as i is less than 11.
3 - i++; is the iteration statement. After each loop, the value of i is increased by 1.
4 - The code block inside the {} will execute until the stopping condition is met. (i is greater than or equal to 11)
*/
/**************************************************************
* THE FOR LOOP - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE FOR LOOP - TASKS
***************************************************************/
// 1 - Create a for loop that starts from 5 to 10 and prints each number.
for (let i = 5; i <= 10; i++) {
    console.log(i);                 // Output -> 5,6,7,8,9,10
}
/**************************************************************
* THE FOR LOOP - TASKS
***************************************************************/




/**************************************************************
* LOOPING IN REVERSE - READING EXAMPLES
***************************************************************/
/*
Modifying the expressions allow us to make our loop run backwards:
1 - Set the iterator variable to the desired value.
2 - Set the stopping condition when the iterator is less than the desired value.
3 - Set the iterator to decrease after each iteration.

Be sure the stopping condition is met otherwise you program will
be in an infinite loop. 
*/
/**************************************************************
* LOOPING IN REVERSE - READING EXAMPLES
***************************************************************/
/**************************************************************
* LOOPING IN REVERSE - TASKS
***************************************************************/
// 1 - Create a for loop that starts from 3 to 0 and prints each number.
for (let i = 3; i >= 0; i--) {
    console.log(i);                     // Output -> 3,2,1,0
}
/**************************************************************
* LOOPING IN REVERSE - TASKS
***************************************************************/




/**************************************************************
* LOOPING IN REVERSE - READING EXAMPLES
***************************************************************/
/*
We can use a for loop to iterate over each element on an array.
To loop through each element in an array, a for loop 
should use the array’s .length property in its stopping condition.

Remember that arrays are zero-indexed, 
the index of the last element of an array is equivalent 
to the length of that array minus 1.
*/
// Example of iterating through an array
const randomArray = ['Hello', 'world', true, false, 0, undefined, null, 9];
for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);        // Output -> Hello world true false 0 undefined null 9
}
/**************************************************************
* LOOPING THROUGH ARRAYS - READING EXAMPLES
***************************************************************/
/**************************************************************
* LOOPING THROUGH ARRAYS - TASKS
***************************************************************/
// 1 - Create a for loop that iterates through the vacationSpots array. Use a template literal to print the string and array element.
for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
}
/**************************************************************
* LOOPING THROUGH ARRAYS - TASKS
***************************************************************/




/**************************************************************
* NESTED LOOPS - READING EXAMPLES
***************************************************************/
/*
One use for a nested for loop is to compare the elements in two arrays.

For each round of the outer for loop, 
the inner for loop will run completely.
*/
// Example of a nested for loop:
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
/* Breaking down the nested for loop:
For each element in the outer loop array (myArray is iterated 3 times)
the inner loop will run in its entirety  (yourArray is iterated 9 times)

comparing the current element from the outer array,
to each element in the inner array:
(compares 6 to 19,81,2 -> compares 19 to 19,81,2 -> compares 20 to 19,81,2)

When it finds a match, the code block inside the inner array prints to the console.
*/
/**************************************************************
* NESTED LOOPS - READING EXAMPLES
***************************************************************/
/**************************************************************
* NESTED LOOPS - TASKS
***************************************************************/
// 1 - Create an array containing 4 strings and name it bobsFollowers.
let bobsFollowers = ['buddy', 'pal', 'friend', 'guy'];
// 2 - Create an array containing 3 strings and name it tinasFollowers. Two followers follow bob and tina.
let tinasFollowers = ['buddy', 'hello world', 'guy'];
// 3 - Create an empty array and name it mutualFollowers.
let mutualFollowers = [];
/* 4 - Create a nested for loop. It will iterate through bobs&tinas array. 
Bob is the outer loop and tina is the inner loop. If any elements match,
push that element into the empty array.*/
for (let i = 0; i < bobsFollowers.length; i++) {        // Iterates through buddy, pal, friend, and guy (iterates 4 times total)
    for (let j = 0; j < tinasFollowers.length; j++) {   // Iterates through buddy, hello world, and guy (iterates 12 times total)
        if (bobsFollowers[i] === tinasFollowers[j]) {   // Compares bobs followers to tinas followers. Buddy and guy are matches.
            mutualFollowers.push(tinasFollowers[j]);    // If a match is found, pushes follower to an empty array. Pushes buddy and guy into empty array.
        }
    }
}
/**************************************************************
* NESTED LOOPS - TASKS
***************************************************************/




/**************************************************************
* THE WHILE LOOP - READING EXAMPLES
***************************************************************/
/*
To start, let us convert a for loop into a while loop.

1 - The i variable is declared before the loop. It's in the global scope and can be used.
2 - We start our loop with the while keyword followed by our stopping condition.
The stopping condition is evaluated before each iteration of the loop.
3 - The loop's code block prints the iteration then increments the iterator by one.

When to use a while loop?
The syntax of a while loop is ideal when 
we don’t know in advance how many times the loop should run.
*/
// For loop that prints 0,1,2,3
for (let i = 0; i <= 3; i++) {
    console.log(i);
}
// while loop that prints 0,1,2,3
let i = 0;
while (i <= 3) {
    console.log(i);
    i++
}
/**************************************************************
* THE WHILE LOOP - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE WHILE LOOP - TASKS
***************************************************************/
const cards = ['diamond', 'spade', 'heart', 'club'];
// 1 - Declare a variable named currentCard. Do not assign value.
let currentCard;
/* 2 - Create a while loop that checks if currentCard does not have the value 'spade'
Add the following line into your code block: */
while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}
// 3 - Print currentCard inside the while loop code block.
/**************************************************************
* THE WHILE LOOP - TASKS
***************************************************************/




/**************************************************************
* DO...WHILE STATEMENTS - READING EXAMPLES
***************************************************************/
/*
In some cases, you want a piece of code to run at least once and then loop.
A do...while statement says to do a task once and then 
keep doing it until a specified condition is no longer met. 

do...while will run at least once 
whether or not the condition evaluates to true.
*/
// Example of a do...while statement:
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);
/*
1 - The code block after the do keyword is executed once:
countString was an empty string. CountString becomes the number 0 after Do executes once.
2 - Then the condition is evaluated. If the condition evaluates to true, 
the block will execute again. 
3 - The looping stops when the condition evaluates to false.
*/
/**************************************************************
* DO...WHILE STATEMENTS - READING EXAMPLES
***************************************************************/
/**************************************************************
* DO...WHILE STATEMENTS - TASKS
***************************************************************/
// 1 - Create two variables, cupsOfSugarNeeded and cupsAdded. Assign both a number.
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
// 2 - Create a do...while loop which increments cupsAdded by one, while cupsAdded is less than cupsOfSugarNeeded.
do {
    console.log(cupsAdded);
    cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
/**************************************************************
* DO...WHILE STATEMENTS - TASKS
***************************************************************/




/**************************************************************
* THE BREAK KEYWORD - READING EXAMPLES
***************************************************************/
/*
When we want to stop a loop from continuing to execute 
even though the original stopping condition hasn’t been met, 
we can use the break keyword.

The break keyword allows programs to “break” out of the loop 
from within the loop’s block.

With breaks, we can add test conditions besides the stopping condition.
*/
// Example of break in a for loop:
for (let i = 0; i < 99; i++) {  // I less than 99 is the stopping condition
    if (i > 2 ) {               // I greater than 2 is the test condition
        break;                  // Exits the loop when i = 3
    }
    console.log('Banana.');     // Prints Banana on every iteration (up to 99 times)
}
console.log('Orange you glad I broke out the loop!');
// Output -> Banana. Banana. Banana. Orange you glad I broke out the loop!
/**************************************************************
* THE BREAK KEYWORD - READING EXAMPLES
***************************************************************/
/**************************************************************
* THE BREAK KEYWORD - TASKS
***************************************************************/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// 1 - Using a for loop, print each element in the rapperArray.
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;                                      // Step 3
    }
}
// 2 - Print a string after the for loop.
console.log(`And if you don't know, now you know.`);
// 3 - Add a break if an array element is equal to 'Notorious B.I.G.'
/**************************************************************
* THE BREAK KEYWORD - TASKS
***************************************************************/