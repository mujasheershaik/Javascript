import React, { StrictMode } from "react";
import B from "./B"

function A(){
    // let a = 10
    let a = {age:10}
    console.log(a)
    let b = 10
    console.log(b)

    // 3 ways of receiving data  
    // own data - State
    // through api calls - like objects 
    // from parent component - Props
    return(
        <StrictMode>
            <h1>This is A Component</h1>
            <h1>{a.age}</h1>
            <h1>{b}</h1>
            <B/>
        </StrictMode>
    )
}

export default A