// Error Handling :- 
                // Error Handling is the process of detecting, managing and responding to errors that occur during the 
                // execution of a program. It prevents the application from crashing unexpectedly and allows developers 
                // to provide meaningful error messages. 
                // Error handling means catching and managing mistakes in code so the program doesn't crash. 

// Try, Catch Statement :- 
                // The try, catch is the primary mechanism for handling runtime errors. 

// Finally Statement :- 
                // The finally block always executes whether an error occurs or not. 

// Throw Statement :- 
                // The throw statement is used to create custom errors. 

try {
    console.log(hai) 
}
catch (e){
    console.log("Error Occured")
}
finally{
    console.log("Finished detecting and fixed errors")
}

let age = 15

try{
    if (age <18)
    throw "You are not Eligible"
}
catch(e){
    console.log("Error Occured")
}
finally{
    console.log("Eligibility")
}
        