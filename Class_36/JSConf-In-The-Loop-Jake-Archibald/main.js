/**************************************************************
* 
***************************************************************/
/*
* JavaScript happens on the main thread.
    * It's where rendering happens.
    * It's where the DOM lives.
    * If something on the main thread takes a long time, it blocks 
    rendering & interaction.
    * These threads are used in:
        * Networking 
        * Encoding
        * Crypto
        * Monitoring inputs

* Event loop - The event loop spins around in a CPU efficient manner.
    * The event loop takes a detour when a task is queued.
        * The first detour is where tasks happen.
            * Each task is a separate to-do item in the task queue.
        * The second detour is where render steps happen.
    
* Render Steps - This is what the browser uses to update what's on the screen.
    * The second detour in an event loop:
        * Rendering steps:
            * Rendering steps happen at the start of each frame.
                * This includes style calculation, layout, & paint
            
* RequestAnimationFrame - Happens as part of the render steps
    * Rendering can happen in between tasks.
    * Comes before processing CSS & before painting

* Tasks appear anywhere, 
    * The event loop ensures that they happen in the right order
        * In terms of timing within a frame, there is no order at all
* setTimeout was not designed for animation.
    * Due to inaccuracies, drift can occur.
        * In one frame, nothing is happening
        * In the next frame, twice the amount of work is happening.
    * If a task runs long, it can end up moving the render steps around 
    * Tasks can't avoided completely, click events are delivered in a task & requires a response ASAP

CHROME ONLY - The web animation API is the best way to deal with this.
Edge & Safari puts RequestAnimationFrame after Style calculation, after layout, & after paint in the render steps process.
    * These two browsers render before the callback & the user will see something.
        * The actual changes won't be seen until the next frame.
            * This adds a delay to things appearing on the screen.

* Microtasks
    * Associated with Promises.
    * Browsers wanted to give developers a way to monitor DOM changes
        * The W3C gave developers mutation events
            * DOM modifications & mutation events with simple code can generate several events
                * Mutation observers become the answer to this problem.
                    * Created a new queue called micro tasks
    * Microtasks happen every turn of the event loop or after a task.
        * There is a single place on the event loop where microtasks happen.
        * Also happen whenever JavaScript finishes executing.
            * When the stack that had tasks in it, to no tasks.
    * Microtasks can occur halfway through a task 
    * Microtasks can occur in the render steps as part of requestAnimationFrames
    * Microtasks can occur anywhere JavaScript can run.
    * Behave differently depending on the JavaScript stack.

* Promise callbacks are asynchronous.
    * Happens after synchronously executing code.
    * Doesn't mean it must yield to rendering
    * Doesn't mean it must yield to any part of the event loop

* Three types of queues:
    * Tasks
        * Takes one task and one task only.
        * If another task is queued, it goes to the end of the queue.
    * Animation Callbacks
        * Happens until completion excepts for tasks that were queued 
        while processing animation callbacks.
    * Microtasks
        * Processed to completion including any additional queued items.
            * If tasks are being added to the queue as quickly as it's being processed,
            then microtasks will be processed forever.
            * The event loop cannot continue until the queue is empty and will block rendering.

Explanation of 2nd code snippet below:
    * User clicks on a button & the event loop picks up the task in the 1st detour.
        * This is where the initial transform & transition is set. 
    * Queue the AnimationFrame & the event loop goes to the 2nd detour
        * This is where the final transform value is set.
            * The browser doesn't think about CSS until it reaches style calculation.
                * Misses the 1st value (1000px)

Explanation of the hacky alternative below:
    * Using getComputedStyle to access a property on it.
    * Forces browser to perform style calculation earlier than normal.
        * Makes the browser take note of all the things you set up until that point.
        * Forces the browser to do a lot of extra style work.

Explanation of the quiz if user clicks button
    * The first listener executes and is in the stack
    * The first microtask is queued
    * The first console log is printed
    * The first listener is done and is removed from the stack
    * The first microtask is moved to the stack
    * The first promise is resolved and prints
    * The same process above for second 

Explanation of quiz if JavaScript clicks button
    * The script is in the stack 
    * The first listener is in the stack
    * The first microtask is queued
    * The first console log is printed
    * The script is still in the stack and the stack is not empty
    * The second listener is in the stack 
    * The second microtask is queued
    * The second console log is printed
    * Both listeners and script is done
    * The first microtask is moved to the stack
    * The first promise is resolved and prints
    * The second microtask is moved to the stack
    * The second promise is resolved and prints
    
If we have a promise that represents the next click of a link 
Can someone use that promise & call event.preventDefault
To process a link click for a link, run the following steps:
* Create an event object
* For every listener we have, invoke the listener with the event object
* If the event object's canceled flag is set
    * Not going to follow the hyper link
* If the event object's canceled flag in unset
    * We will follow the hyper link
* When we call event.preventDefault, it sets the canceled flag on the event object


*/

// * Note from me: These code snippets will cause an error. They illustrate what we would like to do, but is not meant to run.

// 1st Attempt to animate a box from a position of 1000 to 500 
button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';
    box.style.transform = 'translateX(500px)'; // (actually animates 0 ~ 500)
})

// 2nd Attempt to animate a box from a position of 1000 to 500 
button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';
    
    requestAnimationFrame(() => {
        box.style.transform = 'translateX(500px)'; // (still animates 0 ~ 500)
    });
});

// 3rd Attempt to animate a box from a position of 1000 to 500
button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            box.style.transform = 'translateX(500px)'; // (animates from 1000 to 500)
        });
    });
});

// Hacky alternative using getComputedStyle to access a property on it 
button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';
    getComputedStyle(box).transform;
    box.style.transform = 'translateX(500px)';
});

// Quiz - Both event listeners are listening for clicks on the same button.
// What happens on click? In what order are things logged?
document.querySelector('button').addEventListener('click', () => {
    Promise.resolve.then(() => console.log('microtask two'));
    console.log('listener two');
});
document.querySelector('button').addEventListener('click', () => {
    Promise.resolve.then(() => console.log('microtask two'));
    console.log('listener two');
});

// Adding observables to the DOM & how they integrate w/ promises
const nextClick = new Promise(resolve => {
    link.addEventListener('click', resolve, { once: true });
});

nextClick.then(event => {
    event.preventDefault();
    // Handle event
});
/**************************************************************
* 
***************************************************************/