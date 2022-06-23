/**************************************************************
* BACKGROUND-BASED PROPERTIES
***************************************************************/
/*
Backgrounds can help with assigning priorities, establish groupings, 
and have an influence on a website’s usability.

The quickest way to add a background to an element is to add a single-color background.
using the background or background-color property. 

The background property accepts colors and images.
The background-color property is used strictly for setting solid background colors. 

When using an RGBa or HSLa value for transparency, 
it’s a good idea to provide a fallback color, not all browsers recognize RGBa or HSLa values. 

The background-image property sets one or more background images on an element.

The background-repeat property sets how background images are repeated. 
A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

The background-position property sets the initial position for each background image. The position is relative.

The background-properties can be combined into a shorthand value. 

CSS3 also introduced three new CSS properties: 
background-size, background-clip, and background-origin.

The background-size property sets the size of the element's background image. 
The cover keyword value specifies that the background-image will be resized to completely cover an element’s width and height. Aspect ratio is preserved.
The contain keyword value specifies that the background-image will be resized to reside entirely contained within an element’s width and height. Aspect ratio is preserved, image shrinks/stretches as necessary.

The background-clip property value is set to border-box by default.
Allowing a background image to extend into the same area as any border. 

The background-origin property value is set to padding-box by default.
Allowing the beginning of a background image to extend into the padding of an element.
*/
/**************************************************************
* BACKGROUND-BASED PROPERTIES
***************************************************************/




/**************************************************************
* GRADIENT BACKGROUNDS
***************************************************************/
/*
Within CSS, gradient backgrounds are treated as background images. 

The background property using linear-gradient() creates an image of a transition between two colors along a straight line. 
The gradient can move, using the to keyword and values. to bottom is default.

It's a good idea to declare a default background-color property as a fallback,
should a browser not support gradient backgrounds.

The background property using radial-gradient() creates an image of a transition between two colors that radiate from an origin. 
Its shape may be a circle or an ellipse. Radial gradients work from the inside to the outside of an element. 

Gradient backgrounds can transition through multiple colors using color stops.
The browser will position every color stop an equal distance from the next 
and will transition between them accordingly. 

More control over color positionioning can be done by providing a length value after the color.
*/
/**************************************************************
* GRADIENT BACKGROUNDS
***************************************************************/




/**************************************************************
* MULTIPLE BACKGROUND IMAGES
***************************************************************/
/*
CSS3 introdced the use of more than one background image on an element.

In order to do so, provide the background property with two values. 
The foremost image and the rearmost image, separated with commas.
*/
/**************************************************************
* MULTIPLE BACKGROUND IMAGES
***************************************************************/




/**************************************************************
* PRACTICE
***************************************************************/
/*
I applied a different background color inside the body rule.

I created a class named primary-header and applied it to the header.
I applied a different anchor color & a:hover for all primary header&footer anchors

I applied a different text color on .hero class
I applied color and letter-spacing to .btn class
I applied text-color & bg-color onto :hover pseudo-element for .btn-alt class

I created a .row class
I created another div and applied the .row class. This div nested the .grid div, and 3 sections.
I created a .row-alt class

I updated every .html and applied existing styles. 
I applied .row-alt to every div containing a heading to these .html changes.

I created a .lead class
I applied lead to every to every section containing a heading to these .html changes.
*/
/**************************************************************
* PRACTICE
***************************************************************/