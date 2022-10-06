/**************************************************************
* Introduction 0:00 ~ 5:20
***************************************************************/
/*

* Model-View-Controller is an architectural paradigm.
    * The structure of web development will be built in a certain way.
    * This structure will process information in a certain way.
    * A way to structure an application.
* MVC was created in 1979.


*/
/**************************************************************
* Introduction 0:00 ~ 5:20
***************************************************************/




/**************************************************************
* What is MVC? 5:21 ~ 8:00
***************************************************************/
/*

M - Model / V - View / C - Controller

* All 3 are required, missing one would cause the structure to crumble.
* Models deal with storage of information.
    * Storage of information deals with login or authentication. 
* MVC prevents us from repeating ourselves
    * If an element needs to be changed it will only need to be changed in one place.
* MVC helps create a solid structure around web applications.

*/
/**************************************************************
* What is MVC? 5:21 ~ 8:00
***************************************************************/




/**************************************************************
* The flow: 8:01 ~ 15:51
***************************************************************/
/*

* The model is the database.
* The view is the client.
* The controller is the server.

* The Client is the user viewing the internet.
    * The client will use browsers send requests.
    * The client-side will render HTML/CSS/JS.
        * The client-side code happens in the browser.

* A client will send a request to a server.
    * Servers are usually linux or windows based.
    * Servers run server-side code.
    * The servers do not store any information.
    * The server will interact with the database 
        * The db will search its files/documents 
            * The db sends a request back to the server.
            * The server sends a response with HTML/CSS back to the client.
                * The client's web browser will process the HTML/CSS & render it.
    
* The database will store information.
    * Databases can be relational or non-relational.

*/
/**************************************************************
* The flow: 8:01 ~ 15:51
***************************************************************/




/**************************************************************
* The Model: 15:52 ~ 16:42
***************************************************************/
/*

* The model is anything we do to interact with data.
    * Take things from the db.
    * Add things to the db.
    * Retrieve things from th db. 
    * The model is the code connected to the db.
    * The model will hand information to the controller.
    * The model will never contact the view directly.

* The controller never talks directly to the database.
    * The controller talks to the model.
        * The model is connected to the database.
        * The model is the one talking to the database.
        
*/
/**************************************************************
* The Model: 15:52 ~ 16:42
***************************************************************/




/**************************************************************
* The View: 16:43 ~ 17:53
***************************************************************/
/*

* The view is what is displaying information to the user.
    * The view never talks directly to the model.
    * The view never talks to the controller.
        * The view listens to the controller.
        * The controller tells the view what to do.

*/
/**************************************************************
* The View: 16:43 ~ 17:53
***************************************************************/




/**************************************************************
* The Controller: 17:54 ~ 19:19
***************************************************************/
/*

* The controller is what's interacting with the user.
    * Everytime a request is sent, the controller is what's receiving the request.
    * The controller handles all the server-side logic.
    * Tells the model what it needs.
        * The model follows the instructions.
    * The controller takes information from the user.
        * The controller processes that information.
            * The controller talks to the db.
                * The controller receives information from the db.
                * The controller processes the information & sends it to the View.
* 

*/
/**************************************************************
* The Controller: 17:54 ~ 19:19
***************************************************************/




/**************************************************************
* Recap 19:20 ~ 22:37
***************************************************************/
/*

* The user sends a request to the server.
    * The request goes through a route processor and directs the request to a certain controller.
        * A search will be in the search controller.
        * A static page (contact us) will be in the pages controller.
        * A blog will be in the post controller.
    * The server processes the request & asks the database for information.
    * The model will search its files & send the information back to the controller.
    * The controller processes the information to complete the view.
        * The controller sends this over to the view
    * The view compiles this and sends it to the user.


*/
/**************************************************************
* Recap 19:20 ~ 22:37
***************************************************************/




/**************************************************************
* Outro 22:38 ~ 24:39
***************************************************************/
/*

* Article for an in-depth MVC blog - jacurt.us/MVC
* Tutorials at jacurtis.com

*/
/**************************************************************
* Outro 22:38 ~ 24:39
***************************************************************/