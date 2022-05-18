/*
Race Day
Codecademy’s annual race is just around the corner! 
This year, we have a lot of participants. 
You have been hired to write a program that 
will register runners for the race and 
give them instructions on race day.

As a timeline, 
registration would look like this:
registration-timeline

Here’s how our registration works. 
There are adult runners (over 18 years of age) 
and youth runners (under 18 years of age). 
They can register early or late. 
Runners are assigned a race number and start time 
based on their age and registration.

Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

runner >= 18
runner < 18

early = 1000++
else 1000--

num >= 1000 {start 9:30}
num < 1000 {start 11:00}
else 12:30
*/

// 1 - Use Math object methods to randomly assign numbers from 0 to 1000
let raceNumber = Math.floor(Math.random() * 1000);
// 2 - Create a variable that stores a boolean. This indicates whether a runner is early or late.
let isEarly = true;
// 3 - Create a variable that stores a number. This represents a runner's age.
let personAge = 18;
// 4 - Check whether runner is an adult AND registered early. If true, add 1000 to raceNumber. This control flow determines the runner's number.
if ((personAge >= 18) && (isEarly === true)) {
    raceNumber += 1000;
} else {
    console.log('see the registration desk.')
}
// 5 - Check runner's age & registration time. This seperate control flow determines the race time.
if ((personAge >= 18) && (isEarly === true)) {
    console.log(`You have been assigned #${raceNumber}.\nPlease be ready at 9:30AM.`);
} else if ((personAge >= 18) && (isEarly === false)) {
    console.log(`You have been assigned #${raceNumber}.\nPlease be ready at 11:00AM.`);
} else {
    console.log(`You have been assigned #${raceNumber}.\nPlease be ready at 12:30PM.`);
}
/* Note from me: Steps 6~9 use the if/else statements above */
// 6 - Write an else if statement for late applicants that over 18 years old.
// 7 - Write an else statement for applicants under 18. Disregard registration times.
// 8 - Verify the control flow. Reassign isEarly booleans and personAge numbers.
// 9 - Add an else statement that prints 'see the registration desk.'
    // If this is working correctly, this will be printed for:
        // 1) Runners who are 18 && registered early    
        // 2) Runners who are 18 && did NOT register early