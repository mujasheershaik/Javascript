// Objects 


// In objects data will be stored in key value pairs 
// Keys will be of strings 
// Value can be of any data type 
// Key and Value can be separated by : 
// Each key value pair will be separated by , 
// { }

// Related data 

// let emp = {
//     empname:""
//     emp id: ""
//     Bgroup: ""
//     Role: ""
//     Address: ""
//     Salary: ""
//     Phnumber: ""
//     DOJ: ""
//     DOB: ""
//     //
// }


// 4 ways 

// Objectliteral way 

// let a = {}

// new key word

let b = {}
console.log(b)

let a = new Object()
console.log(a)

// constructor 

function employee(a,b,c){
    this.name = a;
    this.role = b;
    this.dept = c;
}
let emp1 = new employee("Mujasheer","Associate Software Engineer", "IT")
let emp2 = new employee("Shaik",'ASE', "IT")
console.log(emp1)
console.log(emp2)

// class 

class Emp {
    constructor(a,b,c){
        this.name = a;
        this.role = b;
        this.dept = c;
    }
}
var m = new Emp("Mujasheer","Associate Software Engineer","IT")
console.log(m)

var obj ={one: "a", b: "hello", c: "20", obj:{a:"hello",b:"hai"}}

console.log(obj.c)

console.log(obj["one"])

obj.hello = "Good Morning"

console.log(obj)

delete obj.one
console.log(obj)

obj.b= "hai"
console.log(obj)

// Copying of objects 

// Normal copy 
// Deep copy 
// Shallow copy 


var obj ={a:"one",b: "two", c : "three", obj:{a:"hello",b:"hai"}}
// console.log(obj) 

// Normal copy 

// obj id89789 = ID1234
// obj1 id020220 = ID1234

var obj1 = obj

console.log(obj1)
console.log(obj)

obj.a= "a"
obj1.d="Four"

console.log(obj)
console.log(obj1)

// Shallow copy with the help of spread operator 

var obj2 ={...obj}
obj2.name = "Hello"

console.log("obj2", obj2)
console.log("obj",obj)

var original = {one: "a", b: "hello", c: "20", obj:{a:"hello",b:"hai"}}
var copy = {...original}
copy.name = "Hello"
copy.obj.a = "Good Morning"
original.k = "Bye"
console.log("original", original)
console.log("copy",copy)

// Deep Copy 



// For premitive data types will not change and reference data types will changes 

// deep copy JSON.parse and JSON.stringify 

var copy1 = JSON.parse(JSON.stringify(original))

console.log("copy", copy)
copy1.one = "bye"
copy1.obj.a="hey"
console.log("copy",copy1)
console.log("original",original)

// Copying of arrays 

var arr = [923,232,44,12[10,391,3231]]

// Normal copy 

var copy = arr
// console.log(arr[4][0])

console.log("arr",arr)
arr[0] = 10
console.log("copy",copy)

// Shallow copy 

var copy1 = [...arr]
copy1[0]=99999
// copy1[4][0]=1000 
console.log("original", arr)
console.log("copy", copy1)

// Deep copy 

var copy2 = JSON.parse(JSON.stringify(arr))

console.log(copy2)

// copy2[4] [0]= "hello" 
console.log(copy2)
console.log(arr)


// for in 

// Object.keys 
// Object.values 
// Object.entities 

// date 
let d = new Date()
console.log(d)

// Template string 

var k = 10
var i = 20

console.log("the value of a is:",k,"The value of b is:",i,"and their sum is:", k+i )
console.log(`The value of a is ${k} The value of b is ${i} and their sum is ${k+i}`)

// ``   ${variable name} 

// Math object 

var ab = 10
var bc = 10.2

console.log(Math.floor(bc))
console.log(Math.ceil(bc))
console.log(Math.round(bc))
console.log(Math.sqrt(9))
console.log(Math.pow(2,3))
console.log(Math.floor(Math.random()* 10000))

// Generating random number for a certain Range 

// string 
let s = "Hello"
console.log(s.length)
// toUpperCase 
// toLowerCase 


