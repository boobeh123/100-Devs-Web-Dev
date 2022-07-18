/**************************************************************
* JavaScript: Intro
***************************************************************/
/*
JavaScript provides the ability to add interactivity to a website, 
and help enrich the user experience. 

HTML provides a page with structure, 
CSS provides a page with appearance, 
JavaScript provide a page with behavior.

JavaScript should be saved in an external file with the .js file extension.
It is referenced within an HTML document using the script element. 
The best place to reference JavaScript files is right before the closing </body>
tag so that the JavaScript file is loaded after all of the HTML has been parsed. 
*/
/**************************************************************
* JavaScript: Intro
***************************************************************/




/**************************************************************
* JavaScript: Variables & Values
***************************************************************/
/*
Variables are containers that store values. 
Values may include strings, booleans, numbers, undefined, null, 
or other values such as functions or objects.

Variable names must begin with a letter, underscore (_), or dollar sign ($). 
Variables cannot begin with numbers, and they cannot use hyphens. 
JavaScript is case sensitive so letters include a~z as lower & uppercase.

The common convention around naming variables is to use camelCase.
camelCase consist of combining words while removing spaces, 
capitalizing the beginning of each new word except for the initial word. 
*/

// Creating variables with values
let mood = "focused";   // string
const wallet = 0;       // number
var ballin = false;     // boolean
/**************************************************************
* JavaScript: Variables & Values
***************************************************************/




/**************************************************************
* JavaScript: Statements
***************************************************************/
/*
JavaScript is a set of statements, of which are executed by the browser 
in the sequence they are written. 

New statements should begin on a new line, and indentation should be used 
when nesting statements for better legibility, but is not required.
*/

// Statements
// alert('Hello world');
console.log('Hello world');
// return ('Hello world');
/**************************************************************
* JavaScript: Statements
***************************************************************/




/**************************************************************
* JavaScript: Functions 
***************************************************************/
/*
Functions provide a way to perform a set of scripted behaviors now, 
or saved for later,
and depending on the function they may even accept different arguments.

A function is defined by using the function keyword 
followed by the function name, 
a list of commas separated arguments wrapped in parentheses, if necessary, 
and then the JavaScript statement, or statements, 
that defines the function enclosed in curly braces, {}.

Note from me: -> I love how functions are explained in the 2nd paragraph, well said.
*/

// Function
function greetOthers(name) {
    return `Hello ${name}`;
}
console.log(greetOthers('world'));
/**************************************************************
* JavaScript: Functions
***************************************************************/




/**************************************************************
* JavaScript: Arrays
***************************************************************/
/*
Arrays can be used to store, and return, a variety of different values.
*/

// Arrays containing different data types.
let arrayOfStrings = ["Hello", "world"];
const arrayOfNumbers = [1,2,3];
var arrayOfElements = [null, undefined, [true, false], {name: "John"}];
/**************************************************************
* JavaScript: Arrays 
***************************************************************/




/**************************************************************
* JavaScript: Objects
***************************************************************/
/*
JavaScript is also built on the foundation of objects, 
which are a collection of key and value pairs. 
*/

// Object containing properties, property values, and a method.
let ball = {
    color: ["red", "green", "blue", "yellow"],
    quantity: 50,

    bounce() {
        console.log('boiiiiiing');
    }
}
console.log(ball.color);
console.log(ball.quantity);
ball.bounce();
/**************************************************************
* JavaScript: Objects
***************************************************************/




/**************************************************************
* jQuery: Intro
***************************************************************/
/*
"The top 10,000 websites JavaScript is used within over 92% of them, 
and jQuery is used within in over 63% of them." 

jQuery is a JavaScript Library that focuses on simplifying DOM manipulation, AJAX calls, and Event handling.

jQuery uses a format, $(selector).action() to assign an element(s) to an event. 
$(selector) will call jQuery to select selector element(s), and assign it to an event API called .action().

The $ object is specifically made for selecting an element and then returning
that element node to perform an action on it. 

jQuery can use a minified or uncompressed version.

The minified version is for deployment, 
to minimise the size of downloads a user's browser has to make. Has better loading times.

The uncompressed version is for development, 
since the minified version is very hard to debug with.

Referencing a jQuery library and a JavaScript file should be separate.

Take a look at the Google CDN reference:
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js">
The http has been omitted intentionally to allow for both http & https connections. 

Before trigging any jQuery to traverse and manipulate a page 
it is best to wait until the DOM is finished loading. 

The jQuery ready event, .ready(), can be called 
when the HTML document is ready to be altered. 

*/

// ready event 
$(document).ready(function() {
    console.log("Hello jQuery");
});
/**************************************************************
* jQuery: Intro
***************************************************************/




/**************************************************************
* jQuery: Selectors
***************************************************************/
/*
The core concepts of jQuery is to select elements and perform an action. 

Selecting elements with jQuery mimics CSS. jQuery supports every CSS3 selector and general CSS selectors.

Invoking the jQuery object, $(), containing a selector 
will return that DOM node to manipulate it. 
The selector falls within the parentheses.

you may want to select the element in which was referenced 
inside of the original selector. 

The this keyword may be used to refer to the element selected 
in the current handler.

*/
// $('.feature');           // Class selector
// $('li strong');          // Descendant selector
// $('em, i');              // Multiple selector
// $('a[target="_blank"]'); // Attribute selector
// $('p:nth-child(2)');     // Pseudo-class selector

// Refers to the div
$('div').click(function(event) {
    $(this);
});
/**************************************************************
* jQuery: Selectors
***************************************************************/




/**************************************************************
* jQuery: Traversing
***************************************************************/
/*
jQuery provides a handful of methods for traversing up and down the DOM tree, 
filtering and selecting elements as necessary.
Methods may be chained together by using dot notation between each method.

These methods fall into three categories:
1 - Filtering:
    .eq()       - Reduce the set of matched elements to the one at the specified index.
    .filter()   - Reduce the set of matched elements to those that match the selector or pass the function's test.
    .first()    - Reduce the set of matched elements to the first in the set.
    .has()      - Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
    .is()       - Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
    .last()     - Reduce the set of matched elements to the final one in the set.
    .map()      - Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
    .not()      - Remove elements from the set of matched elements.
    .slice()    - Reduce the set of matched elements to a subset specified by a range of indices.
2 - Miscellaneous Traversing:
    .add()      - Create a new jQuery object with elements added to the set of matched elements.
    .end()      - End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
    .andSelf()  - Deprecated, use addBack().
    .addBack()  - Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
    .contents() - Get the children of each element in the set of matched elements, including text and comment nodes.
3 - DOM Tree Traversing:
    .children()     - Get the children of each element in the set of matched elements, optionally filtered by a selector.
    .closest()      - For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree
    .find()         - Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
    .next()         - Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
    .nextAll()      - Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
    .nextUntil()    - Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
    .offsetParent() - Get the closest ancestor element that is positioned.
    .parent()       - Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
    .parents()      - Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
    .parentsUntil() - Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
    .prev()         - Get the immediately preceding sibling of each element in the set of matched elements. If a selector is provided, it retrieves the previous sibling only if it matches that selector.
    .prevAll()      - Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
    .prevUntil()    - Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
    .siblings()     - Get the siblings of each element in the set of matched elements, optionally filtered by a selector.

*/
/*===================== FILTERING: .filter()=================*/
// Selects every odd li element and applies background-color to text.
$(".one li").filter(":nth-child(odd)").css("background-color", "red");
// Selects every li-element with .type class and applies color to text.
$(".one li").filter(".type").css("color", "navy");
// Selects every li-element with .collection class and applies color to text.
$(".one li").filter(".collection").css("color", "dodgerblue");
/*===================== FILTERING: .filter()=================*/


/*===================== FILTERING: .slice()==================*/
// Selects li-elements starting at index 0 until the end, and applies color to text.
$(".two li").slice(0).css("color", "green");
// Selects li-elements starting at index 1 and stopping at index 4. Applies background-color to li elements.
$(".two li").slice(1,4).css("background-color", "salmon");
/*===================== FILTERING: .slice()==================*/


/*===================== FILTERING: .not()====================*/
// Selects not-even-elements (odd) and applies background-color to elements.
$(".three li").not(":nth-child(even)").css("background-color", "blue");
/*===================== FILTERING: .not()====================*/


/*===================== FILTERING: .last()====================*/
// Selects last li-element and applies background-color to elements.
$( ".four li" ).last().css( "background-color", "gold" );
/*===================== FILTERING: .last()====================*/


/*===================== FILTERING: .first()====================*/
// Selects first li-element and applies background-color to elements.
$( ".six li" ).first().css( "background-color", "orange" );
/*===================== FILTERING: .first()====================*/


/*===================== FILTERING: .is()======================*/
// Selects div elements and listens for a click. Each div can be clicked resulting in an action.
// When a div is clicked, 
$(".five div").one("click",function() {
    // Then check which div was clicked.
    if ( $( this ).is( ":first-child" ) ) {
      // If the first div was clicked,
      // then display text -> look at expression below conditional
      $( "p" ).text( "It's the first div." );
    } else if ( $( this ).is( ".blue,.red" ) ) {
      // Otherwise if a div was clicked and contains the .blue and .red class
      // then display text -> look at expression below conditional
      $( "p" ).text( "It's a blue or red div." );
    } else if ( $( this ).is( ":contains('Peter')" ) ) {
      // Otherwise if a div was clicked and contains a string,
      // then display text -> look at expression below conditional
      $( "p" ).text( "It's Peter!" );
    } else {
      // Otherwise, display text.
      $( "p" ).html( "It's nothing <em>special</em>." );}
    // After div was clicked, display text with styles and behavior.
    $( "p" ).hide().slideDown( "fast" );
    $( this ).css({
      "border-style": "inset",
      cursor: "default"
    });
  });
/*===================== FILTERING: .is()======================*/


/*===================== FILTERING: .has()======================*/
// Selects an li-element that is a parent to a ul and li-elements inside the ul
$( ".seven li" ).has( "ul" ).css( "background-color", "cyan" );
/*===================== FILTERING: .has()======================*/


/*===================== FILTERING: .eq()======================*/
// Selects an li-element based off 0 index. Negative does to the last element in the DOM tree.
$( ".eight li" ).eq( 2 ).css( "background-color", "navy" );
$( ".eight li" ).eq( -2 ).css( "background-color", "navy" );
/*===================== FILTERING: .eq()======================*/




/*============== Miscellaneous Traversing: .add()============*/
// Selects div-elements and applies a border to the div.
$( ".nine div" ).css( "border", "2px solid red" )
// Creates a p-element rule 
.add( "p" )
// Applies yellow background to div & paragraph element.
.css( "background", "yellow" );
/*============== Miscellaneous Traversing: .add()============*/


/*============== Miscellaneous Traversing: .end()============*/
// Targets a ul-element with the class of .first
$( ".ten ul.first" )
  // Targets an element with the class of .foo and applies background-color
  .find( ".foo" ).css( "background-color", "red" )
  // Targets an element with the class of .bar and applies background-color
  .end().find( ".bar" ).css( "background-color", "green" );
/*============== Miscellaneous Traversing: .end()============*/


/*============== Miscellaneous Traversing: .addBack() / .andSelf()============*/
$( ".eleven li.third-item" ).nextAll().addBack()
  .css( "background-color", "red" );
/*============== Miscellaneous Traversing: .addBack() / .andSelf()============*/




/*============== DOM Tree Traversing: children()============*/
$( ".twelve ul.level-2" ).children().css( "background-color", "red" );
/*============== DOM Tree Traversing: children()============*/


/*============== DOM Tree Traversing: closest()============*/
// $( ".thirteen li.item-a" )
//   .closest( "ul" )
//   .css( "background-color", "red" );
/*============== DOM Tree Traversing: closest()============*/


/*============== DOM Tree Traversing: find()============*/
// $( ".fourteen li.item-ii" ).find( "li" ).css( "background-color", "red" );
/*============== DOM Tree Traversing: find()============*/
/**************************************************************
* jQuery: Traversing
***************************************************************/




/**************************************************************
* jQuery: Manipulation
***************************************************************/
/*
Selecting and traversing elements in the DOM is only part of what jQuery offers.
jQuery may manipulate elements, by reading, adding, or changing attributes or styles. 

The manipulation methods can retrieve information using a selector
or may also be used to set information. 

Attribute manipulation is the ability to add, remove, or change an attribute 
or its value. 
Attribute Manipuilation methods:
  .addClass()     - Adds the specified class(es) to each element in the set of matched elements.
  .attr()         - Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
  .hasClass()     - Determine whether any of the matched elements are assigned the given class.
  .prop()         - Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
  .removeAttr()   - Remove an attribute from each element in the set of matched elements.
  .removeClass()  - Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
  .removeProp()   - Remove a property for the set of matched elements.
  .toggleClass()  - Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
  .val()          - Get the current value of the first element in the set of matched elements or set the value of every matched element.

Style manipulation is the ability add, remove, or change styles or its value. 
Style Manipulation methods:
  .css()          - Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.
  .height()       - Get the current computed height for the first element in the set of matched elements or set the height of every matched element.
  .innerHeight()  - Get the current computed inner height (including padding but not border) for the first element in the set of matched elements or set the inner height of every matched element.
  .innerWidth()   - Get the current computed inner width (including padding but not border) for the first element in the set of matched elements or set the inner width of every matched element.
  .offset()       - Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.
  .outerHeight()  - Get the current computed outer height (including padding, border, and optionally margin) for the first element in the set of matched elements or set the outer height of every matched element.
  .outerWidth()   - Get the current computed outer width (including padding, border, and optionally margin) for the first element in the set of matched elements or set the outer width of every matched element.
  .position()     - Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
  .scrollLeft()   - Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
  .scrollTop()    - Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
  .width()        - Get the current computed width for the first element in the set of matched elements or set the width of every matched element.

The height, width, or position methods all default to using pixel values. 
Other units of measurement may be used by using a plus sign followed by the quoted unit of measurement.

DOM Manipulation is the ability to add or remove elements, change the placement of elements, 
and alter elements. 
DOM Manipulation methods:
  .after()        - Insert content, specified by the parameter, after each element in the set of matched elements.
  .append()       - Insert content, specified by the parameter, to the end of each element in the set of matched elements.
  .appendTo()     - Insert every element in the set of matched elements to the end of the target.
  .before()       - Insert content, specified by the parameter, before each element in the set of matched elements.
  .clone()        - Create a deep copy of the set of matched elements.
  .detach()       - Remove the set of matched elements from the DOM.
  .empty()        - Remove all child nodes of the set of matched elements from the DOM.
  .html()         - Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
  .insertAfter()  - Insert every element in the set of matched elements after the target.
  .insertBefore() - Insert every element in the set of matched elements before the target.
  .prepend()      - Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
  .prependTo()    - Insert every element in the set of matched elements to the beginning of the target.
  .remove()       - Remove the set of matched elements from the DOM.
  .replaceAll()   - Replace each target element with the set of matched elements.
  .replaceWith()  - Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
  .text()         - Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
  .unwrap()       - Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
  .wrap()         - Wrap an HTML structure around each element in the set of matched elements.
  .wrapAll()      - Wrap an HTML structure around all elements in the set of matched elements.
  .wrapInner()    - Wrap an HTML structure around the content of each element in the set of matched elements.
*/

// Gets the value of the alt attribute.
$('img').attr('alt');

// Sets the value of the alt attribute.
$('img').attr('alt', "Sleepy puppy");
/**************************************************************
* jQuery: Manipulation
***************************************************************/




/**************************************************************
* jQuery: Events
***************************************************************/
/*
jQuery has the ability to easily add event handlers. 
Event handlers are methods that are called only upon a specific event or action taking place. 

The .click() event method is actually a shorthand method 
which uses the .on() method.
The .on() method provides quite a bit of flexibility, 
using automatic delegation for elements that get added to the page dynamically.

It is possible to have multiple event handlers and triggers, 
by nesting one inside another. 

jQuery provides event methods revolved around registering user behaviors as they interact with the browser. 
jQuery Browser methods:
  .resize()         - Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
  .scroll()         - Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
jQuery Document Loading methods:
  .ready()          - Specify a function to execute when the DOM is fully loaded.
jQuery Event Handler Attachment methods:
  .off()            - Remove an event handler.
  .on()             - Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
  .one()            - Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
  jQuery.proxy()    - Takes a function and returns a new one that will always have a particular context.
  .trigger()        - Execute all handlers and behaviors attached to the matched elements for the given event type.
  .triggerHandler() - Execute all handlers attached to an element for an event.
  .unbind()         - Remove a previously-attached event handler from the elements.
  .undelegate()     - Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
jQuery Event Object methods:
  event.currentTarget     - The current DOM element within the event bubbling phase.
  event.preventDefault()  - If this method is called, the default action of the event will not be triggered.
  event.stopPropagation() - Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
  event.target            - The DOM element that initiated the event.
  event.type              - Describes the nature of the event.
jQuery Form Event methods:
  .blur()         - Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
  .change()       - Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
  .focus()        - Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
  .select()       - Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
  .submit()       - Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
jQuery Keyboard Event methods:
  .focusin()      - Bind an event handler to the "focusin" event.
  .focusout()     - Bind an event handler to the "focusout" JavaScript event.
  .keydown()      - Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
  .keypress()     - Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
  .keyup()        - Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
jQuery Mouse Event methods:
  .click()        - Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
  .dblclick()     - Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
  .focusin()      - Bind an event handler to the "focusin" event.
  .focusout()     - Bind an event handler to the "focusout" JavaScript event.
  .hover()        - Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
  .mousedown()    - Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
  .mouseenter()   - Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
  .mouseleave()   - Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
  .mousemove()    - Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
  .mouseout()     - Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
  .mouseover()    - Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
  .mouseup()      - Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.

*/

// Adds a class while hovering over li-elements
$(".fifteen li").hover(function(event) {
  $(this).removeClass("saved-item");
  $(this).addClass("hovered-item");
})

// Adds a click when li-elements are clicked, shorthand method with click()
// $(".fifteen li").click(function(event) {
//   $(this).removeClass("hovered-item");
//   $(this).addClass("saved-item");
// })

// Adds a click when li-elements are clicked, longhand method with on()
$(".fifteen li").on("click",function(event) {
  $(this).removeClass("hovered-item");
  $(this).addClass("saved-item");
})
/**************************************************************
* jQuery: Events
***************************************************************/




/**************************************************************
* jQuery: Effects
***************************************************************/
/*
jQuery also provides a handful of customizable effects. 

These effects include event methods for showing and hiding content, 
fading content in and out, or sliding content up and down. 

Animations may be done in jQuery, CSS animations offer better performance 
from a browser processing standpoint and are preferred where possible. 

jQuery animation effects make for a perfect backup solution to any browser 
not supporting CSS animations.

The duration of an effect can be set. The speed of an animation can be set.

jQuery easing has two keyword values: 
Swing: Starts the animation at a slow pace, speeds up during the animation, and then slows down again before completion. 
Linear: Runs the animation at one constant pace for the entire duration.

When an animation is completed it is possible to run another function.

Basic Effects:
  .hide()         - Hide the matched elements.
  .show()         - Display the matched elements.
  .toggle()       - Display or hide the matched elements.
Custom Effects:
  .animate()      - Perform a custom animation of a set of CSS properties.
  .clearQueue()   - Remove from the queue all items that have not yet been run.
  .delay()        - Set a timer to delay execution of subsequent items in the queue.
  .dequeue()      - Execute the next function on the queue for the matched elements.
  jQuery.fx.interval - The rate (in milliseconds) at which animations fire.
  jQuery.fx.off   - Globally disable all animations.
  .queue()        - Show the queue of functions to be executed on the matched elements.
  .stop()         - Stop the currently-running animation on the matched elements.
Fading Effects:
  .fadeIn()       - Display the matched elements by fading them to opaque.
  .fadeOut()      - Hide the matched elements by fading them to transparent.
  .fadeTo()       - Adjust the opacity of the matched elements.
  .fadeToggle()   - Display or hide the matched elements by animating their opacity.
Sliding Effects:
  .slideDown()    - Display the matched elements with a sliding motion.
  .slideToggle()  - Display or hide the matched elements with a sliding motion.
  .slideUp()      - Hide the matched elements with a sliding motion.

*/

// Displays paragraphs as animation. number in ms or keyword
// $('p').show(2000);
// $('p').show('slow', 'linear');

// Closes notice-popup as animation.
$('.notice-close').on('click', function(event) {
  $('.notice-warning').fadeOut('slow', function(event) {
    $(this).remove();
  });
});
/**************************************************************
* jQuery: Effects
***************************************************************/