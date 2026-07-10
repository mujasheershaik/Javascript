// API Methods 

// get --> fetching the data 

// post --> to send the data 

// put --> it changes the entire record

// patch --> updates the partial data

// delete --> to delete the data 

// https://jsonplaceholder.typicode.com/users 

// https://jsonplaceholder.typicode.com/albums 

// Fe --> API (get) --> (Routes, middleware, controllers)

let data = {
    name: "Vara prasad",
    // ...AbortController.apply 
}

fetch("https://jsonplaceholder.typicode.com/users")

.then((data)=>{
  return data.json()
    // console.log(data)
})
.then(d => console.log(d))

.catch((e)=>{
    console.log(e)
})

// console.log(data) 

// console.log(data)

// fetch("url",{
//     method:"POST",
//     body:JSON.stringify({...data.name..}),
//     headers{
//         "content-type":
//     }
// })

