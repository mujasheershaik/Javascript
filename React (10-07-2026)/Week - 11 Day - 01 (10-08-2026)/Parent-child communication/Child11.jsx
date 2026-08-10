import React from "react"

function Child11(props){
    return(
        <div>
            <h2>Child Component</h2>

            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

export default Child11