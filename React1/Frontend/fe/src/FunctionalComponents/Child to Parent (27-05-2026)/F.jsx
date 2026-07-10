import React from "react"

function F(props){
    let k = 2000
    // console.log(props)
    console.log(props.Value)
    props.Value(k)
    return(
        <div>
            <h1>This is the F component</h1>

            {/* <h4>Data from D:{props.Value}</h4> */}
            
        </div>
    )
}



export default F