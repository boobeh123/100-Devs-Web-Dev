/**************************************************************
 * FLOATS
***************************************************************/
/*
CSS gives us the ability to position elements and bring structure to our designs 

One way to position elements on a page is with the float property. 
The float property places an element on the left or right side of its parent element, allowing text and inline elements to wrap around it. 
The element is removed from the normal flow of the page, though still remaining a part of the flow.
Floating an inline-level element converts its display value to block.

The float property was designed to allow content to wrap around images. 
The float property was not intended to be used for layout and positioning purposes.

Clearing floats is done using the clear property.  
Containing floats is done by using a parent element as a container or a clearfix technique.
*/
/**************************************************************
* FLOATS
***************************************************************/




/**************************************************************
 * DISPLAY PROPERTY USING INLINE-BLOCK
 ***************************************************************/
/*
Another way to position content is by setting the display property as inline-block. 
This displays elements within a line and allows elements to accept all box model properties.

You may need to remove whitespace when using inline-block layouts.
One way to remove white space between inline-block elements is to:
Start an HTML comment after a closing tag. 
End the HTML comment just before the next opening tag.
*/
/**************************************************************
 * DISPLAY PROPERTY USING INLINE-BLOCK
 ***************************************************************/




/**************************************************************
 * POSITION PROPERTY: RELATIVE
 ***************************************************************/
/*
The position property sets how an element is positioned in a document. 
The top, right, bottom, and left properties determine the final location of positioned elements.

The relative value for the position property 
allows elements to appear within the normal flow a page, leaving space for an element as intended 
while not allowing other elements to flow around it;

With relatively positioned elements, 
the box offset properties identify in which direction an element would be moved in relation to itself. 
*/
/**************************************************************
 * POSITION PROPERTY: RELATIVE
 ***************************************************************/




/**************************************************************
 * POSITION PROPERTY: ABSOLUTE
 ***************************************************************/
/*
An absolutely positioned element does not sit within the normal flow of the page and will overlap any surrounding elements. 
The original position of the element is not preserved, and other elements are able to occupy that space.

With absolutely positioned elements, 
the box offset properties identify in which direction an element will be moved in relation to its closest relatively positioned parent element.

Most positioning can be handled without the position property and box offset properties, 
but in certain cases they can be extremely helpful.
*/
/**************************************************************
* POSITION PROPERTY: ABSOLUTE
***************************************************************/




/**************************************************************
* SUMMARY
***************************************************************/
/*
The concepts covered in this chapter:
* Floats:
    * Places an element on the left or right side of its parent element, allowing text and inline elements to wrap around it. 
    * The element is removed from the normal flow of the page, though still remaining a part of the flow.
    * Clearing floats using the clear property.
    * Containing floats using a parent element as a container or the clearfix technique.
* Display: Inline-block:
    * Displays elements within a line and allows elements to accept all box model properties.
* The position property:
    * This property sets how an element is positioned in a document. 
        * Relative positioning:
            * Allows elements to appear within the normal flow a page.
            * Moves an element in relation to itself.
            * Doesn't allow other elements to flow around it.
        * Absolute positioning:
            * Removes an element from the normal flow of a page.
            * Moves an element to its closest relatively-positioned parent.
            * Overlaps surrounding elements
*/
/**************************************************************
* SUMMARY
***************************************************************/




/**************************************************************
* PRACTICE
***************************************************************/
/*
I added clearfix pseudo-elements and clearfix class
I applied a .logo class to a heading. This class floats the heading left.
I added a <br> tag between Devs and Conference.
I applied more styles to .logo class

I contained the floating header inside my class.
I applied a .clearfix class to the header and footer

I floated my footer paragraphs left and adding vertical padding.

I created two column classes. The only difference is the width.
Both these classes display as inline-block. Inline-block elements create the layout.

I create a grid class and that share similarities to the container class

I had a div with a class of container that contained 3 sections. 
I changed the class to grid

I applied onethird-column classes to the 3 sections nested in grid div.
I removed whitespace between section element opening & closing tags.
*/
/**************************************************************
 * PRACTICE
 ***************************************************************/