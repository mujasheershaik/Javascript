import React from "react"

function Studentsubjects(){
    let students = [
        {
            id : 101,
            name : "Shaik",
            subjects : ["HTML", "CSS", "JS"]
        },
        {
            id :102,
            name : "Mujasheer",
            subjects : ["React", "Angular", "CSS"]
        }
    ]
    return(
        <div>
            <h1>Students Details</h1>

            {students.map((student)=>(
                <div key={student.id}>
                    <h2>{student.id}</h2>
                    <h2>{student.name}</h2>
                

                <ul>
                    {student.subjects.map((subject)=>(
                        <li key={subject}>{subject}</li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
    )
}

export default Studentsubjects