## Summary:
The concepts covered in this chapter:
* Containing floats:
    * The overflow property - Sets the desired behavior for an element's overflow. 
    * The clearfix technique - Based off using the :before and :after pseudo-elements on the parent element. 
        * These pseudo-elements can create hidden elements above and below the parent containing the floats. 
            * The ::before creates a pseudo-element that is the first child of the selected element. 
            * The ::after creates a pseudo-element that is the last child of the selected element. 
    * One practice is to assign a class to the parent element which includes the floats needing to be contained. 
* Position property: The position property sets how an element is positioned in a document.
    * Static - The default value. Doesn't have or accept box offset properties.
    * Relative - May overlap other elements without moving them from their default position. Accepts box offset properties.
    * Absolute - Not specifying box offset properties with absolute, positions the element in the top left of its closest relatively positioned parent.
    * Fixed - Will always be present no matter where a user stands on a page. 
        * Fixed positioning can be used to build a fixed header or footer.
* The z-index property: Sets the z-order of a positioned element and its descendants or flex items. 
    * The element with the highest z-index value will appear on the top regardless of its placement in the DOM.
    * Elements coming at the top of the DOM are positioned behind elements coming after them. 
    * Position property must be relative, absolute, or fixed to use the z-index property.
* The DOM is an API for HTML and XML documents which provides their structural representation. 

## What did you learn?
The takeaway from this chapter's reading is the Z-index property. I learned I am able to change the order of how elements appear while stacking on each other.

This is how I feel and your result may not be similar. 
A good chunk of this chapter's reading was previously covered in chapter 5 of Shay Howe's Learn to Code HTML & CSS. This chapter may have provided some additional info about floats and the position property. 

## Source:
https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/