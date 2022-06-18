/**************************************************************
 * CSS: THE CASCADE & SELECTORS
 ***************************************************************/
/*
CSS loads styles cascading from the top to bottom.

Every selector in CSS has a specificity weight. 
There are 3 types of selectors previously mentioned: 
The type selector - Holds lowest weight of 001
The class selector - Holds medium weight of 010
The ID selector - Holds most weight of 100

The selector with more specificity has priority during cascade rendering. 

Using an ID and type selector together adds their specificity weight (101)
HTML Elements can have multiple class attributes.
A low specificity weight can be achieved by using multiple classes to layer different styles. 
*/
/**************************************************************
 * CSS: THE CASCADE & SELECTORS
 ***************************************************************/




/**************************************************************
* COLOR PROPERTY
***************************************************************/
/*
Color values within CSS are defined on an sRGB color space. 
There are four ways to represent sRGB colors with CSS: 
Keywords, Hexadecimal notation, RGBa, and HSLa.

Keyword values are names such as red, green, or blue.

Hexadecimal values consist of a # followed by 3 or 6 character figure. 
In 6-character notation, 
the first 2 characters represent the red channel, 
the next 2 characters represent the green channel, 
the last 2 characters represent the blue channel. 

In 3-character notation, 
the 1st character represents the red channel, 
the 2nd character represents the green channel, 
the 3rd character represents the blue channel.

RGBa values use the rgba() function,  
rgba() accepts four values, each value is a number and separated by commas.
the 1st value represents the red channel, 
the 2nd value represents the green channel, 
the 3rd value represents the blue channel,
the 4th value represents the alpha/transparency channel 
A value of 0 creates a fully transparent color. (invisible) 
A value of 0~1 creates a semi-transparent color.
A value of 1 creates a fully opaque color. 

HSLa values use the hsla() function and accepts four values.
The 1st value represents the hue,
the 2nd value represents the saturation,
the 3rd value represents the lightness.
the 4th value represents the alpha/transparency channel. 
*/

// Example of keyword values
body {
    color: gray;    // gray is the keyword value
}

// Example of Hexadecimal values
body {
    color: #333;
}

// Example of RGBA values
body {
    color: RGBA(0,0,0,.25);
}

// Example of HSLA values
body {
    color: HSLA(50, 50%, 50%, .25);
}
/**************************************************************
 * COLOR PROPERTY
 ***************************************************************/




/**************************************************************
 * LENGTH PROPERTY
***************************************************************/
/*
There are two types of lengths: Absolute and Relative.

Absolute length values are fixed to a physical measurement.
Relative length values rely on the length of another measurement.

The pixel is equal to 1/96th of an inch; There are 96 pixels in an inch. 

The percentage is one of the relative values. 
% lengths are defined in relation to the length of another object. 

The em unit is another relative value. 
Its length is calculated based on an element’s font size.
*/
/**************************************************************
 * LENGTH PROPERTY
 ***************************************************************/




/**************************************************************
* SUMMARY
***************************************************************/
/*
The concepts covered in this chapter:
* Cascade - CSS loads styles from top to bottom.
* Specificity weight:
    * Types selectors holds lowest weight of 1.
    * Class selectors holds medium weight of 10.
    * ID selectors holds most weight of 100.
* Color property:
    * Colors in CSS are defined on a sRGB color space. 
    * There are four ways to represent sRGB colors with CSS: 
        * Keywords
        * Hexadecimal notation
        * RGBa
        * HSLa
    * RGBa & HSLa have alpha/transparency channels to create semi-transparent or opaque colors.
* Length property:
    * Absolute lengths - Are fixed to a physical measurement.
    * Relative lengths - Rely on lengths of another measurement.
    * Pixels - The pixel is equal to 1/96th of an inch; There are 96 pixels in an inch.
    * Percentages - A relative value. Defined in relation to the length of another object. 
    * Em - A relative value. Its length is calculated based on an element’s font size.
*/
/**************************************************************
* SUMMARY
***************************************************************/




/**************************************************************
 * PRACTICE
 ***************************************************************/
/*
N/A FOR THIS CHAPTER.
*/
/**************************************************************
 * PRACTICE
***************************************************************/