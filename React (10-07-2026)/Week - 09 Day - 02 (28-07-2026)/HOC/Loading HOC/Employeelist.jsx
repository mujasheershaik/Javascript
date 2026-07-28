import React from 'react'

function Employeelist({employees}) {
  return (
    <div>
      <h2>Employees</h2>

      {employees.map((employee)=>(
        <div key={employee.id}>
            <h2>{employee.id}</h2>
            <h2>{employee.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Employeelist
