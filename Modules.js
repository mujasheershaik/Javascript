// Modules :- 
            // A module is a reusable piece of code that encapsulates variables, functions, class, objects 
            // into a separate file. 
            // A module is just a file that contains code (variables, functions, class) you can export and
            // then import into another file. 
            // Modules help organize files by dividing a larger application into smaller, manageable and 
            // indepedent parts. 
            // They help organize code into smaller, resuable pieces.
            // Think of them like separate containers:- one file defines something, another file uses it. 
            // In simple terms, a module is a file that contains related code and can share specific 
            // functionality with other files. 


// Two ways of function exports :- 

// Default export:- 
                // Only we can do one default export. 
                // We can import with any name. 
            
// Named export :- 
                // We can call it any number of times. 


import good from './Modules1' 


console.log(good)


export default function sum(a,b){
    return a+b
}

export let arr = [1,2,3,4]

export let a = 10

export function hello(){

}

export function diff(){

}

function bye(){

}

console.log(sum(1,2))

