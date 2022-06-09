## Summary:
The concepts covered in this chapter:

* Object-oriented programming - A set of techniques that use objects 
(and related concepts) as the central principle of program organization.
* Encapsulation:
    * The core idea in object-oriented programming is to divide programs smaller pieces and make each piece responsible for managing its own state.
    * Different pieces of such a program interact with each other through interfaces
        * Properties that are part of the interface are called public. 
        * The others, which outside code should not be touching, are called private.
    * Underscore (_) character - Located at the start of property names to indicate that those properties are private.
* Methods - Are (nothing more than) properties that hold function values.
* Prototypes:
    * Most objects have a prototype.
    * A prototype is another object that is used as a fallback source of properties. 
    * When an object gets a request for a property that it does not have,
    its prototype will be searched for the property, then the prototype’s prototype, and so on.
    * Object.getPrototypeOf returns the prototype of an object.
    * Functions derive from Function.prototype
    * Arrays derive from Array.prototype
    * Object.create creates an object with a specific prototype.
* Classes:
    * A class allows methods and a constructor to be defined. The class keywords starts the class declaration. Classes allow only methods.
    * JavaScript’s prototype system can be interpreted as 
    a somewhat informal take on an object-oriented concept called classes. 
    * JavaScript classes are constructor functions with a prototype property.
    * A constructor function makes an object that derives from the proper prototype.
    * A constructor's name are capitalized so it is easily distinguished.
    * It is important to understand the distinction between 
    the way a prototype is associated with a constructor and the way objects have a prototype
* Overriding Derived Properties:
    * When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself.
    * Overriding is also used to give the standard function and array prototypes a different (toString) method than the basic object prototype.
* Maps:
    * A map (noun) is a data structure that associates values with other values.
    (Map is an object. Map associates keys with other keys)
    * Using plan objects as maps is dangerous.
    * It's possible to create objects with no prototype by passing null into Object.create. 
        * The resulting object will not derive from Object.prototype and can be used as a map.
    * You cannot use an object as your map.
    * JavaScript comes with a class called Map. 
        * It stores a mapping and allows any type of keys.
    * It is useful to know that Object.keys returns only an object’s own keys, not those in the prototype. The hasOwnProperty method ignores the object’s prototype.
* Polymorphism:
    * Polymorphic code can work with values of different shapes, as long as they support the interface it expects.
    * A for/of loop can loop over several kinds of data structures.
* Symbols:
    * Property names are usually strings, but they can also be symbols. 
    * Newly created symbols are unique—you cannot create the same symbol twice.
    * Being both unique and usable as property names makes symbols suitable for defining interfaces.
* Iterator interface:
    * The object given to a for/of loop is expected to be iterable. 
        * This means it has a method named with the Symbol.iterator symbol 
    * The method should return an object that provides a second interface, iterator. This is the actual thing that iterates.
* Getters, Setters, and Statics:
    * Getters retrieve properties when the object property is read.
    * Setters update property values when the property is written.
    * Methods that have static written before their name are stored on the constructor. 
* Inheritance: 
    * Allows us to build slightly different data types from existing data types.
    * Extends keyword
        * Create new classes similar to old classes, but with new definitions for its properties.
    * Super keyword
        * Provides a way to call methods as they were defined in the superclass (parent)
* InstanceOf Operator:
    * JavaScript provides a binary operator called instanceof.
        * The operator will see through inherited types.
        * The operator can also be applied to standard constructors like Array. 
        * Almost every object is an instance of Object.


## Learn anything new?
 To be continued...

## Assignment:
Read / Do: Eloquent JS Ch. 06 - https://eloquentjavascript.net/06_object.html

