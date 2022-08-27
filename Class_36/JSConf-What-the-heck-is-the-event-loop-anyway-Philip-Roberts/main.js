/**************************************************************
* Introduction 0:00 ~ 7:19
***************************************************************/
/*
What is JavaScript?
    * JavaScript is a single-threaded, non-blocking synchronous language.
    * JavaScript has a call stack, an event loop, a callback queue, other APIs & a heap.

The heap is where memory allocation happens
The call stack is a data structure which records where in the program we are

Visualizing the call stack:
function foo() {
    throw new Error("no");
}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();

Baz/main calls bar, bar calls foo, foo throws error

Visualizing blowing the stack:
function foo() {
    return foo();
}
foo();

Foo/main calls foo which calls foo which calls foo....
*/
/**************************************************************
* Introduction 0:00 ~ 7:19
***************************************************************/




/**************************************************************
* Blocking 7:20 ~ 10:21
***************************************************************/
/*
What happens when things are slow?

Blocking is code that is slow, network requests are slow, image requests are slow.
Things which are slow & on that stack are what blocking means.

With blocking code, the browser is stuck and cannot do anything until the
requests are complete.

The solution to blocking code is asynchronous callsbacks.
*/
/**************************************************************
* Blocking 7:20 ~ 10:21
***************************************************************/




/**************************************************************
* Asynchronous callsbacks, concurrency, & the event loop 10:22 ~ 26:52
***************************************************************/
/*
The JavaScript runtime can only do one thing.
The JavaScript runtime can use web APIs that are aware of concurrency
The browser is more than just the runtime.
When web APIs are done, it pushes the callback to the callback queue.
The event loops job is to look at the stack and callback queue. 
    * If the stack is empty then it takes the first thing on the queue 
    * & pushes it to the stack.

setTimeout 0 is deferring the execution of code

All the web APIs work the same way. If have an AJAX request to url,
the code running that request does not live in the JavaScript runtime, but in the browser.
The XMLHTTPRequest(XHR) API completes (or not) and pushes the task to the task queue
then picked up by the event loop and moved to the stack.

Shim - a library that transparently intercepts API calls and changes the arguments passed. 
Shims can be used to support an old API in a newer environment or a new API in an older environment.
The older API can be supported by a thin compatible layer on top newer code.

18:35 in the video:
* First console.log prints,
* The "shim addeventlistener" runs
    * Moves to the web api
* The setTimeout API runs
    * Moves the onTimeout() function to the web api. (setTimeout is a macrotask that is executed on the next event loop.)
* The fourth console.log prints
* The onTimeout function moves to the callback queue
    * The stack is empty 
        * The event loop picks up the ontimeout function
            * Moves it to the stack
* The third console.log prints 
* The button which contains the "shim addeventlistener" is clicked 
    * That click triggers the web api
    * Immediately moves the onclick function to callback queue
    * The event loop picksup the onClick function
    * The onClick function moves to the stack.
* The second console.log prints
* Multiple clicks trigger the web api 
    * Moves the onclick functions to the callback queue
    * The event loop picks up the onClick function
    * The onClick function moves to the stack.

setTimeout is not a guaranteed time to execution, it is a minimum time to execution.

Callbacks can be one of things:
    * Callbacks can be any function that another function calls
    * Callbacks can be more explicitly an asynchronous callback
        * One that will get pushed back on the callback queue in the future


The forEach method will sit and block the stack until its complete
The asyncForEach method will queue several callbacks

The render is given a higher priority than callbacks

Don't block the call stack because the browser can't create a nice fluid UI

*/
// Synchronous
[1,2,3].forEach((element) => console.log(element));

// Asynchronous
function asyncForEach(array, cb) {
    array.forEach((element) => {
        setTimeout((cb), 0);
    })
}
asyncForEach([1,2,3], (i) => console.log(i));
/**************************************************************
* Asynchronous callsbacks, concurrency, & the event loop 10:22 ~ 26:52
***************************************************************/