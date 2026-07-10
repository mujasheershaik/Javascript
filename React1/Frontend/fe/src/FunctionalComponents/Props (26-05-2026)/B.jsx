import React from "react"

function B(p){
    console.log(p)
    return(
        <div>
            <h1>This is the data from A{p.Value}</h1>
        </div>
    )
}

export default B