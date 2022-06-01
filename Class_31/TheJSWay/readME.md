## Summary:
The concepts covered in this chapter:

* Object-Oriented-Programming is a programming paradigm that uses objects containing both data and behavior to create programs.
* Class:
    * An object-oriented abstraction for a concept
    manipulated by a program. 
    * A more convenient way to create relationships between objects through prototypes. 
    * Defined with the class keyword. It can only contain methods. 
* Constructor:
    * Is used to initialize the object, often by giving it properties. 
* This keyword:
    * Represents the calling object.
* Prototypes:
    * Are used to share properties and delegate behavior between objects.
    * JavaScript objects have an internal property which is a reference to another object called its prototype.
    * When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype of this object.
* Delegation: 
    * An object delegates part of its operation to its prototype.

## Learn anything new?
TheJSWay dives deeper into prototypes. I used Object.create() for the first time. It seems to clone an object created from a constructor, but without the properties from the constructor. Is it cloning a prototype?