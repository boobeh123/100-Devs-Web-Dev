/*
Deep in his mountain-side meteorology lab, 
the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. 
However there’s a problem: 
All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, 
let’s convert Kelvin to Celsius, 
then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.
*/

/* 1 - Create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. */
const kelvin = 293;
const kelvinStepEleven = 0;                                             // step 11

/* 3 - Convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
Create a variable named celsius that stores the result. */
const celsius = kelvin - 273;
const celsiusStepEleven = kelvinStepEleven - 273;                       // step 11

/* 5 - Use equation (Fahrenheit = Celsius * (9/5) + 32) to calculate Fahrenheit, 
Create a variable named fahrenheit that stores the result. 
Choose the variable type that allows you to change its value. */
let fahrenheitDecimal = celsius * (9/5) + 32;


/* 7 - Converting from Celsius to Fahrenheit, often results in a decimal number.
Use the .floor() method to round down the Fahrenheit temperature. 
Save the result to the fahrenheit variable. */
let fahrenheit = Math.floor(celsius * (9/5) + 32);
let fahrenheitStepEleven = Math.floor(celsiusStepEleven * (9/5) + 32);  // step 11

// 9 - Use console.log and string interpolation to log the temperature in fahrenheit to the console 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// 11 - By changing variables, what’s 0 Kelvin in Fahrenheit? Change the value of kelvin and run the program again.
console.log(`The temperature is ${fahrenheitStepEleven} degrees Fahrenheit.`);

/* 12 - Convert celsius to the Newton scale using the equation ( Newton = Celsius * (33/100) )
Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console */
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`)