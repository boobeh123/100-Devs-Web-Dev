## Summary:
The concepts covered in this reading:

* Promises:
    * The foundation of asynchronous programming in modern JavaScript.
    * An object returned by an asynchronous function representing the current state of the operation.
    * Promises provide handlers/methods to handle success or failures of the operation.
* Chaining promises:
    * Used when an operation consists of several async functions that require each task to complete before starting the next task.
    * Avoids increasing-levels of indentation when using consecutive asynchronous function calls.
* Catching errors:
    * .catch() is called when any of the asynchronous function calls fails. 
* Promise terminology:
    * Pending - The promise is created & the asynchronous function has not succeeded or failed.
    * Fulfilled - The asynchronous function has succeeded.
        * .then() handler is called at this point.
    * Rejected - The asynchronous function has failed.
        * .catch() handler is called at this point.
    * Settled - Covers both fulfilled & rejected.
        * A promise is fulfilled if it is settled, or is "locked in" to follow the state of another promise.
* Combinind multiple promises:
    * Promise.all() method:
        * Is more performant if the operation doesn't rely on the result of the previous operation.
        * Takes an array of promises and returns a single promise.
            * The promise returned is fulfilled if all promises in the array are fulfilled.
            * The promised returned is rejected if any of the promises in the array are rejected.
    * Promise.any() method:
        * Takes an iterable of Promise objects & returns a single promise that fulfills as soon as any of the promises in the iterable fulfill.
            * We cannot predict which fetch request will complete first.
* The async keyword:
    * A way to work with asynchronous promise-based code.
* The await keyword:
    * Allows code to wait until the promise is settled.
    * Forces asynchronous operations to be completed in series. 
        * This is necessary if the result of the next operation depends on the result of the last one.
* Async functions:
    * Always return a promise.
    * Async functions may use the await keyword before calling a function that returns a promise.
    * Await can only be used inside an async function or in a JavaScript module.
    * Async functions are used where promise chains are used.

## Lessons learned:
A few paragraphs into this reading, you will see:
"In the last article, we talked about the use of callbacks..."

If you don't know about callbacks, you may not know the differences between synchronous & asynchronous systems.
Reading about these concepts will allow you to see the progression of modern JavaScript.
In my opinion, learning these basics helped me understand promises better. 
Understanding promises better helped me understand async/await.

This reading is the first time I have seen the promise.all() & promise.any() methods. I haven't used these methods to build anything outside of the examples. I have some clarity about await being used to keep an "order of operations". Chaining promises and combining multiple promises are two very different operations.

## Source:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises