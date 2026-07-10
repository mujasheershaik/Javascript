let a = ["Shaik",2,3,4,5,[09,98776,687]]
let [A,B,C] = a
console.log([0])
console.log([1])
console.log([2])
console.log([A,B,C])

let obj = {name:"Shaik", location:"hyd",details:{}}

console.log(obj.name)

console.log(obj.name)

var M = obj.name
console.log(M)

console.log(M)

// iterators and generators 

// iterators 

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

// generators 

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

