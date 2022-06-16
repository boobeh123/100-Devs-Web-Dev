/**************************************************************
 * CREATING YOUR FIRST WEB PAGE
***************************************************************/
/*
We will build a website using HTML & CSS
It is important to understand the differences between the two languages, 
the syntax of each language, and some common terminology.
*/
/**************************************************************
 * CREATING YOUR FIRST WEB PAGE
 ***************************************************************/




/**************************************************************
 * HTML? CSS?
 ***************************************************************/
/*
HyperText Markup Language (HTML) gives a web page content and meaning by defining that content through headings, paragraphs, or images. 

Cascading Style Sheets (CSS) creates style & appearance of content through fonts or colors.

HTML and CSS are independent of one another. 
HTML always represent content.
CSS always represent the appearance of that content.

CSS should not be written inside of an HTML document.
*/
/**************************************************************
 * HTML? CSS?
***************************************************************/




/**************************************************************
 * ELEMENTS, TAGS, ATTRIBUTES
 ***************************************************************/
/*
Three HTML terms you should know are elements, tags, and attributes.

Elements are designators that define the structure and content of objects within a page. 

Tags are identified by the use of < >, surrounding the element name.
Tags most commonly occur in pairs of opening and closing tags.

Attributes are properties used to provide additional information about an element. 
Elements can have a src or href attribute. It can contain class or id attributes.
*/

// Example of opening and closing tags
<a></a>

// Example of using attributes 
<img src="#" alt="octothorpe"></img>
/**************************************************************
 * ELEMENTS, TAGS, ATTRIBUTES
 ***************************************************************/




/**************************************************************
 * CREATE INDEX.HTML
 ***************************************************************/
/*
All HTML documents have a required structure 
that includes the following declaration and elements: <!DOCTYPE html>, <html>, <head>, and <body>.

The document type declaration informs web browsers which version of HTML is being used 
<!DOCTYPE html> is used at the beginning of the HTML document. 
<html> element signifies the beginning of the document.
<head> element identifies the top of the document, including any metadata (accompanying information about the page). 
<title> element is inside the <head> element. Changes are displayed on the browser's title bar.
<body> element displays content on a webpage.
*/
/**************************************************************
 * CREATE INDEX.HTML
 ***************************************************************/




/**************************************************************
* LINK STYLE.CSS
***************************************************************/
/*
Locate the <head> element inside your index.html 

<link rel="stylesheet" href="style.css"> 
The link element defines the relationship between the HTML file and the CSS file. 
The rel attribute specifies their relationship.
The href attribute identifies the location of the CSS file.
*/
/**************************************************************
 * LINK STYLE.CSS
 ***************************************************************/




/**************************************************************
 * SELECTORS, PROPERTIES, VALUES
***************************************************************/
/*
Three CSS terms you should know are selectors, properties, and values.

A selector designates exactly which element to target and apply styles to. 
A property determines the styles that will be applied to that element.
A value determines the behavior of its property.
*/

// Example of selector targeting a heading
h2 {
    // Example of property changing color on the heading
    color:lightgray; // Example of value changing the behavior of font color 
}
/**************************************************************
 * SELECTORS, PROPERTIES, VALUES
***************************************************************/




/**************************************************************
* USING SELECTORS
***************************************************************/
/*
Three selectors you should know are type, class, and ID selectors.

Type selectors designates elements by their element type. 
Class selectors designates elements by an element’s class attribute. 
ID selectors designates one element at a time. 
*/

// Example of a type selector
html {}

// Example of a Class selector
.container {}

// Example of a ID selector
#shoppingCart
/**************************************************************
 * USING SELECTORS
 ***************************************************************/




/**************************************************************
 * RESETTING DEFAULT STYLES
 ***************************************************************/
/*
Resetting default styles for every element and providing one style ensures cross-browser compatibility

CSS cascades from top to bottom. 
The reset needs to be at the beginning of our style sheet.

Eric Meyer’s Reset includes styles for HTML5 elements.
Nicolas Gallagher's Normalize includes common styles for elements. 
*/
/**************************************************************
 * RESETTING DEFAULT STYLES
 ***************************************************************/




/**************************************************************
* SUMMARY
***************************************************************/
/*
The concepts covered in this chapter:
* HTML - Gives a web page content and meaning by defining that content through headings, paragraphs, or images. 
* CSS - Creates style & appearance of content through fonts or colors.
* Seperation of Concerns - HTML and CSS are independent of one another. CSS should not be written inside of HTML
* Elements - Are designators that define the structure and content of objects within a page. 
* Tags - Are identified by the use of < >, surrounding the element name.
* Attributes - Are properties used to provide additional information about an element.
* Creating an index.html:
    * Document type declaration
    * <html>, <head>, <title>, <body>
* Linking a stylesheet:
    * Link element, rel attribute, href attribute
* Selectors - Designates which element to target and apply styles to. 
* Properties - Determines the styles that will be applied to that element.
* Values - Determines the behavior of its property.
* Using Selectors:
    * Type selector
    * Class selector
    * ID selector
* Resetting default styles - Provides one style across every browser. 
    * Eric Meyer's reset is available
    * Nicolas Gallagher's normalize is available
*/
/**************************************************************
* SUMMARY
***************************************************************/




/**************************************************************
 * PRACTICE
 ***************************************************************/
/*
I created an index.html
I created a heading and a paragraph

I created a style.css
I linked the style.css with my index.html
I used Eric Meyer's reset
I changed the title
*/
/**************************************************************
 * PRACTICE
 ***************************************************************/