import React from "react";
import B from './B'
import One from './One'
function A(){
    let b = {age:25}
    console.log(b)
    let a = 10
    console.log(a)
    return(
    
        <div>
            <h1>This is A Component 10</h1>
            <h1>{a}</h1>
            <h2>{b.age}</h2>
            <B Hello = "hai"/>
            <One/>
        </div>
    )
}


export default A

// Own data - State
// APi calls - like Objects
// Parent component - Props 

