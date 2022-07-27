/**************************************************************
* Feature Support & Polyfills
***************************************************************/
/*
Building a website can be both extremely rewarding and frustrating. 
Common frustrations arise from trying to get a website to look and perform the 
same in every browser. 

Websites do not need to look or perform the same in every browser.
Determine what is acceptable for a given website and work from there.

When incorporating CSS3 properties, fallbacks are recommend to support older browsers. 

Other techniques include shivs and polyfills. 
Generally speaking, shivs and polyfills are small JavaScript plugins 
that add support for a requested set of features not natively supported 
by a specific browser.
*/
/**************************************************************
* Feature Support & Polyfills
***************************************************************/




/**************************************************************
* HTML5 Shiv/Shim
***************************************************************/
/*
The HTML5 Shiv provides the ability to use HTML5 elements & style with CSS
within versions of Internet Explorer 8 and below. 

The shiv should be downloaded from Google, then hosted on your server. 
For the best performance, reference the shiv JavaScript file within the head 
of the document, after any stylesheet references. 

You could use a conditional, making sure that the file is only loaded within 
versions of Internet Explorer 8 and below.
The intention is to specifically target browsers that don’t support 
new HTML5 features and elements. 

If HTML5 elements are created using the shiv, any block level elements
needs to be updated using the display: block; declaration.

Internet Explorer 8 and 9 do not correctly define styles for a few HTML5 
inline-block level elements. 
These styles will need to be updated using the display: inline-block declaration. 
All versions of Internet Explorer should be able to use any HTML5 elements afterwards.
*/

/* Example of a conditional comment: 
<!--[if lt IE 9]>
  <script src="html5shiv.js"></script>
<![endif]--> 
*/
/**************************************************************
* HTML5 Shiv/Shim
***************************************************************/




/**************************************************************
* Detecting Browser Features
***************************************************************/
/*
There is a way to to provide support for specific HTML5 and CSS3 
features, regardless of which browser is being used.

Modernizr provides a way to write conditional CSS and JavaScript based on 
whether or not a browser supports a specific feature. 
*/
/**************************************************************
* Detecting Browser Features
***************************************************************/




/**************************************************************
* Loading Modernizr
***************************************************************/
/*
download Modernizr and customize which features you are looking to detect.
Upload the JavaScript file on your server and reference it within the head of 
your HTML document, below any referenced style sheets.

Modernizr may be configured to include the HTML5 Shiv. The shiv doesn’t need 
to be referenced on top of Modernizr.
*/
/**************************************************************
* Loading Modernizr
***************************************************************/




/**************************************************************
* Feature Detection: Conditionally Applying CSS Styles
***************************************************************/
/*
Once Modernizr is up and running CSS styles may be conditionally applied 
based on the features a given browser supports. 

Modernizr has detection for the majority of the CSS3 properties and values, 
all of which can be found in the Modernizr documentation.

One item to consider is if feature detection is necessary for certain styles. 
RGBa color values may use hexadecimal values without the use of feature detection. 
*/
/**************************************************************
* Feature Detection: Conditionally Applying CSS Styles
***************************************************************/




/**************************************************************
* Feature Detection: Conditionally Loading Files
***************************************************************/
/*
Modernizr also provides a way to use feature detection in JavaScript. 

JavaScript polyfills and conditional files may be loaded based on 
the detection of a given feature with the help of jQuery and the jQuery getScript method.

Using Modernizr to set the condition of an if statement in Javascript 
allows different scripts to be executed based on whether or not 
the given condition is true or false. 

If local storage is supported jQuery is used to load the storage.js file 
using the getScript method, and if local storage is not supported jQuery 
is used the storage-polyfill.js file using the getScript method.
*/

// Modernizr checking for local storage support 
/*
$(document).ready(function() {
    if (Modernizr.localstorage) {       // Local storage is available
      jQuery.getScript('storage.js');
    } else {                            // Local storage is not available
      jQuery.getScript('storage-polyfill.js');
    }
}); */
/**************************************************************
* Feature Detection: Conditionally Loading Files
***************************************************************/




/**************************************************************
* Feature Detection: Conditionally Loading Based on Media Queries
***************************************************************/
/*
Modernizr can test against media queries. 
Doing so provides the ability to only load files based on different media query
conditions. 

It is important to note that this condition is tested only once, 
when the page loads, and that is it. 

Should a user resize the page, this condition will not be retested. 
*/

// Modernizer checking for screens above 640px width and loads tabs.js if condition is true
/* 
$(document).ready(function() {
  if (Modernizr.mq('screen and (min-width: 640px)')) {
    jQuery.getScript('tabs.js');
  }
});
*/
/**************************************************************
* Feature Detection: Conditionally Loading Based on Media Queries
***************************************************************/




/**************************************************************
* Feature Detection: Conditionally Running Scripts
***************************************************************/
/*
Using Modernizr, all of the HTML5 and CSS3 features they detect may be tested
within JavaScript. 

For example, it may be worth disabling tooltips on mobile devices due to not 
having hover capabilities, and instead showing the tooltip in plain text 
on the screen. 

The script for calling these tooltips could be wrapped in a Modernizr condition, 
preventing the script from loading on smaller screens.
*/
$(document).ready(function() {
    if (Modernizr.mq('screen and (max-width: 425px)')) {
      $('.size').text('mobile');
    }
});

// $(document).ready(function() {
//     if (Modernizr.mq('screen and (max-width: 769px)')) {
//       $('.size').text('tablet');
//     }
// });

// $(document).ready(function() {
//     if (Modernizr.mq('screen and (max-width: 1440px)')) {
//       $('.size').text('laptop desktop');
//     }
// });
/**************************************************************
* Feature Detection: Conditionally Running Scripts
***************************************************************/




/**************************************************************
* HTML5 & CSS3 Polyfills
***************************************************************/
/*
Currently there are polyfills for nearly all of the different HTML5 and CSS3 
features. 

Understand, not all of these features need polyfills. 
Quite a few of them can be used outright or with the use of a fallback.
*/
/**************************************************************
* HTML5 & CSS3 Polyfills
***************************************************************/




/**************************************************************
* Cross Browser Testing
***************************************************************/
/*
Cross browser testing makes sure a website works well in all browsers. 

Testing different versions of Internet Explorer can be difficult.

There are a handful of services out there that do help with cross browser testing,
some are interactive while others are not. 
Microsoft provides a handful of VirtualPCs that can be used solely 
for testing. 
*/
/**************************************************************
* Cross Browser Testing
***************************************************************/