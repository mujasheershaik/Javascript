import React from "react"
function Listrendering(){

    let students=["Mujasheer","Mudassir","Mujju","Shaik"]

    return(
        <>
        <h2>List Rendering</h2>

        {
            students.map((student,index)=>(
                <li key={index}>{student}</li>
            ))
        }
        </>
    )
}

export default Listrendering