/**************************************************************
* Introduction 0:00 ~ 1:11
***************************************************************/
/*
Things we will cover:
* What is Node.JS/
* Fundamental modules.
* Node.JS Functionality.
* Build a web server with node.
    * Express will not be used.

* Node is a runtime environment.
* Express is a framework used with node.
* Heroku is an app hosting platform.
    * We will deploy to Heroku.
*/
/**************************************************************
* Introduction 0:00 ~ 1:11
***************************************************************/




/**************************************************************
* What is Node.JS? 1:12 ~ 1:59
***************************************************************/
/*
* Node is a JavaScript Runtime. 
    * It is NOT a language.
    * It is NOT a framework.
    * It is NOT a library.
    * Node uses JavaScript.
        * JavaScript runs in a browser environment.
        * Node runs on the machine as a service or runtime.
            * It does this by using the v8 JavaScript Engine
                * Google chrome browser uses this engine.\
        * We can use JavaScript as a server-side language.
*/
/**************************************************************
* What is Node.JS? 1:12 ~ 1:59
***************************************************************/




/**************************************************************
* What I should know 2:00 ~ 3:19
***************************************************************/
/*
* JavaScript fundamentals (Objects, Arrays, Conditionals)
    * ES6 JavaScript
        * Arrow functions
        * Promises
* HTTP (status code, headers)
    * We are dealing with server-side getting requests from the client, 
to the server, and sending back a response.
    * What is a status 200
    * What is a 404
    * What is a 500
    * HTTP Headers
* JSON
    * Used in REST APIs & Micro services
* MVC Pattern
    * Model View Controller Pattern
*/
/**************************************************************
* What I should know 2:00 ~ 3:19
***************************************************************/




/**************************************************************
* Why use Node? 3:20 ~ 4:17
***************************************************************/
/*
Node is:
* Fast, efficient, & scalable.
* Event driver, non-blocking I/O model
    * Runs on a single loop
* Popular in the dustry
* Same language on the frontend & backend (JavaScript)

*/
/**************************************************************
* Why use Node? 3:20 ~ 4:17
***************************************************************/




/**************************************************************
* Non-blocking I/O 4:18 ~ 5:23
***************************************************************/
/*
* Node works on a single thread using non-blocking I/O Calls
    * Asynchronous
    * Non-blocking on a single thread
    * This single thread can support thousands of connections.
        * Event loop.
* PHP is synchronous. 
    * It runs on multiple threads
    * Each requests spawns a new thread
    * Threads take up system memory

* Supports tens of thousands concurrent connections
* Optimizes throughput & scalability in apps with many I/O operations
* All of this makes Node.js apps fast & efficient
*/
/**************************************************************
* Non-blocking I/O 4:18 ~ 5:23
***************************************************************/




/**************************************************************
* Event Loop 5:24 ~ 6:06
***************************************************************/
/*
* Single-threaded
* Supports concurrency via events & callbacks
* EventEmitter class is used to bind events & listeners.

When an event is triggered a callback fires 
*/
/**************************************************************
* Event Loop 5:24 ~ 6:06
***************************************************************/




/**************************************************************
* Best types of projects for Node 6:07 ~ 7:41
***************************************************************/
/*
* REST API & Microservices
* Real Time Services (Chat, live updates)
* CRUD Apps - Blogs, shopping carts, social networks
* Tools & Utilities

The best types of projects to use Node: is anything not CPU intensive

Node & MongoDB are compatible 
*/
/**************************************************************
* Best types of projects for Node 6:07 ~ 7:41
***************************************************************/




/**************************************************************
* NPM - Node Package Manager 7:42 ~ 9:13
***************************************************************/
/*
* Install 3rd party package (frameworks, libraries, tools)
* Packages get stored in the "node_modules" folder
* All dependencies are listed in a "package.json" file
* NPM scripts can be created to run certain tasks, such as running a server.

npm init -               Generates a package.json file
npm install express -    Installs a package locally
npm install -g nodemon - Installs a package globally
*/
/**************************************************************
* NPM - Node Package Manager 7:42 ~ 9:13
***************************************************************/




/**************************************************************
* Node modules 9:14 ~ 10:07
***************************************************************/
/*
* Node Core Modules (path, fs, http)
* 3rd party modules/packages installed via NPM
* Custom modules

const path = require('path');
const myFile = require('./myFile');
*/
/**************************************************************
* Node modules 9:14 ~ 10:07
***************************************************************/




/**************************************************************
* Installing node 10:08 ~ 12:30
***************************************************************/
/*
Node contains a repl - A read, eval, print, loop
    * Allows us to run JavaScript in the console.
    * Typing node in the cmd prompt accesses the repl
*/
/**************************************************************
* Installing node 10:08 ~ 12:30
***************************************************************/




/**************************************************************
* Project building notes 12:31 ~ 22:47
***************************************************************/
/*
The first thing I want to do is create a package.json using npm init
    * Answer all the questions & press enter to submit.
Package.json biggest purpose is to store all the dependencies.
    * Other developers can use this file then run/ the command: `npm install` to get these dependencies.
Package.lock.json also tracks all the versions & dependecies.

Nodemon is a package that automates the live reloading functionality
on a web server.

-D is the same --save-dev
Do not upload/deploy node_modules to a host.

We can run the file by running the command "node filename"

module.exports can allow files to access other files
./ means the current folder

When you include a module it's wrapped in a module wrapper function

Node has not implemented the import syntax
    * To use import we must implement babel to compile to es6
The require() syntax uses CommonJS
*/
/**************************************************************
* Project building notes 12:31 ~ 22:47
***************************************************************/




/**************************************************************
* Node documentation: Modules 22:48 ~ 55:55
***************************************************************/
/*
The path module - Used to work with file directories, files in directory paths
    * Path is a core module included in Node.
    * When working with files, you will have to dissect parts of it.
    * Path.join works well when there are issues with delimiters
The File system module - The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
    * By default the fs.mkdir method is asynchronous
        * There are fs methods that are synchronous as well
The Operating system module - The node:os module provides operating system-related utility methods and properties.
    * Gives us information about our environment & operating systems
    * This module can create cool applications
The URL module - The node:url module provides utilities for URL resolution and parsing. 
    * URL.parse is deprecated
The event module - Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
    * We can create event emitters 
        * It emits events 
        * It has listeners that listen for those events
    * Event emitters can be used to create loggers
        * Can be used with the FS module to log ID & messages to a file.
            * Possible homework -> Create a logger that writes & appends ID & messages
*/
/**************************************************************
* Node documentation: Modules 22:48 ~ 55:55
***************************************************************/




/**************************************************************
* HTTP Module: Creating a (basic) server 55:56 ~ 
***************************************************************/
/*
When a server is running, the terminal does not allow typing
Servers can load html pages, load css files
To close the server use Ctrl+C

Express makes "this stuff" easier, (making a web server??)
but its good to understand the fundamentals.
    * The app can receive get requests

The port will run on the host's environment variable.
    * The port will not always be on port 5000

Once again, Nodemon is a package that automates the live reloading functionality
on a web server.

Public folder contains html & CSS files 

When we read a file, remember the error & data parameters.

We could have the web server become a REST API.
    * Instead of serving HTML, we serve JSON
        * Can be used to build a micro service or REST API

We can make the file path dynamic

HTML Content-types is text/html
CSS content-types is text/css
JSON content-types is application/JSON

When checking for error codes, we want to look for ENONET.
ENONET means the page isn't found

We need to have correct content-types and status codes with server-side.
*/
/**************************************************************
* HTTP Module: Creating a (basic) server 55:56 ~ 1:25:00
***************************************************************/




/**************************************************************
* Deploying to heroku 1:25:01 ~ 1:30:07
***************************************************************/
/*
Download Heroku & Heroku CLI
Login through the terminal or CLI using the command `heroku`
Heroku requires git
Create a .gitignore & ignore node_modules, reference, logger.js, person.js
Git init, add ., commit -m, then heroku create
Go to heroku dashboard & click the app name then deploy.
Copy the command to add as a remote repository and paste in the terminal
Push using git push heroku master
*/
/**************************************************************
* * Deploying to heroku 1:25:01 ~ 1:30:07
***************************************************************/