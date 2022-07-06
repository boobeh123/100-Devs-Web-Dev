## Summary:
The concepts covered in this reading:
* Display is CSS's most important property for controlling layout. 
    * Every element has a default display value depending on what type of element it is. 
        * The default for most elements is usually block or inline. 
    * display value: none
        * Some specialized elements such as script use this as their default. 
        * It is commonly used with JavaScript to hide and show elements without really deleting and recreating them.
    * Every element has a default display type that can be overwritten.
        * A common example is making inline li elements for horizontal menus.
    * visibility: hidden; will hide the element, but the element will still take up the space it would if it was fully visible.
* Using width vs max-width:
    * Setting the width of a block-level element will prevent it from stretching out to the edges of its container to the left and right. 
    * Using max-width instead of width will improve the browser's handling of small windows. 
* Position property values:
    * Static -  The default value. An element with position: static; is not positioned in any special way.
    * Relative - Behaves the same as static unless you add some extra properties. 
        * Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. 
    * Fixed - A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
        * A fixed element does not leave a gap in the page where it would normally have been located.
    * Absolute - Absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. 
        * If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. 
* Multi-column text properties:
    * column-count - The column-count property breaks an element's content into the specified number of columns.
    * column-gap - The column-gap property sets the size of the gap (gutter) between an element's columns.
        * -moz-column-count & -moz-column-gap
        * -webkit-column-count & -webkit-column-gap


## What did you learn?
The takeaway is that this reading will teach you the basics of creating a layout with CSS properties. This reading provided a better understanding for position property values. I haven't previously used multi-column properties and it's surprising how effortlessly it creates text columns. I learned that using percentages on images with the width property can ensure that image stays at 50% width while being resized down.

## Source:
https://learnlayout.com/