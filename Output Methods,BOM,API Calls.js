// Output Methods :- 
                // Output Methods are used to display the message or output to the user. 


// (1) console.log( ) Method :- 
                // Used to display the output in the browser console. 
                // Mainly used for testing and Debugging. 
                // Open Browser Developer Tools to see the output. 
console.log("Hello This is a console method")

// (2) document.write( ) Method :- 
                // Writes content directly to the web page. 
                // Mostly used for Learning Purposes. 
                // Not Recommended for the modern Web Applications. 

document.write("This is Document write Method")

// (3) innerHTML Method :- 
            // Displays the output inside an HTML Element. 
            // Most commonly used Method. 

document.getElementById("hi1").innerHTML = "Hello Everyone"

// (4) Alert ( ) Method :- 
            // Displays a popup message box. 
            // It is used to show some important information to the user. 
alert("Hello user")

// (5) prompt ( ) Method :- 
            // Prompt is used to get input from the user through a Popup dialog box.
            // This browser displays a popup box. 
            // The user enters a value. 
            // The value is stored in a value. 
            // The program can use that value later. 
            
let data = prompt("Enter your name:")
console.log(data)

// (6) Window.print () Method :- 
            // Opens the browser print dialog. 
            // Used for printing Webpage Content. 

// window.print("Hello This is window print")

// Browser Object Model (BOM) :- 
            // The Browser Object Model (BOM) allows Java Script to interact with the browser window and browser 
            // features such as Navigation, Location, history, screen information and popup dialogs. 
            
console.log(screen.width)

console.log(screen.height)

console.log(navigator.userAgent)

console.log(typeof(data))

let m = parseInt(data)

console.log(typeof(m))

let k = m.toString()

console.log(typeof(k))

// to parse Float Decimal Values :- 

let a = 100.123232123345

console.log(a.toFixed(2))

let b = 102.3456674328262618

console.log(b.toFixed(3))

let c = 1000.102010202303030

console.log(c.toFixed(4))

// (1) Window Object :- 
                // The Window Object is the top level object in BOM. All objects are inside it. 
                // Represents the Browser window or tab. 

alert("Welcome")

window.alert("Welcome user")

// (2) Location Object :-
                // User to get the information about the current url. 
                // Gives detail about the current url page. 
    
console.log(location.href)

console.log(location.hostname)

console.log(location.pathname)

// (3) Navigator Object :-  
                // It provides information about the browser and system. 

console.log(navigator.userAgent)

console.log(navigator.language)

console.log(navigator.onLine)

// (4) Screen Object :- 
                // Provides information about the Screen. 

console.log(screen.width)

console.log(screen.height)

console.log(screen.colorDepth)

// (5) History Object :- 
                // It is used to access Browser History. 
                // It controls Browser History navigation. 

console.log(history.back())

console.log(history.forward)

console.log(history.length)

// API (Application Programming Interface) : -  
                // API (Application Programming Interface) is a set of rules that allows two software applications 
                // to communicate with eachother. 
                // API is a bridge between front end and backend, database to communicate with eachother. 
                // API is a bridge that lets applications communicate with eachother safely and efficiently. 
    
// API calls :- 
                // An API (Application Programming Interface) Call is a request sent from Javascript application
                // to a server to get or send data. 
                // An API Call is a request sent by an application to an API to get, send, update or delete data. 
                // When Application needs data from a server, it makes an API Call. 

                // API Call ===> Request + Response 

// It works :- 

//                         Client 
//                            |
//                            |     Request 
//                            |
//                        API Server (It process the request and sends the response)
//                            |
//                            |     Response
//                            |
//                     Client Receives Data 


// Client or Application ===> Request ===>API

// Client or Application <=== Response ===>API 

// API Call Flow :- 

// RPRD :- 

// R ===> Request 
// P ===> Process 
// R ===> Response 
// D ===> Display 

// API Methods :- 

// (1) GET ===> To fetch the data or To get the data. 
// (2) POST ===> To Send the data 
// (3) PUT ===> To update existing data (or) It changes the entire record of a user data
// (4) PATCH ===> To update a part of data (or) It updates only partial data 
// (5) DELETE ===> To delete a data 

// Example :- 

// GET ===> Get user details 
// POST ===> Create new User 
// PUT ===> Update user profile 
// DELETE ===> Remove a User data 

// FE ===> API(GET) ===> BE (Routes, Middleware, Controllers)

// API Status Codes :- 

// CODE                                             Meaning 

// 200                                              Success
// 201                                              Created 
// 400                                              Bad Request
// 401                                              Unauthorised
// 404                                              Not found 
// 500                                              Server Error


let data1 = fetch("https://jsonplaceholder.typicode.com/users")
.then((data1) =>{
    console.log(data1)
})
.catch((e) =>{
    console.log(e)
})


let data3 = {
    name : "Mujasheer",
    // role : "ASE"
}
fetch("https://jsonplaceholder.typicode.com/users")
.then((data3)=>{
    return data3.json();
    // console.log(data2)
})
// .then((d)= console.log(d))
.catch((e)=>{
    console.log(e)
})

// Examples :- 

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


