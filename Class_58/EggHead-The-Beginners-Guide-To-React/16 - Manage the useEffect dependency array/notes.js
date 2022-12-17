/**************************************************************
* Manage the useEffect dependency array
***************************************************************/
/*

The side effect that we're using
is to update localStorage which sets the value. 
This side effect doesn't need to be run because the value hasn't changed.

We only need to synchronize the localStorage value 
with the value that we have in memory for
the state of this component.

React useEffect accepts a second argument as an optimization to combat this problem. 

That second argument is a dependency array 
where you pass all the dependencies for your side effect. 

This is where you pass a value to synchronize the state.

*/
/**************************************************************
* Manage the useEffect dependency array
***************************************************************/