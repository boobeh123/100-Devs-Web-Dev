## Summary:
The concepts covered in this reading:

* 13 important JavaScript functions for working with strings.
    * `.length` property - Return the number of characters that the string contains.
    * `.trim()` method - Removes white space from the beginning & end of a string. 
        * Useful when processing the string of a user input field.
    * `.includes()` method - Determines if a substring is contained in a larger string and returns `true` or `false`. 
        * Common use-case is string matching for searching/parsing.
    * `.indexOf()` method - Returns the index of the substring within the string. 
        * If the substring is not contained in the original string, it will return -1.
        * Can mimic the behavior of includes() when checking if `index > -1`
    * `.toUpperCase()` method - Returns a string with all upper case letters.
    * `.toLowerCase()` method - Returns a string with all lower case letters.
    * `.replace()` method - Called on a string and will return a string with a pattern replaced by a replacement string. 
        * Takes in regex or a string.
            * Regex can globally replace all matches using the g option.
            * string only replaces the first occurrence.
    * `.slice()` method - Extract a section of a string based on the index supplied and return it as a new string. 
        * Synergizes with `.indexOf()`
    * `.split()` method - Takes a separator which you want to split apart the string on, and it returns an array of strings. 
    * `.repeat()` method - Returns a string consisting of the elements of the object repeated the given number of times.
    * `.match()` method - Retrieves the matches when matching a string against a regular expression.
    * `.charAt()` method - Returns the string character at a given index.
    * `.charCodeAt()` method - Returns the unicode of the character at a specified index in a string.

## Lessons learned:
This reading was a nice way to review the methods associated with strings. 
I have learned about & used most of the 13 methods with coding challenges. 
I can somewhat see how these methods could be used in a real-world web development.

I definitely need more practice with a few of these methods: includes, replace, repeat, match, charAt & charCodeAt.
I will take on string-related coding practices and find the 'patterns' that utilize these methods.

## Source:
https://levelup.gitconnected.com/essential-javascript-string-methods-f1841dad1961