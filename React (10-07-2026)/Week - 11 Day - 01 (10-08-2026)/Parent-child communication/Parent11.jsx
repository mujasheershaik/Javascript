import React from "react"
import Child11 from "./Child11"

function Parent11(){
    let name = "Mujasheer"
    let age = "27"
    return(
        <div>
            <h1>Parent Component</h1>
            <Child11 name = {name} age = {age}/>
        </div>
    )
}

export default Parent11