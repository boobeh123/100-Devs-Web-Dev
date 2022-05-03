// ****************************************************************************************
// JavaScript.info reading examples
// ****************************************************************************************
console.log('Title: Object to primitive conversion')
/*
Object to primitive conversion

What happens when objects are added, subtracted or printed?
(examples: obj1 + obj2 || obj1 - obj2 || alert(obj)))

objects are auto-converted to primitives, 
then the operation is carried out over these primitives
and results in a primitive value.

The result of (obj1 + obj2) can't be another object
*/
console.log('***********************DIVDER************************')




console.log('Title: Conversion rules')
/*
Conversion rules:

1 - Object to string  -> The string conversion happens when we output an object with alert(obj) and in similar contexts
2 - Object to numeric -> The numeric conversion happens when we subtract objects or apply mathematical functions
(example: Date objects can be subtracted, and the result of date1 - date2 is the time difference between two dates)
3 - Object to boolean -> All objects are true in a boolean context. Objects have no conversion to boolean
*/
console.log('***********************DIVDER************************')




console.log('Title: Hints')
/*
Hints
There are three variants of type conversion:
1 - String - for alert and other operations that need a string
2 - Number - for math
3 - Default - Occurs in rare cases when the operator is “not sure” what type to expect.
(example of Default: 
    plus (+) works with strings (concatenates them) 
    plus (+) works with numbers (adds them)
    If a binary plus gets an object as an argument, it uses the "default" hint to convert it
    if an object is compared (using ==) to a string, number or a symbol, it uses "default" hint)

The greater (>) and less (<) comparison operators, work with both strings and numbers too. 
These comparison operators  use the "number" hint, not "default". 

All built-in objects (except for Date object) implement "default" conversion the same way as "number"
To do the conversion, JavaScript tries to find and call three object methods:

Call obj[Symbol.toPrimitive](hint):
The method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists

Hint is "string", "number", or "default"
Call obj.toString() || obj.valueOf()
*/
console.log('***********************DIVDER************************')




console.log('Title: Symbol.toPrimitive')
/*
Symbol.toPrimitive is a built-in symbol that should be used to name the conversion method

Example syntax:
obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
};

The single method user[Symbol.toPrimitive] handles all conversion cases.
*/

// Object created with literal notation
let user = {
    // Object has two properties
    // Name property contains string value
    name: "John",
    // Money property contains number value
    money: 1000,
  
    // Object has one method
        // This function has a parameter that takes in a hint
    [Symbol.toPrimitive](hint) {
        // The hint is printed with alert
        alert(`hint: ${hint}`);
        // The hint is compared using a conditional
        // The conditional compares hint to a string and number.
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
            // If hint is a string, the function returns the object's name property (this.name)
            // If hint is a number, the function returns the object's money property (this.money)
    }
  };
console.log(user);          // Output -> {name: "John"} (no alert     -> hint:string)
console.log(+user);         // Output -> 1000           (alert number -> hint:number)
console.log(user + 500);    // Output -> 1500           (alert default-> hint:default)
console.log('***********************DIVDER************************')




console.log('Title: toString/valueOf')
/*
toString/valueOf
If there’s no Symbol.toPrimitive then JavaScript tries to find methods toString and valueOf:

For the string hint:    call toString method    (toString has the priority for string conversions)
For the other hints:    call valueOf method     (so valueOf has the priority for maths)
These methods provide an alternative “old-style” way to implement the conversion.

These methods must return a primitive value
If an object is returned, it is ignored

The important thing to know about all primitive-conversion methods 
is that they do not necessarily return the “hinted” primitive.

The only mandatory thing: these methods must return a primitive, not an object.
Symbol.toPrimitive is stricter, it must return a primitive, otherwise there will be an error.
*/

let secondUser = {name: "John"};
// If we use an object as a string, default returns // [object Object]
alert(secondUser);                                  // [object Object]
console.log(secondUser);                            // {name: 'John'}

// The default of valueOf is shown, returns object  // {name: 'John'}
console.log(secondUser.valueOf());                  // {name: 'John'}
console.log(secondUser.valueOf() === secondUser);   // true

// The previous user object used of Symbol.toPrimitive.
// This user object does the same using a combination of toString and valueOf 
let thirdUser = {
    name: "Pete",
    money: 1025,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
console.log(thirdUser);                             // toString -> {name: "John"}
console.log(+thirdUser);                            // valueOf -> 1000
console.log(thirdUser + 500);                       // valueOf -> 1500

// In the absence of Symbol.toPrimitive and valueOf, 
// toString will handle all primitive conversions.
let fourthUser = {
    name: "Jane",

    toString() {
        return this.name;
    }
};

console.log(fourthUser);                            // toString -> {name: "Jane"}
console.log(fourthUser + 500);                      // toString -> Jane500
console.log('***********************DIVDER************************')




console.log('Title: Further conversions')
/*
If we pass an object as an argument, then there are two stages of calculations:

1 - The object is converted to a primitive (using the rules described above).
2 - The resulting primitive is also converted.

Obj.toString() can work as a "catch-all" method for string conversions.
It returns a "human-readable" representation of an object, for log or debug purposes
*/

let exampleObject = {
    // toString handles all conversions in the absence of other methods
    toString() {
        return "2";
    }
};
// First stage of calculation: Object converted to primitive string "2"
// Second stage of calculation: Multiplication converted string to a number
console.log(exampleObject * 2); // Output -> 4

// First stage of calculation: Object converted to primitive string "2"
// Second stage of calculation: Concatenation adds "2" and number 2 ("2" + 2) 
console.log(exampleObject + 2); // Output -> 22