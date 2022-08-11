/**************************************************************
* Introduction 0:00 ~ 1:10
***************************************************************/
/*
JavaScript is a single-threaded language.
Everything we do on the web is blocking or tine-consuming.

Asynchronous programming is an essential skill for JavaScript Developers.
We should understand the node.js event loop, callbacks, promises,
and async await.

To understand anything async, I need to understand the event loop.
    * To better understand the event loop:
        * Jake Archibald: In The Loop - setTimeout, micro tasks, requestAnimationFrame, requestIdleCallback, …
        * Watch https://www.youtube.com/watch?v=cCOL7MC4Pl0 
    * To better understand Callbacks:
        * Intro to Async Web Dev - Part 1: Callbacks
        * Watch https://www.youtube.com/watch?v=ueOG5uk7zo8
*/
/**************************************************************
* Introduction 0:00 ~ 1:10
***************************************************************/




/**************************************************************
* What is the Event Loop & How it relates to async await 1:11 ~ 2:50
***************************************************************/
/*
Both the browser & Node.js are always running a single threaded event loop to
run code.

On the first iteration, it runs all synchronous code and may also queue up
asynchronous events to be called back later.
    * A function runs but needs data from the network first.
        * The event loop will keep running on a separate thread pool.
            * When the function receives the data and tells the event loop to callback.

Macro tasks (set timeout/set interval) are executed on the next event loop.
Micro tasks (fulfilled promise) are calledback before the start of the next event loop.

In the example below,
Assumed result: Each line executes one by one

Actual result: 
Layer one executes immediately, runs on main thread.
Layer two is queued for a future task.
Layer three is queued for a micro task queue immediately after the current task
Layer four executes immediately after layer one.

Even if layer 2 is called before layer 3, 
Layer 3 is logged first because of the priority of the micro task queue.
*/

// Implications of syncronous & asyncronous events
// Layer one - Syncronous
console.log('Synchronous event');

// Layer two - Macro task - executes on the next event loop
setTimeout(_ => console.log('Asynchronous Macro task'), 0);

// Layer three - Micro task - executes before the start of the next event loop
Promise.resolve().then(_ => console.log('Promise Micro task'));

// Layer four - Syncronous
console.log('Synchronous event');
/**************************************************************
* What is the Event Loop & How it relates to async await 1:11 ~ 2:50
***************************************************************/




/**************************************************************
* Promise based API / fetch 2:51 ~ 3:34
***************************************************************/
/*
Fetch is a browser-based API, also available on the Node fetch library.

Fetch allows us to get data from an HTTP endpoint & have the original promise returned 
as the response.

Fetching data from a server is always going to be asynchronous so we can queue 
up the promise then provide it with a callback to map it to JSON 
example: .then() handler

Promises can be chained together.
Mapping to JSON is also a promise.
*/
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
promise
.then((response) => response.json())
.then((data) => console.log(data))
console.log('Example of synchronous systems');
/**************************************************************
* Promise based API / fetch 2:51 ~ 3:34
***************************************************************/




/**************************************************************
* Error handling 3:35 ~ 4:00
***************************************************************/
/*
All Promise-related errors can be caught with a single .catch() 

This handles errors that happen anywhere above the asynchronous code.

If this were callback-based we would need to handle errors at every nested-level.

Any errors bypass the .then() handler and go to the .catch() handler.
*/
/**************************************************************
* Error handling 3:35 ~ 4:00
***************************************************************/




/**************************************************************
* Creating promises 4:01 ~ 5:42
***************************************************************/
/*
Promises are an improvement over callbacks, 
but can still be hard to read & follow with a long chain of multiple asynchronous events.

In the first example below:
- I have a log function that displays the elapsed time between each line of code.
- I have a blocking function that contains a while loop, that loops a billion times.
- If we run this code on the main thread, it will block all of the code from 
executing until the billion loops are done.
- I added two console.logs, one before the the blocking function and one after

In the second example below:
- I am reusing the log function.
- The blocking function creates a Promise, the while loop is wrapped in a promise,
and have it resolved to that value.
- Everything happens on the main thread, the resolving of the value happens
as a micro task.

In the third example below:
- I am reusing the log function
- The blocking function Creates a promise, run the while loop inside the resolved promise callback
- The while loop inside the resolved promise ensures that the synchronous code
or the macro tasks are completed.


*/
// Example one - Synchronous systems, tasks are completed one by one
const tick = Date.now();
function log(string) {
    console.log(`${string} \n Elapsed: ${Date.now() - tick}`);
}
function codeBlocker() {
    let i = 0;
    while (i < 1000000000) {i++;}
    return 'dlrow';
}
log('Hello');           // Output -> Hello \n Elapsed: 0    (1st)
log(codeBlocker());     // Output -> dlrow \n Elapsed: 884  (2nd)
log('World');           // Output -> World \n Elapsed: 885  (3rd)

// Example two - Creating a Promise as a micro task
function codeBlocker() {
    return new Promise((resolved, rejected) => {
        let i = 0;
        while (i < 1000000000) {i++;}
        resolved('dlrow');
    })
}
log('Hello');           // Output -> Hello \n Elapsed: 0    (1st)
codeBlocker().then(log);// Output -> dlrow \n Elapsed: 846  (3rd)
log('World');           // Output -> World \n Elapsed: 846  (2nd)

// Example three - Refactored to resolve Promise
function codeBlocker() {
    return Promise.resolve().then(string => {
        let i = 0;
        while (i < 1000000000) {i++;}
        return ('dlrow');
    })
}
log('Hello');           // Output -> Hello \n Elapsed: 0    (1st)
codeBlocker().then(log);// Output -> dlrow \n Elapsed: 842  (3rd)
log('World');           // Output -> World \n Elapsed: 0    (2nd)
/**************************************************************
* Creating promises 4:01 ~ 5:42
***************************************************************/




/**************************************************************
* Async/Await 5:43 ~ 8:17
***************************************************************/
/*
Async/Await is syntactic sugar to make asynchronous code read like synchronous
code.
Async functions using the await keyword can pause the execution of the function.

In the first example below:
- We have a doNothing function that does nothing.
- Adding async in front of the doNothing function returns a promise of nothing.
- Whatever is returned inside of this doNothing function will be a promise of
that value.
- Using the async keyword returns that value and resolves it as a promise.

In the second example below:
- Instead of chaining a bunch of callbacks, we can have a promise resolve to
the value of a variable.

*/

// Example four - Basic
async function getFruit(string) {
    const fruits = {
        pineapple: 'Pineapple',
        mango: 'mango',
        avocado: 'avocado'
    }
    // If we did not use async, return a promise that resolves to this value
    // return Promise.resolve(fruits[string]);
    return fruits[string];
}

// Example five - Async & Await 
const makeSmoothie = async() => {
    // Requires the promise result value from getFruit
    // contains synchronous fetching, could be asynchronous
    // Two awaits are only needed if the second value is dependent on the first.
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a, b];
}

// Example six - Refactored code of example five, using promises
const makeSmoothv2 = () => {
    let a; // We're storing the first result from getFruit.
    return getFruit('pineapple');
    .then(v => {
        v = a;  // a contains 'pineapple'
        return getFruit('strawberry');
    })
    .then(v => v + a);  // v contains 'strawberry'
}
/**************************************************************
* Async/Await 5:43 ~ 8:17
***************************************************************/




/**************************************************************
* Using promise.all() 8:18 ~ 9:07
***************************************************************/
/*
The point of the event loop is to avoid blocking code.

An async function always returns a promise.
Instead of waiting for one after the other, we can add both promises
to promise.all().

We don't want to pause functions unnecessarily 

Instead of awaiting many individual promises, we can add all the promises to
an array and await once with promise.all().
*/

// Example seven - Refactored code of example five, using promise.all() method
const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    // Using Promise.all() tells the promises in the array to run at the same time.
    // The resolved values will be at that index.
    return Promise.all([a, b]);
}
makeSmoothie().then(log)
/**************************************************************
* Using promise.all() 8:18 ~ 9:07
***************************************************************/




/**************************************************************
* try...catch Statements 9:08 ~ 9:56
***************************************************************/
/*
Instead of adding a .catch() callback to a promise chain, 
we can use try...catch statements.

try...catch statements offer flexibility when handling errors that might occur
across multiple promises.

Logging the error or returning a value dictates the control flow for the consumer.
    - Returning a value is basically ignoring the error and providing a replacement
    value.
        - Instead of the error, they'll get a result value.

Throwing an error in the catch block breaks the consumer's promise chain &
be handled by their catch callback. 
*/

// Example eight - throwing an error in a try...catch statement
const badSmoothie = async() => {

    try {
        const a = await getFruit('pineapple');
        const b = await getFruit('strawberry');
        const smoothie = await Promise.all([a, b]);
        
        throw 'broke um';       // Throws intentional error
    }

    catch(error) {              // Catches intentional error
        console.error(error);   // Logs intentional error or
        // return 'All g';         // Return value (basically ignores error)
        throw 'broke um again'; // Throws intentional error in catch block
    }
}
makeSmoothie().then(log)
/**************************************************************
* try...catch Statements 9:08 ~ 9:56
***************************************************************/




/**************************************************************
* Using iteration methods or loops with Async/Await 9:57 ~ 
***************************************************************/
/*
Imagine we have a string of IDs & we want to retrieve these IDS from a database.
We can use the map() method & convert them to an array of promises then
resolve them all at the same time using Promise.all()

Be careful of using async/await in a map or forEach loop. It won't pause
the function in this context.

Normally we would expect this loop to stop when we call `await getFruit`
    - Does not happen in this case
        - Promises are ran at the same time.

To have every iteration in a loop await a promise use a for loop.

We can use a async function and write a for loop inside the async function,
and use the await keyword inside the for loop.
    - The behavior now pauses each iteration until the promise is resolved.
    - We can use the await keyword directly in a for loop.

When we want to run everything at the same time, we can use the await keyword
directly in a for loop.
    - If we have a promise that resolves/results? to an array, we can use the 
    await keyword directly in the loop.

*/
const tick = Date.now();
function log(string) {
    console.log(`${string} \n Elapsed: ${Date.now() - tick}`);
}
async function getFruit(string) {
    const fruits = {
        pineapple: 'pineapple',
        mango: 'mango',
        avocado: 'avocado'
    }
    return fruits[string];
}
// example Nine - for of loop with await keyword
const fruits = ['pineapple', 'mango' ,'strawberry'];
const fruitLoop = async() => {
    for (const f of fruits) {
        const emoji = await getFruit(f);
        log(emoji);
    }
}
fruitLoop();

// Example ten - using await directly after for loop
const fruitLoop = async() => {
    for await (const f of fruits) {
        log(f);
    }
}
/**************************************************************
* Using iteration methods or loops with Async/Await 9:57 ~ 11:10
***************************************************************/




/**************************************************************
* Await keyword in a conditional 11:11 ~ 11:35
***************************************************************/
/*
The await keyword can be used in conditionals.
The left side of the conditional will await the result value from a promise.
We can compare that value to see if it evaluates to another value.
*/

// Example eleven - Using await keyword in a conditional
const fruitInspection = async() => {
    if (await getFruit('pineapple') === 'pineapple') {
        console.log('wooohooo');    // Output -> wooohooo
    }
}
fruitInspection();
/**************************************************************
* Await keyword in a conditional 11:11 ~ 11:35
***************************************************************/