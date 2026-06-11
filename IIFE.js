// IIFE (Immediately Invoked Function Expression):- 
        //  A function calling immediately after declaration is called 
        //  Immediately Invoked Function Expression.

// Syntax:-

// (function(){
//     console.log("")
// })()

(function (){
    console.log("This is a IIFE function")
})()

// (function(Name){
//     console.log("Hello, " + Name);
// })("Mujasheer")

// Function Currying:- 
            // A function currying is a process of transforming a
            // function that takes multiple arguments into a sequence of 
            // functions, each taking one argument at a time. 

// function add(a){
//     return function(){
//         console.log(" This is second function")
//     }
// }
// var M = add(10)
// console.log(M(20))

// function Add(A){
//     return function(B){
//         console.log(" This is a Second funcion",B,A)
//     }
// }
// var N = Add(20)(30)
// console.log(N)

// function ADD(I){
//     return function(J){
//         console.log((J/100)*100)
//         return "Done"
//     }
// }
// var AB = ADD(100)(97)
// console.log(ADD(100)(89))
// console.log(AB)

// Normal function:- 

function add(a,b){
    console.log(a+b)
    return a+b;
}
console.log(add(2,3));

// Currying function:- 

function Curryingfunction1(a){
    return function(b){
        return a+b;
    }
}
Curryingfunction1(2)(3)
console.log(Curryingfunction1(2)(3))

function Curryingfunction2(p){
    return function(q){
        return function(r){
            return p+q+r
        }
    }
}
console.log(Curryingfunction2(10)(20)(30))


// First class function:- 
                        //  In javascript functions are treated like
// other values(like strings, numbers, objects).
// This means we can assign them to a variables, pass them as arguments, 
// and return them from other functions. 

var Fullname = function(name){
    console.log("Hello, " + name);
};
console.log(Fullname("Mujasheer"))

var greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Mujasheer"));

// Pure Function:- 
                    // A Pure function is a function that always produces 
// same output for the same input. 

// Examples:- 

function add1(c,d){
    console.log(c+d)
}
add1(10,20)
add1(10,20)

function add2(e,f){
    return(e+f)
}
console.log(add2(30,40))

// Impure Function:- 
                // A Impure Function is a function which produces
// different outputs for the same input. 

// Examples:- 

let count = 0

function increment(){
    console.log(count++)
}
increment()
increment()
increment()
increment()

let count1 = 10

function decrement(){
    count1--;
    return count1;
}
console.log(decrement())
console.log(decrement())
console.log(decrement())
console.log(decrement())

// This Keyword:- 
                // This returns current Object. |

console.log(this)

function hello(){
    console.log(this)
}
hello()

let obj = {
    name: "Mujasheer",
    hello(){
        console.log(this.name)
    },
    hello1: ()=>{
        console.log(this)
    }
}
obj.hello()
obj.hello1()

let arr = () => {
    console.log(this)
}
arr()

// Lexical Scope:- 

// Lexical Scope is a function can access variables from its parent 
// (outer) scope.
// The scope is determined by where the function is written, not 
// where it is called. 

// Change Of This Reference :- 

// Call Bind Apply 

// Call:- 
        // If we use call to this reference and we have to give the object 
        // name then it will change the object and call it. 

function hello(){
    console.log(this)
}
hello.call(obj)

function hello(a,b){
    console.log(this)
    console.log(a,b)
}
hello.call(obj,10,20)

// 1st argument will be the object reference. 
// Next will be the arguments to that function. 
// In call we can send any number of arguments. 

// Apply:- 
            // In apply we can only pass two arguments. 
            // In first argument will be the object. 
            // Second will be in square braces we can write any number 
            // of in that. 


hello.apply(obj, [10,20])

// Bind 

hello.bind(obj,10,20)
