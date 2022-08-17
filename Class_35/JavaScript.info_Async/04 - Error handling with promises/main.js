/**************************************************************
* Error handling with promises
***************************************************************/
/*
Promise chains are great at error handling. 
When a promise rejects, the control jumps to the closest rejection handler. 

The easiest way to catch all errors is to append .catch to the end of chain.
*/

// Example of .catch error handling - malformed URL 
fetch('https://no-such-server.lolol')
.then(response => response.json())
.catch(err => {
    alert(err);         // Output -> TypeError: Failed to fetch
    alert(err.message); // Output -> Failed to fetch
})           
/**************************************************************
* Error handling with promises
***************************************************************/




/**************************************************************
* Implicit try…catch
***************************************************************/
/*
The code of a promise executor and promise handlers has an 
"invisible try..catch" around it. 
If an exception happens, it gets caught and treated as a rejection.

The "invisible try..catch" around the executor automatically catches 
the error and turns it into rejected promise.
This happens not only in the executor function, but in its handlers as well.

The final .catch not only catches explicit rejections, 
but also accidental errors in the handlers above.
*/

// Throwing an error - Works exactly the same as code directly below
new Promise((resolve, reject) => {
    throw new Error("Whoops!"); // Throws an Error.message
})
.catch(alert);                  // Output -> Whoops!

// Rejecting a Promise - Works exactly the same as code above
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));   // Rejects Promise with an Error/Error.message
})
.catch(alert);                      // Output -> Whoops!

// Throwing an error in a handler
new Promise((resolve, reject) => {
    resolve("hello world");         // Immediately resolves Promise with a string result
})
.then((result) => {                 // String result is passed into handler and throws an error
    throw new Error("Whoops!");
})
.catch(alert);                      // Error is passed into handler and alerts error.message

// An error occuring in a handler
new Promise((resolve, reject) => {
    resolve("Hello world");         // Immediately resolves Promise with a string result
})
.then((result) => {
    lolol();                        // Function does not exist
})
.catch(alert);                      // ReferenceError: lolol is not defined
/**************************************************************
* Implicit try…catch
***************************************************************/




/**************************************************************
* Rethrowing
***************************************************************/
/*
We may have as many .then handlers as we want, 
and then use a single .catch at the end to handle errors in all of them.

In a regular try..catch we can analyze the error and maybe rethrow it 
if it can’t be handled. 

The same thing is possible for promises. If we throw inside .catch, 
then the control goes to the next closest error handler. 
And if we handle the error and finish normally, 
then it continues to the next closest successful .then handler.
*/

// Executing .catch() then .then()
new Promise((resolve, reject) => {
    throw new Error("Whoops");
})
.catch(function(error) {
    alert("The error is handled");
})
.then(() => alert("Next successful handler runs"));

// Throwing an error inside of a .catch() handler
new Promise((resolve, reject) => {
    throw new Error("Whoops");          // Throws an error
})
.catch(function(error) {                // This .catch() handler can only handle URI errors
    if (error instanceof URIError) {
    } else {
        alert("Unable to handle.");     // Output -> "Unable to handle."
        throw error;                    // Throws an error goes to 2nd .catch()
    }
})
.then(function() {                      // This .then() handler doesn't run
})
.catch(error => {                       // Output -> ...occurred: Error: Whoops
    alert(`The unknown error has occurred: ${error}`);
});
/**************************************************************
* Rethrowing
***************************************************************/




/**************************************************************
* Unhandled rejections
***************************************************************/
/*
What happens when an error is not handled? 

In case of an error, the promise becomes rejected, 
and the execution should jump to the closest rejection handler. 
But there is none. 
So the error gets “stuck”. There’s no code to handle it.

The JavaScript engine tracks such rejections and generates a global error.
In the browser we can catch such errors using the event unhandledrejection
The event is the part of the HTML standard.

If an error occurs, and there’s no .catch, 
the unhandledrejection handler triggers, 
and gets the event object with the information about the error.
*/
// Error occurring without a .catch() handler
new Promise(function() {
    lololFunction();        // Error, function does not exist
})
.then(() => {               // Error is "stuck", no code to handle it
})

// Using event unhandledrejection
window.addEventListener('unhandledrejection', function(event) {
    console.log(event);     // Out -> PromiseRejectionEvent object
    alert(event.promise);   // Output -> [object Promise] -> The promise that generated the error
    alert(event.reason);    // Output -> Error: Whoops    -> The unhandled error object
});
new Promise(function() {
    throw new Error("Whoops");
});
/**************************************************************
* Unhandled rejections
***************************************************************/




/**************************************************************
* Summary
***************************************************************/
/*
.catch handles errors in promises of all kinds: 
be it a reject() call, or an error thrown in a handler.
.then also catches errors in the same manner, 
if given the second argument (which is the error handler).

We should place .catch exactly in places where we want to handle errors 
and know how to handle them. 
The handler should analyze errors (custom error classes help) 
and rethrow unknown ones (maybe they are programming mistakes).

It’s ok not to use .catch at all, 
if there’s no way to recover from an error.

In any case we should have the unhandledrejection event handler 
(for browsers, and analogs for other environments) 
to track unhandled errors and inform the user (and probably our server) 
about them, so that our app never “just dies”.
*/
/**************************************************************
* Summary
***************************************************************/




/**************************************************************
* TASKS: Error in setTimeout
***************************************************************/
/*
Question:   What do you think? Will the .catch trigger? Explain your answer.

My Answer:  Before running the code, I thought that the error.message would be alerted after one second.
            After running the code, the console displayed an uncaught Error. The .catch() handler did not trigger.
            Removing the setTimeout() method passes in the error into the .catch() handler & triggers the alert.
            The program tries to catch the error before the error is thrown.

Correct 
answer:     no, it won’t: As said in the chapter, there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.
            But here the error is generated not while the executor is running, but later. So the promise can’t handle it.

*/

// Example from tasks
new Promise(function(resolve, reject) {
    setTimeout(() => {                  // Calls setTimeout() method
        throw new Error("Whoops!");     // Throws an Error with a message of Whoops!
    }, 1000);                           // Passes Promise to the .catch() handler after 1 second.
}).catch(alert);                        // Alerts the error -> Output -> Whoops!)
/**************************************************************
* TASKS: Error in setTimeout
***************************************************************/