// Function :- 

            // Function is a block of code used to to some task and 
            // return some value. 

// function(){ //Parameters

// }
// Hello() // Function calling
// Values that can be passed at the time of function calling are called as 
// Arguments.

// function add(a,b){
//     console.log(a+b)
// }
// add(1,2)

// function add(a,b){
//     console.log(a+b)
//     return "Hello"
// }
// add(1,2)
// // console.log(add(1,2))
// console.log(a,b)

function add(a,b){
    return "Hello"
    console.log(a+b)
}
add(1,2)
console.log(add(1,2))
// console.log(a,b)

// function otp(){

// }

// email 
// mobile verification 
// to change password 
// to change mobile number
// to change email 

// function declaration
// function functionname(){

// }

// functionname(){

// }

function Hello(a = 10, b = null){ // parameters
console.log(a,b)
}
Hello(10,20) // arguments
// If we store the value directly into the parameters it will be consider
// as default parameters 
// Arguments will replace parameters value
// Arguments will have high priority than arguments. 
// Undefined has no priority if we pass it in arguments also the value won't 
// be updated.

// Varying in number of parameters and objects 

function varying(a=10,b,c,d){
    console.log(a,b,c,d)
    console.log(arguments)
}
// Rest parameters and arguments objects 
varying(undefined, 10, 20, 30, 40, 50, 60)



