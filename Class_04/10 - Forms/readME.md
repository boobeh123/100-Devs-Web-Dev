## Summary:
The concepts covered in this chapter:
* The < form > element - Represents a document section containing interactive controls for submitting information.
    * Forms can request information from users with fields or controls.
        * Search queries, 
        * Login credentials, 
        * Shipping & billing information, 
        * Job applications.
* The < input > element (text) - Create interactive controls for web-based forms in order to accept data from the user.
    * The name attribute is a string specifying a name for the input control.
    * The type attribute has a default value of text. 
        * This value creates single-line text fields.
* The < textarea > element - Represents a multi-line plain-text editing control.
    * Resized using css or col & rows HTML attributes.
* The < input > element (select):
    * The type attribute value of radio. 
        * Radio buttons allow users to select a value from a list of options. 
        * Users may only select one option.
    * The type attribute value of checkbox. 
        * Check boxes allow users to select multiple values from a list of options.
* The < select > element - Represents a control that provides a menu of options. Used to create drop-down lists.
    * The < option > element is used to define an item contained in a < select > element. 
* The < input > element (submit):    
    * The type attribute value of submit. 
        * Users click the submit button to process data after filling out a form. 
    * The < button > element may be used to submit input. 
        * This element can be designed and structured.
* The < input > element (hidden):
    * Include the name & value attribute values when using hidden.
    * The type attribute value of hidden. 
        * Provide a way to pass data to the server without displaying it to users. 
* The < input > element (file):
    * The type attribute value of file. 
        * File inputs provide a way to add a file to a form.
* Organizing a form:
    * The < label > element - Represents a caption for an item in a user interface.
        * The value of the for attribute should be the same as the value of the id attribute on the form.
        * May wrap form controls, such as radio buttons & check boxes. 
    * The < fieldset > element - Group several controls & labels within a web form.
        * A block-level element
        * Includes a border outline.
        * The < legend > element - Represents a caption for the content of its parent < fieldset >.
    * The disabled attribute - Turns off the form controls, interaction and input is not available.
    * The placeholder attribute - A string that provides a hint to the user as to what kind of information is expected in the field.
    * The required attribute - A Boolean attribute.
        * Indicates that the user must specify a value for the input before the owning form can be submitted. 

## What did you learn?
Reading:
I like the login form that we had to create in the reading. I would like to use it somehwere in the project.
The input element is one beefy element that can do it all! You can use it to request data from the user. 
The data could be strings like login credentials. It could be data from a survey, containing questions and multiple/single choice answers. It could be data directly from you in the from of an file. All this data can then be submitted and processed the input element too. This reading goes deep and contains information about the various attributes for these elements. I feel I understand how to process the submit button with JavaScript and I am excited to see how the hidden attribute ties in with backend code.

Project: The "our services" page initializes a form and has text, email inputs. 


## Project link
The most recent link:
https://100devsconference-10.netlify.app/