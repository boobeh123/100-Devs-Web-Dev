## Summary:
The concepts covered in this video:

* Event loop - The event loop spins around in a CPU efficient manner.
    * The event loop takes a detour when a task is queued.
        * The first detour is where tasks happen.
    * The second detour is where render steps happen.
* Render Steps - This is what the browser uses to update what's on the screen.
    * Rendering steps happen at the start of each frame.
        * This includes style calculation, layout, & paint.
* RequestAnimationFrame - Happens as part of the render steps.
    * Comes before processing CSS & before painting.
    * Rendering can happen in between tasks.
    * Edge & Safari puts RequestAnimationFrame after Style calculation, after layout, & after paint in the render steps process.
* setTimeout was not designed for animation.
    * Drift can occur.
* Microtasks
    * Browsers wanted to give developers a way to monitor DOM changes
    * The W3C gave developers mutation events
    * Microtasks can occur halfway through a task 
    * Microtasks can occur in the render steps as part of requestAnimationFrames
    * Behave differently depending on the JavaScript stack.
* Three types of queues:
    * Tasks - Takes one task & if another task is queued, it goes to the end of the queue.
    * Animation callbacks - Happens until completion excepts for tasks that were queued while processing animation callsbacks.
    * Microtasks - Processed to completion including any additional queued tasks.

## Lessons learned:
This video offers a visual representation of how the event loop works. It shows how the stack & task queue handle tasks. 
It also visualizes how rendering happens with the event loop. 
The event loop has "two separate" detours that handle tasks or rendering.

Rendering can happen in between tasks and tasks can appear anywhere, but the event loop ensures that the tasks happen in the right order. 

It is interesting that microtasks will behave differently if a user invokes it vs JavaScript invoking it.

## Source:
https://www.youtube.com/watch?v=cCOL7MC4Pl0