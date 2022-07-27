## Summary:
The concepts covered in this chapter:

* Fallbacks are recommend to support older browsers. 
* HTML5 Shiv - Provides the ability to use HTML5 elements & style with CSS within versions of Internet Explorer 8 and below.
    * Referenced within the head of the document, after stylesheet refrences.
        * You could use a conditional, making sure that the file is only loaded within versions of Internet Explorer 8 and below.
    * Block-level elements created using shiv must update their display declaration.
    * A few HTML5 inline-block elements created using shiv must update their display declaration.
* Modernizr - Provides a way to write conditional CSS and JavaScript based on whether or not a browser supports a specific feature.
    * May be configured to include the HTML5 Shiv.
    * CSS styles may be conditionally applied.
        * RGBa may use hexadecimal values without the use of feature detection. 
    * Can test against media queries. 
        * Provides the ability to only load files based on different media query conditions. 
        * This condition is tested only once, when the page loads.
            * The condition will not be retested if user resize the page.
* Cross Browser Testing - Testing different versions of Internet Explorer can be difficult.

## Lessons learned:
This chapter contains a few techniques to provide support to older browsers, such as different versions of Internet Explorer. One technique known as Shiv or Shim, allow the browser to use HTML5 elements & CSS3 styles.

The next technique is Modernizr. This provides support for specific HTML5 & CSS3 features, regardless of the browser. Modernizr can conditionally apply styles, load files, load media queries, or run scripts.

## Source:
https://learn.shayhowe.com/advanced-html-css/feature-support-polyfills/