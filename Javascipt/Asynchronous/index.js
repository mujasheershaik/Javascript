// Async 

console.log("one")

setTimeout(() =>{
    console.log("two")
},1000)


// Milli seconds 1 sec = 100 ms 
console.log("three")
let sum = 0
for (i=0; i<10000; i++){
    sum+=i
}

console.log(sum)



// setInterval 

let a = setInterval(()=>{
    console.log("four")
},1)

// clearInterval 

setTimeout(()=>{
    clearInterval(a)
},1000)

// Hello world 2 times print 


for(i=0;i<2;i++){
    console.log("Hello World")
}

