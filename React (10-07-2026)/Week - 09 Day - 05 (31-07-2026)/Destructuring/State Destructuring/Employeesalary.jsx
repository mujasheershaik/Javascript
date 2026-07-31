import React, { useState } from 'react'

function Employeesalary() {
    let [salary,setsalary] = useState(25000)
  return (
    <div>
      <h1>Employee Salary</h1>

      <h2>Salary : ${salary}</h2>

      <button onClick={()=>setsalary(salary+5000)}>Increase Salary</button>
    </div>
  )
}

export default Employeesalary
