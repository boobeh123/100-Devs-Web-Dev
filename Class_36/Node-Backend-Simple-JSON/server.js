const http = require('http');               // HTTP Module
const fs = require('fs')                    // File System Module
const url = require('url');                 // URL Module
const querystring = require('querystring'); // QueryString Module
const figlet = require('figlet')            // Figlet Module

// Creates the server with a request & response
const server = http.createServer((req, res) => {
  // Parses requested.url and appends pathname (req.url/pathname)
  const page = url.parse(req.url).pathname;
  // Parses a URL query string into a collection of key and value pairs.
  // Processes the input string into an object 
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);  // Output -> ?
  // If the request.url is equal to forward slash
  if (page == '/') {
    // Read the index.html file in the directory
    fs.readFile('index.html', (err, data) => {
      // Writes to the header with a status of 200 & a html content-type
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Sends html text to the response body
      res.write(data);
      // Signals to the server that the data has been sent
      res.end();
    });
  }
  // If the request.url is equal to /otherpage
  else if (page == '/otherpage') {
    // Read the otherpage.html file in the directory
    fs.readFile('otherpage.html', (err, data) => {
      // Writes to the header with a status of 200 & a html content-type
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Sends html text to the response body
      res.write(data);
      // Signals to the server that the data has been sent
      res.end();
    });
  }
  // If the request.url is equal to /otherotherpage
  else if (page == '/otherotherpage') {
    // Read the otherpage.html file in the directory
    fs.readFile('otherotherpage.html', (err, data) => {
      // Writes to the header with a status of 200 & a html content-type
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Sends html text to the response body
      res.write(data);
      // Ends the response
      res.end();
    });
  }
  // If the request.url is equal to /api
  else if (page == '/api') {
    // Iterating through properties of the object/input
    if ('i' in params) {
      // Accessing the object using bracket notation and passing in the property
      if (params['i'] == 'bob') {
        // Writes to the header with a status of 200 & a application content-type
        res.writeHead(200, {'Content-Type': 'application/json'});
        // An object declared with literal notation
        const objToJson = {
          // Three properties with a value of string
          name: "bob",
          status: "doing ok",
          currentOccupation: "student"
        }
        // Converting object to JSON string & serving the string back to the client.
        res.end(JSON.stringify(objToJson));
      }//student = leon
      // Accessing the object using bracket notation and passing in the property
      else if (params['i'] != 'bob') {
        // Writes to the header with a status of 200 & a application content-type
        res.writeHead(200, {'Content-Type': 'application/json'});
        // An object declared with literal notation
        const objToJson = {
          // Three properties with a value of string
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        // Converting object to JSON string & serving the string back to the client.
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  // If the request.url is equal to /css/style.css
  else if (page == '/css/style.css') {
    // Read the style file in the directory
    fs.readFile('css/style.css', (err, data) => {
      // Writes to the header with a status of 200 & a text/css content-type
      res.writeHead(200, {'Content-Type': 'text/css'});
      // Sends css text to the response body
      res.write(data);
      // Signals to the server that the data has been sent
      res.end();
    });
  }
  // If the request.url is equal to /js/main.js
  else if (page == '/js/main.js') {
    // Read the js file in the directory
    fs.readFile('js/main.js', (err, data) => {
      // Writes to the header with a status of 200 & a text/javascript content-type
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      // Sends js text to the response body
      res.write(data);
      // Signals to the server that the data has been sent
      res.end();
    });
  } else {
    // Figlet takes in a string and callback
    figlet('R__U__LOST? 404', (err, result) => {
      // Conditional to handle errors
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      // If no errors, Send result text to the response body
      res.write(result);
      // Signals to the server that the data has been sent
      res.end();
    });
  }
});
// Server is listening on port 8000
server.listen(8000);