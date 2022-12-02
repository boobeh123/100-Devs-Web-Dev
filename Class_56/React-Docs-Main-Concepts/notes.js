/**************************************************************
* Setting Up Local Development Environment
***************************************************************/
/*

Note from me: Before starting the 'Hello World' section within 
    the main concepts documentation, I wanted to use my IDE to code along.
    This portion of my notes will allow you to do the same.

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
* Hello World
***************************************************************/
/*

* After running the command npm start & opening localhost:3000,
The code below will display a "Hello world" heading into the DOM.

```JavaScript
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```

"Every chapter in this guide 
builds on the knowledge introduced in earlier chapters. 
You can learn most of React by reading the 'Main Concepts' 
guide chapters in the order they appear in the sidebar. "

*/
/**************************************************************
* Hello World
***************************************************************/




/**************************************************************
* Introducing JSX
***************************************************************/
/*
```JavaScript
const element = <h1>Hello, world!</h1>;
```
This funny tag syntax is neither a string nor HTML.

It is called JSX, 
and it is a syntax extension to JavaScript. 
We recommend using it with React to describe what the UI should look like. 
JSX may remind you of a template language, 
but it comes with the full power of JavaScript.

JSX produces React “elements”. 

React embraces the fact 
that rendering logic is inherently coupled with other UI logic: 
how events are handled, how the state changes over time, 
and how the data is prepared for display.

Instead of artificially separating technologies 
by putting markup and logic in separate files, 
React separates concerns with loosely coupled units called “components” 
that contain both. 

React doesn’t require using JSX, 
but most people find it helpful as a visual aid 
when working with UI inside the JavaScript code. 
It also allows React to show more useful error and warning messages.

## Embedding expressions
```JavaScript
const name = 'Dlrow';
const element = <h1>Hello, {name}!</h1>;
```
We declare a variable called name 
and then use it inside JSX by wrapping it in curly braces.

You can put any valid JavaScript expression 
inside the curly braces in JSX. 
For example:
* 2 + 2
* user.firstName
* formatName(user) 
are all valid JavaScript expressions.

```JavaScript
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
    }

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```
We embed the result of calling a JavaScript function, formatName(user), 
into an <h1> element.
The element variable is wrapped in parentheses to avoid automatic semicolon insertion.

## JSX is an Expression Too
After compilation, JSX expressions become regular JavaScript function calls 
and evaluate to JavaScript objects.

This means that you can use JSX inside of 
if statements and for loops, assign it to variables, 
accept it as arguments, and return it from functions.
```JavaScript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## Specifying Attributes with JSX
You may use quotes to specify string literals as attributes:
```JavaScript
const element = <a href="https://www.reactjs.org"> link </a>;
```

You may also use curly braces to embed a JavaScript expression in an attribute:
```JavaScript
const element = <img src='https://via.placeholder.com/100x100'></img>;
const element = <img src={user.avatarUrl}></img>;
```
Don’t put quotes around curly braces when embedding a JavaScript expression 
in an attribute. 
You should either use quotes (for string values) or curly braces (for expressions).

React DOM uses camelCase property naming conventions.

## Specifying Children with JSX
If a tag is empty, you may close it immediately with />, like XML:
```JavaScript
const element = <img src='https://via.placeholder.com/100x100' />;
const element = <img src={user.avatarUrl} />;
```

JSX tags may contain children:
```JavaScript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## JSX Prevents Injection Attacks
It is safe to embed user input in JSX.
By default, React DOM escapes any values embedded in JSX 
before rendering them. 
Thus it ensures that you can never inject anything 
that’s not explicitly written in your application. 
Everything is converted to a string before being rendered. 
This helps prevent XSS (cross-site-scripting) attacks.

## JSX Represents Objects
These two snippets are identical:
```JavaScript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

React.createElement() performs a few checks to help you write bug-free code
but essentially it creates an object like this:
```JavaScript
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called “React elements”. 
You can think of them as descriptions of what you want to see on the screen.
React reads these objects and uses them to construct the DOM 
and keep it up to date.

*/
/**************************************************************
* Introducing JSX
***************************************************************/




/**************************************************************
* Rendering Elements
***************************************************************/
/*

Note from me: I setup a local development environment before coding along to
the Main Concepts documention. A lot of the information in this section is 
covered from the initial setup.

Elements are the smallest building blocks of React apps.
An element describes what you want to see on the screen.
Unlike browser DOM elements, React elements are plain objects, 
and are cheap to create. 
React DOM takes care of updating the DOM to match the React elements.

Elements are not components. Components are made of elements.

## Rendering an Element into the DOM
```JavaScript
<div id="root"></div>
```
This is a "root" DOM node and everything inside will be managed by React DOM.
Applications built with just React usually have a single root DOM node. 
If you are integrating React into an existing app, 
you may have as many isolated root DOM nodes as you like.

To render a React element, 
first pass the DOM element to ReactDOM.createRoot(), 
then pass the React element to root.render():

## Updating the Rendered Element
React elements are immutable. 
Once you create an element, you can’t change its children or attributes. 

With our knowledge so far, 
the only way to update the UI is to create a new element, 
and pass it to root.render().

Most React apps only call root.render()

## React Only Updates What's Necessary
React DOM compares the element and its children to the previous one, 
and only applies the DOM updates necessary 
to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, 
only the text node whose contents have changed gets updated by React DOM.

Thinking about how the UI should look at any given moment, 
rather than how to change it over time, eliminates a whole class of bugs.

*/
/**************************************************************
* Rendering Elements
***************************************************************/




/**************************************************************
* Components and Props
***************************************************************/
/*

Components let you split the UI into independent, reusable pieces, 
and think about each piece in isolation. 
This page provides an introduction to the idea of components. 

Conceptually, components are like JavaScript functions. 
They accept arbitrary inputs (called “props”) 
and return React elements describing what should appear on the screen.

## Function and Class Components
The simplest way to define a component is to write a JavaScript function:
```JavaScript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
This function is a valid React component because 
it accepts a single “props” (which stands for properties) object argument 
with data and returns a React element. 
We call such components “function components” 
because they are literally JavaScript functions.

You can also use an ES6 class to define a component:
```JavaScript
class Welcome extends React.Component {
  constructor() {
    super()
    this.firstName = 'Olleh'
    this.lastName = 'Dlrow'
  }
  render() {
    return <h1>Hello, {this.firstName} {this.lastName}</h1>;
  }
}
const element = new Welcome()
root.render(element.render())
```

## Rendering a Component
We encountered React elements that represent DOM tags.
However, elements can also represent user-defined components.

When React sees an element representing a user-defined component, 
it passes JSX attributes and children to this component as a single object. 
We call this object “props”.

Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. 
For example, <div /> represents an HTML div tag, 
but <Welcome /> represents a component.

## Composing Components
Components can refer to other components in their output. 
This lets us use the same component abstraction for any level of detail. 
A button, a form, a dialog, a screen: 
in React apps, all those are commonly expressed as components.

New React apps have a single App component at the very top. 
However, if you integrate React into an existing app, 
you might start bottom-up with a small component like Button 
and gradually work your way to the top of the view hierarchy.

## Extracting Components
Don’t be afraid to split components into smaller components.

Extracting components might seem like grunt work at first, 
but having a palette of reusable components pays off in larger apps. 
A good rule of thumb is that if a part of your UI is used several times 
(Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), 
it is a good candidate to be extracted to a separate component.

## Props are Read-Only
Whether you declare a component as a function or a class, 
it must never modify its own props.

Such functions are called “pure” because they do not attempt 
to change their inputs, and always return the same result for the same inputs.

React is pretty flexible but it has a single strict rule:
"All React components must act like pure functions with respect 
to their props.""

*/
/**************************************************************
* Components and Props
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




