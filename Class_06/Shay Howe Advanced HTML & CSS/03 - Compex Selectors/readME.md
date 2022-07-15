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
    * The :empty CSS pseudo-class - Represents any element that has no children. Children can be either element nodes or text.
    * The :not() CSS pseudo-class - Represents elements that do not match a list of selectors. Also known as negation pseudo-class.
* Pseudo-Elements - A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).
    * The ::first-letter CSS pseudo-element - Applies styles to the first letter of the first line of a block-level element.
    * The ::first-line CSS pseudo-element - Applies styles to the first line of a block-level element.
    * The ::before CSS pseudo-element - Creates a pseudo-element that is the first child of the selected element. 
        * Used to add cosmetic content to an element with the content property. 
        * They are inline by default.
    * The ::after CSS pseudo-element - Creates a pseudo-element that is the last child of the selected element.
        * Used to add cosmetic content to an element with the content property. 
        * They are inline by default.
    * The ::selection CSS pseudo-element applies styles to the part of a document that has been highlighted by the user. 
        * Must always start with double colons.
* The content CSS property - Replaces an element with a generated value. 
* The attr() CSS function - Used to retrieve the value of an attribute of the selected element and use it in the stylesheet. 

## What did you learn?
I have no takeaway for those reading my summary. This chapter has packed a ton of information-- I constantly had to stop and look up things on the MDN. It's worth reading when you decide to study deeper.

I enjoyed building the hamburger nav menu, that can be activated with just HTML & CSS. So, so cool.

I didn't even know attribute selectors existed and its purpose seems niche. I'm glad to have learned that I have multiple ways to select elements based on values, attributes, or conditions.
I'm ashamed that I thought pseudo-classes & pseudo-elements referred to the same thing, but different names for it. 

I discovered about the transparent color keyword while building the arrow with borders. I learned that I am able to build shapes with pointy ends by manipulating the position property, box offset properties, and using the transparent color keyword.

## Source:
https://learn.shayhowe.com/advanced-html-css/complex-selectors/