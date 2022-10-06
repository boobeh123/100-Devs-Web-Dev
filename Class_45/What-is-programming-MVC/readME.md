## Summary:
* MVC was created in 1979.
* Model-View-Controller is an architectural paradigm.
    * MVC creates a solid structure around an application.
    * MVC processes information in a certain way.
    * MVC prevents us from repeating code.
        * If code needs to be changed, it will only need to be changed in one file.
* M: The Model is anything we do to interact with data & databases.
    * The model is connected to the database.
        * The model interacts with the database/
        * Code to add or retrieve data from the database.
    * The model passes information to the controller.
    * The model will never contact the view directly.
* V: The View is what displays the information to the user.
    * The view listens to the controller.
    * The view will never contact the model.
* C: The Controller receives requests from a route processer & handles all the server-side logic.
    * The controller receives information from the user.
    * The controller sends this information to the model.
        * The controller receives this information from the model.
        * The controller processes this information to complete the view.
            * The view renders this information and displays the information to the user.

## Lessons learned:
I now know that MVC is an architectural paradigm. 

Before watching this video, I had an okay understanding of how client-side code interacted with server-side code. 
I knew that server-side code would interact with the database.
The database would search its documents and send the information back to the server.
The server would pass this information to a template & respond back to the client with HTML/CSS.

Watching this video allowed me to understand this process deeper.

I learned that requests go through route processing before being sent to a specific controller. 

## Source:
DevMarketer: What is programming MVC? 
https://www.youtube.com/watch?v=1IsL6g2ixak