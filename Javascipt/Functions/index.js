// Functions:- 
// It is a block of code to do some task and return some value 

function Hello() {
    
}

// Hello() - Function calling 
// Values that can be passed at the time of calling function are called arguments 


function add(a,b) {
    console.log(a+b)
    return "Hello"
}
add(1,2)

function add(p,q) {
    return "Hello"
    console.log(p,q)
}
let result = add(1,2)
console.log(result)

// function declaration 
function otp () {


}
// email 
// mujasheer.shaik@nybinfotech.com can get otp
// mobile verification 
// 9999999999 to get otp 
// to change password 
// to change mobile numbr 
// to change email 

// function declaration 
// function expression  // named function // Anon

// function declaration 
// function functionname(){

// }

function hello (a=10, b=10){ //parameters
    console.log(a,b)
}

hello(1,undefined)

// Arguments will have high priority than parameters 
// default parameter ? 

// varying in number of parameters and arguments


function varying(a=10,b,c,d,...f){
    console.log(a,b,c,d)
    console.log(arguments)
    console.log(f)
}

// rest parameter and arguments objects 
varying(undefined,2,3,4,5,6,7,8,9,10)

// function declaration 

function functionname () {

}
functionname()

// function expression 
// 3 ways 
// named 
// annomous function
// arrow function 

// var or let or const 

// named function 
let a = function functionname() {
    return

}
a()

// annonmous function 
let b = function () {
    return

}

// arrow function // E.S -6
let c = () => {
    return
}

// recursive function 
//                  var     //  let         // const
// redeclare        yes          no             no  (declaring the same variable once again)
// reassignment     yes         yes             no
// initialization   yes         yes             no
var m = 10
console.log(m)

m=20
console.log(m)

var m=30
console.log(m)

var age = 10 
console.log(age)

var age = 30
console.log(age)

// defined 

// undefined 

// let 

let k = 10
console.log(k)

k=20
console.log(k)


// const 

const l = 10
console.log(l)

// const l=20
// console.log(l)

var z

let y

const x = 0

// 2 phases 
// Memory creation 
// Code execution 

// console.log(p)
const p = 10
console.log(p)

// scope 

// var d = 10

// function hai(a,b) {
//     console.log(a,b)
//     console.log(a,b,d)
// }
// hai(1,2)

let d = 20
function hai(a,b) {
    var m = 100
    let AA = 999
    console.log(m)
    console.log(a,b)
    console.log(a,b,d)
    // block 
    {
        var K = 101
        let Z = 99
        const ZA = 80
        console.log(ZA)
        console.log(Z)
        console.log(m)
        console.log(K)
    }
    console.log(K)
    // console.log(Z)
    // console.log(ZA)
}

hai(1,2)
// console.log(m) 
// console.log(AA)
// console.log(K) 

// variable is declined in outside the function 
// variable is declared inside the function 

// let and const are block scope 

// function var, let, const 
// var --> This can be accessed outside the function 
// let, const cannot be accessed 

// block var, let, const 
// var can be accessed outside the function 
// let, const cannot be accessed outside the function 

// var is functional scope 
// let and const is block scope 

// recursive function 

let sum = 0
let one = function rec (a){
    if(a==0){
        return 0
    }
    sum += a
    return sum+rec (a-1)
}
// return (10+ 9+ 8+ 7+6 +5+4+3+2+1+0 )
// a = 10 sum = 0 ---> sum = 10 a = 9 sum = 19........... a = 1 x+1 0 sum -1 -2 -3 
// sum of first 10 natural numbers 
console.log(one(9))
console.log(one(10))

function hai (a){
    console.log("One",9)
}
console.log(hai(10))


// IIFE Immediately Invoked function Expression 
// (function (){ 
    // console.log("IIFE")
// })()

// (function(){

// })();

// Function currying 

function functionname(a,b,c,d){

}
functionname(10,20,30,40)

// function functionname(a){

//     function(){
//     function(){
//         function(){
//             function(){

//             }
//         }
//     }


//     }

// }
// functionname(10,20,30,40)

function add(a){
    return function(){
        console.log("second function")
    }
}
var M = add(10)
console.log(M(20))

function Add(A){
    return function(B){
        console.log("Second funcion",B,A)
    }
}
var N = Add(20)(30)
console.log(N)

function ADD(I){
    return function(J){
        console.log((J/100)*100)
        return "Done"
    }
}
var AB = ADD(100)(97)
console.log(ADD(100)(89))
console.log(AB)


// first class function 
// pure function 
// impure function 
// higher order function 

// this key word 

function hello(){
    console.log(this.name)
}
hello()

let arr = () =>{
    console.log(this)
}
arr()


let obj ={
    name: "Mujasheer",
    hello1: ()=> {
        console.log(this)
    },
    hello (){
        console.log(this)
    }
}
obj.hello()
obj.hello1()

// console.log(obj["name"]) 

// change of this reference 
 
// call apply and bind 

function hello(a,b){
    console.log(this)
    console.log(a,b)
}
hello.call(obj,10,20)

// 1st object will be object reference 
// next will be the arguments for function 


// apply 

hello.apply(obj, [10,20])

// bind
hello.bind(obj,10,20)