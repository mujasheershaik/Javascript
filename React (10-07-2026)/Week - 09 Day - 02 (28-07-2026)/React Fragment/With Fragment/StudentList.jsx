import React, { Fragment } from 'react'

function StudentList() {
    let students = [
        {id : 101, name : "Shaik"},
        {id : 102, name : "Mujasheer"},
        {id : 103, name : "Mudassir"},
        {id : 104, name : "Mujju"}
    ]
  return (
    <>
    <h2>Students List</h2>
    {students.map((student)=>(
        <Fragment key={student.id}>
            <h3>{student.id}</h3>
            <h3>{student.name}</h3>
        </Fragment>
    ))}
    </>
  )
}

export default StudentList
