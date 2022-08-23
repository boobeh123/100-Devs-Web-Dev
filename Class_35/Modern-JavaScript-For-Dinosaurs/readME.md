## Summary:
The concepts covered in this reading:

* JavaScript ecosystem:
    * Constantly growing & rapidly changing.
    * Understanding the problems that tools tried to solve.
* Using JavaScript libraries:
    * Manually downloading & linking these libraries.
    * Defining global variables to allow files to be used in other files.
* Using JavaScript package managers:
    * Automated the process of downloading & upgrading libraries.
    * Involves using the command line.
    * package.json is a configuration file that npm uses to save all project information. 
        * This file can be shared with other developers to install required packages.
    * Installing a JavaScript package does two things:
        * Downloads all the code from the package into a folder called node_modules. 
        * Automatically modifies the package.json file to keep track of a library as a project dependency.
* Using a JavaScript module bundler:
    * JavaScript was designed to run in the browser with no access to the file system of the client’s computer. (security reasons)
    * Organizing JavaScript code in multiple files required each file to be loaded with global variables.
    * CommonJS allowed JavaScript to import & export code across files without resorting to global variables.
    * Node.js is a server-side language with access to the computer’s file system. 
    * Allows the require() method to be used in the browser.
        * Creates a build step to create a final output.
* Transpiling code - Converting the code in one language to code in another similar language.
    
## Lessons learned:
To be continued..

This reading covers the JavaScript's historical context to understand the problems that tools were trying to solve. 
I learned that a file had to define global variables so that other files may access the first file. 
Libraries had to be manually updated before package managers automated this process. Using the a package manager also meant that developers had to use the command line.

JavaScript was originally designed to run in the browser and did not allow access to the file system of a computer due to security reasons. 
While learning how to use the webpack module bundler, I ran into a Windows-specific error that disabled my machine from running scripts. The solution is linked in the source below.


## Source:
https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

Error Fix: webpack.ps1 cannot be loaded because running scripts is disabled on this system
Solution: https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system