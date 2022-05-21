## Summary:
The concepts covered in this chapter:

* forEach() method: Used to execute the same code on every element in an array but does not change the array and returns undefined.
* map() method: Executes the same code on every element in an array and returns a new array with the updated elements.
* filter() method: Checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
* findIndex() method: Returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
* reduce() method: Iterates through an array and takes the values of the elements and returns a single value.
* some() method: Checks elements in an array to see if it meets certain criteria and returns a boolean for the first element returning truthy for the criteria.
* every() method: Checks all elements in an array to see if it meets certain criteria and returns a boolean if all elements return truthy for the criteria.

## Learn anything new?
The tasks in the "Choose the right iterator" section had me use the reduce method on an array of strings. The method added the first letter of each string to the accumulator and spelled a word for the return value. I have always used this method on numbers and this is the first time seeing it on strings. It is worth mentioning that this chapter does a great job at explaining how callback functions are used with array methods.