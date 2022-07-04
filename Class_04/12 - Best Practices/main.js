/**************************************************************
* BEST CODING PRACTICES: HTML
***************************************************************/
/*
A lot of coding best practices emphasize keeping code lean and well organized. 
The goal is to write well-structured and standards-compliant markup. 
The guidelines described here provide a brief introduction to HTML coding practices; 

HTML is large with over 100 elements available. 
We need to ensure we are using the proper semantic elements. This creates more accessible websites.

Always be sure to the use proper document structure.
Including the <!DOCTYPE html> doctype, and the <html>, <head>, and <body> elements. 

Creating ID and class values should relate to the content itself and not the style of the content. 

Images should always include the alt attribute. 
Screen readers and other accessibility software rely on the alt attribute to provide context for images.
The alt attribute value should be very descriptive of what the image contains. 

Avoid using inline styles within HTML. Pages will take longer to load, are difficult to maintain. Use external stylesheet
*/
/**************************************************************
* BEST CODING PRACTICES: HTML
***************************************************************/




/**************************************************************
* BEST CODING PRACTICES: CSS
***************************************************************/
/*
CSS files can span hundreds of lines. This can make finding and editing our styles tough. 
Providing a comment keeps our styles organized. We can use comments to build a table of contents.

Overall we need to keep our code well documented. 
If a specific part of our code is more complex, explain how it works and what it applies to within comments. 

Class names should relate to content within an element and not appearance, as much as possible. 
Class names should be all lowercase and should use hyphen delimiters.
Classes should be reusuable and available to share across elements.

The longer a selector is and the more prequalifiers it includes, the higher specificity it will contain.
The higher the specificity the more likely a selector is to break the cascade and cause issues.

There are times when a CSS selector is long and specific that it no longer makes sense. 
In this case, using a class alone is advised. 

Using the shorthand alternative allows us to quickly set and identify styles.
When we’re only setting one value, shorthand alternatives should not be used. 

Use the three-character shorthand hexadecimal color value. 

Remove the unit from any zero value. Zero is always zero, no matter which unit is being used—pixels, percentages, rem.

It’s best to group and indent individual vendor prefixes so that the property names stack vertically, as do their values.
As always, the objective is to make the styles easier to read and to edit.
The good news is that browsers are largely moving away from using vendor prefixes.
*/
/**************************************************************
* BEST CODING PRACTICES: CSS
***************************************************************/