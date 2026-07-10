// Operators 

// (1)Arithmatic operators (+,-,/,%,++,--,*)

// (1)Arithmetic operators

// Addition 
var a = 10
var b = 2
console.log (a+b)

// Substraction 
var p = 10
var q = 8
console.log(p-q)

// Division 
var a = 10
var b = 2

console.log(a/b)

// Modulus 
var a = 10
var b = 2
console.log(a%b)

// Increment 
// Preincrement 
// Postincrement 
console.log(a) //10
console.log(++a) //11
console.log(a++)
console.log(a) //12

// Decrement 
// Predecrement 
// Postdecrement 
console.log(a) //12
console.log(--a) //11
console.log(a--) //11
console.log(a) //10

// Multiplication 
var x = 10
var y = 20
console.log(x*y)

// Exponents 
var A = 2
var B = 3
console.log(A*B)
console.log(A**B)

// Assignment operators (=)
// (+=) (-=) short hand operators (*=) (/=) (%=)

// (+=)
var A = 2
var B = 3
console.log(B)
B+=A //B= B+A
console.log(B)
console.log(B)

// (-=)
var P = 10
var Q = 20
console.log(P)
Q-=P //Q = Q-P
console.log(Q)

//(*=)
var A = 5
var B = 4
console.log(B)
B*=A //B = B*A
console.log(B)

// (/=)
var P = 5
var Q = 10
console.log(Q)
Q/=P //Q=Q/P
console.log(Q)

// (%=)
var A = 10
var B = 20
console.log(B)
B%=A //B= B%A
console.log(B)


// Comparison operators :- 
// Used to compare two values // result  will be a boolean value (true/false)

{/* < > <= >=  */}
// (==) - Loose equality (value)
// (===) - Strict equality (value and it's data type)
// (!=) - Loose inequality
// (!==) - Strict inequality

var a = 10
var b = 8
var c = 10
console.log(a<b)
console.log(a>b)
console.log(a<b)
console.log(a<=c)
console.log(a>=c)
var d = 10
var e = "10"
console.log("Loose equality", d==e)
console.log("Loose Inequality", d!=e)
console.log("Strict equality", d===e)
console.log("Strict Inequality",d!==e)

// After age 18

let age = 10
console.log(age>18)

// Logical Operators 

// AND -(&&) If both conditions are true then the result will be true. 
// OR -(||) If one of the condition is true then the result will be true
// NOT -(!)

console.log((1<3)&&(9>5))
console.log((1<3)||(5>9))
console.log(!(1<3))

// Bitwise Operators
// Ternary Operators
// Syntax:- ? :
// Conditions ? True : False

let salary = 4000
salary>10000?console.log("Apply for credit card") : console.log("You are not eligible")

// String Operators
// Typeof Operators

var first = "Shaik"
var Last = "Mujasheer"
console.log(first +" "+Last)

var first = "Shaik"
var middle = "Mahammad"
var last = "Mujasheer"
console.log(first+" "+middle+" "+last)

// Template Literal 

console.log(`My name is `+first, last+` and Iam working as a Associate Software Engineer at NYB Infotech`)// Its too complex
// OR 
console.log(`My name is ${first} ${middle} ${last} and Iam working as a Associate Software Engineer at NYB Infotech`)

// Bitwise operators 
// 8421 
// 00001111
//     8421 

// 0 - 0000
// 1 - 0001 
// 2 - 0010 
// 3 - 0011  

// if both values are true then the result will be true 
// Bitwise AND operator 
// 1 & 2
// 0001
// 0010
// 0000
console.log(1&2)

// Bitwise OR operator 
// 1|2
// 0001
// 0010
// 0011
console.log(1|2)