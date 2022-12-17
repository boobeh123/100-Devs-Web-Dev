/**************************************************************
* Understand the React Hook Flow
***************************************************************/
/*

On pageload:
* App component is rendered
* App component calls useState
* App component finishes rendering
* App component calls useEffect with NO dependency arrays
* App component calls useEffect with EMPTY dependency arrays
* App component calls useEffect WITH dependency arrays

When state is changed (checkbox toggled on):
* App component is rendered
* App component finishes rendering
* Child component is rendered
* Child compnent calls useState
* Child component finishes rendering
* Child component calls useEffect with NO dependency arrays
* Child component calls useEffect with EMPTY dependency arrays
* Child component calls useEffect WITH dependency arrays
* App component calls useEffect CLEANUP with NO dependency arrays
* App component calls useEffect CLEANUP with EMPTY dependency arrays
* App component calls useEffect CLEANUP WITH dependency arrays

When state is updated:
* Child component is rendered
* Child component finishes rendering
* Child component calls useEffect CLEANUP with NO dependency arrays
* Child component calls useEffect CLEANUP WITH dependency arrays
* Child component calls useEffect with NO dependency arrays
* Child component calls useEffect WITH dependency arrays

When state is changed (checkbox toggled off):
* App component is rendered
* App component finishes rendering
* Child component calls useEffect CLEANUP with NO dependency arrays
* Child component calls useEffect CLEANUP with EMPTY dependency arrays
* Child component calls useEffect CLEANUP WITH dependency arrays
* App component calls useEffect CLEANUP with NO dependency arrays
* App component calls useEffect CLEANUP WITH dependency arrays
* App component calls useEffect with NO dependency arrays
* App component calls useEffect WITH dependency arrays

*/
/**************************************************************
* Understand the React Hook Flow
***************************************************************/