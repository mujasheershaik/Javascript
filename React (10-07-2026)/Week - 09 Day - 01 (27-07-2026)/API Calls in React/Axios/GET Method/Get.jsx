import React, { useEffect, useState } from "react";
import axios from "axios";

function Get() {
  let [employees, setemployees] = useState([])
  let [loading, setloading] = useState(true)
  let [error, seterror] = useState("")

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setemployees(response.data)
        setloading(false)
      })
      .catch((err) => {
        seterror(err.message)
        setloading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading Employees...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h2>Employees</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <h3>{employee.email}</h3>
          <h3>{employee.phone}</h3>
        </div>
      ))}
    </div>
  )
}

export default Get