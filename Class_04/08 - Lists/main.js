/**************************************************************
* LISTS
***************************************************************/
/*
HTML provides three different types of lists to use on a website: 
unordered, ordered, and description lists. 

An unordered list is a list of related items whose order does not matter. 
The <ul> element creates an unordered list. This is a block-level element. 
The <li> element creates an item in a list. This element must be contained in a parent element: ol>, <ul>, <menu>
In menus & ul lists, item markers are displayed using bullet points. 

An ordered list is a list of related items whose order is important.
In ol lists, item marks are displayed using numeric.
The start attribute sets a number to begin counting from. Markers begin counting from that number.
The reversed attribute allows a list to appear in reverse order. Markers begin counting from highest to lowest.
The value attribute allows items to change its marker value. Following items begin counting from this marker value.

A description list is a list of groups of terms and descriptions. Commonly used to implement a glossary.
The <dt> element creates a term in a description list.
The <dd> element provides a description for the preceding term (<dt>) in a description list.

Lists should still be reserved specifically for where they hold the most semantic value.
The item markers on nested items will change with deeper nesting.
*/
/**************************************************************
* LISTS
***************************************************************/




/**************************************************************
* STYLING LISTS
***************************************************************/
/*
There are multiple ways to style lists with CSS. 
We can style, position, or remove the marker on an item. The marker could be square, round, numeric, or alphabetical. 
We can style the list to display vertically or horizontally. 

Unordered and ordered lists use item markers by default. 
For unordered lists these are solid dots, 
For ordered lists these are numbers. 
With CSS the style and position of these item markers may be adjusted.

The list-style-type property sets the marker of a list item element.
Any list-style-type property value can be added to unordered or ordered lists. 

The item markers can use an image as a marker by adding a background image to the <li> element.

The item marker is positioned to the left of the <li> by default. This positioning is described as outside.
The list-style-position property sets the position of the ::marker relative to a list item.

These two list-based properties can be combined into one shorthand value. 

Horizontal lists can be used to create navs.
A few ways to display lists horizontally:
- Set display property value to inline or inline-block.
    - inline-block accepts margins & padding.
    - Removes item marker.
- Floating them.
    - Accepts margins & padding.
    - Retains item marker.
    - Horizontal margin is recommended.
    - Requires contain, clearfix, or clear

*/
/**************************************************************
* STYLING LISTS
***************************************************************/




/**************************************************************
* PRACTICE
***************************************************************/
/*
I changed the nav in my header & footer. It used anchors and now uses li anchors.
I updated the other 4 html files to update their header and footer.

I applied the nav built in the reading to the nav on this project.

I'll be following the instructions from here. I won't be documenting
the project practice in this main.js after this chapter. 

If you are interested in building this layout.
please visit:
https://learn.shayhowe.com/html-css/
*/
/**************************************************************
* PRACTICE
***************************************************************/