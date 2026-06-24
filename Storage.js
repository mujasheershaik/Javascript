

// Webstorage :- 
                // Web Storage is a browser feature that allows websites to store data directly in a user's browser 
                // as key–value pairs. It's commonly used to save settings, user preferences, login state information, 
                // shopping cart data, and other client-side information.


// In this the data will be stored in the form of an object 

// key value pairs 

// setitem to store the data 

// getitem to retrieve the data 

// removeitem to remove the data 

// Webstorage are of two types. They are:- 
// (1) Local Storage. 
// (2) Session Storage. 

// (1) Local Storage :- 
                // It stores the data permanently until we delete it manually. 
                // Local Storage stores data with no expiration date.
                // Data remains even after the browser is closed.
                // Available across browser sessions.
                // Accessible only by pages from the same origin (same protocol, domain, and port).

// Saves data :-

localStorage.setItem("Name","Shaik Mahammad Mujasheer")

// Get data :-

console.log(localStorage.getItem("Name"))

localStorage.setItem("Role","ASE")

console.log(localStorage.getItem("Role"))

// Removes data :- 

localStorage.removeItem("Role")

console.log(localStorage.getItem("Role"))

// (2) Session Storage :- 
                    // It stores the data only for the current browser session/tab.
                    // Data is deleted when the tab or browser window is closed.
                    // Different tabs have separate session storage.
                    // Data survives page refreshes within the same tab. 

// Saves data :-

sessionStorage.setItem("Name","Shaik Mahammad Mujasheer")

sessionStorage.setItem("Role","ASE")

// It clears all data :- 

sessionStorage.clear()

// To get the data :- 

console.log(sessionStorage.getItem("Name"))

console.log(sessionStorage.getItem("Role"))

// sessionStorage.removeItem("Name")

// console.log(sessionStorage("Name"))

// 1st screen 

// please login

// login button --> authtoken in the local storage 

// check the authtoken is present or not 

// please login    ->>  hello user

// hello user           logout

// please login







