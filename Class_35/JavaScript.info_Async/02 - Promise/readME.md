## Summary:
The concepts covered in this reading:

* Promise constructor:
    * Executor - A function to be executed by the constructor. 
        * Executor runs automatically when new Promise is created.
            * Able to run code asynchronously & calls resolve/reject later.
        * It receives two functions as parameters. 
            * resolve() - Callbacks provided by JavaScript.
                * Expects one argument (or none), ignores additional arguments.
            * reject()  - Callbacks provided by JavaScript.
                * Expects one argument (or none), ignores additional arguments.
        * Should only call one resolve or one reject.
            * All further resolve()/reject() calls are ignored.
    * Internal properties - The Promise object returned by new Promise contains these internal properties.
        * State - Initially pending then changes to settled.
            * Settled - A promise that is either resolved or rejected.
            * Fulfilled - The change in state when resolve() is called.
            * Rejected - The change in state when reject() is called.
        * Result - Initially undefined then changes to value or error.
            * Value is from resolve(value).
            * Error is from reject(error).
        * There can only be a single result or an error.
            * Any state change is final.
* Consuming functions - Receives the result or error.
    * .then():
        * This method accepts up to two arguments.
            * The first argument is a function that runs when a Promise is resolved & receives the result.
            * The second argument is a function that runs when a Promise is rejected & receives the error.
                * Accepts null for the first argument & an error handling function for the second if interested in rejected Promises.
    * .catch():
        * An analog / shorthand of `.then(null, error)`
    * .finally():
        * Always runs when the promise is settled.
        * Finally sets up a handler for performing final actions or cleanup.
        * Finally has no arguments.
        * Finally is not meant to process a promise result.
        * Finally shouldn't return a value & ignores the returned value if finally returns one.
            * The only exception is when a finally handler throws an error.
                * The error goes to the next handler.

## Lessons learned:
Reading this chapter allowed me to learn deeper about Promises. I learned that constructing a Promise has an executor that runs code asynchronously and calls resolve/reject. The executor calls only one resolve or reject. I learned the resolve/reject is a function.

I have a better understanding about the internal properties of a Promise object. A promise has a state property that is initially pending upon promises being created. This state property changes when a promise is settled. A promise also has the result property that is initially set as undefined upon promise creation. This result property changes when an error from reject or a value from resolve is returned.

I learned that the .then() method can handle both resolved & rejected promises. Catch is merely the shorthand of `.then(null, errorHandleFunc)`.

The 3rd task was a tough one for me. I had to dissect the base code & base code w/ callbacks. I still am confused about the add/remove eventlistener in the setTimeout function.

## Source:
https://javascript.info/promise-basics