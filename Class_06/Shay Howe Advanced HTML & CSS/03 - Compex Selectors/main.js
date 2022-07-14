/**************************************************************
* Selectors: Type, class, ID
***************************************************************/
/*
Selectors are one of the most important parts of CSS. 
They determine how styles are to be applied to elements on a page.

The CSS type selector matches elements by node name. 
It selects all elements of the given type within a document.

The CSS class selector matches elements based on the contents of their class attribute.
Elements may have multiple class attributes.

The CSS ID selector matches an element based on the value of the element's id attribute. 
In order for the element to be selected, its id attribute must match exactly the value given in the selector.
It is unique and should only be used once per page.
*/
/**************************************************************
* Selectors: Type, class, ID
***************************************************************/




/**************************************************************
* Selectors: Combinators, Parent-child relationships, & Siblings
***************************************************************/
/*
The descendant combinator combines two selectors such that elements matched 
by the second selector are selected. 
It's typically represented by a single space (" ") character.
Selectors that utilize a descendant combinator are called descendant selectors.

The child combinator (>) is placed between two CSS selectors. 
It matches only those elements matched by the second selector 
that are the direct children of elements matched by the first.

Sibling elements are elements that share a common parent. 

The general sibling combinator (~) separates two selectors 
and matches all iterations of the second element, 
that are following the first element, and are children of the same parent element.

The adjacent sibling combinator (+) separates two selectors 
and matches the second element only if it immediately follows 
the first element, and both are children of the same parent element.
*/
/**************************************************************
* Selectors: Combinators, Parent-child relationships, & Siblings
***************************************************************/




/**************************************************************
* Selectors: Attribute selectors
***************************************************************/
/*
The CSS attribute selector matches elements based on the presence or value of a given attribute.

The present attribute selector represents elements with an attribute name of attr.
To select an element based on if an attribute is present, 
Use a selector with square brackets and include the attribute name. 

The equals attribute selector represents elements with an attribute name of attr whose value is exactly value.
To select an element with an exact matching attribute value,
Use a selector with square brackets and include the attribute name,
followed by an equals sign, quotations, and inside of the quotations 
should be the desired matching attribute value.

The contains attribute selector represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string.
To select an element based on part of an attribute value, not an exact match, 
Use a selector with square brackets and include the attribute name,
followed by an asterisk, equals sign, quotations, and inside of the quotations 
should be part of an attribute value.

The begins with attribute selector represents elements with an attribute name of attr whose value is prefixed (preceded) by value.
To select an element based on what an attribute value begins with. 
Use a selector with square brackets and include the attribute name,
followed by a circumflex accent, equals sign, quotations, and inside of the quotations
should be the beginning of the attribute value.

The ends with attribute selector represents elements with an attribute name of attr whose value is suffixed (followed) by value.
To select an element based on what an attribute value ends with. 
Use a selector with square brackets and include the attribute name,
followed by a bling/dollar sign, equals sign, quotations, and inside of the quotations
should be the end of an attribute value.

The space-separated attribute selector represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.
To select an element based on a whitespace-separated list of words,
Use a selector with square brackets and include the attribute name,
followed by a tilde, equals sign, quotations, and inside of the quotations,
should be one word matching the exact stated value.

The hyphen-separated attribute selector represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen, - (U+002D). It is often used for language subcode matches.
To select an element based on a hypen-separated list of words,
Use a selector with square brackets and include the attribute name,
followed by a pipe character, equals sign, quotations, and inside of the quotations,
should be one word matching the exact stated value.
*/
/**************************************************************
* Selectors: Attribute selectors
***************************************************************/




/**************************************************************
* Pseudo-classes: Links, User actions, User interface states
***************************************************************/
/*
A pseudo-class is a keyword added to a selector 
that specifies a special state of the selected element(s). 

The :link CSS pseudo-class represents an element that has not yet been visited. 
It matches every unvisited <a> or <area> element that has an href attribute.
The :visited CSS pseudo-class represents links that the user has already visited. 
The styles that can be modified using this selector are very limited due to privacy reasons.

The :hover CSS pseudo-class is applied to an element when a user moves their cursor over the element. 
When the user interacts with an element, but doesn't activate it.
The :active CSS pseudo-class represents an element that is being activated by the user. 
When using a mouse, "activation" starts when the user presses down the primary mouse button.
The :focus CSS pseudo-class represents an element that has received focus. 
Focus is applied when the user clicks or taps on an element,
or selects it with the keyboard's Tab key.

There are pseudo-classes generated around the user interface state of elements, 
particularly within form elements. 

The :enabled CSS pseudo-class represents any enabled element. 
An element is enabled if it can be activated or accept focus. (selected, clicked on, typed into, etc.)
The :disabled CSS pseudo-class represents any disabled element. 
An element is disabled if it cannot be activated or accept focus. (selected, clicked on, typed into, etc.)

The last two user interface element state pseudo-classes revolve 
around checkbox and radio button input elements. 

The :checked CSS pseudo-class selector represents any radio, checkbox, or option 
element that is checked or toggled to an on state.
The :indeterminate CSS pseudo-class represents any form element whose state is indeterminate, 
such as checkboxes which have their HTML indeterminate attribute set to true, 
radio buttons which are members of a group in which all radio buttons are unchecked, 
and indeterminate <progress> elements.
*/
/**************************************************************
* Pseudo-classes: Links, User actions, User interface states
***************************************************************/




/**************************************************************
* Pseudo-classes: Structural & Positioning
***************************************************************/
/*
A handful of pseudo-classes are structural and position based, 
in which they are determined based off where elements reside in the document 
tree. 

The :first-child CSS pseudo-class represents the first element 
among a group of sibling elements.
The :last-child CSS pseudo-class represents the last element 
among a group of sibling elements.
The :only-child CSS pseudo-class represents an element without any siblings. 

Sometimes you may only want to select the first, last, or only child 
of a specific type of element. 

The :first-of-type CSS pseudo-class represents the first element of its type 
among a group of sibling elements.
The :last-of-type CSS pseudo-class represents the last element of its type 
among a group of sibling elements.
The :only-of-type CSS pseudo-class represents an element that has 
no siblings of the same type.

There are a few :nth pseudo-classes that select elements based on a number 
or an algebraic expression. 
The number or expression that falls within the parenthesis determines 
exactly what element, or elements, are to be selected. 
Expressions may be translated and read as (a*n)±b. 
The a variable stands for the multiplier in which elements will be counted in 
The b variable stands for where the counting will begin or take place.

The :nth-child(n) CSS pseudo-class matches elements based on their position 
among a group of siblings.
The :nth-last-child(n) CSS pseudo-class matches elements based on their position 
among a group of siblings, counting from the end.

The :nth-of-type(n) CSS pseudo-class matches elements based on their position 
among siblings of the same type (tag name). 
The :nth-last-of-type(n) CSS pseudo-class matches elements based on their position 
among siblings of the same type (tag name), counting from the end.

The expression of 2n+1 selects every odd element, or the odd keyword value.
The expression of 2n   selects every even element, or the even keyword value.

The expression may contain negative numbers.
A negative a variable, or a negative n argument, 
must be followed by a positive b variable. 

Expressions:
3n      -> selector identifies every third list item
4n+7    -> selector identifies every fourth list item, starting with the seventh list item. 7th, 11th, 15th
n+5     -> selector every list item will be selected, starting with the fifth list item, leaving the first four list items unselected
6n-4 or 6n+2 -> selector will start counting every sixth list item, starting at negative four, selecting the 2nd, 8th, and 14th
-3n+12  ->  selector will select every third list item within the first twelve list items.
-n+9    -> select the first nine list items within a list

The :target CSS pseudo-class represents a unique element with an id matching the URL's fragment. 


*/
/**************************************************************
* Pseudo-classes: Structural & Positioning
***************************************************************/