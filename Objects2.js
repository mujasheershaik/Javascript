// Object.Keys 

let Emp = {name: " Mujasheer", place:"Anantapur", Role: "ASE"}

console.log(Object.keys(Emp))

// Object.Values 

console.log(Object.values(Emp))

// Object.entries 

console.log(Object.entries(Emp))
// For In Loops :- 
                // The for-in loop iterates over the enumerable keys of an object. 
                // The for...in loop is primarily used for objects to access their property names (keys). 

// Syntax :- 

// for (let key in object) {
//     // code to be executed
// }

const person = { name: "Mujasheer", age: 27, city: "Anantapur" }

for (let key in person) {
  console.log(key, ":", person[key])
}


// Date :- 
        // The JavaScript Date object is a built‑in object that allows developers to work with dates and times. 
let a = new Date ()
console.log(a)

console.log(a.getDate())
console.log(a.getMonth())
console.log(a.getFullYear())

// Template String :- 
                    // The Template String (also called Template Literal) in JavaScript is a special way to create strings
                    // using backticks (``) instead of quotes. They allow embedding variables and expressions directly 
                    // inside the string, making code cleaner and easier to read.

let b = 20
let c = 50

console.log("The value of b is:",b,"The value of c is:",c,"and their sum of b and c is:",b+c)
console.log(`The value of b is ${b}, The value of c is ${c}, and their sum of b and c is ${b+c}`)

// ` ` ${variable name} 

// Math Object :- 
                // The Math object is used to perform mathematical operations like rounding, 
                // finding square roots, generating random numbers, and more.

                // Math Objects are :-

                // (1) Floor
                // (2) Ceil
                // (3) Round
                // (4) Sqrt
                // (5) Random 
                // (6) Max
                // (7) Min 


var ab = 10
var bc = 10.3
var cd = 10.8
var de = -10.8

// (1) Math.floor :-
                    // The Math.floor() method in JavaScript is part of the Math object. 
                    // It is used to round a number downward to the nearest integer, regardless of the decimal value.

console.log(Math.floor(ab))
console.log(Math.floor(bc))
console.log(Math.floor(cd))
console.log(Math.floor(de))

// (2) Math.ceil :- 
                    // The Math.ceil() method in JavaScript is part of the Math object.
                    // It is used to round a number upward to the nearest integer, no matter what the decimal value is.

console.log(Math.ceil(ab))
console.log(Math.ceil(bc))
console.log(Math.ceil(cd))
console.log(Math.ceil(de))

// (3) Math.round :- 
                    // The Math.round() method in JavaScript is part of the Math object.
                    // It is used to round a number to the nearest integer. If the decimal part is 0.5 or greater, 
                    // it rounds up; otherwise, it rounds down.
        
let ef = -4.5

console.log(Math.round(ab))
console.log(Math.round(bc))
console.log(Math.round(cd))
console.log(Math.round(de))
console.log(Math.round(ef))

// (4) Math.sqrt :- 
                    // The Math.sqrt() method in JavaScript is part of the Math object. 
                    // It is used to calculate the square root of a given number.

console.log(Math.sqrt(4))
console.log(Math.sqrt(9))
console.log(Math.sqrt(16))

// (5) Math.Random :- 
            // It is used to generate a random number within a certain Range. 

console.log(Math.floor(Math.random()*1000))
console.log(Math.random()*5000)
console.log(Math.random()*10000)

// (6) Math.Min :- 
                // The Math.min() method in JavaScript is part of the Math object.
                // It is used to find the smallest (minimum) number among a set of numbers.

console.log(Math.min(ab,bc,cd))
console.log(Math.min(de,ef))
console.log(Math.min(5,10,20,30))
console.log(Math.min())

// (7) Math.max :- 
                // The Math.max() method in JavaScript is part of the Math object. 
                // It is used to find the largest (maximum) number among a set of numbers.

console.log(Math.max(ab,bc,cd))
console.log(Math.max(de,ef))
console.log(Math.max(10,20,50,100))
console.log(Math.max())

// String Object:- 
                // The String object in JavaScript is a built‑in object that lets you work with text. 
                // Strings are sequences of characters, and the String object provides many useful methods to 
                // manipulate, search, and analyze text.
                // The String object represents text and provides methods to work with characters, words, and sentences.

// (1) Length :- 
                // The length property returns the number of characters in a string. 

let s = "Hello"
console.log(s.length)

// (2) To Upper Case :- 
                    // The toUpperCase() method in JavaScript is part of the String object. 
                    // It is used to convert all the characters in a string to uppercase letters.

console.log(s.toUpperCase())

// (3) To Lower Case :- 
                        // The toLowerCase() method in JavaScript is part of the String object. 
                        // It is used to convert all the characters in a string to lowercase letters.

console.log(s.toLowerCase())

// (4) Includes :-
                    // The includes() method in JavaScript is part of the String object. 
                    // It is used to check whether a given substring exists inside a string, 
                    // returning true if found and false if not.

let h = "Hello Good Afternoon"

console.log(h.includes("Hello"))

// (5) Indexof :- 
                // The indexOf() method in JavaScript is part of the String object. 
                // It is used to find the position (index) of the first occurrence of a specified substring within a string. 
                // If the substring is not found, it returns -1.

console.log(h.indexOf("G"))
console.log(h.indexOf("J"))
console.log(h.indexOf("Hello"))

// (6) Substring :- 
                //  The substring() method in JavaScript is part of the String object. 
                //  It is used to extract a portion of a string between two specified indexes. 
                //  The result is a new string without modifying the original one.

console.log(h.substring(0,5))
console.log(h.substring(0,10))

// (7) Slice:- 
                // Slice is used to extracts part of a string and returns it as a new string.
                // Slice (start point, end point)
                // It allows negative values also from right. 

let h1 = "Hello Good Evening Everyone"

console.log(h1.slice(11,18))
console.log(h1.slice(-8))
console.log(h1.slice(-16,-9))

// (8) Replace :-
                // Replace finds a substring or pattern in a string and replaces it with another value.
                // replace(searchValue, newValue)

let h2 = "Hello Good Afternoon, Everyone"

console.log(h2.replace("Afternoon", "Evening"))

// (9) Split :- 
            // Split(separator) divides a string into an array of substrings, based on the given separator.
            // You provide a separator (like space " ", comma ",", or any character).
            // The string is broken wherever that separator occurs.
            // Returns an array of substrings.

console.log(h2.split(" "))
console.log(h2.split(","))
console.log(h2.split(""))

