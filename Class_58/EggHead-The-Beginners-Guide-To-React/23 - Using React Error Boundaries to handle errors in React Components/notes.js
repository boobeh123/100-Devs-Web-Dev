/**************************************************************
* Using React Error Boundaries to handle errors in React Components
***************************************************************/
/*

Creating an error boundary can customize error handling behavior.
A 3rd-party library can be used for this.

Error boundary must be a class.

The 3rd-party library is called react-error-boundary

ErrorBoundary can be rendered anywhere in the tree. 

The location of the ErrorBoundary has a special significance. 

The ErrorBoundary can handle any errors that are thrown by its descendants. 

It's also important to note that the ErrorBoundary is going 
to render something in place of all of its descendants when there is an error.

Error boundary can only handle certain errors that are happening 
within the React call stack. (e.g. render() method or useEffect callback)


*/
/**************************************************************
* Using React Error Boundaries to handle errors in React Components
***************************************************************/