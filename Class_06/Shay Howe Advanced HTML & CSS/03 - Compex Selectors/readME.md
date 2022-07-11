## Summary:
The concepts covered in this chapter:
* Selectors:
    * The type selector - Matches elements by node name. It selects all elements of the given type within a document.
    * The class selector - Matches elements based on the contents of their class attribute. Elements may have multiple class attributes.
    * The CSS ID selector - Matches an element based on the value of the element's id attribute. 
    * The descendant combinator - Combines two selectors such that elements matched by the second selector are selected. 
    * The child combinator (>) - Placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.
    * The general sibling combinator (~) - Separates two selectors and matches all iterations of the second element, that are following the first element, and are children of the same parent element.
    * The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.
* Attribute Selectors:
    * The present attribute selector - Represents elements with an attribute name of attr.
    * The equals attribute selector - Represents elements with an attribute name of attr whose value is exactly value.
    * The contains attribute selector - Represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string.
    * The begins with attribute selector - Represents elements with an attribute name of attr whose value is prefixed (preceded) by value.
    * The ends with attribute selector - Represents elements with an attribute name of attr whose value is suffixed (followed) by value.
    * The space-separated attribute selector - Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.
    * The hyphen-separated attribute selector - Represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen.
* Pseudoclasses - A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). 
    * The :link CSS pseudo-class - Represents an element that has not yet been visited. 
    * The :visited CSS pseudo-class - Represents links that the user has already visited. 
    * The :hover CSS pseudo-class - Applied to an element when a user moves their cursor over the element. 
    * The :active CSS pseudo-class - Represents an element that is being activated by the user.
    * The :focus CSS pseudo-class - Represents an element that has received focus. 
    * The :enabled CSS pseudo-class - Represents any enabled element. An element is enabled if it can be activated or accept focus. 
    * The :disabled CSS pseudo-class - Represents any disabled element. An element is disabled if it cannot be activated or accept focus.
    * The :checked CSS pseudo-class selector - Represents any radio, checkbox, or option element that is checked or toggled to an on state.
    * The :indeterminate CSS pseudo-class - Represents any form element whose state is indeterminate.
    * The :first-child CSS pseudo-class - Represents the first element among a group of sibling elements.
    * The :last-child CSS pseudo-class - Represents the last element among a group of sibling elements.
    * The :only-child CSS pseudo-class - Represents an element without any siblings. 
    * The :first-of-type CSS pseudo-class - Represents the first element of its type among a group of sibling elements.
    * The :last-of-type CSS pseudo-class - Represents the last element of its type among a group of sibling elements.
    * The :only-of-type CSS pseudo-class - Represents an element that has no siblings of the same type.
    * The :nth-child(n) CSS pseudo-class - Matches elements based on their position among a group of siblings.
    * The :nth-last-child(n) CSS pseudo-class - Matches elements based on their position among a group of siblings, counting from the end.
    * The :nth-of-type(n) CSS pseudo-class - Matches elements based on their position among siblings of the same type (tag name). 
    * The :nth-last-of-type(n) CSS pseudo-class - Matches elements based on their position among siblings of the same type (tag name), counting from the end.
    * The :target CSS pseudo-class - Represents a unique element with an id matching the URL's fragment. 

## What did you learn?
Still reading

## Source:
https://learn.shayhowe.com/advanced-html-css/complex-selectors/