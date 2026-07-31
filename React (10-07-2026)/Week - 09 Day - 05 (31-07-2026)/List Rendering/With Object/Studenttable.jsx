import React from 'react'

function Studenttable() {
    let students = [
        {id : 101, name : "Shaik", age : 27},
        {id : 102, name : "Mujasheer", age : 26},
        {id : 103, name : "Mudassir", age : 25}
    ]
  return (
    <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>

        <tbody>
            {students.map((student)=>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Studenttable
