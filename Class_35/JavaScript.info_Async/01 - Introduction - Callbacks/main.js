/**************************************************************
* Introduction: callbacks
***************************************************************/
/*
To demonstrate the use of callbacks, promises and other abstract concepts, 
we’ll be using some browser methods: 
specifically, loading scripts and performing simple document manipulations.

Many functions are provided by JavaScript host environments that allow you to
schedule asynchronous actions. Actions that we initiate now, but finish later.

One such function is the setTimeout function.
Other examples of asynchronous actions are loading scripts & modules.

If we need to use a function from the new script as soon as it loads, 
it wouldn’t work.
The loadScript function doesn’t provide a way to track the load completion. 
Adding a callback function as a 2nd argument to loadScript should execute 
when the script loads.

This is a “callback-based” style of asynchronous programming. 
A function that does something asynchronously,
should provide a callback argument where we put the function to run after it’s complete.
*/
// Example one 
// Inserts a dynamically created tag into the document.
function loadScript(src) {
    let script = document.createElement('script');  // Creates <script> tag
    script.src = src;                               // The loadScript function accepts a src parameter (<script src="parameterPassedIn">)
    document.head.append(script);                   // Appends it to the page.
}
loadScript('my/script.js');                         // Loads the given path & Executes script

// Example two
// Adding a callback function as an argument.
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);         // The onload event executes a function after the script is loaded & executed. 
    document.head.append(script);
}
loadScript('my/script.js', function() {newfunction();}); // The 2nd argument is an anonymous function that runs when the action is completed.

// Runnable example
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});
/**************************************************************
* Introduction: callbacks
***************************************************************/




/**************************************************************
* Callback in callback
***************************************************************/
/*
How can we load two scripts sequentially: 
The first one, and then the second one after it?

One way would be to nest a second loadScript call inside the 1st callback.
After the outer loadScript is complete, the callback initiates the inner one.

Every new action is inside a callback. 
That’s fine for few actions, but not good for many.
*/

// Example three - Loading scripts sequentially
loadScript('/my/script.js', function(script) {                      // Calls loadScript the 1st time.
    alert(`Cool, the ${script.src} is loaded, let's load one more`);
    loadScript('/my/script2.js', function(script) {                 // Calls loadScript a 2nd time.
        alert(`Cool, the second script is loaded`);
        loadScript('/my/script3.js', function(script) {             // Calls loadScript a 3rd time.
        });
    });
});

/**************************************************************
* Callback in callback
***************************************************************/




/**************************************************************
* Handling errors
***************************************************************/
/*
In the above examples we didn’t consider errors. 
What if the script loading fails? 
Our callback should be able to react on that.

The technique used in these examples are called the “error-first callback” style.

The convention is:
The first argument of the callback is reserved for an error if it occurs.
The second argument are for the successful result. 
The single callback function is used both for reporting errors & passing back results.
*/

// Example four - Adding error handling to callbacks
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error: ${src}`));
    document.head.append(script);
}
// The first argument is reserved for an error      -> Calls callback(error)
// The second argument are for the successful result-> Calls callback(null, script)
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // Calls callback(error)
  } else {
    // Calls callback(null, script) for successful loads
  }
});
/**************************************************************
* Handling errors
***************************************************************/




/**************************************************************
* Pyramid of Doom
***************************************************************/
/*
At first glance, it looks like a viable approach to asynchronous coding. 
For one or maybe two nested calls it looks fine.

As calls become more nested, 
the code becomes deeper and increasingly more difficult to manage, 
especially if we have loops, conditional statements and so on.

This is referred as “callback hell” or “pyramid of doom.”
This way of coding isn’t very good.

We can alleviate this problem by making every action a standalone function.
There’s no deep nesting because every action is a separate top-level function.

It works, but it’s difficult to read & it’s inconvenient especially 
if the reader is not familiar with the code.

All of the step* functions are all of single use.
They are created only to avoid the “pyramid of doom.” 
It will not be reused outside of this action chain. 

There are other ways to alleviate this problem, one way is to use “promises”,
described in the next chapter.
*/

// Example five - Multiple asynchronous actions
loadScript('1.js', function(error, script) {
    if (error) {
        handleError(error);
    } else {
      // ...
    loadScript('2.js', function(error, script) {
        if (error) {
            handleError(error);
        } else {
            // ...
            loadScript('3.js', function(error, script) {
                if (error) {
                    handleError(error);
                } else {
                    // ...continue after all scripts are loaded (*)
                }
            });
        }
    });
}
});

// Example six - Every action is a standalone function.
loadScript('1.js', stepOne);            // Calls stepOne function
function stepOne(error, script) {
    if (error) {
        handleError(error);
    } else {
        loadScript('2.js', stepTwo);    // stepOne calls stepTwo function
    }
}
function stepTwo(error, script) {
    if (error) {
        handleError(error);
    } else {
        loadScript('3.js', stepThree);  // stepTwo calls stepThree function
    }
}
function stepThree(error, script) {
    if (error) {
        handleError(error);
    } else {
        /* do stuff*/                   // Continues after all scripts loaded (*)
    }
}
/**************************************************************
* Pyramid of Doom
***************************************************************/