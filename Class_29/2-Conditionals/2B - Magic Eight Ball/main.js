/*
You’ve learned a powerful tool in JavaScript: control flow! 
It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, 
then our program will output a random fortune.
*/

// 1 - Define a variable called userName that is set to an empty string.
const userName = '';
// 2 - Create a ternary expression that decides what to do if the user enters a name or not. 
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
// 3 - Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
const userQuestion = 'What is your question?';
// 4 - Write a console.log() for the userQuestion.
console.log(`${userName}, ${userQuestion}`);
// 5 - Create a variable randomNumber that generates a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 7);
// 6 - Create one more variable named eightBall, and set it equal to an empty string.
let eightBall = '';
// 7 - Create a control flow using randomNumber. Reassign eightBall with one of the 8 phrases provided.
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        console.log('Try again.')
        break;
}
// 8 - Using console.log(), print the value of eightBall
console.log(eightBall);
// 9 - Extra practice: Convert your previous control flow (switch<->if/else)
if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
} else {
    console.log('Try again.')
}






