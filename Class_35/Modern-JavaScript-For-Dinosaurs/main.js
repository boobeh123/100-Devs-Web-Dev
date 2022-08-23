/**************************************************************
* Introduction: JavaScript's historical context
***************************************************************/
/*
Learning modern JavaScript is tough if you haven’t been there 
since the beginning. 
The ecosystem is growing and changing so rapidly that it’s 
hard to understand the problems that different tools are trying to solve. 

The goal of this article is to provide a historical context of how JavaScript 
tools have evolved to what they are today. 

We’ll start from the beginning and build an example website like 
the dinosaurs did — no tools, just plain HTML and JavaScript. 
Then we’ll introduce different tools incrementally to see the problems 
that they solve one at a time. 

With this historical context, 
you’ll be better able to learn and adapt to the ever-changing JavaScript 
landscape going forward.
*/
/**************************************************************
* Introduction: JavaScript's historical context
***************************************************************/


 

/**************************************************************
* Using JavaScript the "old-school" way
***************************************************************/
/*
------------------------------------------------------------------------
*** Note from me: I have created a separate folder under the name:  ***
*** "old-school-example" for this section. The notes remain here.   ***
------------------------------------------------------------------------
Creating an “old-school” website using HTML and JavaScript, 
involves manually downloading and linking files. 

If you wanted to use a library like moment.js,
we can add moment.js to our website by downloading the moment.min.js file 
in the same directory and include it in our index.html file.

Loading moment.min.js before index.js, defines a global variable 
allowing moment functions available to be used inside the index.js file.

Using libraries required to find & download new versions of the library
every time it would update.
*/
/**************************************************************
* Using JavaScript the "old-school" way
***************************************************************/




/**************************************************************
* Using a JavaScript package manager (npm)
***************************************************************/
/*
JavaScript Package Managers automated the process of downloading & upgrading 
libraries from a repository around 2010. 
Bower was arguably the most popular in 2013 and npm around 2015. 
npm was made specifically for node.js.

Using package managers generally involves using the command line.
Knowing how to use the command line is an important part of modern JavaScript.

package.json is a configuration file that npm uses to save all project 
information. 

Installing the a JavaScript package using the npm command does two things:
* Downloads all the code from the package into a folder called node_modules. 
* Automatically modifies the package.json file to keep track of a library 
as a project dependency.

The package.json file can be shared with other developers to install the 
required packages.
*/
/**************************************************************
* Using a JavaScript package manager (npm)
***************************************************************/




/**************************************************************
* Using a JavaScript module bundler (webpack)
***************************************************************/
/*
Most programming languages provide a way to import code from one file 
into another. 
JavaScript was designed to run in the browser with no access to the 
file system of the client’s computer. (security reasons)

Organizing JavaScript code in multiple files required each file to be 
loaded with global variables.
(An example of this from chapter: "Using JavaScript the old-school way")

CommonJS started in 2009 & had a goal of specifying an ecosystem 
for JavaScript outside the browser. 
CommonJS would allow JavaScript to import and export code across files, 
without resorting to global variables. 
The implementation of CommonJS modules is node.js.

Node.js is a server side language with access to the computer’s file system. 
Node.js knows the location of each npm module path.

Using the require() method in the browser results in an error.
The browser doesn’t have access to the file system.
Loading files has to be done dynamically, either synchronously or asynchronously.

A JavaScript module bundler is a tool that gets around this problem 
with a build step to create a final output that is browser compatible.

Browserify is a module bundler released in 2011 & pioneered the usage 
of node.js style require() statements on the frontend.
Webpack is another module bundler that became the more widely used around 2015.
The React frontend framework used webpack's various features.

The webpack module bundler allows us to use the require() method in the browser.
Running the webpack tool starts with the index.js file, 
finds require() statements, replaces it with code that creates a single output file. 
The --mode=development argument is to keep the JavaScript readable.

*** Note from me: If you receive an error about webpack.ps1 cannot be loaded because running scripts is disabled on this system ***
*** Solution: https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system

Webpack's output file can be found in the dist directory as a main.js file.
Set this main.js file as a script src in the HTML instead of index.js.
The webpack command must be called each time a change occurs in index.js

We can create a new js file named webpack.config.js in the root directory of the project.
Webpack can read options from this config file.
With this config file, we don't need to start with the index.js or provide
the --mode=development argument when calling the webpack command.

Using a module bundler means we no longer have to load scripts with global variables. 
We can add new JavaScript libraries using require statements.
Having a single JavaScript bundle file is often better for performance. 
*/
/**************************************************************
* Using a JavaScript module bundler (webpack)
***************************************************************/




/**************************************************************
* Transpiling code for new language features (babel)
***************************************************************/
/*
Transpiling code means converting the code in one language to code in another 
similar language. 

Browsers are slow to add new features. New languages were created with 
experimental features that transpile to browser compatible languages.

For CSS, there’s Sass, Less, and Stylus, to name a few. 
For JavaScript, the most popular transpiler for a while was CoffeeScript, 
whereas nowadays most people use babel or TypeScript. 

CoffeeScript is a language focused on improving JavaScript by significantly 
changing the language — optional parentheses, significant whitespace, etc. 

Babel is not a new language but a transpiler that transpiles next generation 
JavaScript with features not yet available to all browsers to older more 
compatible JavaScript (ES5). 

Typescript is a language that is essentially identical to next generation 
JavaScript, but also adds optional static typing. 


*/
/**************************************************************
* Transpiling code for new language features (babel)
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