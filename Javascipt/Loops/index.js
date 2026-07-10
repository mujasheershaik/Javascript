// Loops 

// For Loop
// While Loop 
// Do while 
// For of 
// For in 
// For each 

// For Loop 
// for(Initialization;Condition;update){

// }

// for(let i=0;i<5;i++){
//     console.log(i)
// }

let Grades =[1,2,3,6]
console.log(Grades[0])
console.log(Grades[1])

let grades=[8,10,7]

for(let i=0;i<grades.length;i++){
 
function grade(g) {
switch (g) {
    case 10:
        console.log("Excellent")
        break;
        case 9:
            console.log("Good")
            break;
            case 8:
                console.log("Average")
                break;
                case 7:
                    console.log("Better")


}

}
grade(grades[i])
}

// // while loop 
// minimum no of iterations = 0 
// while (condition) {

// }

let i = 1
let count = 0
// list first 10 even numbers 
while (count<10) {
    if (i%2==0){
        console.log(i)
        count++
    }
    i+=1
    // count++
}

// do while 
// minimum no of iterations = 1
do {
    console.log("Hello")
} while (false);

// infinite loop 
// when condition is always true 

// For of loop 
// It will be considered on arrays 

// For in loop 
// It will be considered on objects 

let arr = [1,2,3]
console.log(arr)
for (a of arr){
    console.log(a)
}

let obj ={a:"hello", b:"hai"}
console.log(obj)


for(i in obj){
    console.log(i)
    // console.log(obj[i])
}