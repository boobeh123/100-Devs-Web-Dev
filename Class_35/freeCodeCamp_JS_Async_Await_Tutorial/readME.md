## Summary:
The concepts covered in this reading:

* Synchronous Systems:
    * Tasks are completed one by one-- "in the same lane"
    * JavaScript is synchronous (single-threaded) by default.
* Asynchronous Systems:
    * Tasks are completed at their own pace-- "in different lanes"
        * Does many tasks at the same time.
* Callbacks:
    * A function nested inside another function as an argument.
    * The order of steps & timing are important
        * If a previous step is not completed, we cannot move forward.
* setTimeout() function:
    * Helps with establishing timing.
    * Can force the execution time to be longer.
        * Can be used to keep the order of operation.
    * Uses a callback by taking a function as an argument.
* Promises:
    * Invented to better handle tasks and solve "callback hell".
    * Promises cycle:
        * Promises are made & in a state of pending.
        * Promises can be rejected.
            * Allows the .catch() handler/method to be used.
        * Promises can be resolved.
            * Allows the .then() handler/method to be used.
* .finally() handler:
    * Action happens when promise completes, regardless of being resolved or rejected.
* Promise chaining:
    * Defines what we need to do when the first task is complete.
        * The .then() handler returns a promise when the original promise is resolved.
            * Ensures every action is executed in the right order.
* Error handling:
    * Requires an understanding of the promise cycle.
    * The catch() handler returns a promise, but only when the original promise is rejected.
    * One .catch() handles every promise-related error above it.
* Async/Await:
    * Helps keep our code clean and easy-to-read.
    * May use the .then(), .catch(), .finally() handlers.
    * Requires an understanding of the try/catch & await keywords.
* try & catch keywords:
    * Try is used to run our code.
    * Catch is used to catch our errors.
* await keyword:
    * Allows JavaScript to wait until a promise settles and returns the result.

## Lessons learned:
I have multiple resources to learn about callbacks, promises, and async/await. I attempted to do a little of each resource and was left mostly confused.

This reading was not assigned and it does the best (imo) at being an introduction to these concepts. I believe it is necessary to learn callbacks & promises before async/await. 

## Source:
https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/