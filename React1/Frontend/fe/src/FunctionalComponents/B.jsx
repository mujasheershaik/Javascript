import React from "react"
import One from './One'

function B(h){
    console.log(h)
    return(
        <div>
                <h1>This is B Component</h1>
                <h1>B Component</h1>
                <h1>{h.Hello}</h1>
                <One/>
            </div>
    ) 
}


export default B