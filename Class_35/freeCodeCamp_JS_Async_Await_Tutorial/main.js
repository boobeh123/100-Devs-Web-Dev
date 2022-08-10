/**************************************************************
* What is Asynchronous JavaScript?
***************************************************************/
/*
Async JavaScript helps break down projects into smaller tasks.

We can use callbacks, promises, or async/await to run small tasks
in a way that we can get the best results.
*/
/**************************************************************
* What is Asynchronous JavaScript?
***************************************************************/




/**************************************************************
* What is a Synchronous system?
***************************************************************/
/*
A synchronous systems completes tasks one after another.

JavaScript is single-threaded (synchronous) by default.
    * Blocking
    * Does one thing at a time, can't multi task.
*/
/**************************************************************
* What is a Synchronous system?
***************************************************************/




/**************************************************************
* What is an asynchronous system?
***************************************************************/
/*
An Asynchronous system completes tasks independent of each other.
    * Does many tasks, at the same time.
*/
/**************************************************************
* What is an asynchronous system?
***************************************************************/




/**************************************************************
* Asynchronous vs Synchronous
***************************************************************/
/*
Synchronous system: "Inline"
    * Tasks are in the same lane. 
    * One task can't overtake the other.
    * Tasks are finished one by one.
        * If the second task stops, the following tasks stop.

Asynchronous system: "Independent"
    * Tasks are in different lanes.
    * Tasks are completed at their own pace.
        * If the second task stops, the following tasks are not affected. 
*/

// Synchronous code example
console.log("1: I");
console.log("2: am");
console.log("3: synchronous");

// Asynchronous code example
console.log("1: I'm")
setTimeout(() => console.log("2: synchronous"), 0);
console.log("3: not")
/**************************************************************
* Asynchronous vs Synchronous
***************************************************************/




/**************************************************************
* What is a Callback?
***************************************************************/
/*
A callback is when a function is nested inside another function as an argument.

Tasks can be broken down into smaller tasks. This establishes a relationship
between these tasks according to time and order.

The order of the steps & timing are important. If a previous step is not 
completed, we cannot move forward.
*/

// Example of a callback
function hello() {
    console.log("Hello");
    world();
}
function world() {
    console.log("world");
}

hello();
/**************************************************************
* What is a Callback?
***************************************************************/




/**************************************************************
* Building an "Ice Cream Cafe"
***************************************************************/
/*
This cafe has two parts, the store room & the kitchen.
The store room contains all the ingredients and represents the Back-end.
The kitchen is where we produce ice cream and represents the Front-end.

When we receive an order from the customer, we want to fetch the ingredients,
then start production and serve to the customer.

The setTimeout() function helps with establishing timing. It uses a callback
by taking a function as an argument. It can force the execution time to be longer.
*/

// Storing the data
let ingredients = {
    fruits: ["Strawberry", "Mango", "Watermelon", "Avocado"],
    container: ["Cone", "Cup", "Waffle"],
    topping: ["PieCrust", "Sprinkles", "CookieCrumbs"],
    liquid: ["Water", "Ice"]
}

// Two functions to produce the order
function order(fruit_name, call_production) {   // High order function that takes in the production-function as a parameter.

    setTimeout(() => {
        console.log(`2 SCOOPS ${ingredients.fruits[fruit_name]} 3 SCOOPS OF SPRINKLES`)
        production();                   // Calling the callback function
    }, 2000);

}

function production() {

    // CALLBACK HELL
    setTimeout(()=>{
        console.log("5 SCOOPS COMIN UP")
        setTimeout(()=>{
          console.log("Slicing..")
          setTimeout(()=>{
            console.log(`${ingredients.liquid[0]} and ${ingredients.liquid[1]} added`)
            setTimeout(()=>{
              console.log("Machine: ON")
              setTimeout(()=>{
                console.log(`Plop creme on: ${ingredients.container[1]}`)
                setTimeout(()=>{
                  console.log(`Make it rain: ${ingredients.topping[0]}`)
                  setTimeout(()=>{
                    console.log("Enjoy!")
                  },2000)
                },3000)
              },2000)
            },1000)
          },1000)
        },2000)
      },0000)
    
}
order(0,production);                  // Name of the callback function passed in as a parameter
/**************************************************************
* Building an "Ice Cream Cafe"
***************************************************************/




/**************************************************************
* Using promises
***************************************************************/
/*
Promises were invented to better handle tasks & solve "callback hell".

A promise is made and is in a state of pending.
A pending-promise can reject or resolve.
    - If rejected we can use the .catch() method to handle errors.
    - If resolved, we can use the .then() handler.

Pending - Initial stage, nothing happens here. Imagine a customer looking at the menu but haven't ordered.
Resolved - Customer receives order.
Rejected - Customer didn't receive order & left store.
Finally - Action happens when promise completes. (regardless of resolved or rejected)
*/
/**************************************************************
* Using promises
***************************************************************/




/**************************************************************
* Relationship between time and work
***************************************************************/
/*
Using callbacks and the setTimeout function, there were millisecond delays
before the next step.

Promises in programming are identical to in real life.
It is either broken or good. Either way promise completed.

Chaining is like a list of things to do.
*/

let shop_is_open = true;

function order(time, work) {
    
    // Our promise contains two parts, resolved = order received & rejected = not received
    return new Promise((resolve, reject) => {
        if (shop_is_open) {

            setTimeout(() => {
                // production is called
                resolve();
            }, time)
        } else {
            reject(console.log("Hours of operation posted online"))
        }
    })
}

order(2000, console.log(`2 SCOOPS ${ingredients.fruits[0]} 3 SCOOPS OF SPRINKLES`))
    // `2 SCOOPS ${ingredients.fruits[0]} 3 SCOOPS OF SPRINKLES`
.then(() => {
    return order(0000, console.log(`5 SCOOPS COMIN UP`))
})
// From the chaining promises section
.then(() => {
    return order(2000, console.log("Slicing.."))
})
.then(() => {
    return order(1000, console.log(`${ingredients.liquid[0]} and ${ingredients.liquid[1]} added`))
})
.then(() => {
    return order(1000, console.log("Machine: ON"))
})
.then(() => {
    return order(2000, console.log(`Plop creme on: ${ingredients.container[1]}`))
})
.then(() => {
    return order(3000, console.log(`Make it rain: ${ingredients.topping[0]}`))
})
.then(() => {
    return order(2000, console.log(`Enjoy`))
})
// From the error handling section
.catch(() => {
    console.log("Door is locked")
})
// From the .finally section
.finally(() => {
    console.log("Thanks for your help, I really needed it.")
});
/**************************************************************
* Relationship between time and work
***************************************************************/




/**************************************************************
* Promise Chaining
***************************************************************/
/*
We define what we need to do when the first task is complete.
The .then handler returns a promise when the original promise is resolved.

The promise gets passed down the line and executes in the appropriate order.
We can continue chaining .then to ensure that every action is executed in the right order.

If these actions happened asynchronously, actions could complete at different
times in a random order. 

setTimeout keeps the order of operations. Synchronous order.
*/
/**************************************************************
* Promise Chaining
***************************************************************/




/**************************************************************
* Error handling
***************************************************************/
/*
What happens when something goes wrong? We need a way to handle errors.
Error handling requires an understanding of the promise cycle.

The .catch handler also returns a promise, but only when the original promise
is rejected.

One .catch handles every promised-related error above it unless there are multiple promises.
*/
/**************************************************************
* Error handling
***************************************************************/




/**************************************************************
* .Finally handler
***************************************************************/
/*
The .finally handler works regardless of whether a promise is resolved or rejected.

A possible real world scenario:
"A user clicks a button and information is fetched. Regardless of the info
being available or not, we still want the user to land on the page."
*/
/**************************************************************
* .Finally handler
***************************************************************/




/**************************************************************
* Introduction: Async / Await
***************************************************************/
/*
Using async / await helps keep our code clean and easy to read.
To use async, write async before any regular function & it becomes a promise.

Using async/await requires an understanding of:
    * try & catch keywords
    * await keyword

The .then, .catch, & .finally handlers may be used with async/await.

*/

// Example of making/using a promise 
function order() {
    return new Promise((resolve, reject) => {
    })
}; 

// Example of using async/await
async function order() {    

}
/**************************************************************
* Introduction: Async / Await
***************************************************************/




/**************************************************************
* Using the try & catch keywords
***************************************************************/
/*
The try is used to run our code.
The catch keyword is used to catch our errors.
It's the same concept we saw when we looked at promises.
*/

// Using resolve & reject in promises
function kitchen() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Promised fulfilled");
        } else {
            reject ("Error accepted");
        }
    })
}
// Call the function & adding .then handlers
kitchen()       // Invokes the kitchen function
    .then()     // First step
    .then()     // Second step
    .catch()    // Error handling
    .finally()  // Last step regardless of promise resolving/rejecting

// Using Async & Await
async function kitchen() {
    try {
        await abc;
    }

    catch(error) {
        console.log("abc does not exist", error);
    }

    finally {
        console.log("Woohoo");
    }
}

// Call the function
kitchen();
/**************************************************************
* Using the try & catch keywords
***************************************************************/




/**************************************************************
* Using the await keyword
***************************************************************/
/*
The await keyword allows JavaScript to wait until a promise settles and
returns the result.
*/

function topping_choice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Those are not toppings?"))
        }, 3000)
    })
}

async function kitchen() {
    console.log("Hello");                   // ASynchronous
    console.log("World");                   // ASynchronous

    await topping_choice();                 // Synchronous

    console.log("olleh");                   // Synchronous
    console.log("dlrow");                   // Synchronous
}

kitchen();
console.log("Tables & dishes are clean");   // Asynchronous
console.log("Sweeped & Mopped the floor");  // Asynchronous
console.log("Store's empty. We chillin");   // Asynchronous
/**************************************************************
* Using the await keyword
***************************************************************/




/**************************************************************
* Let's open shop!
***************************************************************/
/*
We will need a kitchen function to make the ice cream.
We will need a time function to assign the amount of time each task takes.
*/

let shop_is_open = true;

function time(number) {
    return new Promise((resolve, reject) => {
        if (shop_is_open) {
            setTimeout(resolve, number);
        } else {
            reject(console.log("Hours of operation posted online"));
        }
    })
}

async function kitchen() {
    
    try {
        // Time to perform a task
        await time(2000);
        console.log(`2 SCOOPS ${ingredients.fruits[0]} 3 SCOOPS OF SPRINKLES`);

        await time(0000)
        console.log(`5 SCOOPS COMIN UP`);
    
        await time(2000)
        console.log("Slicing..");
    
        await time(1000)
        console.log(`${ingredients.liquid[0]} and ${ingredients.liquid[1]} added`);
    
        await time(1000)
        console.log("Machine: ON");
    
        await time(2000)
        console.log(`Plop creme on: ${ingredients.container[1]}`);
    
        await time(3000)
        console.log(`Make it rain: ${ingredients.topping[0]}`);
    
        await time(2000)
        console.log("Enjoy");
    }

    catch(error) {
        console.log("Door is locked", error);
    }

    finally {
        console.log("Have a great rest of your day");
    }

}

kitchen();
/**************************************************************
* Let's open shop!
***************************************************************/