// JAVASCRIPT 

// It is used to store the data to use in future
// It will store tha data by using variables
// variable store the data types

// JAVASCRIPT has two data types. They are; 

// (1)Premitive data types
// (2)Reference / Non-premitive data types

// (1) Premitive data types;
                        //   It stores the single value in single memory location.

// (2) Non-premitive data types; 
                            //  It stores the multiple values in single memory location. 
var a = 10
var abc = 30
console.log(a)
console.log(abc)

// (1) Premitive data types;
                                // The premitive data types are divided into two types. They are;
                                // (1) Numeric data type 
                                // (2) Non-Numeric data type 
// (1)Numeric data types;
                    //  The Numeric data types divided into two types. They are;
                    //  (1) Number
                    //  (2) BigInt 
// (2) Non-Numeric data types;
                            // The Non-Numeric data types divided into five types. They are;
                            // (1) String
                            // (2) Boolean
                            // (3) Null 
                            // (4) Undefined 
                            // (5) Symbol 


var a = 10
var abc = 30
var name = "Shaik"
var bool = true
var k
var m = null

console.log(a)
console.log(abc)
console.log(name)
console.log(bool)
console.log(k)
console.log(m)

// Type of Operators
console.log(typeof(a))
console.log(typeof(abc))
console.log(typeof(name))
console.log(typeof(bool))
console.log(typeof(k))
console.log(typeof(m))

// Data types 
// premitive data types 
// Reference data types 

// Premitive data types 

// Number data type 
// String 
// Boolean 
// Undefined 
// Null 
// BigInt 
// Symbol 

// String - "" or '' or ``



var string = "Hello"
var k = 'Hello'
var _m = `Hello`
var shaik = "Hi"

console.log(string,typeof(string))
console.log(k,typeof(k))
console.log(_m,typeof(_m))
console.log(shaik, typeof(shaik))

var M = 90
console.log(M)
console.log(M,typeof(M))

// = Assignment operator it will assign the right side value to the left side variable 

// Types of Number data types 
 
// Rules for writing Variable Names:

// It should start with Character(alphabet) or _ 
// It should not start with number 
// It should not contain white space 
// A key word cannot be used as the name of a variable 


// Errors 
// (1) Syntax errors
// (2) Reference errors

// Boolean data type 

var a = true
var b = false

console.log(a)
console.log(b)
console.log(a,typeof(a))
console.log(b,typeof(b))

// Reference error False is not defined 

// undefined data type

var Ab 
console.log(Ab)

// Null data type 

var N = null 
console.log(N)
var True = null
console.log(True)

var s= "String"
var n = 3
var b = true
var u 
var N = null

console.log(s,typeof(s))
console.log(n,typeof(n))
console.log(b,typeof(b))
console.log(u,typeof(u))
console.log(N,typeof(N))

// BigInt Data types 
var b = 10n
console.log(b, typeof(b))

// Reference data types 
// Object 
// Arrays 
// Functions 
// E .S 2015 (Map, weakmap set, weak set) 
// Date 
// Regular expressions 

// Objects 
// Enclosed in { }
// Collection of key value pairs 
// Each key and value will be separated by : 
// Each key value pair will be separated by , 

var obj = {name: "Shaik" , role: "Associate Software Engineer", city: "Hyderabad" ,number:009988776655, male:true, salary:50000, attendance:{Jan:20,Feb:20}}
console.log(obj)

var a = {}

// Arrays 

var arr = [1,2,3,4,"hello", "hai", null, true, false,[1,23,345,4566,67483,[1,12,345]],{name : "shaik"}]
console.log(arr)

// Function data types 
// Function is a block of code which is used to do some task and return some value

function Hello(){
    console.log("Hai!How are you?")
}
Hello()
console.log("Hai")

// Calculation of salary based on number of working days 
console.log(2000*20)
console.log(2000*19)
console.log(2000*21)

function salary(name,days){ // parameters
    var perday = 2000
    console.log("monthly salary of",name,"is",perday*days)
    console.log("Execution is completed")
    return perday*days 
}
salary("mudassir",20) //arguments
salary("Mujasheer",23)

function salary(name,days){
    var perday = 3000
    console.log('Monthly salary of',name, "is",perday*days)
}
salary("Mudassir",25)
console.log(salary("Mudassir",25))

console.log("All salaries are calculated")

// Map 
// The data will be stored in key value pairs and key can be of any data type 
var m={name :"Mujasheer",1:"date",true:"value"}
console.log(m)
var l = new Map()
l.set(name, "Mujasheer")
l.set(1,"date")
l.set(true,"value")
console.log(l)

// set 
// A set is a collection of unique values, meaning each value can occur only once.
// This makes it deal for storing unique items and eliminating duplicates.

