/**************************************************************
* How to use promises
***************************************************************/
/*
Promises are the foundation of asynchronous programming in modern JavaScript. 

A promise is an object returned by an asynchronous function, 
which represents the current state of the operation. 

At the time the promise is returned to the caller, 
the operation often isn't finished, 
but the promise object provides methods to handle the eventual success or 
failure of the operation.

With a promise-based API, 
the asynchronous function starts the operation and returns a Promise object. 

You can then attach handlers to this promise object, 
and these handlers will be executed when the operation has succeeded or 
failed.
*/
/**************************************************************
* How to use promises
***************************************************************/




/**************************************************************
* Using the fetch() API
***************************************************************/
/*
To download JSON files we will make an HTTP request to the server.

In an HTTP request, 
we send a request message to a remote server, & it sends us back a response.

The fetch() API is the modern, promise-based replacement for XMLHttpRequest.

In the example below:
- The fetch() API is called & assigns the returned value into a variable.
- The variable contains a Promise object that is pending.
- If the fetch succeeds, the Promise is passed down into the .then() handler 
& passes in a Response object.
*/
// Example one - using fetch successfully
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(fetchPromise);                              // Output -> Promise {<pending>}
fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`); // Output -> Received response: 200
});
console.log("Started request…");                        // Output -> Started request…
/**************************************************************
* Using the fetch() API
***************************************************************/




/**************************************************************
* Chaining Promises
***************************************************************/
/*
The promise chain is used when your operation consists of several 
asynchronous functions that require each task to complete before 
starting the next task. 

With the fetch() API, 
once you get a Response object, 
you need to call another function to get the response data. 

We want to get the response data as JSON, 
so we would call the json() method of the Response object. 

Our handler calls response.json(), 
& then passes a new then() handler into the promise returned by response.json().

In the first example below:
- The fetch succeeds & the Promise is passed down into the .then() handler 
& passes in a Response object.
- We use a then() handler on the Response object & call the JSON() method.
- We use another then() handler on the Promise returned by response.json().

The elegant feature of promises is that then() itself returns a promise, 
which will be completed with the result of the function passed to it. 

In the second example below:
- It performs exactly the same as Example two.
- It does not nest the second .then() inside the first .then().
- The first .then() handler returns the Promise returned by json().
- The second .then() handler is called on the returned value.

This is called promise chaining. 
We can avoid increasing indentation when using consecutive asynchronous function calls.

Before we move on consider what happens if an error occurs?
*/

// Example two - using .then() hanlders after successful fetch
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(fetchPromise);                              // Output -> Promise {<pending>}
fetchPromise.then((response) => {
  const jsonPromise = response.json();
  console.log(`Received response: ${response.status}`); // Output -> Received response: 200
  jsonPromise.then((data) => {
  console.log(data)                                     // Output -> 12 objects. Contains image, name, price, type properties
  })
});

// Refactored code of Example two (avoids nesting)
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
fetchPromise
  .then((response) => {return response.json();})
  .then((data) => {
    console.log(data[0].name);                          // Output -> baked beans
});
/**************************************************************
* Chaining Promises
***************************************************************/




/**************************************************************
* Catching errors
***************************************************************/
/*
The fetch() API can throw an error due to no network connectivity or 
a malformed URL. 

Promise objects provide a .catch() handler/method. 

.catch() is similar to .then(), the differences being:
The handler passed to then() is called when the asynchronous operation succeeds.
The handler passed to catch() is called when the asynchronous operation fails.

If you add .catch() to the end of a promise chain, 
then it will be called when any of the asynchronous function calls fails. 
*/

// Example three - using .catch() handler after unsuccessful fetch
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);    // Output -> Could not get products: TypeError: Failed to fetch
  });
/**************************************************************
* Catching errors
***************************************************************/




/**************************************************************
* Promise terminology
***************************************************************/
/*
A promise can be in one of three states:

- Pending: The promise has been created, and the asynchronous function 
it's associated with has not succeeded or failed yet. 
This is the state your promise is in when it's returned from a call to fetch(),
and the request is still being made.

- Fulfilled: The asynchronous function has succeeded. 
When a promise is fulfilled, its then() handler is called.

- Rejected: The asynchronous function has failed. 
When a promise is rejected, its catch() handler is called.

The term settled covers both fulfilled and rejected.
A promise is fulfilled if it is settled, 
or if it has been "locked in" to follow the state of another promise.
*/
/**************************************************************
* Promise terminology
***************************************************************/




/**************************************************************
* Combining multiple promises
***************************************************************/
/*
When you need all the promises to be fulfilled and they don't depend on 
each other; 
it's much more efficient to start them all off together, 
then be notified when they have all fulfilled. 

The Promise.all() method takes an array of promises & returns a single promise.

The promise returned by Promise.all() is:
- Fulfilled when and if all the promises in the array are fulfilled. 
  - The .then() handler is called with an array of all the responses, 
  in the same order that the promises were passed into all().
- Rejected when and if any of the promises in the array are rejected. 
  - The .catch() handler is called with the error thrown by the promise 
  that rejected.

The Promise.any() method takes an iterable of Promise objects & returns a
single promise that fulfills as soon as any of the promises in the iterable fulfills.

When you need any one of a set of promises to be fulfilled & don't care which one,
you want Promise.any(). It is fulfilled as soon as any of the array of promises 
is fulfilled or rejected.
We can't predict which fetch request will complete first.

In the first example below:
- We make three fetch() requests to three different URLs. 
- All the requests should be fulfilled except the second request returns 404.
  - The requested file does not exist. 

In the second example below:
- We make three fetch() requests to three different URLs. 
- The third URL is malformed.

In the third example below:
- We make three fetch() request to three different URLs.
- It is considered fulfilled once a promise in the iterable fulfills.
  - We can't predict which fetch request will complete first.
*/

// Example four - using promise.all() - fulfilling requests
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
      // Output -> https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
      // Output -> https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
      // Output -> https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });

// Example five - using promise.all() - malformed URL
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
    // Output -> Failed to fetch: TypeError: Failed to fetch
  });

// Example six - using promise.any()
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
    // Output -> https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
    // Output -> https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found 404
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
/**************************************************************
* Combining multiple promises
***************************************************************/




/**************************************************************
* Async and Await
***************************************************************/
/*
The async keyword is a way to work with asynchronous promise-based code. 
Adding the async keyword the start of a function makes it an async function.

An async function can use the await keyword before calling a function that
returns a promise. 

Await will make the code wait until the promise is settled.
The fulfilled value of the promise is the return value or the rejected value.

Async functions always return a promise.
You can only use await inside an async function, the code is in a JavaScript module. 
Async functions will be used where promise chains are used, 
they make working with promises much more intuitive.

Await forces asynchronous operations to be completed in series. 
This is necessary if the result of the next operation depends on the result 
of the last one.
If that's not the case, Promise.all() will be more performant.
*/

// Example seven - Creating a asynchronous function
async function helloworld() {}

// Example eight - Rewriting our fetch with async/await
async function fetchProducts() {
  try {
    // Waits for fetch() to settle & returns a response or throws error
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    // Waits for response.json() to settle & returns JSON object or throws error
    const data = await response.json();
    console.log(data[0].name);
    return data;

  }

  catch(error) {
    console.error(`Could not get products: ${error}`);
  }

}

fetchProducts();

// Example nine - uses example eight, but returns data vs printing to console
const promise = fetchProducts();
promise.then((data) => {console.log(data[0].name)});
/**************************************************************
* Async and Await
***************************************************************/




/**************************************************************
* Conclusion
***************************************************************/
/*
Promises are the foundation of asynchronous programming in modern JavaScript. 

They make it easier to express and reason about sequences of asynchronous 
operations without deeply nested callbacks, 
and they support a style of error handling that is similar to the synchronous 
try...catch statement.

The async and await keywords make it easier to build an operation from a 
series of consecutive asynchronous function calls,
avoiding the need to create explicit promise chains, 
and allowing you to write code that looks just like synchronous code.

Promises work in the latest versions of all modern browsers; 
Opera Mini, IE11 and earlier versions may not support Promises.

Many modern Web APIs are promise-based, including WebRTC, Web Audio API,
Media Capture and Streams, and many more.
*/
/**************************************************************
* Conclusion
***************************************************************/