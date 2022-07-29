## Summary:
The concepts covered in this chapter:

* Motivation to write semantic code:
    * Use semantic elements & attributes.
    * Use microdata & WAI-ARIA to extend the value of your code.
    * Be an advocate for semantics & accessibility. 
    * Be an advocate for the code you write.
    * Do your best and take pride in your work. 
* Structural Semantics:
    * Hiding Content
* Text-Level Semantics: 
    * Semantically Bold Elements
    * Semantically Italicize Elements
    * Semantically Underline Elements
    * Semantically Striking Elements
    * Semantically Highlighting Elements
    * Semantically Using Sub & Superscripts Elements
    * Semantically UsingMeter & Progress Elements
    * Semantically Using Time & Address Elements
    * Semantically Presenting Code Elements
    * Semantically Using Line & Word Breaks Elements
    * Semantically Using Side Comment Elements
    * Semantically Using Citations & Quotes
    * Semantically Using Hyperlink attributes
* Microdata - The standard used to nest metadata.
    * Metadata is extracted & processed by search engines.
        * Understands the information & provides more relevant search results.
    * Identified using three main attributes:
        * Itemscope - A boolean global attribute. Defines the scope of associated metadata.
        * Itemtype - A global attribute that specifies the URL that defines item properties in the data structure.
            * Itemtypes are outlined at Schema.org
        * Itemprop - A global attribute used to add properties to an item. 
    * Part of the WHATWG HTML Standard.
* Microformats - A standard used to embed semantics and structured data in HTML.
    * Provides an API to be used by social web applications, search engines, aggregators, and other tools.
* RFDa - A set of attribute-level extensions to HTML, XHTML and various 
XML-based document types for embedding rich metadata within Web documents. 
* WAI-ARIA - A specification that helps make web pages and applications more accessible to those with disabilities. 
    * Helps define what blocks of content do, how blocks of content are configured, and additional properties to support assistive technologies. 
    * Three main features defined in the specification:
        * Roles - Define what an element is or does. Provides semantic meaning to content.
            * Four different categories:
                * Abstract - Intended for use by browsers to help organize and streamline a document. Should not be used by developers.
                * Widget - An interactive component of a graphical user interface. This is an abstract role.
                * Document-structure - Define the organizational structure of content on a page. 
                * Landmark - Define the regions of a page. 
        * Properties - Define properties of elements.
        * States - Special properties that define the current conditions of elements.
            * States AND properties have four categories:
                * Widget attributes - Support widget roles and are specific to the user interface and where users take actions. 
                * Live Region attributes - May be applied to any element and are used to indicate content changes for assistive technologies.
                * Drag-and-drop attributes - Supply information about drag-and-drop interface elements and provide alternate behaviors to assistive technologies. 
                * Relationship attributes - Outline the relationship between elements when the document structure cannot be determined.

## Lessons learned:
The concepts covered in this chapter deeply cover using best practices with semantics, specifications, and standards while creating a web page.
I learned that screen readers recognize elements with the hidden attribute. 

There are multiple elements mentioned in this chapter. Each were compared against others and given examples. These examples display where, how, and why specific elements should be used over others. If you are interested in finding out more, please visit my notes located in the main.js file.

I am eager to see where the meter & progress elements can be used! 

I know that using one of these standards is substantially better than not using any. I created microdata for a person and event from the examples in the reading. Taking the extra time to apply these standards and specifications will overall make a webpage more accessible and relevant to users who find it.

## Source:
https://learn.shayhowe.com/advanced-html-css/semantics-accessibility/