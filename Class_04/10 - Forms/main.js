/**************************************************************
* INITIALIZE FORMS 
***************************************************************/
/*
Forms can request information from users with fields or controls.
Information like search queries, login credentials, 
shipping & billing information, or an entire job application.

The <form> element represents a document section 
containing interactive controls for submitting information.

The most common attributes of the form element are action and method. 
The action attribute contains the URL that processes the form submission. 
The method attribute is the HTTP method to submit the form with.
*/
/**************************************************************
* INITIALIZE FORMS
***************************************************************/




/**************************************************************
* THE <INPUT> ELEMENT: TEXT TYPE
***************************************************************/
/*
Text fields and textareas are used for collecting text or string-based data. 
This data could be passwords, telephone numbers, and paragraphs of text.

The <input> element is used to create interactive controls for web-based forms in order to accept data from the user; 
zThe type attribute has a default value of text. This attribute value creates single-line text fields.
The name attribute is a string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.

HTML5 introduced a variety of type attribute values to provide clearer semantic meaning for inputs.
A few of these type attributes provide better interactive controls within iOS. 

The <textarea> element represents a multi-line plain-text editing control, 
useful when you want to allow users to enter a sizeable amount of free-form text.

The size of a textarea can be adjusted using the height & width properties with CSS.
The rows and cols attributes to allow you to specify an exact size for the <textarea> to take. 
*/
/**************************************************************
* THE <INPUT> ELEMENT: TEXT TYPE
***************************************************************/




/**************************************************************
* THE <INPUT> ELEMENT: SELECT TYPE
***************************************************************/
/*
The <input> element also allows users to select data using multiple choice and drop-down lists.

Radio buttons allow users to select a value from a list of options. Users may only select one option.
Check boxes allow users to select multiple values from a list of options.

To create a radio button the <input> element must use a type attribute value of radio. 
Each radio option must be defined with the value attribute.

To create a checkbox the <input> element must use a type attribute value of checkbox. 
Each check box must be defined with the value attribute.

Radio and checkbox should have same name attributes.

Drop-down lists are a way to provide users with a long list of options to select from.

To create a drop-down list, use the <select> and <option> elements. 
The <select> element represents a control that provides a menu of options.
The <option> element is used to define an item contained in a <select> element. 
The name attribute resides on the <select> element, the value attribute resides on the <option> elements.
*/
/**************************************************************
* THE <INPUT> ELEMENT: SELECT TYPE
***************************************************************/




/**************************************************************
* THE <INPUT> ELEMENT: SUBMIT TYPE
***************************************************************/
/*
Users click the submit button to process data after filling out a form. 

To create a submit button the <input> element must use a type attribute value of submit. 

The <button> element may be used to submit input. This element may wrap other elements.
Using the <button> element over <input type="submit"> gives you control over design and structure.
*/
/**************************************************************
* THE <INPUT> ELEMENT: SUBMIT TYPE
***************************************************************/




/**************************************************************
* THE <INPUT> ELEMENT: OTHER TYPES
***************************************************************/
/*

Hidden inputs provide a way to pass data to the server without displaying it to users. 
Hidden inputs are helpful when processing the form and should not be used for sensitive information.
To create a hidden input the <input> element must use a type attribute value of hidden.
Include the name and value attribute values when using hidden.

File inputs provide a way to add a file to a form.
To create a file input the <input> element must use a type attribute value of file. 
*/
/**************************************************************
* THE <INPUT> ELEMENT: OTHER TYPES
***************************************************************/




/**************************************************************
* ORGANIZING FORM ELEMENTS
***************************************************************/
/*
The <label> element represents a caption for an item in a user interface.

Labels include a for attribute. 
The value of the for attribute should be the same as the value of the id attribute 
on the form control the label corresponds to. 

The <label> element may wrap form controls, such as radio buttons & check boxes. 

The <fieldset> element is used to group several controls & labels within a web form.
<fieldset> is a block-level element and include a border outline.
The <legend> element represents a caption for the content of its parent <fieldset>.

The disabled attribute turns off the controls, interaction and input is not available.
Elements that are disabled will not send any value to the server for form processing.

The placeholder attribute is a string 
that provides a brief hint to the user 
as to what kind of information is expected in the field.

The required attribute is a Boolean attribute, 
if present, indicates that the user must specify a value for the input 
before the owning form can be submitted. 
*/
/**************************************************************
* ORGANIZING FORM ELEMENTS
***************************************************************/