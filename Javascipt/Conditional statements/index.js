// Conditional statements 
// (1) Else
// (2)If else
// (3) Else If else 
// (4) Switch 

// Ternary ?:

// If 

// syntax 

// if (condition) {
    
// }


function checkEligibility(age) {
    if (age>18) {
    console.log("Eligible for vote")
}
}

let age = 20
checkEligibility(age)

if (true) {
    console.log("Truthy value")
}

if (false) {
    console.log("Truthy value")
}

if (1) {
    console.log("Truthy value")
}

if (0) {
    console.log("Truthy value")
}

// ifelse 
// if (condition) {
    
// }
// else{

// }

if (true) {
    console.log("True") 
}
else {
console.log("false")
}

console.log("Hai")

let a = 10
if (a>0 && a%2==0 ) {
    console.log("Positive number & Even ")
    
}

let b = 9
if (b>0 && b%2==0 ) {
    console.log("Positive number & Even ")
    
}

// 90-100 10 
// 80-90 9 
// 79-80 8
// and so on. . . . 

let marks = 89
if (marks>90) {
    console.log("A grade")
    
}
else if (marks>80) {
    console.log("B grade")
    
}

let Marks = 56
if (Marks>90) {
    console.log("A grade")
}
else if (Marks>80) {
    console.log("B grade")
}
else if (Marks>70) {
    console.log("C grade")
}
else if (Marks>60) {
    console.log("D grade")
}
else if (Marks >50) {
    console.log("E grade")   
}
else {
    
}

var K = null
console.log(K)
// Not A Number 
// 0 

var M ='0'
if (M) {
    console.log("Zero is True Value")
    
} else {
    console.log("False value")
}

// switch 
// step value 1-10, 11-20, 21-30, 31-40 (If else if else) 
// exact value 1, 10, 15 (switch) 

// syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// switch (valuetocheck) {
//     case value1:
//         ---------------
//         ---------------
//         ---------------
//         break;
//         case value2:
//             --------------
//             --------------
//             --------------
//             break;
//             case value3:
//                 -------------
//                 -------------
//                 -------------
//                 default:
// }

var grade = 10
switch (grade) {
    case 10:
        console.log("Excellent")
        break;
        case 9:
            console.log("Good")
            break;
            case 8:
                console.log("Average")

            

    default:
        break;
}

function grades(g) {
    switch (grade) {
    case 10:
        console.log("Excellent")
        break;
        case 9:
            console.log("Good")
            break;
            case 8:
                console.log("Average")


    default:
        break;
}
}
var grade = 10
grades()