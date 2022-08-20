/**************************************************************
* Async/await
***************************************************************/
/*
There’s a special syntax to work with promises in a more comfortable fashion, 
called “async/await”. 
It’s surprisingly easy to understand and use.
*/
/**************************************************************
* Async/await
***************************************************************/




/**************************************************************
* Async functions
***************************************************************/
/*
Let’s start with the async keyword. It can be placed before a function.

The word “async” before a function means one simple thing: 
a function always returns a promise. 
Other values are wrapped in a resolved promise automatically.

Async ensures that the function returns a promise, 
and wraps non-promises in it. 
*/

// Declaring an async function
async function greet() {
    return "Hello world";
}
greet()
.then(alert);   // Output -> "Hello world"

// Explicitly returning a promise (same as above)
async function greet() {
    return Promise.resolve("Olleh dlrow");
}
greet()
.then(alert);   // Output -> "Olleh dlrow"
/**************************************************************
* Async functions
***************************************************************/




/**************************************************************
* Await keyword
***************************************************************/
/*
The keyword await makes JavaScript wait until that promise settles 
and returns its result.

Await literally suspends the function execution until the promise settles, 
and then resumes it with the promise result. 

That doesn’t cost any CPU resources, 
because the JavaScript engine can do other jobs in the meantime: 
execute other scripts, handle events, etc.

It’s just a more elegant syntax of getting the promise result 
than promise.then.
*/

// Syntax for await keyword (only works inside async functions)
let value = await Promise;

// Promise that resolves in 2 seconds
async function greet() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World"), 2000)  // Resolves promise after 2 seconds with a result of string
    });

    // Function execution pauses until promise settles
    let result = await promise;                         // Promise result passed down
    alert(result);                                      // Output -> Hello World
}
greet();

// Attempting to use await keyword in a non-async function
function greet() {
    let promise = Promise.resolve("o no");
    let result = await promise;                         // Syntax error
}
greet();

// Refactored showAvatar function using async/await (chapter:Promises-chaining)
async function showAvatar() {
    // Fetches user data
    let response = await fetch('article/promise-chaining/user.json');
    // Data parsed as JSON
    let user = await response.json();

    // JSON data passed into template literal & fetches github data
    // let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubResponse = await fetch('https://api.github.com/users/boobeh123');
    // Github data parsed as JSON
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');    // Create <img> elements
    img.src = githubUser.avatar_url;            // img src set to object avatar_url property
    img.className = "promise-avatar-example";   // Sets class on created <img> class
    document.body.append(img);                  // Appends created <img> element to body of document.

    // Resolves promise after 2 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    // Removes created <img> element
    img.remove();

    return githubUser;
}
showAvatar();
/**************************************************************
* * Await keyword
***************************************************************/




/**************************************************************
* Await keyword: Modern browsers allow top-level await in modules
***************************************************************/
/*
In modern browsers, 
await on top level works just fine, when we’re inside a module. 

If we’re not using modules, 
or older browsers must be supported, 
there’s a universal recipe: wrapping into an anonymous async function.
*/

// Using await inside a module (JavaScript.info)
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
console.log(user);                  // Output -> object {name: "", isAdmin: true}

// Wrapping an anonymous async function
(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    console.log(user);              // Output -> object {name: "", isAdmin: true}
})();
/**************************************************************
* Await keyword: Modern browsers allow top-level await in modules
***************************************************************/




/**************************************************************
* Await keyword: Accepting "thenables"
***************************************************************/
/*
Like promise.then, 
await allows us to use thenable objects (those with a callable then method).
The idea is that a third-party object may not be a promise, 
but promise-compatible: 

if it supports .then, that’s enough to use it with await.

If await gets a non-promise object with .then, 
it calls that method providing the built-in functions resolve and reject 
as arguments (just as it does for a regular Promise executor). 

Then await waits until one of them is called 
and then proceeds with the result.
*/

// Thenable class & the await below accepts its instances
class Thenable {
    constructor(num) {                  // (3) 2 is passed into the constructor
        this.num = num;                 // (4) this.num property is set to 2
    }
    then(resolve, reject) {
        alert(resolve);                 // (5) Output -> function() {[native code]}
        setTimeout(() => resolve(this.num * 2), 2000);  // (6) Resolves Promise after 2 seconds with a result of 4
    }
}

async function multiply() {
    let result = await new Thenable(2); // (2) Creates a Thenable instance with 2 as an argument. Waits for a promise.
    alert(result);                      // (7) Promise is passed into result & alerted -> Output -> 4
}
multiply();                             // (1) Call async function
/**************************************************************
* Await keyword: Accepting "thenables"
***************************************************************/




/**************************************************************
* Await keyword: Async class methods
***************************************************************/
/*
To declare an async class method, just prepend it with async.

The meaning is the same: 
it ensures that the returned value is a promise and enables await.
*/

class Waiter {
    constructor(num) {
        this.num = num;   
    }

    async wait(num) {                               // An async method?
        return await Promise.resolve(this.num *2);  // Resolves promise with a result of this.num property * 2
    }
}

let human = new Waiter(5)   // Creates an instance of the Waiter object and passes 5 into the constructor
human.wait()                // Calling the async wait method
.then(alert);               // Output -> 10
/**************************************************************
* Await keyword: Async class methods
***************************************************************/




/**************************************************************
* Error handling
***************************************************************/
/*
If a promise resolves normally, then await promise returns the result. 

If a promise rejects, it throws the error, 
just as if there were a throw statement at that line.

In real situations, 
the promise may take some time before it rejects. 
In that case there will be a delay before await throws an error.

We can catch that error using try..catch, 
the same way as a regular throw:

If we don’t have try..catch, 
then the promise generated by the call of the async function f() 
becomes rejected. 

If we forget to add .catch there, 
then we get an unhandled promise error (viewable in the console). 
We can catch such errors using a global unhandledrejection event handler.
*/

// Rejecting a promise in an async function
async function greet() {
    await Promise.reject(new Error("Whoops"));
}
greet().catch(alert);   // Output -> Whoops

// Throwing an error in an async function (works the same as above)
async function greet() {
    throw new Error("O no");
}greet().catch(alert);  // Output -> O no

// Using try...catch block for error handling in an async function
async function greet() {
    try {
        let response = await fetch('http://www.lolol.com/nope');
        let user = await response.json();
    } catch(err) {      // Handles errors in response & user
        alert(err);     // Output -> TypeError: Failed to fetch
    }
}
greet();

// Using .catch() handler to handle errors
async function greet() {
    let response = await fetch('http://www.lolol.com/nope');
}
greet().catch(alert);   // Output -> TypeError: Failed to fetch
/**************************************************************
* Error handling
***************************************************************/




/**************************************************************
* Async/await & promise.then/catch
***************************************************************/
/*
When we use async/await, we rarely need .then, 
because await handles the waiting for us. 

And we can use a regular try..catch instead of .catch. 
That’s usually (but not always) more convenient.

But at the top level of the code, when we’re outside any async function, 
we’re syntactically unable to use await, 

so it’s a normal practice to add .then/catch to handle the final result 
or falling-through error.
*/
/**************************************************************
* Async/await & promise.then/catch
***************************************************************/




/**************************************************************
* Async/await & Promise.all
***************************************************************/
/*
When we need to wait for multiple promises, 
we can wrap them in Promise.all and then await:

In the case of an error, it propagates as usual, 
from the failed promise to Promise.all, 
and then becomes an exception that we can catch using try..catch 
around the call.
*/

// Using await keyword with Promise.all
let results = await Promise.all([
    fetch(urlA),
    fetch(urlB)
]);
/**************************************************************
* Async/await & Promise.all
***************************************************************/




/**************************************************************
* Summary
***************************************************************/
/*
The async keyword before a function has two effects:
    * Makes it always return a promise.
    * Allows await to be used in it.

The await keyword before a promise makes JavaScript wait until that promise 
settles, and then:
    * If it’s an error, an exception is generated — 
    same as if throw error were called at that very place.
    * Otherwise, it returns the result.

Together they provide a great framework to write asynchronous code 
that is easy to both read and write.

With async/await we rarely need to write promise.then/catch, 
but we still shouldn’t forget that they are based on promises, 
because sometimes (e.g. in the outermost scope) 
we have to use these methods. 

Also Promise.all is nice when we are waiting for many tasks simultaneously.
*/
/**************************************************************
* Summary
***************************************************************/




/**************************************************************
* Tasks: Rewrite using async/await
***************************************************************/
/*
Q:  Rewrite this example code from the chapter Promises chaining 
    using async/await instead of .then/catch:

A: See line 387 to 398.
*/
// Example code from chapter: Promises-chaining
function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404

// My Answer: Refactored using async/await
async function loadJson(url) {
    try {
        let response = await fetch(url);
        let data = await response.json()
        console.log(data);
    } catch(err) {
        alert(err);
    }
}
loadJson('https://api.github.com/users/boobeh123'); // Output -> Object {}
loadJson('http://www.lolol.com/nope');              // Output -> TypeError: failed to fetch
/**************************************************************
* Tasks: Rewrite using async/await
***************************************************************/




/**************************************************************
* Tasks: Rewrite "rethrow" with async/await
***************************************************************/
/*
Q:  Below you can find the “rethrow” example. 
    Rewrite it using async/await instead of .then/catch. 
    And get rid of the recursion in favour of a loop in demoGithubUser: 
    with async/await that becomes easy to do.

A:  See line 418 to 453
*/
// Example code of "rethrow"
class HttpError extends Error {                         // HttpError class that extends the Error class
    constructor(response) {                             // Constructor takes in a response
      super(`${response.status} for ${response.url}`);  // Access response properties
      this.name = 'HttpError';                          // Name property set to a string
      this.response = response;                         // Response property set to response
    }
}
    async function loadJson(url) {          // Async function that takes in a string/url
        try {
            let response = await fetch(url) // Fetches data and waits for a response
            let data = await response.json()// Parses data as JSON
            return data;                    // Returns JSON data
        } catch(err) {
            throw new HttpError(response);
        }
    }
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
    let response;                                       // Declare a local variable so it remains in scope for a return
    try {
        let name = prompt("Enter a name?", "boobeh123");  // Takes user input and stores in name variable
        // Name variable used in template literal.
        // Reassigning value of local response variable to call loadJson function.
        // Passes url w/ template literal as an arguement for loadJson.
        response = await loadJson(`https://api.github.com/users/${name}`)
    } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
        } else {
          throw err;
        }
    }
    return response;                                    // Returns reassigned local variable
}
// Calls the demoGithubUser function, which calls the loadJson function.
demoGithubUser();   // Output -> Promise fulfilled -> Promise Object {}
/**************************************************************
* Tasks: Rewrite "rethrow" with async/await
***************************************************************/




/**************************************************************
* Tasks: Call async from non-async
***************************************************************/
/*
Q:  We have a “regular” function called f. 
    How can you call the async function wait() 
    and use its result inside of f?
    The task is technically very simple, 
    but the question is quite common for developers new to async/await.

A:  See line 474 to 487 or line 489 to 500
*/
// My answer: (WRONG)
async function wait() {
    // Resolves new promise after 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Returns resolved Promise with a result of 10
    return 10;
}
function f() {
    // Resolve promise with a result of calling wait() function
    let result = Promise.resolve(wait())
    // Returns the promise result
    return result;
}
// Calls f() function then alerts result
f().then(alert);    // Output -> 10

// Correct answer:
async function wait() {
    // Resolves new promise after 1 second.
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Returns resolved promise with a result of 10
    return 10;
}
function f() {
    // Calls wait() and handler alerts resolved promise result.
    wait().then(result => alert(result));
}
f();                // Output -> 10
/**************************************************************
* Tasks: Call async from non-async
***************************************************************/