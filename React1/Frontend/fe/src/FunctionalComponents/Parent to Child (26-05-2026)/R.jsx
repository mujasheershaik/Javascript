import React from "react"

function R(j){
    console.log(j)
    return(
        <div>
            <h1>This is the R Component</h1>
            <h3>This is the data from P Component: {j.Value}</h3>
            {/* <h3>This is the data from P Component : {j.Value}</h3> */}
        </div>
    )
}

export default R