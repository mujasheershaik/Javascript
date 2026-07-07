
// (1) GET Method :- 
                // Used to fetch data from server. 

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data))

// (2) POST Method :- 
                // Used to send new data to the server. 

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "JavaScript",
    body: "Learning API Calls"
  })
})
.then(response => response.json())
.then(data => console.log(data))

// (3) PUT Method :- 
                // Used to replace all existing data with new data. 

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Content"
  })
})
.then(response => response.json())
.then(data => console.log(data))

// (4) PATCH Method :- 
                // Used to update only specific fields. 

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Title Only"
  })
})
.then(response => response.json())
.then(data => console.log(data))

// (5) DELETE Method :- 
                // Used to remove data from the server. 

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(() => console.log("Deleted Successfully"))
