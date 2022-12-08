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
* Key - A special string attribute that must be included when creating lists of elements.
    * Helps React identify which items have changed, are added, or are removed.
* Controlled components - An input form element whose value is controlled by React.
* Lifting State Up - Sharing state between components by moving it up to the closest common ancestor.
* Composition - Allows code to be reused between components.

## Lessons learned:
The official documentation is excellent. It taught me how to get started, offers different styles of learning (by doing & step-by-step), and teaches from a zero-knowledge perspective. 

I'm currently going through both the Main Concepts & learn by doing sections. 

The last chapter gave me a JSON data model and wanted me to build a component.
This component contained a search bar, a filter-checkbox, and a table displaying the data. 

I started by creating the class that rendered a container and used the `border` property within `CSS` to visualize the container. 
I didn't render any other sub-components during this time.

I created the next class which contained my form with two inputs and represents the searchbar + filtered-checkbox components in one class.
I switched back to the first class and rendered the first sub-component.

At this point I had to view the CodePen and extracted components and gradually built top-down until the static version was completed. 
I felt overwhelmed when it came time to implement state. Despite having the answers, I ran into a bug where using the searchbar feature would append the categories. Searching & deleting would keep appending more text.

The solution was that the conditionals for searchbar & filter-checkbox must come before the props were pushed into the subcomponents.

## Source:
Read/Do: https://reactjs.org/docs/hello-world.html