## Summary:
The concepts covered in this video:

* The Event Loop:
    * Avoid blocking code.
    * The browser & Node.js are always running a single-threaded event loop to run code.
    * The event loop runs all synchronous code and may also queue up
    asynchronous events to be called back later during the first iteration.
    * Macro tasks are executed on the next event loop.
    * Micro tasks are calledback before the start of the next event loop.
* Promise-based API:
    * Fetch is a browser-based API, also available on the Node fetch library.
    * Fetch allows us to get data from an HTTP endpoint & have the original promise returned as the response.
    * Fetching data from a server is always going to be asynchronous.
* Error handling:
    * All Promise-related errors can be caught with a single .catch().
* Async / Await:
    * Syntactic sugar to make asynchronous code read like synchronous code.
    * Using promise.all()
* try...catch Statements:
    * Offers flexibility when handling errors that might occur across multiple promises.
    * Throwing an error in the catch block breaks the consumer's promise chain & handled by their catch callback.
* Iteration methods & Loops with Async/Await:
    * Using map or forEach with async/await will not pause functions in this context.
    * To have every iteration in a loop await a promise, we can use a for loop.
* Await keyword in a conditional:
    * The conditional will await the result value from a promise.
        * We can compare that value to another value.

## Lessons learned:
This video showed me how to create a log function that displays the amount of time (in milliseconds) it takes for synchronous and asynchronous to execute.

I learned that async/await can be used with a for loop / for of loop to have each iteration await for a promise. I also learned that the await keyword can be used in a conditional. 

The pacing of this video made it difficult to really "learn" anything. Every sentence was a new concept. In my opinion, this is not a great resource for beginners.

## Source:
https://www.youtube.com/watch?v=vn3tm0quoqE

additional resources:
To understand anything async, I need to understand the event loop.
    * To better understand the event loop:
        * Jake Archibald: In The Loop - setTimeout, micro tasks, requestAnimationFrame, requestIdleCallback, …
        * Watch https://www.youtube.com/watch?v=cCOL7MC4Pl0 
    * To better understand Callbacks:
        * Intro to Async Web Dev - Part 1: Callbacks
        * Watch https://www.youtube.com/watch?v=ueOG5uk7zo8