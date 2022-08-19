/**************************************************************
* Promisification
***************************************************************/
/*
“Promisification” is a long word for a simple transformation. 
It’s the conversion of a function that accepts a callback 
into a function that returns a promise.

Such transformations are often required in real-life, 
as many functions and libraries are callback-based. 

Promisification is a great approach, especially when you use async/await, 
but not a total replacement for callbacks.

A promise may have only one result, 
but a callback may technically be called many times.

Promisification is only meant for functions that call the callback once. 
Further calls will be ignored.
*/

// The loadScript function from chapter 1
function loadScript(src, callback) {
    let script = document.createElement('script');  // Creates <script> element
    script.src = src;                               // Sets <script> src to the src-argument

    // Calls callback(null, script) on successful loading
    script.onload = () => callback(null, script);
    // Calls callback(err) when an error occurs
    script.onerror = () => callback(new Error(`Script load error for${src}`));

    document.head.append(script);                   // Appends created <script> to the head of the document
}

// Promisified example of code above - A wrapper around original function
let loadScriptPromise = function(src) {             // Only src. Removed callback parameter
    return new Promise((resolve, reject) => {       // Returns a promise instead of using callbacks
        loadScript(src, (err, script) => {          // Calls loadScript providing its own callback translating to a promise resolve/reject
            if (err) reject(err);                   // Resolves when load is successful
            else resolve(script);                   // Otherwise rejects with error
        });
    });
};

// A helper function to promisify functions
function promisify(f) {
    return function(...args) {                      // (2) Wraps function-argument and returns a function-wrapper.
        return new Promise((resolve, reject) => {   // (3) Returns a promise
            function callback(err, result) {        // (4) Passes the call to the original function, providing its own callback
                if (err) {                          // (7/8)
                    reject(err);
                } else {                            // (7/8)
                    resolve(result);
                }
            }
            // console.log(callback);
            args.push(callback);                    // (5) (The provided callback??) Append custom callback to the end of f argument
            // console.log(this);
            // console.log(...args);
            f.call(this, ...args);                  // (6) Call the original function translating to a promise resolve/reject
        });
    };
}
// The helper function takes in a function that uses callbacks
let loadScriptPromse = promisify(loadScript);       // 1 Call helper function and pass a function that uses callbacks

// A helper function to promisify functions with more arguments 
// Should return the promise that resolves with the array of callback results
function promisify(f, manyArgs = false) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(manyArgs ? results : results[0]);
                }
            }
            
            args.push(callback);
            f.call(this, ...args);
        });
    };
}
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...);
/**************************************************************
* Promisification
***************************************************************/