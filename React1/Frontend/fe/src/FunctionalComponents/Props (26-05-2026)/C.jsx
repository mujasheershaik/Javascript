import React from "react"
function C (props){
    console.log(props)
    return(
        <div>
            <h1>This is the C Component</h1>
            <h4>Data from A : {props.Value}</h4>

        </div>
    )
}

export default C