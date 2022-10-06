/**************************************************************
* Introduction 
***************************************************************/
/*

* We will be building a CRUD application and adding Google OAuth authentication 
using passport, sessions, and cookies.
* MongoDB will store the users, stories, and sessions.
* Handlebars will be the template engine.

* We will login using a google / gmail account.
    * The name & google image associated with that email will be stored into the db.
* Stories can be set as public or private.
* We will be using a WYSIWYG editor / CK editor.

* The dashboard will display public stories from a variety of users.
    * An edit button will be displayed over your onw stories, but not over other users stories.
    * You may click on other users & display stories from that user.

* We will be covering authentication, protecting routes, & creating story routes.

*/
/**************************************************************
* Introduction
***************************************************************/




/**************************************************************
* Installing dependencies
***************************************************************/
/*

* Create a new directory & create a package.json using npm init
* We will install these dependencies:
    * Express - The web framework to create routes.
    * Mongoose - Work with our database & create models.
    * Connect-mongo - Allows sessions to be stored in the database. Resetting the server will not log us out.
    * Express-session - Allows sessions & cookies.
    * Express-handlebars - The template engine. (PUG or EJS can be used here)
    * Dotenv - Config.
    * Method-override - Allows us to make PUT & DELETE requests from our templates.
    * Moment - Formats dates.
    * Morgan - Logging.
    * Passport - Authentication.
    * Passport-google-oauth20 - Google Login.
* We will install these dev-dependencies:
    * Nodemon - Continously watch server.
    * Cross-env - A global environment variable for the node environment.
*/
/**************************************************************
* Installing dependencies
***************************************************************/




/**************************************************************
* Google OAuth20 - Console.cloud.google
***************************************************************/
/*

When deploying to production, 
change the 'Authorized redirect URI' from localhost to the domain name.

*/
/**************************************************************
* Google OAuth20 - Console.cloud.google
***************************************************************/




/**************************************************************
* User Models
***************************************************************/
/*

The convention for naming model files uses an uppercase first letter.

*/
/**************************************************************
* User Models
***************************************************************/




/**************************************************************
* Navigation
***************************************************************/
/*

If a partial file has an underscore ( _ ) in its name, it will be inserted
into another view.

*/
/**************************************************************
* Navigation
***************************************************************/