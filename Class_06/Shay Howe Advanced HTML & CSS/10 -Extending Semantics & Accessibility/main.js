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
machines to pick up additional semantics and information. 

Adding microdata to your website is accomplished by using 
predetermined attributes and values. 

Microdata is used while coding contact information & calendar events.
There are encoding models for products and reviews.

One example of microdata is within Google.
Microdata is interpreted & used within search results to display 
more relevant data. 
Searching for a business location yields the address & contact information 
Chances are this information is being pulled from microdata.

There are a handful of data standards including:
microdata, microformats, RDFa.

Microdata is the standard used to nest metadata that is extracted and 
processed by search engines to provide more relevant results to users.

Microformats is are standards used to embed semantics and structured data in HTML, 
and provide an API to be used by social web applications, search engines, 
aggregators, and other tools.

RDFa will add a set of attribute-level extensions to HTML, XHTML and various 
XML-based document types for embedding rich metadata within Web documents. 

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
itemscope, itemtype, itemprop.

Itemscope is a boolean global attribute.
It defines the scope of associated metadata. 
Using the itemscope attribute for an element creates a new item, 
which results in a number of name-value pairs that are associated with the element.
Place this attribute on the parent element where all of the microdata 
information pertaining to this item should reside.

Itemtype is a global attribute. It specifies the URL of the vocabulary that 
will be used to define item properties in the data structure.
The microdata item types have been outlined at Schema.org. 

Itemprop is a global attribute. 
It used to add properties to an item. 
Every HTML element can have an itemprop attribute specified.
An itemprop consists of a name-value pair.
The value of this attribute determines what property is being referenced,       (e.g itemprop="streetAddress")
and the content within the element itself determines the value of the property. (e.g 234 N. Sponge Ave.)

A few elements do not get their itemprop value from the content 
within the element: 
<meta>    content attribute   <a>       href attribute
<audio>   src attribute       <area>    href attribute
<embed>   src attribute       <link>    href attribute
<iframe>  src attribute       <object>  data attribute
<img>     src attribute       <time>    datetime attribute
<source>  src attribute
<video>   src attribute

Their value is determined from the value of another 
attribute on the element.
*/
/**************************************************************
* Outlining MicroData
***************************************************************/




/**************************************************************
* Person & Event microdata
***************************************************************/
/*
When referring to a person the person microdata library should be used. 

When referring to an event the event microdata library should be used. 
*/
/**************************************************************
* Person & Eventmicrodata
***************************************************************/




/**************************************************************
* WAI-ARIA
***************************************************************/
/*
WAI-ARIA: Web Accessibility Initiative-Accessible Rich Internet Applications.
This is a specification written by the W3C, 
defining a set of additional HTML attributes that can be applied to elements 
to provide semantics and improve accessibility. 

WAI-ARIA is a specification that helps make web pages and applications more 
accessible to those with disabilities. 

WAI-ARIA helps define what blocks of content do, 
how blocks of content are configured, and additional properties to support 
assistive technologies. 

There are three main features defined in the specification:
Roles, Properties, States.
Roles define what an element is or does. Provides semantic meaning to content.
Properties define properties of elements.
States are special properties that define the current conditions of elements.
*/
/**************************************************************
* WAI-ARIA
***************************************************************/




/**************************************************************
* WAI-ARIA Roles
***************************************************************/
/*
Setting WAI-ARIA roles is accomplished using the role attribute. 
These roles specify what certain elements and blocks of content do on a page.

WAI-ARIA roles break down into four different categories, 
including abstract, widget, document structure, and landmark roles. 

Document-structure roles define the organizational structure of content on a 
page. 
Landmark roles define the regions of a page. 

ARIA document-structure roles are used to provide a structural description 
for a section of content.
A landmark is an important subsection of a page. 
The landmark role is an abstract superclass for the aria role values for 
sections of content that are important enough that users will be able to 
navigate directly to them.

If multiple header and footer elements exist on a page,
banner & contentinfo roles should be applied on the elements 
directly tied to the document from a top level perspective, 
not elements nested within other regions of the document structure.
*/
/**************************************************************
* WAI-ARIA Roles
***************************************************************/





/**************************************************************
* WAI-ARIA States & Properties
***************************************************************/
/*
In combination with WAI-ARIA roles there are also states and properties 
which help inform assistive technologies how content is configured. 

WAI-ARIA States & Properties are broken into four categories, including: 
widget attributes, live region attributes, drag-and-drop attributes, and 
relationship attributes.

The widget attributes support widget roles and are specific to the user 
interface and where users take actions. 

The live region attributes may be applied to any element and are used to 
indicate content changes for assistive technologies.

Drag-and-drop attributes supply information about drag-and-drop interface 
elements and provide alternate behaviors to assistive technologies. 

Relationship attributes outline the relationship between elements when the 
document structure cannot be determined.
*/
/**************************************************************
* WAI-ARIA States & Properties
***************************************************************/