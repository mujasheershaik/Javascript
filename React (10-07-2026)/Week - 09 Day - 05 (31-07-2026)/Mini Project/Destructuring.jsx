import React from "react"
function Destructuring(){

    let student={
        id:101,
        name:"Mujasheer",
        course:"React"
    }

    let {id,name,course}=student

    return(
        <>
        <h2>Destructuring</h2>

        <p>{id}</p>
        <p>{name}</p>
        <p>{course}</p>
        </>
    )
}

export default Destructuring