// Promise :- 
            // Promises handle asynchronous tasks (like API calls). 
            // A Promise is an object that represents the result of an asynchronous operation. It can be:

// States :- 
// Pending → Resolved → Rejected 

// Pending -> still running

// Resolved (fulfilled) -> success

// Rejected -> failure

// Syntax :- 

// Promise(()=>{

// })

// (1).then( ) :-  
                // Runs when the promise is fulfilled (success). 
                // Runs when the promise is successful. 
                // True case 
                // Resolved 

// (2) .catch( ) :- 
                // Runs when the promise is rejected (error). 
                // Runs when the promise fails. 
                // Failure 
                // Reject 


// (1) Promise.resolve( ) :- 
                        // Creates a promise that is immediately resolved. 

// Example :- 

let c = Promise.resolve("Success")
c.then(result => console.log(result))

// (2) Promise.reject( ):- 
                        // Creates a promise that is immediately rejected. 

// Example :- 

let c1 = Promise.reject("Error")
c1.catch(result => console.log(result))

let c2 = Promise.reject("Error")
c2.catch(error => console.log(error))

// Creating Promise By using both Resolve and Reject :- 

let p = new Promise((resolve,reject) =>{
let status = true
if (status){
    console.log("Resolved")
    // resolve("Function resolved")
}
else{
    console.log("Reject")
    // reject("Error")
}
})

let p1 = new Promise((resolve,reject) =>{
    let status = false
    if(status){
        console.log("Success")
    }
    else{
        console.log("Failure")
    }
})

// (3) Promise.all( ):- 
                    // Runs multiple promises in parallel and waits until all succeed (or fails if any one fails).
let ab = Promise.resolve("p1 Completed")
let ba = Promise.reject("p2 failed")

Promise.all([ab,ba])
    .then((a)=>{
        console.log(a)
    })
    .catch((a)=>{
        console.log(a)
    })

// (4) Promise.race( ):- 
                    // Returns the result of the first promise that finishes (success or fail). 

// let pa =Promise.resolve("P1 done")
// let pb = Promise.reject("P2 done")

let pa = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("pa is done")
    },1000)
})
let pb = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve("pb is done")
    },5000)
})

Promise.race([pa,pb])
.then((pa)=>{
console.log(pa)
})
.catch(()=>{

})

// (5) Promise.allSettled( ):- 
                        // Waits for all promises to finish, whether success or fail, and gives their status. 

Promise.allSettled([pa,pb])
.then((a)=>{
    console.log(a)
})

// (6) Promise.any( ):- 
                    // Returns the result of the first successful promise 

Promise.any([pa,pb])
.then((a)=>{
    console.log(a)
})

// Async and await :- 

// Async :- 
            // Declares a function that always returns a Promise. 

// Await :-  
            // Pauses execution inside an sync function until the Promise resolves. 

function hai(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}
async function hello1(){
    return await hai()
}

let s = hello1()
console.log(s)

// Destructuring :- 
                // Extract values from arrays or objects into variables easily. 

let a = ["Shaik",2,3,4,5,[09,98776,687]]
let [A,B,C] = a
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log([A,B,C])

let obj = {name:"Shaik", location:"hyd",details:{}}

console.log(obj.name)

console.log(obj.name)

var M = obj.name
console.log(M)

console.log(M)

// iterators and generators 

// Iterators :- 
            // An object that lets you loop through a sequence step by step using .next(). 

for(i in a){
    console.log(i)
}

// current value and done state 

let num = [1,2,3]

let k = num[Symbol.iterator]()

console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

// Generators :- 
                // Special functions that can pause and resume using yield. 

// function* hai(){
//     console.log("Hello")
//     console.log("bye")
//     return("done")
// }
// console.log(hai())

function* hai(){
    yield("hello")
    yield("bye")
    yield("done")
}

let n = hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())
