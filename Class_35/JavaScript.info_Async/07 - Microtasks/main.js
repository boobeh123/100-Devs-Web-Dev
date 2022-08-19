/**************************************************************
* Microtasks
***************************************************************/
/*
Promise handlers .then/.catch/.finally are always asynchronous.

Even when a Promise is immediately resolved, the code on the lines below 
the handlers will still execute before these handlers.
*/

// Example of code below handlers executing first
let promise = Promise.resolve();
promise.then(() => alert("promise done"));  // Output -> 2nd promise done
alert("code finished");                     // Output -> 1st code finished
/**************************************************************
* Microtasks
***************************************************************/




/**************************************************************
* Microtasks queue
***************************************************************/
/*
Asynchronous tasks need proper management. 

The ECMA standard specifies an internal queue PromiseJobs, 
more often referred to as the “microtask queue” (V8 term).

The queue is first-in-first-out: tasks enqueued first are run first.
Execution of a task is initiated only when nothing else is running.

When a promise is ready, its handlers are put into the queue; 
they are not executed yet. 
When the JavaScript engine becomes free from the current code, 
it takes a task from the queue and executes it.

Promise handlers always go through this internal queue.

If there’s a chain with multiple handlers, 
then every one of them is executed asynchronously. 

If the order matters, we can put the code into the queue with .then
*/

// When order matters, add the code into a handler
Promise.resolve()
.then(() => alert("promise done"))  // Output -> 1st promise done
.then(() => alert("code finished"));// Output -> 2nd code finished
/**************************************************************
* Microtasks queue
***************************************************************/




/**************************************************************
* Unhandled rejection
***************************************************************/
/*
An “unhandled rejection” occurs when a promise error is not handled 
at the end of the microtask queue.
*/

// Using .catch() handler to handle errors
let promise = Promise.reject(new Error("Whoops"));
promise.catch(err => alert(err));

// Event listener listening for unhandledrejections
let promise = Promise.reject(new Error("Whoops"));
window.addEventListener('unhandledrejection', event => {
    alert(event.reason)
});

// .catch() handling errors delayed
let promise = Promise.reject(new Error("Whoops"));
setTimeout(() => promise.catch(err => alert('O no')), 1000);    // Output -> 2nd O no
window.addEventListener('unhandledrejection', event => {
    alert(event.reason)                                         // Output -> 1st Whoops
});
/**************************************************************
* Unhandled rejection
***************************************************************/




/**************************************************************
* Summary
***************************************************************/
/*
Promise handling is always asynchronous, 
as all promise actions pass through the internal “promise jobs” queue, 
also called “microtask queue” (V8 term).

So .then/catch/finally handlers are always called after the current code 
is finished.

If we need to guarantee that a piece of code is executed after 
.then/catch/finally, we can add it into a chained .then call.

In most Javascript engines, including browsers and Node.js, 
the concept of microtasks is closely tied with the 
“event loop” and “macrotasks”. 
*/
/**************************************************************
* Summary
***************************************************************/