/**************************************************************
* Promise API: Promise.all
***************************************************************/
/*
There are 6 static methods in the Promise class. 

Promise.all usually takes an an array of promises (or iterable) 
and returns a new promise.
The new promise resolves when all listed promises are resolved, 
and the array of their results becomes its result.

In the second example below,
Note that the order of the resulting array members is the same 
as in its source promises. 
The first promise takes the longest time to resolve, 
it’s still first in the array of results.

In the fourth example below,
If any of the promises is rejected, 
the promise returned by Promise.all immediately rejects with that error.
When an error is present, the settled Promise-results will be ignored.

Promise.all does nothing to cancel them, 
as there’s no concept of “cancellation” in promises. 

Promise.all(iterable) allows non-promise values in iterable.
If any of those objects is not a promise, it’s passed to the resulting array “as is”.
*/
// Syntax for promise.all
let promise = Promise.all(iterable);

// Using promise.all
Promise.all([
    new Promise(resolve => setTimeout(() => resolve('one'), 3000)), // one
    new Promise(resolve => setTimeout(() => resolve('two'), 2500)), // two
    new Promise(resolve => setTimeout(() => resolve(3), 2000))      // 3
]).then(alert);                                                     // one, two, 3

// Fetching an array of URLs
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
    'https://api.github.com/users/boobeh123'
];
let requests = urls.map(url => fetch(url));                     // Maps every url to the Promise of the fetch
Promise.all(requests)                                           // Promise.all waits until all are resolved
.then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)    // Output -> url: 200
));

// Fetching user info for an array of useres (e.g array of goods by their IDs)
let names = ['iliakan', 'remy', 'jeresig', 'boobeh123'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`))
Promise.all(requests)
.then(responses => {
    for (let response of responses) {                           // All responses are resolved successfully
        alert(`${response.url}: ${response.status}`);           // Output -> url: 200
    }
    return responses;
})
.then(responses => Promise.all(responses.map(r => r.json())))   // Map array of responses into an array of response.json() to read their content
.then(users => users.forEach(user => alert(user.name)));        // All JSON answeres are parsed: "users" is the array of them

// Rejecting a promise with promise.all
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2500)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
]).catch(alert);    // Output -> Error: Whoops!

// Promise.all with non-promise values
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000)
    }),
    3,
    4
])
.then(alert);       // Output -> 2,3,4
/**************************************************************
* Promise API: Promise.all
***************************************************************/




/**************************************************************
* Promise API: Promise.allSettled
***************************************************************/
/*
This is a recent addition to the language. Old browsers may need polyfills.

Promise.allSettled just waits for all promises to settle, 
regardless of the result. 
If we fetch information about multiple users, even if one request fails, 
we’re still interested in the others.

If the browser doesn’t support Promise.allSettled, 
it’s easy to polyfill.
*/

// Using Promise.allSettled
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/boobeh123',
    'https://no-such-url'
];

// Using Promise.allSettled with malformed URL
Promise.allSettled(urls.map(url => fetch(url)))             // Maps array of urls and fetches each url
.then(results => {
    results.forEach((result, num) => {                      // Iterates through every result and takes their index
        if (result.status === "fulfilled") {                // If Promise is resolved
            console.log(result);        // Output -> Response object
            console.log(result.value);  // Output -> Response object value property
            alert(`${urls[num]}: ${result.value.status}`);  // Grabs urls element[index] -> Output -> url: 200
        }
        if (result.status === "rejected") {                 // If Promised is rejected
            alert(`${urls[num]}: ${result.reason}`);        // Grabs urls element[index] -> Output -> url: TypeError: failed to fetch
        }
    });
});

// Using Polyfill - if browser does not support Promise.allSettled
if (!Promise.allSettled) {
    const rejectHandler = reason => ({status: 'rejected', reason});
    const resolveHandler = value => ({status: 'resolved', value});

    Promise.allSettled = function(promises) {
        // promises.map takes input values, turns them into promises with p => Promise.resolve(p), and adds a handler to every one.
        // successful results become {status:'fulfilled', value} && error reasons become {status:'rejected', reason}
        const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
        return Promise.all(convertedPromises);
    };
}
/**************************************************************
* Promise API: Promise.allSettled
***************************************************************/




/**************************************************************
* Promise API: Promise.race
***************************************************************/
/*
Similar to Promise.all, 
but waits only for the first settled promise and gets its result or error.

The last promise here was fastest, so it became the result. 
After the first settled promise “wins the race”, 
all further results/errors are ignored.
*/
// Syntax of promise.race
let promise = Promise.race(iterable);

// Using Promise.race
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 2500)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
]).then(alert);     // Output -> 3
/**************************************************************
* Promise API: Promise.race
***************************************************************/




/**************************************************************
* Promise API: Promise.any
***************************************************************/
/*
Promise.any waits only for the first fulfilled promise and gets its result. 

In the second example below,
The second promise here was fastest, but it was rejected.
The first promise became the result. 
After the first fulfilled promise “wins the race”, 
all further results are ignored.

In the third example below,
If all of the given promises are rejected, 
then the returned promise is rejected with AggregateError – 
a special error object that stores all promise errors in its errors property.
*/

// Syntax for Promise.any
let promise = Promise.any(iterable);

// Using Promise.any
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2500)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert);     // Output -> 2

// Using Promise.any with rejecting every Promise
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("O no")), 2500)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 2000))
]).catch(error => {
    console.log(error.constructor.name);    // Output -> AggregateError
    console.log(error.errors[0]);           // Output -> O no
    console.log(error.errors[1]);           // Output -> Whoops
});
/**************************************************************
* Promise API: Promise.any
***************************************************************/




/**************************************************************
* Promise API: Promise.resolve
***************************************************************/
/*
Methods Promise.resolve and Promise.reject are rarely needed in modern code, 
because async/await syntax makes them somewhat obsolete.
We cover them here for completeness and for those who can’t use async/await 
for some reason.

Promise.resolve(value) creates a resolved promise with the result value.

The method is used for compatibility, 
when a function is expected to return a promise.
*/

// Syntax for Promise.resolve
let promise = new Promise(resolve => resolve(value));

//
let cache = new Map();                          // Stores url after fetch?

function loadCached(url) {
    if (cache.has(url)) {                       // If url is stored from past fetches
        return Promise.resolve(cache.get(url)); // Get the previous content from cache, returned value is a promise.
    }

    return fetch(url)                           // Otherwise, fetch first-time URLs
    .then(response => response.text())          // Parses response as text
    .then(text => {
        cache.set(url, text);                   // Stores url & text-response in cache
        return text;                            // Returns text-response
    });
}
/**************************************************************
* Promise API: Promise.resolve
***************************************************************/




/**************************************************************
* Promise API: Promise.reject
***************************************************************/
/*
Promise.reject(error) creates a rejected promise with error.

In practice, this method is almost never used.
*/

// Promise.reject same as:
let promise = new Promise((resolve, reject) => reject(error));
/**************************************************************
* Promise API: Promise.reject
***************************************************************/




/**************************************************************
* Summary
***************************************************************/
/*
There are 6 static methods of Promise class:
Promise.all is probably the most common in practice.

Promise.all(promises):
Waits for all promises to resolve and returns an array of their results. 
If any of the given promises rejects, it becomes the error of Promise.all, 
and all other results are ignored.

Promise.allSettled(promises):
Waits for all promises to settle and returns their results as an array of 
objects with: 
status: "fulfilled" or "rejected" 
value (if fulfilled) or reason (if rejected).

Promise.race(promises):
Waits for the first promise to settle, and its result/error becomes the outcome.

Promise.any(promises):
Waits for the first promise to fulfill, and its result becomes the outcome. 
If all of the given promises are rejected, AggregateError becomes the error 
of Promise.any.

Promise.resolve(value): Makes a resolved promise with the given value.

Promise.reject(error): Makes a rejected promise with the given error.
*/
/**************************************************************
* Summary
***************************************************************/