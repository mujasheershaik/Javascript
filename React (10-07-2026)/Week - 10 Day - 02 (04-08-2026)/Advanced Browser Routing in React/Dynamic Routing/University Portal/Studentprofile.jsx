import React from 'react'
import { useParams } from 'react-router-dom'

function Studentprofile() {
  let {rollno} = useParams()

  let students = [
    {
      rollno: "202601",
      name : "Shaik",
      branch : "Mechanical",
      cgpa : 8.8
    },
    {
      rollno : "202602",
      name : "Mujasheer",
      branch : "IT",
      cgpa : 8.0
    },
    {
      rollno : "202603",
      name : "Mudassir",
      branch : "Civil",
      cgpa : 7.7
    }
  ]

  let student = students.find(
    (s)=>s.rollno === rollno)

    if(!student){
      return <h2>Student Not Found</h2>
    }
  return (
    <div>
      <h2>Student Profile</h2>

      <p>Roll No : {student.rollno}</p>
      <p>Name : {student.name}</p>
      <p>Branch : {student.branch}</p>
      <p>CGPA : {student.cgpa}</p>
    </div>
  )
}

export default Studentprofile
