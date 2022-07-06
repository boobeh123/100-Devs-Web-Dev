/**************************************************************
* DISPLAY PROPERTY
***************************************************************/
/*
Display is CSS's most important property for controlling layout. 

Every element has a default display value depending on what type of element it is. 
The default for most elements is usually block or inline. 

A block element is often called a block-level element. 
An inline element is always just called an inline element.

div is the standard block-level element. 
A block-level element starts on a new line and stretches out to the left and right as far as it can. 
Other common block-level elements are p and form, header, footer, section, and more.

span is the standard inline element. 
An inline element can wrap some text inside a paragraph without disrupting the flow of that paragraph. 
The a element is the most common inline element, since you use them for links.

Another common display value is none. 
Some specialized elements such as script use this as their default. 
It is commonly used with JavaScript to hide and show elements without really deleting and recreating them.

This is different from visibility. 
Setting display to none will render the page as though the element does not exist. 
visibility: hidden; will hide the element, but the element will still take up the space it would if it was fully visible.

Every element has a default display type that can be overwritten.
A common example is making inline li elements for horizontal menus.
*/
/**************************************************************
* DISPLAY PROPERTY
***************************************************************/




/**************************************************************
* WIDTH, MAX-WIDTH, BOX-SIZING
***************************************************************/
/*
Setting the width of a block-level element 
will prevent it from stretching out to the edges of its container to the left and right. 

Setting left & right margins to auto, will horizontally center that element within its container. 
The element will take up the width you specify, then the remaining space will be split evenly between the two margins.

The only problem occurs when the browser window is narrower than the width of your element. The browser resolves this by creating a horizontal scrollbar on the page.
Using max-width instead of width in this situation will improve the browser's handling of small windows. 
Max-width is supported by all major browsers including IE7+. This is important when making a site usable on mobile. 

Before the introduction of the box-sizing property, width's caveat is the box model. 
When you set the width of an element, an element's border & padding was not calculated. This caused two elements with the same width value as different sizes.

Settings box-sizing (-webkit- & -moz-) to border-box enables experimental features in specific browsers. 
*/
/**************************************************************
* WIDTH, MAX-WIDTH, BOX-SIZING
***************************************************************/




/**************************************************************
* POSITION PROPERTY, FLOATS, CLEAR & CLEARFIX
***************************************************************/
/*
In order to make more complex layouts, 
we need to discuss the position property. 
It has a bunch of possible values, and their names make no sense and are impossible to remember. 

static is the default value. 
An element with position: static; is not positioned in any special way.
A static element is said to be not positioned and an element with its position set to anything else is said to be positioned.

relative value behaves the same as static unless you add some extra properties.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. 
Other content will not be adjusted to fit into any gap left by the element.

A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
Setting the top, right, bottom, and left properties are used. 
A fixed element does not leave a gap in the page where it would normally have been located.

absolute is the trickiest position value. 
absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. 
If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. 

Remember, a "positioned" element is one whose position is anything except static.

Another property used for layout is float. Float is intended for wrapping text around images.
The clear property is important for controlling the behavior of floats.
The clearfix hack will work for the vast majority of browsers today.
*/
/**************************************************************
* POSITION PROPERTY, FLOATS, CLEAR & CLEARFIX
***************************************************************/




/**************************************************************
* RESPONSIVE DESIGN: RELATIVE UNITS & MEDIA QUERIES
***************************************************************/
/*
Percent is a measurement unit relative to the containing block. 

It's great for images: 
Make an image that is always 50% the width of its container. Then shrink down the page to see what happens!

You can use percent for layout, but this can require more work. 
When the window is too narrow, the content starts to wrap in a displeasing way. It comes down to what works for your content.

"Responsive Design" is the strategy of making a site that "responds" to the browser and device that it is being shown on.
Media queries are the most powerful tool for doing this. 

Change the layout that uses floats & percent widths and have it display in one column 
You can make this layout look even better on mobile using meta viewport.
*/
/**************************************************************
* RESPONSIVE DESIGN: RELATIVE UNITS & MEDIA QUERIES
***************************************************************/




/**************************************************************
* LAYOUTS
***************************************************************/
/*
You can create a grid of boxes that fills the browser width and wraps nicely. 
This has been possible for a long time using float, but now with inline-block it's even easier. 
inline-block elements are like inline elements but they can have a width and height. 

You can also use inline-block for layouts. 
Inline-block elements are affected by the vertical-align property, which you probably want set to top.
You need to set the width of each column

There will be a gap between the columns if there is any whitespace between them in the HTML. Use <!--HTML comments-->

There is a new set of CSS properties that let you easily make multi-column text:
column-count
column-gap
-moz-column-count
-moz-column-gap
-webkit-column-count
-webkit-column-gap
*/
/**************************************************************
* LAYOUTS
***************************************************************/




/**************************************************************
* FLEXBOX
***************************************************************/
/*
The new flexbox layout mode is poised to redefine how we do layouts in CSS. 
*/
/**************************************************************
* FLEXBOX
***************************************************************/