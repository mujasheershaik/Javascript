import React from 'react'

function Studentresult() {
    let students = [
        {id : 201, name : "Shaik", marks : 90},
        {id : 202, name : "Mudassir", marks : 70},
        {id : 203, name : "Mujasheer", marks : 30}
    ]
  return (
    <div>
      <h1>Student Results</h1>

      {students.map((student)=>(
        <div key={student.id}>
            <h2>{student.id}</h2>
            <h2>{student.name}</h2>
            <h2>{student.marks}</h2>
            
            {student.marks >= 35?(
                <p>Pass</p> ) : (
                    <p>Fail</p>
            )}
            </div>
      ))}
    </div>
  )
}

export default Studentresult
