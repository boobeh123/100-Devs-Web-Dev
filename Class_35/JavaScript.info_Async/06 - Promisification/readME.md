## Summary:
The concepts covered in this reading:

* Promisification: The conversion of a function that accepts a callback into a function that returns a promise.
    * Not a total replacement for callbacks.
    * Meant for functions that call the callback once.

## Lessons learned:
This chapter shows how to convert a function that uses callbacks into a function that uses promises.
It does this by wrapping the original function and returning a wrapper function that returns a promise.

The examples with the helper & advanced helper function lost me and I did my best to understand what was going on.

## Source:
https://javascript.info/promisify