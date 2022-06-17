/**************************************************************
 * DIVE INTO HTML
***************************************************************/
/*
We will learn which HTML elements are best used to display different types of content. 
It’s also important to understand how elements are displayed on a web page.
*/
/**************************************************************
 * DIVE INTO HTML
 ***************************************************************/




/**************************************************************
 * SEMANTICS
***************************************************************/
/*
Semantics is the practice of giving content on the page meaning and structure by using the proper element. 
Semantic code describes the value of content on a page.

Using semantic elements help screen readers and search engines to read and understand the content of a web page. 
*/
/**************************************************************
 * SEMANTICS
***************************************************************/




/**************************************************************
 * DIVS, SPANS, BLOCK & INLINE LEVEL ELEMENTS
 ***************************************************************/
/*
<div> & <span> are HTML elements that act as containers. It is used for styling.

A <div> is a block-level element that helps to build a web page’s layout and design. 

Block-level elements begin on a new line, stacking one on top of the other, and occupy any available width. 
Block-level elements may be nested and may wrap inline-level elements. 

A <span> is an inline-level element.

Inline-level elements do not begin on a new line. They fall into the normal flow of a document, 
lining up one after the other, and only maintain the width of their content. 
Inline-level elements may be nested and cannot wrap block-level elements. 
*/
/**************************************************************
 * DIVS, SPANS, BLOCK & INLINE LEVEL ELEMENTS
 ***************************************************************/




/**************************************************************
 * HEADINGS, PARAGRAPHS, EMPHASIS & IMPORTANCE
 ***************************************************************/
/*
Headings break up content and establish hierarchy, headings are block-level elements. 
Headings should be used in an order that is relevant to the content of a page. 
Headings should not be used to  style. (make text bigger or bold)

Paragraphs are block-level elements. Paragraphs adds content to a web page.

The <strong> element is inline-level element used to give importance to text. 
Do not use this the strong element as a way to style the text.

The <em> element is an inline-level element used to give emphasis to text.
*/
/**************************************************************
* HEADINGS, PARAGRAPHS, EMPHASIS & IMPORTANCE
***************************************************************/




/**************************************************************
* HEADER, NAV, ARTICLE, SECTION, ASIDE, FOOTER
***************************************************************/
/*
HTML5 introduced new elements that improve structural semantics:
<header>, <nav>, <article>, <section>, <aside>, <footer>
They are all block-level elements and may be used multiple times per page.

The <header> element identifies the top of a page, article, or section.
The <header> element may include a heading, paragraphs, and/or a nav.

The <nav> element identifies a section of major navigational links on a page. 
The <nav> element should be reserved for pages within the same website 
Example of a few navs:
* A table of contents
* Previous / Next links

The <article> element represents self-contained content that may be independently distributable or reusable.
Examples of a few articles: 
* A forum post
* A newspaper article
* A blog entry

The <section> element represents a generic standalone section of a document, 
which should always have a heading, with very few exceptions.

The <aside> HTML element represents a portion of a document to the document's main content. 
Asides are frequently presented as sidebars or call-out boxes.

The <footer> HTML element represents the end of a section or article. 
A <footer> usually contains copyright data, links to related documents, or information about the author of the section.
*/
/**************************************************************
 * HEADER, NAV, ARTICLE, SECTION, ASIDE, FOOTER
 ***************************************************************/




/**************************************************************
 * ANCHORS
 ***************************************************************/
/*
The <a> element with its href attribute, 
creates a hyperlink to web pages in the same page or anything a URL can address.

Anchors elements can hyperlink to files and email addresses.
Anchor elements are an inline-level element.

Using the target attribute with an <a> element can open links in a new window
Using the href attribute with HTML IDs can link pages in the same web page 
*/

// Example of opening links in a new window
<a href="#" target="_blank"></a>

// Example of linking pages in the same web page
<body id="header">
    <a href="#header"></a>
</body>
/**************************************************************
 *
 ***************************************************************/




/**************************************************************
 * PRACTICE
 ***************************************************************/
/*
I added a header and moved my previous heading into it.
I added an additional heading inside the header.

I added a section below the header and moved my previous paragraph into it.
I added an additional heading inside the section.

I added a div below the section and added nested a section.
I added headings and a paragraph inside the nested section.

I added a footer containing copyright data.

I added an anchor inside a heading in the header.

I added a nav inside the header and footer
The nav contains five anchor elements hyperlinking to pages in the same web page.
*/
/**************************************************************
* PRACTICE
***************************************************************/




/**************************************************************
* SUMMARY
***************************************************************/
/*
The concepts covered in this chapter:
* Semantics:
    * The practice of giving content on the page meaning and structure by using the proper element. 
    * Helps screen readers and search engines.
* <div> element:
    * Acts as containers and used for styling.
    * Block-level element.
* <span> element:
    * Acts as containers and used for styling.
    * Inline-level element.
* Headings: 
    * Break up content and establish hierarchy
    * Block-level element.
    * Should not be used to style.
* Paragraphs:
    * Adds content to the page.
    * Block-level elements
* Adding importance to text using the <strong> element.
* Adding emphasis to text using the <em> element.
* Structural semantics:
    * <header> 
        * Identifies the top of a page, article, or section.
        * May include a heading, paragraphs, nav.
    * <nav>
        * Identifies a section of major navigational links on a page. 
        * Reserved for pages within the same website 
    * <article>
        * Represents self-contained content
            * May be independently distributable or reusable.
    * <section>
        * Represents a generic standalone section of a document.
            * Should always have a heading.
    * <aside>
        * Represents a portion of a document to the document's main content.
        * Presented as sidebars or call-out boxes.
    * <footer>
        * Represents the end of a section or article. 
        * Contains copyright data, links to related documents, or information about the author of the section.
* Anchors:
    * Creates a hyperlink to web pages in the same page or anything a URL can address.
    * Creates a hyperlink to files and email addresses.
    * Inline-level element.
    * Can open links in a new window.
    * Can link pages in the same web page.
*/
/**************************************************************
* SUMMARY
***************************************************************/