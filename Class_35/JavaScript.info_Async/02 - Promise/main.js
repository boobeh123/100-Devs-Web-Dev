/**************************************************************
* Promise
***************************************************************/
/*
Imagine that you’re a singer, and fans ask about your upcoming song.
The singer would be:
A “producing code” that loads the data over a network and takes time. 
The fans would be:
A “consuming code” that wants the result of the “producing code” once it’s ready. 

A promise is a special JavaScript object that links the “producing code” and
the “consuming code” together. 

In terms of this analogy: 
The “producing code” takes the time it needs to produce the promised result, 
and the “promise” makes that result available to all of the “consuming code” 
when it’s ready.
The analogy isn’t terribly accurate, but it’s fine to begin with.



The function passed to new Promise is called the executor. 
When new Promise is created, the executor runs automatically. 

Its arguments resolve and reject are callbacks provided by JavaScript itself.
These functions are pre-defined by the JavaScript engine, so we don’t need to create them. 

When the executor obtains the result, it should call one of these callbacks:
resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.

The promise object returned by the new Promise constructor has these internal 
properties:
state — initially "pending", then changes to either "fulfilled" 
when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) 
called or error when reject(error) is called.

A promise that is either resolved or rejected is called “settled”, 
as opposed to an initially “pending” promise.

There can be only a single result or an error.
The executor should call only one resolve or one reject. 
Any state change is final.
All further calls of resolve and reject are ignored:
Also, resolve/reject expect only one argument (or none) and will ignore 
additional arguments.

It is recommended to use Error objects (or objects that inherit from Error). 

An executor usually does something asynchronously and calls resolve/reject 
after some time, but it doesn’t have to. 

The state and result are internal
The properties state and result of the Promise object are internal. 
We can’t directly access them. 
*/

// Constructor syntax
let promise = new Promise(function(resolve, reject) {
    // Executor (contains “producing code”, "singer")
});

// A fulfilled/resolved Promise
let promise = new Promise(function(resolve, reject) {
    // Function is executed automatically when the promise is constructed.
    // After 2 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 2000);
});

// A rejected Promise
let promise = new Promise(function(resolve, reject) {
    // After 2 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Hello world")), 2000);
});

// Executor only calls one resolve or one reject
let promise = new Promise(function(resolve, reject) {
    resolve("Done");                        // Fulfills promise
    reject(new Error("Not done"));          // Ignores reject() call
    setTimeout(() => resolve("Not done"));  // Ignores resolve() call
});

// Resolving or Rejecting immediately
let promise = new Promise(function(resolve, reject) {
    resolve(123);
})
/**************************************************************
* Promise
***************************************************************/




/**************************************************************
* Consumers: .then(), .catch()
***************************************************************/
/*
A Promise object serves as a link between the executor and the 
consuming functions which will receive the result or error. 
Consuming functions can be registered using the methods: .then() and .catch()

The first argument of .then is a function 
that runs when the promise is resolved and receives the result.
The second argument of .then is a function 
that runs when the promise is rejected and receives the error.

If we’re interested only in resolved Promises, then we only provide one 
function argument to .then.
If we’re interested only in rejected Promises, then we can use null 
as the first argument: .then(null, errorHandlingFunction). 

Or we can use .catch().
The .catch(error) is a complete analog of .then(null, error), it’s shorthand.
*/

// .then() syntax
promise.then(
    function(result) {/*Handle successful result*/}
    function(error) {/*Handle an error*/}
);

// .then() with resolved Promise
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Done"), 2000);
});
promise.then(
    result => alert(result),    // Alerts "Done" after 2 seconds
    error => alert(error)       // Does not run
);

// .then() with rejected Promise
let promse = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Oh no")), 2000);
});
promise.then(
    result => alert(result),    // Does not run
    result => alert(error)      // Alerts "Error: Oh no" after 2 seconds
);

// .catch() with rejected Promise
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("O no")), 2000);
});
promise.catch(alert);
/**************************************************************
* Consumers: .then(), .catch()
***************************************************************/




/**************************************************************
* Cleanup: .finally()
***************************************************************/
/*
Just like there’s a finally clause in a regular try {...} catch {...}, 
there’s finally in promises.

The call .finally(f) is similar to .then(f, f) in the sense that 
f runs always, when the promise is settled.
Note that finally(f) isn’t exactly an alias of then(f,f) though.

Using finally sets up a handler for performing cleanup/finalizing actions
after the previous operations are complete.
(E.g. stopping loading indicators, closing no longer needed connections)

A finally handler has no arguments. 
In finally we don’t know whether the promise is successful or not,
our task is usually to perform “general” finalizing procedures.
Finally is not meant to process a promise result. 

A finally handler also shouldn’t return anything. If it does, 
the returned value is silently ignored.
The only exception to this rule is when a finally handler throws an error. 
Then this error goes to the next handler, instead of any previous outcome.

Promises are more flexible. We can add handlers any time: 
if the result is already there, they just execute.
*/

// Result passed through finally to then
new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);       // Promise is resolved
})
    .finally(() => alert("Promise ready"))          // Triggers first (when promise is settled)
    .then(result => alert(result));                 // Triggers second (alerts string)

// Error passed through finally to catch
new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Promise ready"))          // Triggers first
    .catch(err => alert(err));                      // Triggers second (alerts error)

// Settled Promise upon creation
let promise = new Promise(resolve => resolve("Done"));
promise.then(alert);                                // Done (shows up right now)
/**************************************************************
* Cleanup: .finally()
***************************************************************/




/**************************************************************
* Example: loadScript
***************************************************************/
/*

Promises can help us write asynchronous code.

A promise-based loadScript function will not require a callback. 
It will create & return a Promise object that resolves when the loading is done. 
We can then add handlers to it using .then().

Promises:
We can call .then on a Promise as many times as we want. 

Versus

Callbacks:
We must have a callback function at our disposal when calling loadScript(script, callback). 
We must know what to do with the result before loadScript is called.
There can be only one callback.

*/

// Callback-based code of the loadScript function
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

// Promise-based code of loadScript function (refactored example of code above)
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
  script => alert(`${script.src} is loaded!`),      // Output -> "... is loaded!"
  error => alert(`Error: ${error.message}`)
);
promise.then(script => alert('Another handler...'));// Output -> "Another handler..."
/**************************************************************
* Example: loadScript
***************************************************************/




/**************************************************************
* TASK: Re-resolve a promise?
***************************************************************/
/*
Q: What’s the output of the code below?

A:  Running this code alerts the number 1. 
    The executor should only call one resolve() or reject().
    The first resolve() call contains a result of a number (1). Any further resolve() calls are ignored.
*/

// A variable containing a Promise Constructor
let promise = new Promise(function(resolve, reject) {
    // Immediately calling the resolve() function. 
    resolve(1);                         // Result is a number.
    // setTimeout function calling the resolve() function after 1 second.
    setTimeout(() => resolve(2), 1000); // Result is a number.
});
promise.then(alert);                    // Alerts the result
/**************************************************************
* TASK: Re-resolve a promise?
***************************************************************/




/**************************************************************
* TASK: Delay with a promise
***************************************************************/
/*
The built-in function setTimeout uses callbacks. 
Create a promise-based alternative.

The function delay(ms) should return a promise. 
That promise should resolve after ms milliseconds, 
so that we can add .then to it, like this:

P: This function takes in one parameter, it is a number. 
R: This function returns a Promise object.
E: 
If we are given:    should return: 
3000                Settled promise after 3 seconds.
P: 
// We want to return a promise object.
    // I create a new promise using the constructor syntax.
    // I use the setTimeout method to callback the resolve function.
        // I pass in the ms argument as for setTimeout's parameter.
    // I call the delay function and pass in 3000 for the number parameter.
        // I attach a .then() handler that alerts a string after 3 seconds.
*/

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    })
}
delay(3000).then(() => alert('runs after 3 seconds'));
/**************************************************************
* TASK: Delay with a promise
***************************************************************/




/**************************************************************
* TASK: Animated circle with a promise
***************************************************************/
/*
Rewrite the showCircle function 
in the solution of the task Animated circle with callback 
so that it returns a promise instead of accepting a callback.

Note from me: Disregard the first and second example. 
I went back to previous examples to better understand the 
foundation of the showCircle function & showCircle function w/ callback.
*/
// ========================================================================================================================================= 
// Base function animatedCircle 
// ========================================================================================================================================= 
function showCircle(circleWidth, circleHeight, radius) {
    const div = document.createElement('div');  // Creates <div> elements
    div.style.width = 0;                        // Setting width property on created <div> elements
    div.style.height = 0;                       // Setting height property on created <div> elements
    div.className = 'circle';                   // Applies the .circle class -> Circle class contains position property
    div.style.left = cx + 'px';                 // Setting left property on created <div> elements
    div.style.top = cy + 'px';                  // Setting top property on created <div> elements
    document.body.append(div);                  // Appending a createdElement to the document body
    setTimeout(() => {
        div.style.width = radius * 2 + 'px';    // Overwrites width property-value from 0 to the result of the expression
        div.style.height = radius * 2 + 'px';   // Overwrites height property-value from 0 to the result of the exprssion
    }, 250);                                    // Delay of quarter of a second.
}
/*
HTML
<button onclick="showCircle(150, 150, 100)">Click me</button>
CSS 
.circle {
  transition-property: width, height;
  transition-duration: 2s;
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  background-color: red;
  border-radius: 50%;
} 
*/
// ========================================================================================================================================= 
// Base function animatedCircle 
// ========================================================================================================================================= 
// ========================================================================================================================================= 
// Base function animatedCircle with callback
// ========================================================================================================================================= 
function go() {                                                     // Function executes on click
    showCircle(150, 150, 100, div => {                              // Calls base function showCircle 
        div.classList.add('message-ball');                          // Adds .message-ball class
        div.append("Hello, world!");                                // Appends text after showCircle completes
    });
}
function showCircle(circleWidth, circleHeight, radius, callback) {  // Callback parameter added
    const div = document.createElement('div');                      // Creates <div> elements
    div.style.width = 0;                                            // Setting width property on created <div> elements
    div.style.height = 0;                                           // Setting height property on created <div> elements
    div.className = 'circle';                                       // Applies the .circle class -> Circle class contains position property
    div.style.left = circleWidth + 'px';                            // Setting left property on created <div> elements
    div.style.top = circleHeight + 'px';                            // Setting top property on created <div> elements
    document.body.append(div);                                      // Appending a createdElement to the document body
    setTimeout(() => {
    div.style.width = radius * 2 + 'px';                            // Overwrites width property-value from 0 to the result of the expression
    div.style.height = radius * 2 + 'px';                           // Overwrites height property-value from 0 to the result of the exprssion
    div.addEventListener('transitionend', function handler() {      // Listening for a transition event, on event run anonymous handler() function
        div.removeEventListener('transitionend', handler);          // Removes the eventlistener & anonymous handler function??
        callback(div);                                              // Callsback the div variable??
    });
  }, 250);                                                          // Delay of quarter of a second.
}
/*
HTML
  <button onclick="go()">Answer for base+callback</button>
CSS
    .message-ball {
      font-size: 20px;
      line-height: 200px;
      text-align: center;
    }
    .circle {
      transition-property: width, height;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
*/
// ========================================================================================================================================= 
// Base function animatedCircle with callback
// =========================================================================================================================================
// ========================================================================================================================================= 
// Base function animatedCircle with Promises
// =========================================================================================================================================

function go() {                                 // go() function executes on click
    showCircle(150, 150, 100).then(div => {     // Calls showCircle function & passes parameters, waits for circle to complete, THEN ->
        div.classList.add('message-ball');      // -> Adds .message-ball class to created div elements
        div.append("Hello world");              // -> Appends a string to created div elements
    })
}

function showCircle(circleWidth, circleHeight, radius) {
    const div = document.createElement('div');  // Creates <div> elements
    div.style.width = 0;                        // Setting width property on created <div> elements
    div.style.height = 0;                       // Setting height property on created <div> elements
    div.className = 'circle';                   // Applies the .circle class -> Circle class contains position property
    div.style.left = circleWidth + 'px';        // Setting left property on created <div> elements
    div.style.top = circleHeight + 'px';        // Setting top property on created <div> elements
    document.body.append(div);                  // Appending a createdElement to the document body
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';        // Overwrites width property-value from 0 to the result of the expression
            div.style.height = radius * 2 + 'px';       // Overwrites height property-value from 0 to the result of the exprssion
            
            div.addEventListener('transitionend', function handler() {  // Listening for a transition event, on event run anonymous handler() function
                div.removeEventListener('transitionend', handler);      // Removes the eventlistener & anonymous handler function??
                resolve(div);                                           // Fulfills the promise with a result of div variable?
            })
    }, 250)                                                             // Delay of quarter of a second.
});
}
/**************************************************************
* TASK: Animated circle with a promise
***************************************************************/