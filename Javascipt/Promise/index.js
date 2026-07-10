// Promise 

// // Promise(()=>{

// // })

// let p = new Promise((resolve,reject)=>{
// let status = false
// if(status){
// // console.log("Resolved")
// resolve("function successful")
// }
// else{
// // console.log("Reject")
// reject("error")
// }
// })

// // p 






// pending resolve/reject 

// all()

// new Promise (()=>{
//
// })

let ab = Promise.resolve("p1 Completed")
let ba = Promise.reject("P2 completed")
Promise.all([ab,ba])
.then((a)=>{
    console.log(a)
})
.catch((a)=>{
    console.log("Failed")
})
// Promise.race()

// let pa =Promise.resolve("P1 done")
// let pb = Promise.reject("P2 done")

let pa = new Promise ( ((resolve,reject))=>{
    setTimeout(()=>{
        reject("pa is done")
    },1000)
})
let pb = new Promise((resolve, reject))=> {
    setTimeout(()=>{
        resolve("pb is done")
    },5000)
})

Promise.race([pa,pb])
.then((pa)=>{
    console.log(pa)
})
.catch((pa)=>{
    console.log(pa)
})

// Promise.allSettled 
Promise.allSettled([pa,pb])
.then((a)=>{
    console.log(a)
})

// Promise.any 
Promise.any([pa,pb])
.then((a)=>{
    console.log(a)
})
