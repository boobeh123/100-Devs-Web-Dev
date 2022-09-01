// Listens for clicks on the button with the ID #clickMe. On click, runs the makeReq function
document.querySelector('#clickMe').addEventListener('click', makeReq)

// Asynchronous function 
async function makeReq(){
  // Stores the value from the input with the ID #userName. The value should a string.
  const userName = document.querySelector("#userName").value;
  // The await keyword waits for Fetch to get data back from the server.
  // We are requesting data from `/api` with the query `?i=${userName}`. userName is stored from the input value.
  const res = await fetch(`/api?i=${userName}`)
  // The await keyword waits for the response to convert to JSON
  const data = await res.json();

  console.log(data);  // Output -> object with 3 properties and values of strings
  // Displays the name property from the data object onto the heading with the ID #personName
  document.querySelector("#personName").textContent = data.name
  // Displays the status property from the data object onto the heading with the ID #personStatus
  document.querySelector("#personStatus").textContent = data.status
  // Displays the currentOccupation property from the data object onto the heading with the ID #personOccupation
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}