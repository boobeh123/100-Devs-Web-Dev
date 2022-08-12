## Summary:
The concepts covered in this reading:

* Callback-based asynchronous programming:
    * A function that does something asynchronously, should provide a callback argument where we put the function to run after it’s complete.
* Nesting callbacks:
    * Sequentially calling functions / loading scripts.
        * Nesting a function call inside the first callback.
    * Fine for a few action, but not good for many.
* Handling errors:
    * Error-first callback:
        * The first argument of the callback is reserved for an error if it occurs. 
        * The second argument are for the successful result. 
        * The single callback function is used both for reporting errors & passing back results.
* “Pyramid of Doom” / “Callback hell”:
    * Can be a viable approach to asynchronous programming for a few nested calls.
        * Isn't a good way of coding.
        * Works but having multiple nested calls makes the code difficult to read & manage.
    * Can be alleviated by creating a function for every action.
        * These functions will not be reused outside of this action chain.
    * Can be alleviate by using Promises.


## Lessons learned:
This chapter covers the basic information that one would want to know about callbacks. 
It demonstrates how callbacks can be used for asynchronous programming. 
It contains examples of nesting callbacks to sequentially load scripts. 
It taught me how callbacks handled errors using a callback argument & an anonymous function with a conditional.
What I found interesting is how standalone functions were created to alleviate the problem of "callback hell"-- I haven't seen this approach to solve this.

## Source:
https://javascript.info/callbacks