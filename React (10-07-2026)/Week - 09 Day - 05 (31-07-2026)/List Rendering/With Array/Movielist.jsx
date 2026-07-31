import React from "react"

function Movielist(){
    let Movies = [
        "Avengers",
        "Power Rangers",
        "Interstellar",
        "Jawan"
    ];
    return(
        <div>
            <h1>Movies List</h1>

            {Movies.map((Movie,index)=>(
                <p key={index}>{Movie}</p>
            ))}
        </div>
    )
}

export default Movielist