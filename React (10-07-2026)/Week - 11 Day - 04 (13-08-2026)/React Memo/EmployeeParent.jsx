import React, { useState } from "react"
import Employee from "./Employee"

function EmployeeParent() {
  let [count, setCount] = useState(0)

  return (
    <div>
      <h1>Employee Dashboard</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Employee name="Mujasheer" role="Developer" />
    </div>
  )
}

export default EmployeeParent