/*
Dogs mature at a faster rate than human beings. 
We often say a dog’s age can be calculated in “dog years” 
to account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 
8 years in a human’s life equates to 45 years in a dog’s life. 
How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, 
let a computer take care of it! 
With your knowledge of math operators and variables, 
use JavaScript to convert your human age into dog years.
*/

// 1 - Create a variable named myAge, and set it equal to your age as a number.
let myAge = 28;

// 2 - Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2;

// 3 - Using *= , multiply earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

// 4 - Take the myAge variable, and subtract 2 from it. Create a variable named laterYears and assign the result.
let laterYears = myAge - 2;

// 5 - Using *= , multiply laterYears by 4
laterYears *= 4;

// 6 - Using console.log(), print earlyYears and laterYears to the console.
console.log(earlyYears, laterYears);

// 7 - Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;

// 8 - Write your name as a string, call toLowerCase() method, and store the result in a variable called myName.
let myName = 'Boobeh123'.toLowerCase();

// 9 - Using console.log(), print your name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// 10 - Write this project without the *= operator.
let myAge2 = 28;
let earlyYears2 = 2;
let eyProduct = earlyYears2 * 10.5;
let laterYears2 = myAge2 - 2;
let lyProduct = laterYears2 * 4;
console.log(eyProduct, lyProduct);
const myAgeInDogYears2 = eyProduct + lyProduct;
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears2} years old in dog years.`);