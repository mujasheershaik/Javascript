                                // TASK - 1

// Operators:- 
// (1) Arithmetic Operators. 
// (2) Assignment Operators. 
// (3) Comparison Operators. 
// (4) Logical Operators. 
// (5) Bitwise Operators.
// (6) Ternary Operators.
// (7) String Operators.
// (8) Type Of Operators.



// (1) Arithmetic Operators:- 
                            // Arithmetic Operators perform arithmetic on numbers. 
                            // Arithmetic operation can be performed on two numbers.
                            // The two numbers can be literals or variables or expressions. 


// (1.1) Addition (+) :-
                    // The addition operator adds numbers. 
// Literals:- 

var x = 10+20
console.log(x)

let y = 30+40
console.log(y)

var X = 40+50
console.log(X)

let Y = 50+50
console.log(Y)

// Variables:- 

var A= 110
var B = 220
console.log(X+Y)

let a = 120
let b = 230
console.log(a+b)

var C = 130
var D = 240
console.log(C+D)

let c = 140
let d = 250
console.log(c+d)

// Expressions:- 

var i = 10
var j = 20
console.log(i+j*2)

var I = 5
var J = (10+5)*5
console.log(J)

// (1.2) Subtraction(-):- 
                //    The Subtraction operator (-) subtracts the value. 

var p = 100
var q = 50
console.log(p-q)

let P = 50
let Q = 25
console.log(P-Q)

// (1.3) Multiplication(*):- 
                        // The Multiplication operator (*) multiplies the given value. 

var e = 10
var f = 11
console.log(10*11)

let E = 12
let F = 12
console.log(E*F)

// (1.4) Division(/):- 
                //  The Division Operator (/) divides numbers. 

var g = 120
var h = 10
console.log(g/h)

const G = 150
const H = 10
console.log(G/H)

// (1.5) Remainder (%) 

var k = 200
var l = 100
console.log(k%l)

let K = 1000
let L = 2000
console.log(K%L)

// (1.6) Exponential Operator (**) 

var m = 10
var n = 2
console.log(m**n)

let M = 5
let N = 3
console.log(M**N)

// (1.7) Increment(++) 
                    // It increases step value. 

            // There are two types. They are:-
            // (1.7.1)Pre-Inrement 
            // (1.7.2) Post- Increment.

// (1.7.1) Pre- Increment.
                // It increases the value before
var o = 3
console.log(o)
console.log(++o)
console.log(o)

// (1.7.2) Post- Increment:-
                    // It increases the value after.
let r = 10
console.log(r)
console.log(r++)
console.log(r)
console.log(r)

// (1.8) Decrement (--):-
                    // It decreases the step value.
                    
            // There are two types. They are:-
            // (8.1)Pre-Decrement 
            // (8.2) Post- Decrement.

// (1.8.1) Pre- Decrement:- 
                                // It decreases the value before. 

var O = 3
console.log(O)
console.log(--O)
console.log(O)
console.log(O)

// (1.8.2) Post - Decrement:- 
                            // It decreases the value after. 
        
let R = 20
console.log(R)
console.log(R++)
console.log(R)
console.log(R)

// (2)Assignment Operators:- 
                                // Assignment operators assigns the value to the Javascript variables. 
             // Assignment Operators are:-
                                // (2.1)+=
                                // (2.2)-=
                                // (2.3)*=
                                // (2.4)/=
                                // (2.5)%=
                                // (2.6)**=

// (2.1)+=

// Example:- X+=Y = X+Y 

let s = 10
let t = 2
console.log(s+=t)

// (2.2)-=

// Example:- X-=Y = X-Y

console.log(s-=t)

// (2.3)*= 

// Example:- X*=Y = X*Y 

console.log(s*=t)

// (2.4) /= 

// Example:- X/=Y = X/Y 

console.log(s/=t)

// (2.5)%= 

// Example:- X%=Y = X%Y 

console.log(s%=t)

// (2.6)**= 

// Example:- X**=Y = X**Y

console.log(s**=t)

// (3) Comparison Operators:- 
                            // Comparison Operators are used to compare two values. 
                            // The result will be a boolean value(true/false). 
                            // Comparison Operators can be used in conditional statements to compare the
                            // values and take action depending on the result. 

            // Comparison Operators are:- 
            // (3.1) Equal too (==) (Loose Equality)
            // (3.2) Equal value and equal type (===) (Strict Equality)
            // (3.3) Not Equal too (!=) (Loose Inequality)
            // (3.4) Not equal value and not equal type (!==) (Strict Inequality)
            // (3.5) Less than (<) 
            // (3.6) Greater than (>) 
            // (3.7) Less than or equal too (<=) 
            // (3.8) Greater than or equal too (>=) 

// (3.1) Equal too (==) (Loose Equality)

let S = 10
let T = 50

var u = 20
var v = "30"

console.log(S==T)
console.log(u==v)

// (3.2) Equal value and equal type (===) (Strict Equality)

console.log(S===T)
console.log(u===v)

// (3.3) Not equal too (!=) (Loose inequality)

console.log(S!=T)
console.log(u!=v)
// (3.4) Not equal too and not equal type (Strict Inequality)

console.log(S!==T)
console.log(u!==v)

// (3.5) Less than (<)

console.log(S<T)
console.log(u<v)
console.log(T<S)
console.log(v<u)

// (3.6) Greater than (>)

console.log(S>T)
console.log(u>v)
console.log(T>S)
console.log(v>u)

// (3.7) Less than and equal too (<=)

var U = 10

console.log(S<=T)
console.log(T<=S)
console.log(u<=v)
console.log(v<=u)
console.log(u<=U)
console.log(U<=u)

// (3.8) Greater than and equal too (>=)

console.log(S>=T)
console.log(T>=S)
console.log(u>=v)
console.log(v>=u)
console.log(u>=U)
console.log(U>=u)

// after 18 
let age = 10
console.log(age>18)

// (4) Logical Operators:- 
                                // Logical Operators are used to perform the logical operations that
                                // determine the equality or difference between the values. 

            // Logical Operators are:- 
            // (4.1) AND (&&)
            // (4.2) OR (||)
            // (4.3) NOT (!)

// (4.1) AND(&&):-  
            //  If the both conditions are true then the result will be true. 
            // If any one of the conditon is not true then the result will be false. 

console.log((10<20) && (20>10))
console.log((100<500) && (1000<2000))

// (4.2) OR (||):- 
                // If any one of the condition is true then the result will be true. 

console.log((100>50) || (20<10))
console.log((1000<500) ||(500>100))

// (4.3) NOT (!) 
                // If the condition is true also when we are applied not operator then the result will be
                // false.

console.log(!(10>50))
console.log(!(100>1000))

// (5) Bitwise Operators:- 
                        //  Bitwise operators perform operations on binary representations of numbers.
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

// (6) Ternary Operators:- 
                                // Ternary operators is a shorthand operator used in conditional statements,
                                // it takes three operands.
                                // Condtion ? Expression 1 : Expression 2; evaluates expression 1 if the 
                                // condition 1 is true, otherwise evaluates expression 2
                                // In this the condition will be give and the two cases in that which
                                // condition is true it will be written. 

let age1 = 20
age1>18?console.log("Adult"):console.log("Minor")

var age2 = 16
age2<18?console.log("Minor"):console.log("Adult")

// (7) String Operator:- 
                    // String Operators include concatenation(+) and concatenation assignment(+=),
                    // used to join the strings or combine with other data types. 

var firstname = "Shaik"
var lastname = "Mujasheer"

console.log(firstname+""+lastname)

var lastname = "Mujasheer"
var salary = 15000

console.log(lastname+""+salary)

// (8) TypeOf Operators:- 
                        // Type Of Operators are used to check the data type. 

console.log(age1, typeof(age1))
console.log(lastname, typeof(lastname))
console.log(salary, typeof(salary))


// Template Literal:- 
                //   It is similar to string operator 
                // It is used to combine the both strings and variables. 

var company = "NYB"

let role = "Associate Software Engineer"

console.log(`My name is ${firstname} ${lastname} and I'm working in ${company} as a ${role}`)

