                            // TASK - 1 

        // Loops:- 
                    // Loops can execute a block of code a number of times. 
                    // Loops are handy, if you want to run the same code over and over again,
                    // each time with a different value.

        // Loops are different types. They are:- 
        // (1) For Loop.
        // (2) While Loop.
        // (3) Do while Loop.
        // (4) For of Loop.
        // (5) For in Loop.
        // (6) For Each Loop. 

// (1) For Loop:- 
                // The For loop statement creates a three optional statements. 

// Syntax:- 
        //    for (exp1; exp2; exp3){ 
            // code to be executed here
        //    }

        // exp1 is executed one time before the execution of code block. 
        // exp2 defines the condition for executing the code block. 
        // exp3 is executed every time the code block has been executed. 
        // If we know when to stop then we will use For Loop. 
        // for(initialization, condition, update){

        // }

let grades = [10, 7, 8];
console.log(grades[0])
console.log(grades[1])
console.log(grades[2])

for(let i=0; i<grades.length; i++){
function grade(g){
switch(g){
    case 10:
        console.log("Excellent");
        break;
        case 9:
            console.log("Very good");
            break;
            case 8:
                console.log("Good");
                break;
            case 7:
                console.log("Average")
            }

        }
        grade(grades[i]);
    }

// Conditional Operators:- 

let day = 3
day ===1?console.log("Day One"): day===2? console.log("Day Two"): day ===3? console.log("Day three")

// (2) While Loop:- 
                    // The while loop loops through a block of code as long as specified condition is true. 
                    // If we don't know when to stop then we will use while Loop. 

// // while loop 
// minimum no of iterations = 0 
// while (condition) {

// }

// let i = 1
// let count = 0
// // list first 10 even numbers 
// while (count<=10) {
//     if (i%2==0){
//         console.log(i)
//         // count++
//     }
//     i+=1
//     count++
// }
// (3) Do while Loop 
// do while 
// minimum no of iterations = 1
// do {
//     console.log("Hello")
// } while (false);

// infinite loop 
// when condition is always true 
// let obj ={a:"hello", b:"hai"}
// console.log(obj)


// (4)For of loop 
// It will be considered on arrays 

// let arr = [1,2,3]
// console.log(arr)
// for (a of arr){
//     console.log(a)
// }
// (5)For in loop 
// It will be considered on objects 

// for(i in obj){
//     console.log(i)
//     // console.log(obj[i])
// }