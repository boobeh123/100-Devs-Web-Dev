## Summary:
The concepts covered in this reading:

* Promise chaining:
    * Every call to a .then() handler returns a new promise.
        * When a handler returns a value, it becomes the result of that promise.
    * If a .than handler returns a promise, the rest of the chain waits until it settles.
        * When it does, its result/error is passed further.
* Returning promises:
    * Allows us to build chains of asynchronous actions.
    * A handler used in .then may create & return a promise.
        * Further handlers waits for Promises to settle then get its result.
* Thenable objects:
    * An arbitrary object that has a .then method.
        * Treated the same as a promise.
    * Allows integration of custom objects with promise chains, without having to inherit from Promise.
    * 3rd-party libraries may implement "Promise-compatiable" objects.
* Fetch():
    * In frontend programming, promises are often used for network requests.

## Lessons learned:
Breaking down the program into resuable functions in the bigger example: fetch section, was tough. 

Having a fetch program that reads top to bottom is something I am used to and am able to read easily.

Ideally it is better for a function to do one thing. It makes sense and allows the code to be reusable. 

At the current moment, it is difficult to read because it seems like there are a lot of jumping around / things to track. 
I may need to revisit this for a better understanding.

## Source:
https://javascript.info/promise-chaining