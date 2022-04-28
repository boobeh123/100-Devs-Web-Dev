// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************
/*
Non-existing property
*/
// User object that holds information about our useres
// let user = {};

// Most of our users have addresses in user.address property
// console.log(user?.address);         // Undefined
// console.log(user.address);          // Undefined

// The user happens to be without an address fails with error
// console.log(user.address.steet);    // TypeError
// console.log(user.address?.steet);   // Undefined

// Get an object that corresponds to a web page element using a special method call
// console.log(document.querySelector('.elem'))// null
// console.log(document.querySelector('img'))  // img

// if the element doesn’t exist, we’ll get an error accessing .innerHTML property of null
// let html = document.querySelector('.elem').innerHTML; // error -> null
// let html = document.querySelector('img').innerHTML; // blank -> not null
// console.log(html) // blank

// Conditional/ternary to avoid error 
// console.log(user.address ? user.address.street : undefined); // undefined   
// Same as above but with querySelector
// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null; // null
// let html = document.querySelector('img') ? document.querySelector('img').innerHTML : null; // blank
// console.log(html)

// More deeply nested properties
// Ternary
// console.log(user.address ? user.address.street ? user.address.street.name : null : null);
// && operator -> AND’ing whole path to the property ensures all components exist
// console.log(user.address && user.address.street && user.address.street.name); // undefined (no error)




/*
Optional chaining

something “exists” if it’s not null and not undefined.

*/
// Safe way to access user.address.street
// let user = {};
// console.log(user?.address?.street); // undefined

// Same as above with qs
// let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element
// console.log(html)


// Reading address even if user object does not exist
// let user = null;
// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined

// Optional chaining when no variable is declared
// alert(user?.address); // ReferenceError



/*
Short-circuiting
?. immediately stops (“short-circuits”) 
the evaluation if the left part doesn’t exist.
*/

// let user = null;
// let user = {}; // TypeError 
// let x = 0;

// no "user", so the execution doesn't reach sayHi call and x++
// user?.sayHi(x++);
// alert(x); // 0, value not incremented




/*
Other variants: ?.() ?.[]

?. is not an operator
It's a special syntax construct
Works with functions and square brackets
*/
// Object
// let userAdmin = {

//     // Method
//     admin() {
//         // Logs string
//         console.log("I am admin");
//     }
// };
  
// let userGuest = {

//     notadmin() {
//         console.log("Access denied")
//     }
// };

// . on user object and ?. on function call
// userAdmin.admin?.(); // I am admin

// user object function doesn't exist 
// userGuest.admin?.(); // nothing happens (no such method)
// userGuest.notadmin?.(); // access dneid

// accessing properties with ?.
// let key = "firstName";
// let user1 = {
//   firstName: "John"
// };
// let user2 = null;

// console.log(user1?.[key]); // John
// console.log(user2?.[key]); // undefined

// delete operator and optional chaining
// let user = {};
let user = {
    name: "Hello world"
};
// let user = null;
delete user?.name;