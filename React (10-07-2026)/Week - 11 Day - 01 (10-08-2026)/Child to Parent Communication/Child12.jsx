import React from "react"

function Child12(props){
    function sendStudentdata(){
        props.sendData("Mujasheer")
    }
    return(
        <div>
            <h2>Child Component</h2>

            <button onClick={sendStudentdata}>Send data to Parent</button>
        </div>
    )
}

export default Child12