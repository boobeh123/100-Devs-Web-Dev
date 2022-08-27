## Lessons learned:
This video was uploaded in 2014 and covers concepts that were probably new at that time. 

I learned that JavaScript has a callstack & a heap. The call stack is a data structure which records where in the program we are. The heap is where memory allocation happens.

This video has a great visualization of what happens when JavaScript has tasks in its stack and interacts with a web API. The web API can move tasks to the callback queue & the event look can pickup those tasks in the callback queue and pass it to the stack if there are no tasks currently running.

Philip Roberts also brought up the concept of using a "shim AddEventListener". A shim can be used to support an old API in a newer environment or vice versa (new API in an older environment)

If you're interested my notes has more details & is located in the main.js file.

## Source:
https://www.youtube.com/watch?v=8aGhZQkoFbQ