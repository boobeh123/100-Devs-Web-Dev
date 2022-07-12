/**************************************************************
* DETAILED POSITIONING: FLOATS
***************************************************************/
/*
The ability to float elements provides a clean layout that is receptive to the different elements on a page. 
When more strict positioning is needed, use relative or absolute positioning.

One technique for containing floats within a parent element is to use the overflow property. 
The overflow property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

The clearfix technique does have better support compared to the overflow technique.
The clearfix technique is based off using the :before and :after pseudo-elements on the parent element. 

Using these pseudo-elements we can create hidden elements above and below the parent containing the floats. 

The ::before creates a pseudo-element that is the first child of the selected element. 
The ::after creates a pseudo-element that is the last child of the selected element. 
Both are often used to add cosmetic content to an element with the content property. Both are inline by default.

One practice is to assign a class to the parent element which includes the floats needing to be contained. 

The DOM is an API for HTML and XML documents which provides their structural representation. 
*/
/**************************************************************
* DETAILED POSITIONING: FLOATS
***************************************************************/




/**************************************************************
* DETAILED POSITIONING: POSITION PROPERTY 
***************************************************************/
/*
The position property accepts five different values,
Static, relative, absolute, fixed

The default value is static, meaning they don’t have, nor will they accept, any box offset properties.
The relative value accepts box offset properties. 
These box offset properties allow the element to be precisely positioned.
The box offset properties, specify how elements may be positioned, 
and only work on elements with a relative, absolute, or fixed positioning value.

For relatively positioned elements, 
the box offset properties specify how an element should be moved from its default position. 
For absolute or fixed elements,
specify the distance between the element and the edges of its parent element. 

The relative elements remain in the normal flow of the page. 
The relatively positioned element may overlap other elements without moving them from their default position.

In the event that the top and bottom box offset properties are both declared 
on a relatively positioned element, the top properties will take priority. 
In the event that the left and right box offset properties are both declared 
on a relatively positioned element, the left offset property is given priority.

Absolutely positioned elements are removed from the normal flow of the document. 
Using an absolutely positioned element & not specifying any box offset property 
will position the element in the top left of its closest relatively positioned parent. 

If an element doesn’t have a specific height or width & is absolutely positioned, 
using a combination of the box offset properties, displays an element with a full height or width.

Using the value of fixed is similar to absolute,
the difference is the positioning is relative to the browser viewport, 
and it does not scroll with the page. 

Fixed elements will always be present no matter where a user stands on a page. 
*/
/**************************************************************
* DETAILED POSITIONING: POSITION PROPERTY
***************************************************************/




/**************************************************************
* DETAILED POSITIONING: FIXED HEADER OR FOOTER
***************************************************************/
/*
One of the most common uses of fixed positioning 
is to build a fixed header, or footer, anchored to one side of a page. 
As a user scrolls the element stays prevalent, always within the viewport for users to interact with.

In the demo:
Notice how both left and right box offset properties are declared. 
This allows the footer to span the entire width of the bottom of the page, 
and it does so without disrupting the box model, 
allowing margins, borders, and padding to be applied freely.
*/
/**************************************************************
* DETAILED POSITIONING: FIXED HEADER OR FOOTER
***************************************************************/




/**************************************************************
* DETAILED POSITIONING: Z-INDEX
***************************************************************/
/*
By nature web pages are often considered to be two dimensional, displaying elements upon a x and y axis. 
However when you begin to position elements they are occasionally placed on top of one another. 
To change the order of how these elements are stacked, the z-index property is to be used.

The z-index property sets the z-order of a positioned element and its descendants or flex items. 
Overlapping elements with a larger z-index cover those with a smaller one.

Elements coming at the top of the DOM are positioned behind elements coming after them. 
The element with the highest z-index value will appear on the top regardless of its placement in the DOM.

In order to apply the z-index property to an element, 
you must first apply a position value of relative, absolute, or fixed. 
The same as if you were to apply any box offset properties.
*/
/**************************************************************
* DETAILED POSITIONING: Z-INDEX
***************************************************************/