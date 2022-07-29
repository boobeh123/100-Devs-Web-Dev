/**************************************************************
* Extending Semantics & Accessibility
***************************************************************/
/*
Knowing how to write semantic & accessible code properly takes an understanding 
of how semantics & accessibility work.

Do your best and take pride in your work. 
Use semantic elements & attributes.
Use microdata & WAI-ARIA to extend the value of your code.

Be an advocate for semantics & accessibility. 
Be an advocate for the code you write.
*/
/**************************************************************
* Extending Semantics & Accessibility
***************************************************************/




/**************************************************************
* Semantic Motivation
***************************************************************/
/*
Semantics provide a larger meaning in writing code.
Semantics largely benefit everyone. 
Semantics provide a shared and unambiguous meaning to content. 

Semantics give content solid structure and value, favoring accessibility, 
providing better user interfaces & more defined information to assistive technologies. 

Semantics promotes interoperability, allowing the exchange and use of 
information across different platforms and devices.
*/
/**************************************************************
* Semantic Motivation
***************************************************************/




/**************************************************************
* Structural Semantics
***************************************************************/
/*
The beginner’s guide discusses the use of structural semantics, 
specifically using the header, nav, article, section, aside, & footer elements.

These elements are used to provide additional background context to the content 
and provides a better way to outline and structure pages.

Every now and then you may want to show or hide an element 
depending on a user’s state. 

This is accomplished with the display: none; CSS declaration,
but it is semantically incorrect.
A better option is to use the hidden Boolean attribute, 
which is a global attribute available to all elements for use. 

It performs the same way as the CSS declaration, but semantically it 
represents an element that should be hidden, or ignored, for the time being. 
Screen readers recognize this attribute, temporarily skipping hidden elements.

Imagine a blind user attempting to fill out a form 
and the first piece of content, 
before even filling out the form, is a success message. 
This is a poor user experience, and can easily be fixed using proper semantics.
*/
/**************************************************************
* Structural Semantics
***************************************************************/




/**************************************************************
* Text Level Semantics: Bold
***************************************************************/
/*
There are a few different ways to make text bold.

One would be the font-weight CSS property.

The HTML elements that do this are <strong> and <b>. 
These two elements have the same presentation with different semantic meanings.

The strong element outlines text that has a strong importance. 
The b element identifies text that is to be stylistically offset, w/o importance. 
*/
/**************************************************************
* Text Level Semantics: Bold
***************************************************************/




/**************************************************************
* Text Level Semantics: Italicize
***************************************************************/
/*
There are a few different ways to make text italicized.

One would be the font style CSS property.

The HTML elements that do this are <em> and <i>.
These two elements have the same presentation with different semantic meanings.

The em element places a stressed emphasis on text with an added importance. 
The i element identifies text to be expressed in an alternate voice or tone. Primarily used in dialog.
*/
/**************************************************************
* Text Level Semantics: Italicize
***************************************************************/




/**************************************************************
* Text Level Semantics: Underlining Text
***************************************************************/
/*
There are a few different ways to make text underlined.

One would be the text decoration CSS property. 

The HTML elements that do this are <ins> and <u>.

The <ins> HTML element represents a range of text that has been added to 
a document. 

This ins element may use the cite and datetime attributes.
The cite attribute provides a machine readable source providing reference 
for the addition.
The datetime attribute indicates the time and date of the change and 
must be a valid date with an optional time string. 

The <u> HTML element represents a span of inline text which should be 
rendered in a way that indicates that it has a non-textual annotation. 
Refers to an unarticulated annotation and is used to label text as a proper 
name, often in another language, or to point out a misspelling.

*/
/**************************************************************
* Text Level Semantics: Underlining Text
***************************************************************/




/**************************************************************
* Text Level Semantics: Striking Text
***************************************************************/
/*
There are a few different ways to strike through text.

One would be the text decoration CSS property. 

The HTML elements that do this are <del> and <s>.

Represents a range of text that has been deleted from a document.
May use the cite and datetime attributes.
The cite attribute specifies a resource that explains the change.
The datetime attribute specifies when the content was removed from the document.

The <s> HTML element renders text with a line through it. Represents things 
that are no longer relevant or no longer accurate. 
*/
/**************************************************************
* Text Level Semantics: Striking Text
***************************************************************/




/**************************************************************
* Text Level Semantics: Highlighting Text
***************************************************************/
/*
To highlight text for reference purposes the mark element should be used. 

The <mark> HTML element provides a semantic way to identify text.
Represents text which is marked or highlighted for reference or notation purposes.
*/
/**************************************************************
* Text Level Semantics: Highlighting Text
***************************************************************/




/**************************************************************
* Text Level Semantics: Abbreviating Text
***************************************************************/
/*
The <abbr> HTML element represents an abbreviation or acronym.
This element should use the the title attribute providing the full value 
of the phrase being abbreviated.
*/
/**************************************************************
* Text Level Semantics: Abbreviating Text
***************************************************************/




/**************************************************************
* Text Level Semantics: Sub & Superscripts
***************************************************************/
/*
The <sub> HTML element specifies inline text which should be displayed as 
subscript for solely typographical reasons. 
Subscripts are typically rendered with a lowered baseline using smaller text.

The <sup> HTML element specifies inline text which is to be displayed as 
superscript for solely typographical reasons. 
Superscripts are usually rendered with a raised baseline using smaller text.
*/
/**************************************************************
* Text Level Semantics: Sub & Superscripts
***************************************************************/




/**************************************************************
* Text Level Semantics: Meter & Progress
***************************************************************/
/*
To gauge, scale, or indicate progress, 
the meter and progress elements should be used. 

The <meter> HTML element represents either a scalar value within a known 
range or a fractional value. Used to measure a fixed value, one that does not 
change over time.

The <progress> HTML element displays an indicator showing the completion 
progress of a task, typically displayed as a progress bar. Used to measure the progress of a increasing measurement.

The meter element may be used with attributes:
    min: The lower numeric bound of the measured range. Must be less than max attribute value.
    max: The upper numeric bound of the measured range. Must be greater than th min attribute value.
    low: The upper numeric bound of the low end of the measured range. 
   high: The lower numeric bound of the high end of the measured range.
optimum: This attribute indicates the optimal numeric value. It must be within the range 
  value: The current numeric value.

The min & max attributes set the lower and upper bounds of the range,
where the value attribute sets the exact measured value. 

The low and high attributes identify what is to be considered the lower and higher 
parts of the range, 

The optimum value identifies the most favorable part of the range, 
of which may be in the lower or higher parts.
*/
/**************************************************************
* Text Level Semantics: Meter & Progress
***************************************************************/




/**************************************************************
* Text Level Semantics: Time & Address
***************************************************************/
/*
Representing time and addresses in HTML can be accomplished using 
the time and address elements respectively. 

The <time> HTML element represents a specific period in time. 
It may include the datetime attribute to translate dates into 
machine-readable format, allowing for better search engine results 
or custom features such as reminders.

The <address> HTML element indicates that the enclosed HTML provides contact 
information for a person or people, or for an organization.
This includes email addresses, websites, or physical addresses.
*/
/**************************************************************
* Text Level Semantics: Time & Address
***************************************************************/




/**************************************************************
* Text Level Semantics: Presenting Code
***************************************************************/
/*
Presenting code snippets, or samples, within a page can be accomplished using 
either the code or pre elements, or a combination of the two. 

The <code> HTML element represents a fragment of code and 
is displayed in the default monospace font. 
This element is an inline-level element and may be used within paragraphs 
or other block & inline level elements.

The <pre> HTML element represents preformatted text & displays text exactly 
as it is typed, whitespace included. 
Nesting the <code> element within the <pre> element semantically identifies 
larger samples of code.
*/
/**************************************************************
* Text Level Semantics: Presenting Code
***************************************************************/




/**************************************************************
* Text Level Semantics: Line & Word Breaks
***************************************************************/
/*
You may want to include a line break within a line of text.

The <br> HTML element produces a line break in text (carriage-return). 
It is useful for writing a poem or an address, where the division of lines is
significant. The br element does not have a closing tag, simply a beginning. 

You may also specify word breaking opportunities 

The <wbr> HTML element represents a word break opportunity—a position within 
text where the browser may optionally break a line, though its line-breaking 
rules would not otherwise create a break at that location.

This element ensures that should the word need to wrap two lines, 
it does in a legible fashion.
*/
/**************************************************************
* Text Level Semantics: Line & Word Breaks
***************************************************************/




/**************************************************************
* Text Level Semantics: Side Comments
***************************************************************/
/*
The <small> HTML element represents side-comments and small print, 
like copyright and legal text, independent of its styled presentation.
By default, it renders text within it one font-size smaller, such as from small to x-small.
*/
/**************************************************************
* Text Level Semantics: Side Comments
***************************************************************/




/**************************************************************
* Text Level Semantics: Citations & Quotes
***************************************************************/
/*
The beginner’s guide discusses citations and quotes, and when to use the cite,
q, and blockquote elements. 

The cite element used to reference to an author or creative work.
The q element indicates that the enclosed text is a short inline quotation.
The blockquote element indicates that the enclosed text is an extended quotation.
*/
/**************************************************************
* Text Level Semantics: Citations & Quotes
***************************************************************/




/**************************************************************
* Text Level Semantics: Hyperlink attributes
***************************************************************/
/*
The beginner’s guide also outlines hyperlinks, and some of their 
different behaviors. 
What is not covered, is some of the semantic benefits to hyperlinks.
Anchors may use the download and rel attributes.

The download attribute causes the browser to treat the linked URL as a download.
The download attribute can serve as a Boolean attribute, downloading the file as is.
The download attribute may also contain a value, which becomes the file name. 

A hyperlink with the reference attribute may include the relationship attribute.
The rel attribute is the relationship of the linked URL as space-separated link types.
The rel attribute identifies the relationship between the current document and
the document being referenced. 

A few relationship attribute values include:
alternate       author      bookmark
help            license     next
nofllow         noreferrer  prefetch
prev            search      tag
*/
/**************************************************************
* Text Level Semantics: Hyperlink attributes
***************************************************************/




/**************************************************************
* MicroData
***************************************************************/
/*
================ Microdata explained by MDN ================
Microdata is part of the WHATWG HTML Standard 
and is used to nest metadata within existing content on web pages. 

Microdata is an attempt to provide a simpler way of annotating HTML elements 
with machine-readable tags than the similar approaches of using RDFa and microformats.

Microdata uses a supporting vocabulary to describe an item and name-value pairs 
to assign values to its properties. 

Search engines and web crawlers can extract and process microdata from a web page 
and use it to provide a richer browsing experience for users. 

Search engines benefit greatly from direct access to this structured 
data because it allows search engines to understand the information on web pages 
and provide more relevant results to users. 

================ Microdata explained by MDN ================


================ Microdata explained by chapter 10 ================

Microdata is HTML extended with nested groups of name-value pairs that allow 
machines, including browsers and search engines, to pick up additional 
semantics and information for rich content. 

Adding microdata to your website is accomplished by using 
predetermined attributes and values. 
These attributes and values will then be interpreted and extended. 

Microdata is used while coding contact information & calendar events.
There are encoding models for products and reviews.

One example of microdata is within Google.
Microdata is interpreted & used within search results to display 
more relevant data. 
Searching for a business location yields the address & contact information 
Chances are this information is being pulled from microdata.

There are actually a handful of rich, structured data standards including:
1 - microdata: A standard used to nest metadata that is extracted and 
processed by search engines to provide more relevant results to users.

2 - microformats: Standards used to embed semantics and structured data in HTML, 
and provide an API to be used by social web applications, search engines, 
aggregators, and other tools.

3 - RDFa: Adds a set of attribute-level extensions to HTML, XHTML and various 
XML-based document types for embedding rich metadata within Web documents. 

Microdata is the recommended format from Google, and other search engines, 
as well as part of the HTML5 specification. 
Using one of these standards is substantially better than not using any. 

================ Microdata explained by chapter 10 ================
*/
/**************************************************************
* MicroData
***************************************************************/




/**************************************************************
* Outlining MicroData
***************************************************************/
/*
Microdata is identified using three main attributes:
1 - itemscope: A boolean global attribute that defines the scope of 
associated metadata. Specifying the itemscope attribute for an element 
creates a new item, which results in a number of name-value pairs that are 
associated with the element.

2 -  itemtype: A global attribute that specifies the URL of the vocabulary 
that will be used to define itemprop's (item properties) in the data structure.

3 -  itemprop: A global attribute that is used to add properties to an item. 
Every HTML element can have an itemprop attribute specified, and an itemprop 
consists of a name-value pair.

The itemscope Boolean attribute declares the scope of each microdata item. 
Place this attribute on the parent element where all of the microdata 
information pertaining to this item should reside.

Once you have determined the scope, 
use the itemtype attribute to identify what microdata vocabulary should be used.
The microdata item types have been outlined at Schema.org. 

Once the scope and type of the item have been determined, 
properties may then be set. 

These properties are identified by different elements which include the 
itemprop attribute. 

The value of this attribute determines what property is being referenced, 
and the content within the element itself most commonly determines the value 
of the property.


*/
/**************************************************************
* Outlining MicroData
***************************************************************/




/**************************************************************
* WAI-ARIA
***************************************************************/
/*
WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) 
is a specification written by the W3C, defining a set of additional HTML 
attributes that can be applied to elements to provide additional semantics and 
improve accessibility wherever it is lacking. 

There are three main features defined in the spec:
     Roles: These define what an element is or does. Provide semantic meaning to content.
Properties: These define properties of elements.
    States: Special properties that define the current conditions of elements

Making complex UI controls that involve unsemantic HTML and dynamic 
JavaScript-updated content can be difficult. 

WAI-ARIA is a technology that can help with such problems by adding in 
further semantics that browsers and assistive technologies can recognize and
use to let users know what is going on. 

HTML5 introduced a number of semantic elements to define common page features 
(<nav>, <footer>, etc.) 
Before these were available, developers would use <div>s with IDs or classes, 
e.g. <div class="nav">
The problem here is that visually they work, but screenreaders can't make 
any sense of what they are at all.
*/
/**************************************************************
* WAI-ARIA
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/





/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/