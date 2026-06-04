var p = 10
var pqr = "60"
var name = "Mujasheer"
var z 
var bool = true 
var m = null

console.log(p)
console.log(pqr)
console.log(name)
console.log(z)
console.log(bool)
console.log(m)

// Type of Operator 

console.log(typeof(p))
console.log(typeof(pqr))
console.log(typeof(name))
console.log(typeof(z))
console.log(typeof(bool))
console.log(typeof(m))

// Rules for writing varible names:- 

// var 9 = "90" 
// console.log(9) 

// It should start with character(alphabet) or _
// It should not start with Number 
// It should not contain white space 
// A keyword cannot be used as a variable 

// Errors:- 
// (1) Syntax Error 
// (2) Reference Error 

var M = 90
console.log(M)
console.log(typeof(M))

// Is Equal to (=) This is Assignment Operator, it assigns the right side value to the left side variable 

var a = true 
console.log(a)
console.log(typeof(a))

var b = false 
console.log(b)
console.log(typeof(b))

                // (1) Premivite Data Types:- 
                //                         It stores the single value in a single memory
                //                         unit.     

                // Premitive Data types are 7. They are: 
                // (1) Number
                // (2) String
                // (3) Boolean
                // (4) Null
                // (5) Undefined 
                // (6) BigInt
                // (7) Symbol 

var string = "Hello hi"
var K = 'Hello'
var _m = `Hello`
var Mujasheer = string

console.log(string, typeof(string))
console.log(K, typeof(K))
console.log("Value of _m", typeof(_m))
console.log(Mujasheer)

// (1) Number 
            // A number representing a Numeric value 

var w = 10
console.log(w,typeof(w))

var e = 50 
console.log(e, typeof(e))

// (2) String 
            // A text of characters enclosed in quotes.  

var firstname = "Shaik"
console.log(firstname, typeof(firstname))

var middle_name = 'Mahammad'
console.log(middle_name, typeof(middle_name))

var LastName = `Mujasheer`
console.log(LastName, typeof(LastName))

// (3) Boolean 
            // A boolean represents the data type is true or false. 

var i = true 
console.log(i, typeof(i))

var j = false 
console.log(j, typeof(j))

// (4) Null 
            // A value representing value absence. 

var r = null
console.log(r, typeof(r))

var t = null
console.log(t, typeof(t))

// (5) Undefined 
                // A variable with no assigned value. 

var y
console.log(y, typeof(y))

var u
console.log(u, typeof(u))

// (6) BigInt 
            // A number representing a large integer. 
var  o = 123n
console.log(o, typeof(o))

var s = 12345678901n
console.log(s, typeof(s))

// (7) Symbol 
            // A symbol represents unique value. 
var d = Symbol()
console.log(d,typeof(d))

var f = Symbol('')
console.log(f, typeof(f))


                // (2) Reference (or) Non-premitive Data types:-   
                                                // It stores the multiple values in a 
                                                // single memory unit. 

        // There are 6 types of Reference Data types. They are:- 

        // (1) Objects. 
        // (2) Arrays. 
        // (3) Functions. 
        // (4) E.S-6 (Map, WeakMap, set weakset)
        // (5) Date. 
        // (6) Regular Expressions. 

// (1) Objects 
                // Objects are collection of Key value pairs. 
                // Objects are enclosed with curly braces {}. 
                // Each key and value can be separated by colon (:). 
                // Each key value pair can be separated by commas (,).
                
var obj = {firstname:"Shaik",middlename:"Mahammad", lastname:"Mujasheer", Role: "ASE",
    location: 'Anantapur', Male: true, attendance:{jan:20, feb:20}}

console.log(obj, typeof(obj))

var obj1 = {color:"Blue", Price:500, material:"Paper"}

console.log(obj1, typeof(obj1))

// (2) Array
            // Array is list of values.
            // It is enclosed by Square braces. [] 
            // It can store both homogenies and heterogenies values. 
            // Homogenies contains single type of values. 
            // Heterogenies contains multiple types of values. 

var arr = ["Banana", "Orange", "Apple", "Pineapple"]

console.log(arr, typeof(arr))

var arr1 = ["Mujasheer","ASE", "Anantapur", "Male",[1,2,3,1234,[null,true,false]]]

console.log(arr1, typeof(arr1))

// (3) Functions 
                // Function is a block of code to do some task and return some value. 

function Hello(){
    console.log("Hai! How are you?")
}
Hello()

// Calculation of salary based on number of working days 
console.log(2000*20)
console.log(2000*21)
console.log(2000*22)

function salary(name,days){ // parameters
    var perday = 2000
    console.log("Monthly salary of",name,"is",perday*days)
    console.log("Code Executed")
    return perday*days //return means come back it wont execute after return
}
salary("Mujasheer",20) //arguments
console.log(salary("Shaik",21))

console.log("All salaries are calculated")

// (4)E.S -6 (Map, WeakMap, set, weakset) 
// Map 
            // The data will be stored in key value pairs and it can be of any data type 

var M = {name:"Mujasheer",1:"date",true:"value"}
console.log(M)

var l = new Map()
l.set(1,"date")
l.set(true,"value")
l.set(true,"value")
console.log(l)


// (5)Date 
            // It is a built in javascript function used to show the date 

let today = new Date();
console.log(today) 

let birthday = new Date("2000-11-23")
console.log("Birthday:", birthday)

// (6) Regular Expressions 
                            // Regular expression is another object type in js used to match 

let pattern = /java/;
let text = "i'm Learning Javascript"
console.log(pattern)

let Pattern = /word/;
console.log(Pattern)