## Summary:
The concepts covered in this chapter:
* Organizing stylesheets:
    * Building a directory:
        * The base directory:
            * Includes common styles used across the entire website. 
        * The components directory:
            * Includes styles for specific user interface elements. 
        * The modules directory:
            * Includes styles for different sections of a page.
    * Object Oriented CSS:
        * Separate structure from skin:
            * Includes abstracting the layout of an element away from the theme of a website. 
        * Separate content from container:
            * Removing the dependency of a parent element nesting children elements. 
    * Scalable & Modular Architecture CSS:
        * Base:
            * Includes core element styles, covering the general defaults. 
        * Layout 
            * Identifies the sizing and grid styles of different elements, determining their layout. 
        * Module 
            * Targets individual parts of the page. 
        * State 
            * Used to augment or override other styles in the event that a module includes an alternate state. 
        * Theme 
            * Include styles based around the skin, or look and feel, of different modules.
    * A solid mix of both OOCSS and SMACSS works well, borrowing principles from each methodology as you prefer.
* Optimizing Stylesheets
    * The goal is to keep CSS selectors as short as possible, minimizing weight specificitiy.
    * Long selectors reduce performance.
        * This forces the browser to render each selector from right to left. 
    * Classes allow for styles to be reused and they render quickly. 
    * Avoid ID selectors when possible. They are overly specific and do not allow for any repetition. 
    * Reusuable code:
        * Allows styles to be written once and then shared.
    * Compressing files and images reduce file size without changing the quality of the image at all.
    * Setting an image’s dimensions in HTML with the height & width attributes does help render the page quicker.
        * These attributes are to only be used to identify the exact image dimensions
        * Scaling an img down with height & width attributes is bad practice.
    * HTTP Requests - The number of requests a website makes is one of the largest performance pitfalls. 
        * Each time a request is made to the server the page load time increases. 
        * One way to reduce the number of HTTP requests is to combine like files. 
        * Image Spriting - The practice of spriting images within CSS includes using one background image across multiple elements. 
            * The goal is to cut down the number of HTTP requests made from using multiple background images.
        * Image Data URI - The encoded data for an image can be included within HTML & CSS directly by way of the data URI, removing the need for a HTTP request all together.
        * Cache common files - When a page loads for the first time specific files may then be cached. 
            * The browser doesn’t have to request the same files again on repeating visits for quite some time. 

## What did you learn?
This chapter has two main focuses: Organization & Optimization.

The organization half stresses a few particular ways to structure the styles folder/directory. 
I'm eager to be able to bring structure to the styles folder and how it will impact decision making while coding.

The optimization half has shown me so many ways to improve performance by reducing render time, file size, & HTTP requests. 
I learned how long selectors impact performance.
I understand not to shrink img elements with their height & width attributes.
I discovered that the number of HTTP requests a website makes is one of the largest performance pitfalls. 
The practice of spriting images had me raise both of my hands thinking "of course that's possible?!". I would like to know if localStorage plays a part with being able to cache common files?

## Source:
https://learn.shayhowe.com/advanced-html-css/performance-organization/