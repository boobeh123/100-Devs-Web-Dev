// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************

/*
Global variable "user" references the object -> {name: "John"}
The "name" property stores a primitive.

If the value of "user" is overwritten, the reference is lost
*/
// let user = {
//     name: "John"
// };
// console.log(user.name); // John

// user = null;            // Overwriting "user" value
// console.log(user.name); // TypeError -> Garbage collector junks the data & frees the memory.




/* 
Two references
*/

// let user = {
//     name: "John"
// };
// let admin = user;           // Copied reference from user to admin
// console.log(user.name);     // John
// console.log(admin.name);    // John

// user = null;                // Overwriting "user" value
// console.log(admin.name);    // John -> Object is reachable via admin
// console.log(user.name);     // TypeError
// admin = null;               // Object is now unreachable. Garbage collector junks {name: "John"}





/*
Interlinked objects
*/

// // Function takes in two objects
// function marry(man, woman) {
//     // Two objects reference each other
//     man.wife = woman;
//     woman.husband = man;

//     // Return a new object (contains them both)
//     return {
//         father: man,
//         mother: woman
//     }
// }

/* 
family has two Objects -> {name: "john"} , {name: "jane"}
marry function references {name: "john"} & {name: "jane"} ->
by giving them references to each other (woman.husband) & (man.wife)
and returns a new object (Mother) & (father) 
*/

// let family = marry(
// {
//     name: "John"
// },
// {
//     name: "Jane"
// }
// );
// console.log(family) 
/* output -> 
Father and mother object 
Father object contains -> name property & wife property
Mother object contains -> name property & husband property
Name value is primitive. Wife & husband value is an object

Wife object contains -> name property & husband property
Husband object contains -> name property & wife property
Husband & Wife will keep referencing each other. All objects are reachable
*/

// delete family.father;
// console.log(family) 
/*
output ->
Mother object
Mother object contains -> name property & husband property
Husband object contains -> name property & wife property

It’s not enough to delete only one of these two references, 
because all objects would still be reachable
*/

// delete family.mother.husband;
// console.log(family) 
/*
output ->
Mother object
Mother object contains -> name property

John no longer has any incoming references
John is now unreachable and deleted from memory with all data that became unreachable
*/





/*
Unreachable island

It's possible that interlinked objects become unreachable & is removed from memory
John & Jane are still linked. 
The former "family" object has been unlinked from the root
*/
// family = null;
// console.log(family)




/*
Internal algorithms
Basic garbage collection algorithm is called “mark-and-sweep”.
*/