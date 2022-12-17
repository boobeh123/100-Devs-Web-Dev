/**************************************************************
* Use a lazy initializer with useState
***************************************************************/
/*

An important concept to know about the useState Hook 
is that the initial value you provide is important for the initial render of our component, 
but then it's ignored for renders of our component thereafter.

React.useState has a lazy initialization feature. 
Providing a function as the initial value, 
and that function will be called to retrieve the initial value. 
That function will only be called when it's absolutely necessary to retrieve the initial value.

*/
/**************************************************************
* Use a lazy initializer with useState
***************************************************************/