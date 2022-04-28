// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************
/* Primitive values copied as a whole value*/
// let message = "Hello!";
// let phrase = message;

// console.log(message); // Hello!
// console.log(phrase);  // Hello!




/* 
Objects copied by reference 
It’s as if we had a cabinet with two keys
admin can open the cabinet and make changes.

user can open the cabinet and make changes.
admin&user are still opening the same cabinet 
and can make changes.
*/
// let user = {name: "John"};
// let admin = user;
// console.log(user); // Object name: "John"
// console.log(admin); // Object name: "John"

// admin.name = "Pete";
// console.log(user); // Object name: "Pete"
// console.log(admin); // Object name: "Pete"




/* 
Comparison by reference 
a and b both reference the same object
*/
// let a = {};
// let b = a;
// console.log(a == b); // true, both reference same object
// console.log(a === b); // true

/* c and d are two independent objects.
They are not equal, despite looking the same
Does not reference the same object 
*/
// let c = {};
// let d = {};
// console.log(c == d); // false
// console.log(c === d); // false




/* 
Cloning and merging
Create new object and iterate over the properties
Copying the properties on the primitive level
*/

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {};
// for (let key in user) {
//   clone[key] = user[key]
// }
// console.log(user);  // Object age: 30 name: "John"
// console.log(clone); // Object age: 30 name: "John"


// clone.name = "Pete";
// clone.age = 31;
// console.log(user);  // Object age: 30 name: "John"
// console.log(clone); // Object age: 31 name: "Pete"




/* 
Object.assign 
The target object — what to apply the sources' properties to, which is returned after it is modified.
The source object(s) — objects containing the properties you want to apply.
*/
// let target = { name: "John" };
// let source1 = { canView: true };
// let source2 = { canEdit: true };
// Object.assign(target, source1, source2);
// console.log(target); // {name: 'John', canView: true, canEdit: true}  

/*
If the copied property name already exists, it gets overwritten:
*/
// Object.assign(target, {name: "Pete"})
// console.log(target); // {name: 'Pete', canView: true, canEdit: true}

/*
Cloning with Object.assign
User is the source and the empty curly braces is the target
*/
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);
// console.log(user);  // {name: 'John', age: 30}
// console.log(clone); // {name: 'John', age: 30}




/*
Nested cloning

To make a “real copy” (a clone) we can use Object.assign
Cloning an object inside an object

for the so-called “shallow copy” (nested objects are copied by reference) 
or a “deep cloning” function, such as _.cloneDeep(obj).
*/

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// let clone = Object.assign({}, user);
// console.log(user.sizes === clone.sizes) // true
// console.log(clone.sizes.width);         // 50

// user and clone share sizes
// user.sizes.width++;             // user.sizes width incremented by 1
// console.log(clone.sizes.width); // 51


/*
Objects declared with const can be modified
*/

const user = {
    name: "John"
};
user.name = "Pete";
console.log(user.name); // Pete

user = "Error";
console.log(user.name); // TypeError: Assignment to constant variable.
