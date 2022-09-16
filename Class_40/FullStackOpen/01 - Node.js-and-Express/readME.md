## Summary:
The concepts covered in this reading:

* Node supports a majority of the latest features of JavaScript.
* Node supports the use of ES6 modules & the CommonJS module.
* `Transitive dependencies` are the dependencies of all of its dependencies.
* `Semantic versioning` is the versioning model used in npm.
* REST is an architectural style meant for building scalable web applications.
    * REST is an acronym for Representational State Transfer.
    * REST was introduced in 2000 in Roy Fielding's dissertation.
    * The original definition of REST is not limited to web applications.


## Lessons learned:
TO BE CONTINUED...
This repository contains notes from this reading. 
The examples & tasks will in a separate directory or repository.

I built a few web servers using Node's built-in http module & using the Express framework. 
I learned that Express automatically sets the value of the `Content-Type header` & the status code.
It is extremely convenient that Express also automatically transforms raw data into a JSON format without explicitly using the `JSON.stringify` method.

I finally found out what the REST acronym spells out. 
I am starting to understand the convention to create a unique address for resources.
I was able to fetch a single resource using its id property as the resource's unique identifier.
I learned that I can tell the server to respond with a status code of 404 when an item is searched with a non-existant id.

## Source:
https://fullstackopen.com/en/part3/node_js_and_express

`Postman: Desktop Agent Unavailable`: https://community.postman.com/t/desktop-agent-unavailable/16201/13
If you are receiving this error when testing APIs on localhost, (Desktop Agent installed & active in the toolbar) are you using the Brave browser? 
If so turn the "Brave Shield" off and the desktop agent should be able to connect.