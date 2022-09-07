# Links
Repo: [Motivational-Quotes-CRUD](https://github.com/boobeh123/Motivational-quotes-CRUD)

Link: https://secure-cove-71446.herokuapp.com/

## Summary:
The concepts covered in this video:

* Terminology:
    * Express - A framework for building web applications on top of Node.js
        * Simplifies the server creation process
        * Node allows JavaScript as the server-side language.
    * MongoDB - A database where information is stored for websites or applications.
        * This information can be retrieved and displayed on applications.
    * CRUD - A set of operations we get servers to execute.
        * Allows Rest APIs to be constructed.
* Read:
    * Browsers perform the READ operation when visiting a website.
        * Browsers send a GET request to the server to perform READ operations.
* Create:
    * Browsers perform a CREATE operation if they send a POST request to the server.
        * POST requests are triggered through JavaScript or `<form>` elements.
* Body-parser middleware:
    * Helps tidy up the request object.
    * Can be used to extract data from the `<form>` element & add them to the body property in the request object.
    * Helps the server can accept & read JSON data.
* Displaying variable data with template engines.
* Update:
    * The UPDATE operation is triggered through a PUT request when we want to change something. 
    * The Fetch API can be used to trigger PUT requests.
* Delete:
    * The DELETE operation can be triggered through a DELETE request. 
    * The Fetch API can be used to trigger DELETE requests.

## Lessons learned:
This blog reading was TOUGH. It holds your hand then pushes you into the pool. 
If you are reading this as a first-pass through, it is highly likely you will run into errors. 

The descriptions that describe code snippets are not specific on where code should go or which files it may belong in.
Looking back after completing this project, the reading does cover where the code should go but its unlikely that information has "stuck" by the time you read over it. 

Deploying this project was a WHOLE OTHER MONSTER. I was stuck for hours.

By the end of it, it is so satisfying that: 
1) this project freaking works.
2) this project is LIVE for anyone to use.
3) I will only get better at this process.

## Source:
https://zellwk.com/blog/crud-express-mongodb/

MongoParseError: Password contains unescaped characters (FIX):
https://stackoverflow.com/questions/69148195/mongo-db-connection-password-contains-unescaped-characters

Exporting .js file to be used in another .js file (.gitignore user/password)
https://stackoverflow.com/questions/54532123/export-array-to-be-used-in-another-javascript-file

CRUD-UPDATE GET net::ERR_ABORTED 404 (Not Found) error (FIX):
`app.use(express.static('public'));` Must be in the server.js and NOT in public/main.js.

Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
https://stackoverflow.com/questions/39096995/heroku-process-env-port-is-undefined