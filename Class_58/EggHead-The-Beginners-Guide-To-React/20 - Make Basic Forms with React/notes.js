/**************************************************************
* Make Basic Forms with React
***************************************************************/
/*

Forms are automatically submitted when you hit ENTER in an input within the form.

An onSubmit handler will be called if a user clicks a submit button or uses the ENTER key to submit.
Instead of putting an onClick handler on the button, we can use an onSubmit handler on the form.


Getting values from forms:
Avoid using document.querySelector('').value breaks encapsulation of components.
Avoid using bracket notation on e.target or e.target.elements because these rely on the order of elements & can easily break..

Use htmlFor on label elements & name/id attributes on input elements then use e.target.elements.ATTRIBUTE.value
Use React.useRef then current.value to access values from forms.

*/
/**************************************************************
* Make Basic Forms with React
***************************************************************/