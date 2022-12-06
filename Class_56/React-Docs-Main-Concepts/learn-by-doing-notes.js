/**************************************************************
* Setting Up Local Development Environment
***************************************************************/
/*

Note from me: After going through the first few chapters of "Main Concepts"
    I decided to put what I learned into practice and build along to 
    the "learn-by-doing" section.

* Use the command: " npx create-react-app app-name "
* Delete all files within the src/ folder (not the src folder itself)
* Create an index.css & index.js file within the src/ folder
* Open the js file & copy+paste these 3 lines of code into the js file:
    ```JavaScript
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    ```
* Type the command ' npm start ' and open localhost:3000

*/
/**************************************************************
* Setting Up Local Development Environment
***************************************************************/




/**************************************************************
* What Is React?
***************************************************************/
/*

React is a declarative, efficient, and flexible JavaScript library 
for building user interfaces. 
It lets you compose complex UIs from small and isolated pieces 
of code called “components”.

React has a few different kinds of components, but we’ll start with React.Component subclasses

We use components to tell React what we want to see on the screen. 
When our data changes, React will efficiently update and re-render our components.

A component takes in parameters, called props (short for “properties”), 
and returns a hierarchy of views to display via the render method.

The render method returns a description of what you want to see on the screen. 
React takes the description and displays the result. 
Render returns a React element, 
which is a lightweight description of what to render. 

Most React developers use a special syntax called “JSX” 
which makes these structures easier to write. 
The <div /> syntax is transformed at build time to React.createElement('div'). 

JSX comes with the full power of JavaScript. 
You can put any JavaScript expressions within braces inside JSX. 
Each React element is a JavaScript object that you can store in a variable 
or pass around in your program.

Each React component is encapsulated and can operate independently; 
this allows you to build complex UIs from simple components.

*/
/**************************************************************
* What Is React?
***************************************************************/




/**************************************************************
* Passing Data Through Props
***************************************************************/
/*

Passing props is how information flows in React apps, from parents to children.

*/
/**************************************************************
* Passing Data Through Props
***************************************************************/




/**************************************************************
* Making an Interactive Component
***************************************************************/
/*

To “remember” things, components use state.

React components can have state by setting this.state in their constructors. 
this.state should be considered as private 
to a React component that it’s defined in. 

In JavaScript classes, 
you need to always call super when defining the constructor of a subclass. 

All React component classes that have a constructor should start 
with a super(props) call.

When you call setState in a component, 
React automatically updates the child components inside of it too.

*/
/**************************************************************
* Making an Interactive Component
***************************************************************/




/**************************************************************
* Developer Tools
***************************************************************/
/*

Download the React Dev Tools and then right-click on any element on the page, 
click “Inspect” to open the developer tools, 
and the React tabs (“⚛️ Components” and “⚛️ Profiler”) will appear 
as the last tabs to the right. 

Use “⚛️ Components” to inspect the component tree.

*/
/**************************************************************
* Developer Tools
***************************************************************/




/**************************************************************
* Lifting State Up
***************************************************************/
/*

To collect data from multiple children, 
or to have two child components communicate with each other, 
you need to declare the shared state in their parent component instead. 

The parent component can pass the state back down to the children by using props; 
this keeps the child components in sync with each other 
and with the parent component.

Lifting state into a parent component is common.

We split the returned element into multiple lines for readability, 
and added parentheses so that JavaScript doesn’t insert a semicolon after return 
and break our code.

In React, it’s conventional to use on[Event] names for props 
which represent events and handle[Event] for the methods which handle the events.


*/
/**************************************************************
* Lifting State Up
***************************************************************/




/**************************************************************
* Why Immutability Is Important
***************************************************************/
/*
*/
/**************************************************************
* Why Immutability Is Important
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




/**************************************************************
* 
***************************************************************/
/*
*/
/**************************************************************
* 
***************************************************************/




