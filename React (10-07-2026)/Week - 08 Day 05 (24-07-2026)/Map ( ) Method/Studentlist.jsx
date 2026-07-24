import React from 'react'

function Studentlist() {
    let students = [
        "Shaik",
        "Mahammad",
        "Mujasheer",
        "Mujju",
        "Mudassir"
    ]
  return (
    <div>
      <h1>Students</h1>

      {students.map((student, index)=>(
       <h2 key={index}>{student}</h2>
      ))}
    </div>
  )
}

export default Studentlist
