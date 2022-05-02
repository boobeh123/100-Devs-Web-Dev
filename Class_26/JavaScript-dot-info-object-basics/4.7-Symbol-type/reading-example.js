// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************
console.log("Title: Symbol Type")
/*
Symbol type
Two primitive typess may serve as object properties 
1 - Strings
2 - Symbols

Using Number as an object property is auto converted to String
1 -> "1"
true -> "true"

Give symbol description
Used for debugging
*/

// Symbol represents a unique identifier
let id = Symbol();

// Symbol with the description "id"
let idWithDescription = Symbol("id");

console.log(id);                // Symbol()
console.log(idWithDescription); // Symbol(id)
console.log(typeof id);         // data type = Symbol

// Symbols with the same descriptions are different values. 
// Symbols are primitive unique values
let idOne = Symbol("id");
let idTwo = Symbol("id");
                                // Comparing Symbols 
console.log(idOne == idTwo);    // false
console.log(idOne === idTwo);   // false

// Symbols don't autoconvert to strings
// alert(id); // TypeError: Cannot convert a Symbol value to a string

// Strings and symbols should not accidentally convert one into another
// Explicity converting a symbol to string
console.log(id.toString()) // Symbol()
console.log('***********************DIVDER************************')




console.log('Title: "Hidden" properties')
/*
"Hidden" properties
Symbols allow me to create “hidden” properties of an object, 
that no other part of code can accidentally access or overwrite.
*/

// User object
let user = { 
    name: "John"
};

// Symbol with the description "id"
let idThree = Symbol("id3");  // Symbol with description "id3" assigned to variable idThree
let idFour = Symbol("id4");// Symbol with description "id4" assigned to variable idFour

user[idThree] = "Hello";
user[idFour] = "world";
console.log(user[idThree])  // Hello
console.log(user[idFour])   // world
console.log('***********************DIVDER************************')




console.log('Title: "Hidden" properties conflict with string "id"')
/* 
Using string "id" for the same purpose 

Benefit of using Symbol("id") over string "id"
User object belongs to different code and works with them (Symbols?)
Symbols cannot be accessed accidentally
No conflict between identifiers because symbols are always different, even if they share the same name (description?)
Conflict arises when using string "id" for the same purpose (Overwriting) (example: user.id = 1  then  user.id = 2)
*/

// User object
let secondUser = {name: "Pete"};

// Uses "id" property
secondUser.id = "Our id value";
console.log(secondUser.id)  // output -> Our id value

// Uses "id" property again
secondUser.id = "Their id value"
console.log(secondUser.id)  // output -> Their id value -> CONFLICT! id overwritten
console.log('***********************DIVDER************************')




console.log('Title: Symbols in object literals')
/*
Symbols in an object literal
Surround symbol in square brackets inside an object literal
*/

// Symbol with the description "olleh"
let idFive = Symbol("olleh");

// Anotha user object
let thirdUser = {
    name: "John",
    [idFive]: 123
};
console.log(thirdUser.name)     // John
console.log(thirdUser[idFive])  // 123
console.log('***********************DIVDER************************')




console.log('Title: Symbols are skipped by for...in loops')
/*
Symbols are skipped by for…in
Symbolic properties do not participate in for in loops
That's a part of the general "hiding symbolic properties" principle.
*/

let idSix = Symbol("dlrow");
let fourthUser = {
  name: "John",
  age: 30,
  [idSix]: 456
};

for (let key in fourthUser) 
console.log(key);                       // name, age (skips symbols)
console.log(Object.keys(fourthUser));   // name, age (skips symbols also)
// Directly accessing the symbol 
console.log(fourthUser[idSix]);         // 456

// Symbolic properties can be copied to a clone
let clone = Object.assign({}, fourthUser)
// Directly accessing the clone's symbol 
console.log(clone[idSix]);              // 456
console.log('***********************DIVDER************************')




console.log('Title: Global symbols')
/*
Global symbols
All symbols are different, even if they have the same name (description?)
For this example, we want same-named symbols to be the same entities

To achieve that, there exists a global symbol registry.
We can create symbols in it and access them later, 
it guarantees that repeated accesses by the same name 
return exactly the same symbol.

Symbol.for(key) call checks the global registry,
if there’s a symbol described as key, then returns it, 
otherwise creates a new symbol Symbol(key) 
and stores it in the registry by the given key.
*/

// Using Symbol.for(key) to read from global registry
let idSeven = Symbol.for("global"); // if the symbol did not exist, it is created
let idEight = Symbol.for("global"); 
console.log(idSeven === idEight);   // true -> same-named symbols are the same entities
console.log('***********************DIVDER************************')




console.log('Title: Symbol.keyFor')
/*
Symbol keyFor
symbol.keyFor internally uses the global symbol registry to look up the key for the symbol
it doesn’t work for non-global symbols. 
If the symbol is not global, it won’t be able to find it and returns undefined.
*/

// Symbol.for(key)                  -> returns a symbol by name
let sym = Symbol.for("name");
let symTwo = Symbol.for("id");
console.log(sym)                    // Symbol(name)
console.log(symTwo)                 // Symbol(id)

// symbol.keyFor(symbol)            -> returns a name by symbol
console.log(Symbol.keyFor(sym));    // name   -> symbol description
console.log(Symbol.keyFor(symTwo)); // id     -> symbol description


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

// Get a name by symbol (global)
console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global
// Get a name by symbol (local)
console.log(localSymbol.description); // name
console.log('***********************DIVDER************************')




console.log('Title: System Symbols')
/*
System symbols
Many "system" symbols that JavaScript uses internally
We can use them to fine-tune various objects
Well-known symbols table:
Symbol.hasInstance          -> well-known symbol is used to determine if a constructor object recognizes an object as its instance.
Symbol.isConcatSpreadable   -> well-known symbol is used to configure if an object should be flattened to its array elements when using the Array.prototype.concat() method
Symbol.iterator             -> symbol specifies the default iterator for an object.
Symbol.toPrimitive          -> is a symbol that allows us to describe object to primitive conversion.
*/