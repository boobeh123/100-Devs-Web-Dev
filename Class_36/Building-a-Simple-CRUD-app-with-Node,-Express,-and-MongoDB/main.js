/**************************************************************
* Building a Simple CRUD app with Node, Express, and MongoDB
***************************************************************/
/*
CRUD, Express and MongoDB are big words for a person who has never touched 
any server-side programming in their life. 

Express is a framework for building web applications on top of Node.js. 
It simplifies the server creation process that is already available in Node. 
Node allows you to use JavaScript as your server-side language.

MongoDB is a database. 
This is the place where you store information for your websites (or apps).

CRUD is an acronym for Create, Read, Update and Delete. 
It is a set of operations we get servers to execute
(POST, GET, PUT and DELETE requests respectively). 
    * Create (POST)   - Make something
    * Read   (GET)    - Get something
    * Update (PUT)    - Change something
    * Delete (DELETE) - Remove something
    * POST, GET, PUT, & DELETE requests let us construct Rest APIs.
*/
/**************************************************************
* Building a Simple CRUD app with Node, Express, and MongoDB
***************************************************************/




/**************************************************************
* CRUD - Read
***************************************************************/
/*
Browsers perform the READ operation when you visit a website. 
Browsers send a GET request to the server to perform this READ operation.

`cannot get /` is a result of the server sending nothing back to the browser.

endpoint is the requested endpoint.
It’s the value that comes after the domain name.

callback tells the server what to do 
when the requested endpoint matches the endpoint stated. 
*/

// Using the get method to handle a GET request
app.get(endpoint, callback)

// Using the send method to write back to the browser
app.get('/', function(request, response) {
    response.send('Hello world');
});

// Using the sendFile method to serve an html page in the root directory
app.get('/', (request, response) => {
    response.sendFile(__dirname + 'index.html');
});
/**************************************************************
* CRUD - Read
***************************************************************/




/**************************************************************
* CRUD - Create (1/2)
***************************************************************/
/*
Browsers can only perform a CREATE operation if they send POST request 
to the server. 

This POST request can be triggered through JavaScript or 
through a <form> element.

The form element needs:
    * `action` attribute - Tells the browser where to send the POST request.
    * `method` atrribute - Tells the browser what kind of request to send.
    * `name` attributes - A name on each <input> element within the form.

Express doesn’t handle reading data from the <form> element on it’s own.

Body-parser is a middleware that helps to tidy up the request object.
Express allows middleware use with the `use` method.
Body-parser must be placed before the CRUD handlers (get, post, etc..)

The `urlencoded` method tells body-parser to extract data from the 
<form> element & add them to the body property in the request object.
*/

// Using the post method to handle POST request
app.post('/quotes', (request, response) => {
    // The `path` value is found in the <form> `action` attribute.
    console.log('hello world');
});

// Using bodyParser to extract value from <form> elements
app.post('/quotes', (request, response) => {
    console.log(request.body);
});
/**************************************************************
* CRUD - Create (1/2)
***************************************************************/




/**************************************************************
* MongoDB
***************************************************************/
/*
MongoDB is a database. 
We can store information into this database to remember information. 
We can retrieve this information and display to people who view our app.

Most people store their databases on cloud services like MongoDB Atlas (free).

We know we’ve connected to the database if there are no errors.

Express request handlers are placed into the MongoClient's `.then` handler.
*/

// MongoDB supports Promises. If you prefer Promises over callbacks
MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to Database');
    // Naming the database
    const db = client.db('motivational-quotes');
    // Naming the collection
    const quotesCollection = db.collection('quotes');
    // Express request handlers
    app.use()
    app.get()
    app.post()
    app.listen()
})
.catch(error => console.error(error));
/**************************************************************
* MongoDB
***************************************************************/




/**************************************************************
* CRUD - Create (2/2)
***************************************************************/
/*
A collection must be created before information can be stored into a database.

If we don't need to send the browser information, we ask the browser to redirect.
*/

// Using the insertOne method to add into a MongoDB collection
app.post('/quotes', (request, response) => {
    quotesCollection.insertOne(request.body)
    .then(result {
        console.log(result);
    })
    .catch(error => console.error(error));
});
/**************************************************************
* CRUD - Create (2/2)
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




