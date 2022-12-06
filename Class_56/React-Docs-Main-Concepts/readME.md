This directory contains my notes & a summary of concepts covered from the reading.

The actual code from the documentation is located in a seperate repository which you can find here: https://github.com/boobeh123/React-main-concepts

## Summary:
The concepts covered in this reading: 

* Creating a react app / setting up local development environment
* JSX - A syntax extension to JavaScript and evaluates to a JS object.
    * Used to produce React elements.
    * Accepts JavaScript expressions.
    * Prevents cross-site-scripting attacks by escaping embedded values.
* Rendering elements into the DOM.
    * Elements are not components. Components are made of elements.
    * React elements are immutable.
    * React only updates what is necessary by comparing elements to previous ones.
* Components - Splits the UI into independent & reusuable pieces.
    * Defined by JavaScript functions or ES6 class notation.
    * Accepts arbitrary inputs. (called "props")
    * Component names start with a capital letter.
* Props - A user-defined object.
    * A component must never modify its own props.
* State - Similar to props, but private and controlled by the component.
* Lifecycle methods - Special methods on the component class.
    * Mounting
    * Unmounting
* setState:
    * Do not modify state directly
    * State updates may be asynchronous
    * State updates are merged
* TBD
* TBD

## Lessons learned:
The official documentation is excellent. It taught me how to get started, offers different styles of learning (by doing & step-by-step), and teaches from a zero-knowledge perspective. 

I'm currently going through both the Main Concepts & learn by doing sections. 
...TBD...
...TBD...

## Source:
Read/Do: https://reactjs.org/docs/hello-world.html