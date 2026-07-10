import React from "react"

function Q(i){
    console.log(i)
    return(
        <div>
            <h1>This is the Q Component</h1>
            <h4>This is the data from P :{i.Value}</h4>
        </div>
    )
}

export default Q