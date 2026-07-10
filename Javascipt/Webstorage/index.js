

// Webstorage 

// In this the data will be stored in the form of an object 

// key value pairs 

// setitem to store the data 

// getitem to retrieve the data 

// removeitem to remove the data 

// local and session 

// local storage 

localStorage.setItem("Name","Shaik Mahammad Mujasheer")

console.log(localStorage.getItem("Name"))

localStorage.setItem("Role","ASE")

console.log(localStorage.getItem("Role"))

localStorage.removeItem("Role")

console.log(localStorage.getItem("Role"))

// session storage 

sessionStorage.setItem("Name","Shaik Mahammad Mujasheer")

sessionStorage.setItem("Role","ASE")

sessionStorage.clear()

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







