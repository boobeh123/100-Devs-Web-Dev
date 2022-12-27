/*

Description:
The replace() method returns a new string 
with one, some, or all matches of a pattern replaced by a replacement. 

The pattern can be a string or a RegExp, 
and the replacement can be a string 
or a function called for each match. 

If pattern is a string, 
only the first occurrence will be replaced. 
The original string is left unchanged.

How it works:
Using this method on the calling string returns a new string 
that replaces the pattern with the replacement.

To replace several pattern occurrences, a regular expression can 
be passed in as the pattern or by using the replaceAll() method.

Time complexity:
Will comeback to answer this after reading about algorithms:

*/

// Examples:
const exampleOne = 'Hello.world.olleH.dlrow';

// Only first '.' occurrence is replaced
console.log(exampleOne.replace('.', '-'));      // Output -> "Hello-world.olleH.dlrow"

// Uses regex as the pattern, all '.' occurrence are replaced.
console.log(exampleOne.replace(/\./g, '-'));    // Output -> "Hello-world-olleH-dlrow"

// Uses replaceAll() method with '.' as the pattern & '-' as the replacement.
console.log(exampleOne.replaceAll('.', '-'));   // Output -> ""Hello-world-olleH-dlrow""