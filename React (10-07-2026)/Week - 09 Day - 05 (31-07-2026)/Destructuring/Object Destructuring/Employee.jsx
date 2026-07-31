import React from 'react'

function Employee() {
    // Employee Object :- 
    let employee = {
        id : 101,
        name : "Shaik Mujasheer",
        department : "IT",
        salary : 15000,
        location : "Hyderabad"
    }

    // Object Destructing :- 
    let {id, name, department, salary, location} = employee
  return (
    <div>
      <h1>Employee Details</h1>
      
      <h2>Employee ID : {id}</h2>
      <h2>Name : {name}</h2>
      <h2>Department : {department}</h2>
      <h2>Salary : {salary}</h2>
      <h2>Location : {location}</h2>
    </div>
  )
}

export default Employee