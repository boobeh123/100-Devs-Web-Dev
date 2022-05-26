## Summary:
The concepts covered in this chapter:

* This keyword:
    * The object that a method belongs to is called the calling object.
    * The this keyword refers to the calling object and can be used to access properties of the calling object.
    * Methods do not automatically have access to other internal properties of the calling object.
    * The value of this depends on where the this is being accessed from.
    * We cannot use arrow functions as methods if we want to access other internal properties.
* Privacy:
    * JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code. (Prepending undercore signals 'do not alter' to other devs)
    * The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
* Getters:
    * Getters are methods that get and return the internal properties of an object. 
    * Getters can perform an action on the data when getting a property.
    * Getters can return different values using conditionals.
    * Properties cannot share the same name as the getter/setter function. 
* Setters:
    * Setters are methods which reassign values of existing properties within an object. 
    * Setter methods can also check input, perform actions on properties,
and display a clear intention for how the object is supposed to be used.
* Factory functions:
    * Factory functions allow us to create object instances quickly and repeatedly.
* Destructuring
    * Property Value Shorthand - ES6 introduced some new shortcuts for assigning properties to variables
    * Destructured Assignment - Extracts key-value pairs from objects.
* Built-In Object Methods:
    * .hasOwnProperty()
    * .valueOf()
    * Object.assign()
    * Object.entries()
    * Object.keys()

## Learn anything new?
Objects are much clearer to me now. Every concept in this lesson contained information that I knew very little about, or haven't heard of. I understand what the calling object is and how arrow functions already define this value to itself. I haven't even heard of privacy despite seeing underscores in a property before. I haven't used getters, setters, object instance methods, and object class methods at all. I definitely need more face time with all of these before I can say I understand it, but I was able to learn more and use them in this lesson. I've used constructors before and factory functions appear to be the same thing. 


Sorry for the wall of text, the takeaway is you should read this chapter when decide to study deeper into objects.