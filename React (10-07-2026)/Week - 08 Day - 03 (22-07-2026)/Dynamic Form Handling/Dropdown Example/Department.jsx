import React, { useState } from 'react'

function Department() {
    let [department, setdepartment] = useState("")
  return (
    <div>
      <select
      name='department'
      value={department}
      onChange={(e)=>setdepartment(e.target.value)}
    >
        <option value="">Select Department</option>
        <option>IT</option>
        <option>HR</option>
        <option>NON IT</option>
    </select>

    <h2>Department : {department}</h2>
    </div>
  )
}

export default Department
