## Summary:
The concepts covered in this reading:

* Promise API: There are 6 static methods in the Promise class.
    * Promise.all:
        * The most common in practice.
        * Waits for all promises to resolve and returns a new promise.
            * Returned promise is an array of their results.
                * The order of the array remains the same.
        * If one promise rejects, the promise returned rejects with that error. All other results are ignored.
    * Promise.allSettled:
        * Waits for all promises to settle and returns their results, regardless of the result.
            * If one promise rejects, it continues to settle the remaining promises.
        * If the browser doesn't support Promise.allSettled, polyfills can be used.
    * Promise.race:
        * Waits for the first settled promise and returns its result or error.
            * All further results or errors are ignored after the first settled promise.
    * Promise.any:
        * Waits for the first resolved promise and gets its result.
            * All further results are ignored after the first resolved promise.
        * If all given promises are rejected, the returned promise is rejected with an AggregateError.
            * This is a special error object that stores all promise errors in its errors property.
    * Promise.resolve: Creates a resolved promise with the result value.
    * Promise.reject: Creates a rejected promise with error.

## Lessons learned:
This chapter teaches deeply about the 6 methods in the Promise class. 

To me, I would need to determine when `Promise.all/.allSettled` would be more suitable for a situation. Same with `Promise.race/.any`.

I learned that `Promise.resolve/.reject` are somewhat obsolete due to `async/await`.

## Source:
https://javascript.info/promise-api