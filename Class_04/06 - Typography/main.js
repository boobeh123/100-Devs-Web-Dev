/**************************************************************
* TYPOGRAPHY: TYPEFACE & FONTS
***************************************************************/
/*
One of the first decisions to make when building a website is 
choosing the primary typeface and text color to be used. 
The typeface and text color can have the largest impact on the look and legibility of a page. 

In the past we were limited to a variety of typefaces that we could use. 
These typefaces were the most common fonts available on computers.
If a font isn't available on a computer, it won't render on the website.

We have the ability to embed fonts and much more typefaces are available now. 

A typeface is what we see. It is the impression of how text looks and reads.
A font is a file that contains a typeface. Using a font allows the computer to access the typeface.

By default there are a few fonts that have become known as “web-safe fonts.” 
These fonts are available on every web-browsing-capable device. Some web-safe fonts:
Arial, Georgia, Times New Roman

The @font-face at-rule specifies a custom font with which to display text; 
the font can be loaded from either a remote server or a locally-installed font on the user's own computer.  
*/
/**************************************************************
* TYPOGRAPHY: TYPEFACE & FONTS
***************************************************************/




/**************************************************************
* TYPOGRAPHY: FONT-BASED PROPERTIES
***************************************************************/
/*
These properties edit the look of text on a page: 
Font-based properties & Text-based properties. 

The font-family property is used to declare which font(s) should be used to display text. 
The value should contain multiple font names, all comma separated.

The first declared font is the primary font choice. 
Should the first font be unavailable, fallback fonts are declared after it in order of preference from left to right.
Font names consisting of two or more words must be wrapped in "".

The font-size property sets the size of the font.

The font-style property sets whether a font 
should be styled with a normal, italic, or oblique face from its font-family.

The font-variant property allows you to set all the font variants for a font.
Occasionally text will need to be set in small capitals, font-variant can do this.

The font-weight property sets the boldness of the font. 
The weights available depend on the font-family that is currently set.

All of the font-based properties can be combined into one font property and shorthand value. 
*/
/**************************************************************
* TYPOGRAPHY: FONT-BASED PROPERTIES
***************************************************************/




/**************************************************************
* TYPOGRAPHY: TEXT-BASED PROPERTIES
***************************************************************/
/*
The text-align property sets the horizontal alignment 
of the content inside a block element or table-cell box. 
This means it works like vertical-align but in the horizontal direction.

The text-decoration property sets the appearance of decorative lines on text. 
The most common use of this property it to set or remove underlining from anchors.

The text-indent property sets the length 
of empty space (indentation) that is put before lines of text in a block.

The text-shadow property allows us to add a shadow or multiple shadows to text. 
Using negative length values for the horizontal and vertical offsets 
allows us to move shadows toward the left and the top.

The box-shadow property adds shadow effects around an element's frame.

The text-transform property specifies how to capitalize an element's text. 
It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. 
*/
/**************************************************************
* TYPOGRAPHY: TEXT-BASED PROPERTIES
***************************************************************/




/**************************************************************
* TYPOGRAPHY: LINE-HEIGHT, LETTER SPACING, WORD SPACING
***************************************************************/
/*
The line-height property sets the height of a line box. 
It's commonly used to set the distance between lines of text. 

The best practice for legibility is 
to set the line-height to around one and a half times our font-size property value. 
This could be quickly accomplished by setting the line-height to 150%. (I did 1.25rem)

Line height can be used to vertically center a single line of text within an element. 
This technique may be seen with buttons, alert messages, and other single-line text blocks.

The letter-spacing property sets the horizontal space between the letters. 
Using a relative length value ensures that we maintain the correct spacing between letters as the font-size of the text is changed. 

The word-spacing property sets the length of space between words and between tags.
*/
/**************************************************************
* TYPOGRAPHY: LINE-HEIGHT, LETTER SPACING, WORD SPACING
***************************************************************/




/**************************************************************
* QUOTING & CITATIONS
***************************************************************/
/*
Writing involves citing different sources or quotations. 
All of the different citation and quotation cases can be covered semantically in HTML
using the <cite>, <q>, and <blockquote> elements. 

The <cite> element is used to reference to an author or creative work. 
The <q> element indicates that the enclosed text is a short inline quotation. 
The <blockquote> element indicates that the enclosed text is an extended quotation. 

To quote a large block of text that 
comes from an external source and spans several lines, use the <blockquote> element. 

Longer quotes used within the <blockquote> element will often include a citation. 
This citation may comprise both the cite attribute and the <cite> element.
*/
/**************************************************************
* QUOTING & CITATIONS
***************************************************************/




/**************************************************************
* PRACTICE
***************************************************************/
/*
The instruction added text-color and font properties to the body. 

I applied a text-color, line-height, and font-sizes to several headings.
I applied a text-color, font-size, font-weight to h5s.
I re-defined strong, cite, and em rules. These were reset.

I applied color to the anchor and its hover pseudo-element.

The instructions added line-height and font-size to the .logo class.

I created a .tagline class and applied it to the h3 heading.

The instructions added font-weight and font-size to the nav.

I applied a text-color and font-weight to the footer.
I added a line-height property for the .hero class

The instructions removed text-decorations from anchors.

I applied text-transform and a value of uppercase to the h5 heading.

I applied letter-spacing to the nav.

I applied text-align to the .tagline class and the nav.
I applied text-align to the .hero class

I added a font from google fonts.
I applied the font-family property with Roboto font.

I applied font-weight and text-transform to the .logo class

The instructions added font-weight to the .hero p class.
*/
/**************************************************************
* PRACTICE
***************************************************************/