## Summary:
The concepts covered in this chapter:
* Lists - HTML provides three different types of lists to use on a website.
    * Unordered lists - A list of related items whose order does not matter.
        * Item markers are bullet points
    * Ordered lists - A list of related items whose order is important.
        * Item markers are numeric.
        * Start, reversed, value attributes to adjust an ol's item marker.
    * Description lists - A list of groups of terms and descriptions.
        * < dt > element creates a term in a description list.
        * < dd > element provides a description for the preceding term.
    * Listed items - Creates an item in a list. This element must be contained in a parent element: ol, ul, menu.
        * Items have a marker positioned to the left of the li element.
        * The marker could be square, round, numeric, or alphabetical. 
* Styling lists:
    * We can style the list to display vertically or horizontally. 
    * We can style, position, or remove the marker on an item. 
        * The item markers can use an image as a marker by adding a background image.
    * The list-style-type property sets the marker of a list item element.
    * The list-style-position property sets the position of the ::marker relative to a list item.
    * Horizontal lists can be used to create navs.
        * Using display: inline-block to create horizontal lists.
            * inline-block accepts margins & padding.
            * Removes item marker.
        * Using float to create horizontal lists.
            * Acceptes margins & padding.
            * Retains item marker.



## What did you learn?
Reading: I learned about description lists and made a list with it. 
I used a word as my term, and the word's definition as my term description. 
I learned that item markers can be styled and positioned. I used a background-image as an item marker. I learned how to display a list horizontally and built a navigation out of it.

Project: I implemented the nav from this chapter's reading into the project. Making the nav had me use :first-child and :last-child pseudo-elements to target the first and last listed item in my ul. 

## Project link
The most recent link:
https://100devsconference-08.netlify.app/