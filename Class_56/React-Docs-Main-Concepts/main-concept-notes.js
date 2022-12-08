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
* State and Lifecycle
***************************************************************/
/*

We have only learned one way to update the UI. 
We call root.render() to change the rendered output.

State is similar to props, 
but it is private and fully controlled by the component.

## Converting a Function to a Class
A function component can be converted to a class.

## Adding Local State to a Class
Class components should always call the base constructor with props.

## Adding Lifecycle Methods to a Class
In applications with many components, 
it’s very important to free up resources taken by the components 
when they are destroyed.

We can declare special methods on the component class 
to run some code when a component mounts and unmounts.
These methods are called “lifecycle methods”.

## Using State Correctly
There are three things you should know about setState().

* Do Not Modify State Directly
  * The only place where you can assign this.state is the constructor.
* State Updates May Be Asynchronous
  * React may batch multiple setState() calls into a single update for performance.
  * Because this.props and this.state may be updated asynchronously,
  you should not rely on their values for calculating the next state.
    * Use a function that receives the previous state as the first argument, 
    and the props at the time the update is applied as the second argument.
* State Updates are Merged
  * When you call setState(), React merges the object you provide into the current state.

## The Data Flows Down
Neither parent nor child components can know if a certain component 
is stateful or stateless, 

This is why state is often called local or encapsulated. 
It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:

This is commonly called a “top-down” or “unidirectional” data flow. 
Any state is always owned by some specific component, 
and any data or UI derived from that state can only affect components “below” them 
in the tree.

If you imagine a component tree as a waterfall of props, 
each component’s state is like an additional water source 
that joins it at an arbitrary point but also flows down.

In React apps, 
whether a component is stateful or stateless 
is considered an implementation detail of the component 
that may change over time. 
You can use stateless components inside stateful components, and vice versa.

*/
/**************************************************************
* State and Lifecycle
***************************************************************/




/**************************************************************
* Handling Events
***************************************************************/
/*

Handling events with React elements is very similar 
to handling events on DOM elements. 
 
You cannot return false to prevent default behavior in React. 
You must call preventDefault explicitly.

React defines these synthetic events according to the W3C spec, 
React events do not work exactly the same as native events. 

When using React, 
you generally don’t need to call addEventListener 
to add listeners to a DOM element after it is created. 
Instead, just provide a listener when the element is initially rendered.

When you define a component using an ES6 class, 
a common pattern is for an event handler to be a method on the class. 

You have to be careful about the meaning of this in JSX callbacks. 
In JavaScript, class methods are not bound by default. 
This is not React-specific behavior; 

If you refer to a method without () after it, you should bind that method.

We generally recommend binding in the constructor or using the class fields syntax
to improve performance.

## Passing Arguments to Event Handlers

Inside a loop, 
it is common to want to pass an extra parameter to an event handler. 
For example, if id is the row ID, either of the following would work:

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.

In both cases, 
the e argument representing the React event 
will be passed as a second argument after the ID. 
With an arrow function, we have to pass it explicitly, 
but with bind any further arguments are automatically forwarded.

*/
/**************************************************************
* Handling Events
***************************************************************/




/**************************************************************
* Conditional Rendering
***************************************************************/
/*

In React, 
you can create distinct components that encapsulate behavior you need. 
Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. 
Use JavaScript operators like if or the conditional operator 
to create elements representing the current state, 
and let React update the UI to match them.

## Element Variables
You can use variables to store elements. 
This can help you conditionally render a part of the component 
while the rest of the output doesn’t change.
Consider Logout and Login components.

## Inline If with Logical && Operator
You may embed expressions in JSX by wrapping them in curly braces. 
This includes the JavaScript logical && operator. 
It can be handy for conditionally including an element.

It works because in JavaScript, 
true && expression always evaluates to expression, 
and false && expression always evaluates to false.

Therefore, if the condition is true, 
the element right after && will appear in the output. 
If it is false, React will ignore and skip it.

Note that returning a falsy expression will still cause the element after && 
to be skipped but will return the falsy expression. 

## Inline If-Else with Conditional Operator
Another method for conditionally rendering elements inline 
is to use the JavaScript conditional operator condition ? true : false.

## Preventing Component from Rendering
In rare cases you might want a component to hide itself 
even though it was rendered by another component. 
To do this return null instead of its render output.

Returning null from a component’s render method 
does not affect the firing of the component’s lifecycle methods. 

*/
/**************************************************************
* Conditional Rendering
***************************************************************/




/**************************************************************
* Lists and Keys
***************************************************************/
/*

## Rendering Multiple Components
You can build collections of elements 
and include them in JSX using curly braces {}.

## Basic List Component
Usually you would render lists inside a component.

A “key” is a special string attribute you need to include 
when creating lists of elements. 

## Keys
Keys help React identify which items have changed, are added, or are removed. 
Keys should be given to the elements inside the array 
to give the elements a stable identity.

The best way to pick a key is to use a string that 
uniquely identifies a list item among its siblings. 
Most often you would use IDs from your data as keys.

We don’t recommend using indexes for keys if the order of items may change. 
If you choose not to assign an explicit key to list items 
then React will default to using indexes as keys.

## Extracting Components with Keys
A good rule of thumb is that elements inside the map() call need keys.

## Keys Must Only Be Unique Among Siblings
Keys used within arrays should be unique among their siblings. 
We can use the same keys when we produce two different arrays.

Keys serve as a hint to React but they don’t get passed to your components. 
If you need the same value in your component, 
pass it explicitly as a prop with a different name.

## Embedding map() in JSX
JSX allows embedding any expression in curly braces 
so we could inline the map() result.
Sometimes this results in clearer code, but this style can also be abused. 

Like in JavaScript, 
it is up to you to decide whether it is worth extracting a variable for readability. 
Keep in mind that if the map() body is too nested, 
it might be a good time to extract a component.

*/
/**************************************************************
* Lists and Keys
***************************************************************/




/**************************************************************
* Forms
***************************************************************/
/*

HTML form elements work a bit differently from other DOM elements in React, 
because form elements naturally keep some internal state. 

It’s convenient to have a JavaScript function that handles the submission 
of the form and has access to the data that the user entered into the form. 

## Controlled Components

In HTML, form elements typically maintain their own state & update it based on user input. 
In React, mutable state is typically kept in the state property of components, 
and only updated with setState().

The React component that renders a form also controls what happens in that form. 
An input form element whose value is controlled by React is called a “controlled component”.

Since the value attribute is set on our form element, 
the displayed value will always be this.state.value.

Since handleChange runs on every keystroke to update the React state, 
the displayed value will update as the user types.

With a controlled component, you can now pass the value to other UI elements too,
or reset it from other event handlers.

## The Textarea Tag
In HTML, a <textarea> element defines its text by its children.
In React, a <textarea> uses a value attribute instead. 

# The Select Tag
React uses a value attribute on the root select tag instead of using this selected attribute.
You can pass an array into the value attribute, 
allowing you to select multiple options in a select tag.

## The File Input Tag
Because its value is read-only, it is an uncontrolled component in React.

## Handling Multiple Inputs
When you need to handle multiple controlled input elements, 
you can add a name attribute to each element 
and let the handler function choose what to do 
based on the value of event.target.name.

## Controlled Input Null Value
Specifying the value prop on a controlled component 
prevents the user from changing the input unless you desire so. 

If you’ve specified a value but the input is still editable, 
you may have accidentally set value to undefined or null.

## Alternatives to Controlled Components
It can sometimes be tedious to use controlled components, 
because you need to write an event handler for every way your data can change 
and pipe all of the input state through a React component. 

This can become particularly annoying when you are converting a preexisting codebase to React, 
or integrating a React application with a non-React library. 
In these situations, you might want to check out uncontrolled components, 
an alternative technique for implementing input forms.

## Fully-Fledged Solutions
If you’re looking for a complete solution including validation, 
keeping track of the visited fields, and handling form submission, 
Formik is one of the popular choices. 
However, it is built on the same principles of controlled components 
and managing state — so don’t neglect to learn them.

*/
/**************************************************************
* Forms
***************************************************************/




/**************************************************************
* Lifting State Up
***************************************************************/
/*

Often, several components need to reflect the same changing data. 
We recommend lifting the shared state up to their closest common ancestor. 

In React, sharing state is accomplished by moving it up to the 
closest common ancestor of the components that need it. 
This is called “lifting state up”.

There should be a single “source of truth” for any data 
that changes in a React application. 

The state is first added to the component that needs it for rendering. 
If other components also need it, you can lift state up. 

Yyou can implement any custom logic to reject or transform user input.

If something can be derived from either props or state, 
it probably shouldn’t be in the state. 

*/
/**************************************************************
* Lifting State Up
***************************************************************/




/**************************************************************
* Composition vs Inheritance
***************************************************************/
/*

React has a powerful composition model, 
and we recommend using composition instead of inheritance 
to reuse code between components.

## Containment
Some components don’t know their children ahead of time. 
This is especially common for components like Sidebar or Dialog 
that represent generic “boxes”.

We recommend that such components use the special children prop 
to pass children elements directly into their output.

## Specialization
Sometimes we think about components as being “special cases” of other components. 
For example, we might say that a WelcomeDialog is a special case of Dialog.

In React, this is also achieved by composition, 
where a more “specific” component renders a more “generic” one 
and configures it with props.

*/
/**************************************************************
* Composition vs Inheritance
***************************************************************/




/**************************************************************
* Thinking in React
***************************************************************/
/*

React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. 
One of the many great parts of React is how it makes you think about apps 
as you build them. 

### Start With A Mock

## Step 1: Break The UI Into A Component Hierarchy
The first thing you’ll want to do is to draw boxes around every component 
(and subcomponent) in the mock and give them all names. 

One technique is the single responsibility principle, 
a component should ideally only do one thing. 
If it ends up growing, it should be decomposed into smaller subcomponents.

## Step 2: Build A Static Version in React
Now that you have your component hierarchy, 
build a version that renders the UI but has no interactivity. 

Build components that reuse other components and pass data using props. 
props are a way of passing data from parent to child. 
Don’t use state at all to build this static version. 

You can build top-down or bottom-up. 
In simpler examples, it’s easier to go top-down.
In larger projects, it’s easier to go bottom-up and write tests as you build.

At the end of this step, 
you’ll have a library of reusable components. 
The components will only have render() methods since this is a static version of your app. 

## Step 3: Identify The Minimal (but complete) Representation Of UI State
To make your UI interactive, 
you need to be able to trigger changes to your underlying data model. 
React achieves this with state.

To build your app correctly, 
you first need to think of the minimal set of mutable state that your app needs. 
The key here is DRY: Don’t Repeat Yourself. 
Figure out the absolute minimal representation of the state 

Think of all the pieces of data.
* Is it passed in from a parent via props? If so, it probably isn’t state.
* Does it remain unchanged over time? If so, it probably isn’t state.
* Can you compute it based on any other state or props in your component? If so, it isn’t state.
* The original list of products is passed in as props, so that’s not state.
* A filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.

* The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. 

Our state is:
* The search text the user has entered
* The value of the checkbox

## Step 4: Identify Where Your State Should Live
We’ve identified what the minimal set of app state is. 
We need to identify which component owns this state.

React is all about one-way data flow down the component hierarchy. 
It may not be immediately clear which component should own what state. 

For each piece of state in your application:

* Identify every component that renders something based on that state.
* Find a common owner component.
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can’t find a component where it makes sense to own the state, 
  * create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

## Step 5: Add Inverse Data Flow
We’ve built an app that renders correctly as a function of props 
and state flowing down the hierarchy. 

React makes this data flow explicit to help you understand how your program works, 
but it does require a little more typing than traditional two-way data binding.

*/
/**************************************************************
* Thinking in React
***************************************************************/