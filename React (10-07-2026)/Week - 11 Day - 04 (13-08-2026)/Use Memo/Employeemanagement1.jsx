import React, { useMemo, useState } from "react"

function Employeemanagement1() {
  let [employees] = useState([
    { name: "Mujasheer", department: "IT" },
    { name: "Mujju", department: "IT" },
    { name: "Shaik", department: "HR" },
    { name: "Mudassir", department: "IT" }
  ]);

  let [department, setDepartment] = useState("IT")

  let [count, setCount] = useState(0)

  let filteredEmployees = useMemo(() => {
    console.log("Filtering employees...")

    return employees.filter(
      (employee) => employee.department === department
    )
  }, [employees, department])

  return (
    <div>
      <h1>Employee Management</h1>

      <button onClick={() => setDepartment("IT")}>
        IT
      </button>

      <button onClick={() => setDepartment("HR")}>
        HR
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <h2>{department} Employees</h2>

      {filteredEmployees.map((employee) => (
        <p key={employee.name}>{employee.name}</p>
      ))}
    </div>
  )
}

export default Employeemanagement1