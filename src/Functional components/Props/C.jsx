import React from "react";

function C(props){
    console.log(props)
    return(
        <div>
            <h1>This is the C Component</h1>
            <h2>Data from A : {props.Value}</h2>
        </div>
    )
}

export default C