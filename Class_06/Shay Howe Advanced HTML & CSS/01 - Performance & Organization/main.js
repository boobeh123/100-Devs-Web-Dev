/**************************************************************
* Organizing stylesheets
***************************************************************/
/*
Having the ability to write HTML and CSS with a solid understanding is a great expertise to have. 
Knowing the fundamentals of website performance and organization can go a long way.
The organization and architecture of a code base can greatly affect not only the speed of development, but also the speed at which pages render. 

How to organize styles comes down to personal preference.
One practice includes building a strong directory for common base styles, user interface components, and business logic modules.
(example:
# Base
  – normalize.css
  – layout.css
  – typography.css

# Components
  – alerts.css
  – buttons.css
  – forms.css
  – list.css
  – nav.css
  – tables.css

# Modules
  – aside.css
  – footer.css
  – header.css )

The goal here is to start thinking of websites as systems rather than individual pages, 
The base directory includes common styles used across the entire website. 
The components directory includes styles for specific user interface elements. 
The modules directory includes styles for different sections of a page.
*/
/**************************************************************
* Organizing stylesheets
***************************************************************/




/**************************************************************
* Object-oriented CSS
***************************************************************/
/*
Object Oriented CSS identifies two principles that will help build scalable websites with a strong architecture. 

These two principles include:
Separate structure from skin
Separate content from container

Overall separating structure from skin includes abstracting the layout of an element away from the theme of a website. 

The structure of a module should be transparent, allowing other styles to be inherited and displayed without conflict. 

Separating content from the container involves 
removing the dependency of a parent element nesting children elements. 

A heading should look the same regardless of its parent container. Elements need to inherit default styles.

Object Oriented CSS advocates building a component library, staying flexible, and utilizing a grid. 
These principles help you avoid the need to add additional styles every time you add a new page or feature to a website.

(example:
    <div class="alert alert-error">
    <p class="msg">...</p>
    </div>
    
    .alert {...}
    .alert-error {...}
    .msg {...}  )
*/
/**************************************************************
* Object-oriented CSS
***************************************************************/




/**************************************************************
* Scalable & Modular Architecture for CSS
***************************************************************/
/*
The Scalable and Modular Architecture for CSS promotes breaking up styles into five categories:
Base - Includes core element styles, covering the general defaults. 
Layout - Identifies the sizing and grid styles of different elements, determining their layout. 
Module - Targets individual parts of the page. 
State - Used to augment or override other styles in the event that a module includes an alternate state, an active tab for example. 
Theme - Include styles based around the skin, or look and feel, of different modules.

(example:
    <div class="alert is-error">
        <p>...</p>
    </div>

    .alert {...}
    .alert.is-error {...}
    .alert p {...}
    .alert.is-error p {...}  )

The alert class falls into the module category.
The is-error class falls into the state category. 

A solid mix of both OOCSS and SMACSS works well, borrowing principles from each methodology as you prefer.
*/
/**************************************************************
* Scalable & Modular Architecture for CSS
***************************************************************/




/**************************************************************
* Performance Driven Selectors
***************************************************************/
/*
How elements are selected within CSS affects performance. This includes how fast a page renders.

Long selectors reduce performance. This forces the browser to render each selector from right to left. 
The goal is to keep CSS selectors as short as possible, minimizing weight specificitiy.

(example:
Bad: header nav ul li a {...}
Good: .primary-link     {...}  )

Classes are great, they render quickly, allow for styles to be reused, and are already commonly used in building a website. 
Do not prefix class selectors with an element.

Avoid ID selectors when possible. They are overly specific and do not allow for any repetition. 
*/
/**************************************************************
* Performance Driven Selectors
***************************************************************/




/**************************************************************
* Reusable Code
***************************************************************/
/*
One of the largest performance drawbacks comes with bloated file sizes and unnecessary browser rendering. 

One way to cut down on CSS file sizes is to reuse styles as much as possible. 
Any repeating styles or interface patterns should be combined, within a single class. Allowing the styles to be written once and then shared.
*/
/**************************************************************
* Reusable Code
***************************************************************/




/**************************************************************
* Minify & Compress Files
***************************************************************/
/*
Another way to cut down on file size includes minifying and compressing files. Images may be compressed.

One of the more popular types of file compression is called gzip. 
gzip compression takes files and identifies similar strings to compress down. 

Setting up gzip is fairly painless, to gzip files an .htaccess file needs to be added to the root directory of the web server, labeling the specific files to be gzipped. 
The dot at the beginning of the file name is correct, as the .htaccess file is a hidden file.
It is worth noting that .htaccess files only work on Apache web servers, which need to have the following modules enabled:
mod_setenvif.c  mod_headers.c
mod_deflate.c   mod_filter.c
mod_expires.c   mod_rewrite.c

Generally speaking this isn’t an issue. Some web servers may even set up compression for you. 
*/
/**************************************************************
* Minify & Compress Files
***************************************************************/




/**************************************************************
* Measuring compression
***************************************************************/
/*
Google Chrome's web inspector gives a plethora of data around performance within the Network tab. 
There are a few websites that help identify if gzip compression is enabled.

Cutting down the size of a text file helps, compressing the file size of images helps. 
Compression involves removing unnecessary color profiles and comments from the image, without changing the quality of the image at all.

Setting an image’s dimensions in HTML with the height & width attributes does help render the page quicker.
These attributes are to only be used to identify the exact image dimensions and not to shrink an image. 

Using a larger image, then scaling it down with the height and width attributes is bad practice as it loads more data than necessary.

The number of HTTP requests a website makes is one of the largest performance pitfalls. 
Each time a request is made to the server the page load time increases. 

One way to reduce the number of HTTP requests is to combine like files. 
Combine all of the CSS files into one and all of the JavaScript files into one. 
*/
/**************************************************************
* Measuring compression
***************************************************************/




/**************************************************************
* Reduce HTTP requests
***************************************************************/
/*
The number of HTTP requests a website makes is one of the largest performance pitfalls. 
Each time a request is made to the server the page load time increases. 

One way to reduce the number of HTTP requests is to combine like files. 
Combine all of the CSS files into one and all of the JavaScript files into one. 
*/
/**************************************************************
* Reduce HTTP requests
***************************************************************/




/**************************************************************
* Image spriting
***************************************************************/
/*
The practice of spriting images within CSS includes using one background image across multiple elements. 
The goal here is to cut down the number of HTTP requests made from using multiple background images.

To create a sprite take a handful of background images and arrange them into one single image. 
Then using CSS add the sprite as a background image to an element, 
and use the background-position property to display the correct background image.
*/
/**************************************************************
* Image spriting
***************************************************************/




/**************************************************************
* Image Data URI
***************************************************************/
/*
The encoded data for an image can be included within HTML & CSS directly by way of the data URI, removing the need for a HTTP request all together. 
Using the image data URI works great for small images, likely to never change, and where the HTML and CSS can be heavily cached.
Data URIs can be difficult to change and maintain. 

A few tools to help generate data URIs include converters and pattern generators. 
Always double check to see that the actual data URI is less weight than the actual image.
*/
/**************************************************************
* Image Data URI
***************************************************************/




/**************************************************************
* CACHE COMMON FILES
***************************************************************/
/*
Another way to help cut down HTTP requests, 
and to serve up pages faster, is to cache common files. 

When a page loads for the first time specific files may then be cached. 
Now the browser doesn’t have to request the same files again on repeating visits for quite some time. 
How long a period of time is up to you, all depending on how long you would like users to hold on to specific file types.
*/
/**************************************************************
* CACHE COMMON FILES
***************************************************************/