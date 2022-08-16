/**************************************************************
* Promises chaining
***************************************************************/
/*
Let’s return to the problem mentioned in the chapter Introduction: callbacks:
we have a sequence of asynchronous tasks to be performed one after another.

The idea is that the result is passed through the chain of .then handlers.

In the example below,
every call to a .then returns a new promise, 
so that we can call the next .then on it.
When a handler returns a value, it becomes the result of that promise.
*/

// Example of Promise Chaining
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 2000)  // Resolves Promise with an integer-value after 2 seconds
})
.then(function(result) {
    alert(result);                      // Output -> integer-value (2)
    return result * 2;                  // Multiplies 2 with 2.
})
.then(function(result) {
    alert(result);                      // Output -> integer-value (4)
    return result * 2;                  // Multiplies 4 with 2.
})
.then(function(result) {
    alert(result);                      // Output -> integer-value (8)
    return result * 2;                  // Multiplies 8 with 2.
});
/**************************************************************
* Promises chaining
***************************************************************/




/**************************************************************
* Returning promises
***************************************************************/
/*
A handler, used in .then(handler) may create and return a promise.

In that case further handlers wait until it settles, and then get its result.

Returning promises allows us to build chains of asynchronous actions.
*/

// Example of returning a promise
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 2000);             // Resolves Promise with an integer-value after 2 seconds
})
.then(function(result) {
    alert(result);                                  // Output -> integer-value (2)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 2000);// Returns new Promise with an argument of result * 2
    })
})
.then(function(result) {
    alert(result);                                  // Output -> integer-value (4)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 2000);// Returns new Promise with an argument of result * 2
    })
})
.then(function(result) {
    alert(result);                                  // Output -> integer-value (8)
});
/**************************************************************
* Returning promises
***************************************************************/




/**************************************************************
* Example: loadScript
***************************************************************/
/*
Let’s use this feature with the promisified loadScript, 
to load scripts one by one, in sequence:

Here each loadScript call returns a promise, 
and the next .then runs when it resolves. 
Then it initiates the loading of the next script. 
*/

// Each loadScript call returns a promse (note from me: I don't see a Promise.)
loadScript('/article/promise-chaining/one.js')
.then(function(script) {
    return loadScript('/article/promise-chaining/two.js');
})
.then(function(script) {
    return loadScript('/article/promise-chaining/three.js');
})
.then(function(script) {
    // Use function declared in scripts to show that they load.
    one();      // Output -> 1
    two();      // Output -> 2
    three();    // Output -> 3
});
/**************************************************************
* Example: loadScript
***************************************************************/




/**************************************************************
* Thenable object
***************************************************************/
/*
A handler may return not exactly a promise, but a so-called “thenable” object– 
an arbitrary object that has a method .then. 
It will be treated the same way as a promise.

The idea is that 3rd-party libraries may implement “promise-compatible” 
objects of their own. 

They can have an extended set of methods, 
but also be compatible with native promises, 
because they implement .then.

JavaScript checks the object returned by the .then handler in line (*): 
if it has a callable method named then,
then it calls that method providing native functions resolve, reject 
as arguments (similar to an executor) and waits until one of them is called.
In the example above resolve(2) is called after 1 second (**). 
Then the result is passed further down the chain.

This feature allows us to integrate custom objects with promise chains without
having to inherit from Promise.
*/

// Example of a thenable object
class Thenable {
    // Property
    constructor(num) {
        this.num = num;                                 // num property
    }

    then(resolve, reject) {                             // then method
        alert(resolve);                                 // Output -> function () {[native code]}
        setTimeout(() => resolve(this.num * 2), 2000);  // Calls resolve function with num property * 2 after two seconds.
    }
}

new Promise(resolve => resolve(2))      // Create & resolves promise with a intger-value of 2
.then(result => {                       // Passes Promise integer-value (2) to .then() handler
    return new Thenable(result);        // (1/2)Creates Thenable object. Passes in Promise-integer-value (2) into the constructor. 2 is saved into this.num property.
})                                      // (2/2) setTimeout method resolves Promise & returns (this.num * 2) after two seconds.
.then(alert);                           // Output -> 4
/**************************************************************
* Thenable object
***************************************************************/




/**************************************************************
* Bigger example: fetch
***************************************************************/
/*
In frontend programming promises are often used for network requests. 
We’ll use the fetch() method to load the information about the user 
from the remote server. 

This makes a network request to the url and returns a promise. 
The promise resolves with a response object when the remote server responds.

In the second example below,
We call the response.text() method that returns a promise that resolves 
when the full text is downloaded from the remote server, 
with that text as a result.

In the third example below,
The response object returned from fetch also includes the method response.json() 
that reads the remote data and parses it as JSON. 

In the fourth example below,
How can we do something after the avatar has finished showing & gets removed? 
We’d like to show a form for editing that user. As of now, there’s no way.

In the fifth example below,
We can make the chain extendable by returning a promise that resolves 
when the avatar finishes showing.
the fourth .then handler now returns new Promise, 
that becomes settled only after the call of resolve(githubData) in setTimeout. 
The next .then in the chain will wait for that.

As a good practice, 
an asynchronous action should always return a promise. 
That makes it possible to plan actions after it.
*/
// Fetch used for network requests
let promise = fetch(url);

// Example of fetching a network request & returning data as text
fetch('/article/promise-chaining/user.json')
.then(function(response) {
    return response.text();         // Returns a promise that resolves with full response text.
})
.then(function(data) {              // Promise is passed into 2nd handler with response text as the result.
    alert(data);                    // Output -> Object with name & isAdmin property. {"name": "iliakan", "isAdmin": true}
});

// Example of fetching a network request & returning data as JSON
fetch('/article/promise-chaining/user.json')
.then(response => response.json())  // Returns a promise that resolves response as JSON
.then(data => {
    alert(data.name, data.isAdmin); // Output -> iliakan
    alert(data.isAdmin);            // Output -> true
});

// Example of fetching a network request from GitHub & loading user profile/avatar.
fetch('/article/promise-chaining/user.json')                        // First network request to grab data
.then(response => response.json())                                  // Returns a promise that resolves data as JSON
.then(data => fetch(`https://api.github.com/users/${data.name}`))   // The object name property passed into another network request
.then(response => response.json())                                  // Returns a promise that resolves data as JSON
.then(githubData => {                                               // Promise is passed into 4th handler
    console.log(githubData);
    let img = document.createElement('img');                        // Creates an <img> element
    img.src = githubData.avatar_url;                                // Sets img src to the object avatar_url property value
    img.className = "promise-avatar-example";                       // Sets a class name on the created <img> element
    document.body.append(img);                                      // Appends img element to the body of the document

    setTimeout(() => img.remove(), 3000);                           // setTimeout method that removes the created <img> element from the document body
});

// Extending the chain of the code above
fetch('/article/promise-chaining/user.json')
.then(response => response.json())
.then(data => fetch(`https://api.github.com/users/${data.name}`))
.then(response => response.json())
.then(githubData => new Promise(function(resolve, reject) {         // Returns a new promise
    let img = document.createElement('img');
    img.src = githubData.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
        img.remove();
        resolve(githubData);                                        // The Promise is resolved
    }, 3000);
}))
.then(githubData => alert(`Finished displaying ${githubData.name}`));


// Refactoring the extended chain above, into reusable functions
function loadJson(url) {                                        // (2) Takes in a string as a parameter                     // (8) Takes github url as a parameter
    return fetch(url)                                           // (3) Calls fetch() method using the string passed in and  // (9) Calls fetch() method using the github url passed in and
    .then(response => response.json());                         // (4) returns Promise that resolves response as JSON       // (10) returns Promise that resolves response as JSON
}

function loadGithubData(name) {                                 // (6) Takes in string as a parameter (string is from data name property)
    return loadJson(`https://api.github.com/users/${name}`);    // (7) Calls loadJson function and passes in data name property as a string template literal
}

function showAvatar(githubData) {
    return new Promise(function(resolve, reject) {              // (12) Returns a new promise that resolves after the img is removed
        let img = document.createElement('img');                // (13) Creates an <img> element
        img.src = githubData.avatar_url;                        // (14) Sets img src as the object avatar_url property value
        img.className = "promise-avatar-example";               // (15) Sets class name to the created <img> element
        document.body.append(img);                              // (16) Appends the created <img> element to the body of the document.

        setTimeout(() => {                                      // (17) Calls setTimeout method
            img.remove();                                       // (18) Removes the created <img> element after 3 seconds
            resolve(githubData);                                // (19) Resolves the promise with the ...github data object as the result? after 3 seconds
        }, 3000);
    });
}

loadJson('/article/promise-chaining/user.json')                 // (1) Calls loadJson function & passes url as a parameter.
.then(data => loadGithubData(data.name))                        // (5) Calls loadGithubData function & passes object name property as a parameter.
.then(showAvatar)                                               // (11)Calls showAvatar function & passes object as a parameter.
.then(githubData => alert(`Finished displaying ${githubData.name}`));   //(20) Promise is passed and alerts user.
/**************************************************************
* Bigger example: fetch
***************************************************************/




/**************************************************************
* Summary
***************************************************************/
/*
If a .then (or catch/finally, doesn’t matter) handler returns a promise, 
the rest of the chain waits until it settles. 
When it does, its result (or error) is passed further.
*/
/**************************************************************
* Summary
***************************************************************/




/**************************************************************
* Tasks: Promise: then versus catch
***************************************************************/
/*
Question:   Are these code fragments equal? 
            In other words, 
            do they behave the same way in any circumstances, 
            for any handler functions?

My Answer:  Yes these two code fragments are equal. (WRONG)
(WRONG)     The .catch() handler is the shorthand version of .then(null, errorHandFunc). (WRONG)

Correct
Answer:     No, they are not equal. 
            In example one, if an error occurs in .then(f1), it is then handled by the .catch().
            In example two, if an error occurs in .then(f1, f2), there's no chain below and the error is unhandled.
            The difference is .then passes results/errors to the next handler.
            
*/          

// Example one
promise
.then(f1)
.catch(f2);
// Example two
promise
.then(f1, f2)
/**************************************************************
* Tasks: Promise: then versus catch
***************************************************************/