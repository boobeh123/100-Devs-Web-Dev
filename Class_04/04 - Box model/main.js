/**************************************************************
* BOX MODEL
***************************************************************/
/*
Every element on a page is a rectangular box. 
These boxes may have width, height, padding, borders, and margins.

By default the box model is additive. 

the total width of an element can be calculated:
margin-right + border-right + padding-right 
+ width + 
padding-left + border-left + margin-left

the total height of an element can be calculated:
margin-top + border-top + padding-top 
+ height + 
padding-bottom + border-bottom + margin-bottom

CSS3 introduced the box-sizing property sets how the total width and height of an element is calculated.

The content-box value is the default value, allowing the box model to have an additive design. 

The padding-box value alters the box model, including padding values within the width & height of an element.
* Padding-box is currently not supported by any browsers at the time of writing this comment.

The border-box value alters the box model, including border and padding values within the width & height of an element.
* I like border-box. It does the math for me.
*/
/**************************************************************
* BOX MODEL
***************************************************************/




/**************************************************************
* DISPLAY PROPERTY
***************************************************************/
/*
The display property has these common values:
* Block
* inline
* inline-block
* none

The display property sets whether an element is treated as a block or inline element.

The inline-block value generates a block element box that 
falls into the flow of surrounding content, lining up one after the other.

A none value hides an element and renders the page as if that element doesn’t exist. 
Any elements nested within this element will also be hidden.

Every element has default width and height. 

The default width of an element depends on its display value. 
Block-level elements have a default width of 100%. A specific width or height can be set with the width/height properties.
Inline & inline-block elements expand and contract horizontally to accommodate their content. 

Inline-level elements cannot have a fixed size, 
thus the width and height properties are only relevant to non-inline elements. 

The default height of an element is determined by its content. 
An element will expand and contract vertically to accommodate its content. 
*/
/**************************************************************
* DISPLAY PROPERTY
***************************************************************/




/**************************************************************
* MARGIN & PADDING PROPERTIES
***************************************************************/
/*
The margin property allows us to set the amount of space that surrounds an element. 
Margins fall outside of any border and can be used to help position elements.
Vertical margins are accepted by block & inline-block elements. Not accepted by inline-level elements.

The padding property allows us to provide spacing directly within an element.

The margin & padding properties have longhand & shorthand forms. 
The margin and padding properties show background colors of relative elements. 
*/
/**************************************************************
* MARGIN & PADDING PROPERTIES
***************************************************************/




/**************************************************************
* BORDER & BORDER-RADIUS PROPERTIES
***************************************************************/
/*
Borders provide an outline around an element and fall between the padding and margin.
The border property requires three values: 
width, style, and color. 

A border can be placed on one side of an element. 

The border-radius property enables us to round the corners of an element's border.

The border-radius property accepts up to 4 values:
A single value rounds all four corners of an element equally.
Two values rounds the top-left/bottom-right and top-right/bottom-left corners in that order; 
Four values rounds the top-left, top-right, bottom-right, and bottom-left corners in that order.
*/
/**************************************************************
* BORDER & BORDER-RADIUS PROPERTIES
***************************************************************/




/**************************************************************
* DEVELOPER TOOLS
***************************************************************/
/*
Most browsers have Developer Tools. 
These tools allow us to inspect an elements on a page.
They allow us to see where that element lives within the HTML document.
They allow us to see which CSS properties and values are being applied to it. 
Most of these tools also include a box model diagram to show the computed size of an element.
*/
/**************************************************************
* DEVELOPER TOOLS
***************************************************************/




/**************************************************************
* PRACTICE
***************************************************************/
/*
I use a universal selector, along with universal pseudo-elements,
to select every element and change the box-sizing property to border-box.

I created a .container class. It sets a common width and centers elements on
the page.

I apply the .container class to my header, footer, and sections.
I applied a bottom-margin to most headings and paragraphs

I created a .button class. It is inline-block so padding can be added.
I created a 2nd .button class. 

I created an anchor hyperlinking to the contact page. 
This anchor will use both .button classes.

I created a .hero class that adds padding to a section.
The section directly below the header is given this hero class.

I copied the section containing learn.html and created two more sections.
*/
/**************************************************************
* PRACTICE
***************************************************************/