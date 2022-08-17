## Summary:
The concepts covered in this reading:

* Error handling with Promises:
    * When a promise rejects, the control jumps to the closest rejection handler. 
        * Append the .catch() handler at the end of a promise chain.
* Implicit try...catch:
    * The executor automatically catches errors and turns it into a rejected promise.
    * .catch() handles explicit rejections & accidental errors for the handlers above it.
* Rethrowing:
    * It is possible to throw an error in a .catch() handler and continue to the next closest-successful .then() handler.
* Unhandled rejections:
    * The JavaScript engine tracks rejections & generates a global error.
    * The browser can catch such errors using the `event` `unhandledrejection`
        * The `event` is the part of the HTML standard.
    * If an error occurs, and there’s no .catch handler:
        * The unhandledrejection handler triggers:
            * Gets the event object with the information about the error.

## Lessons learned:
Throwing an error works exactly the same as rejecting a Promise. The rethrowing section showed me that an error can be first handled with .catch() and continue to the next .then() handler. The same section also displays that multiple .catch() handlers may be used. 
When a .catch() handler is not used and an error occurs, I can use an event listener to listen for unhandledrejections and get more information about the error.

## Source:
https://javascript.info/promise-error-handling