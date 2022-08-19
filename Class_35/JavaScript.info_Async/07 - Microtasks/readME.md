## Summary:
The concepts covered in this reading:

* Promise handling is always asynchronous.
* Microtasks queue:
    * First-in-first-out - Tasks enqueued first are run first.
    * A chain with multiple handlers executes every one of them asynchronously.
    * If the order of execution matters, put the code into the queue with a .then() handler.
* Unhandled rejection: Occurs when a promise error is not handled at the end of the microtask queue.


## Lessons learned:
This chapter briefly covers the behavior of executing code that contains promises & handlers. It shows how handlers are put into a queue and executes tasks only when nothing else is running.

For a deeper understanding of this topic, it is advised to learn more about the event loop and macrotasks.

## Source:
https://javascript.info/microtask-queue