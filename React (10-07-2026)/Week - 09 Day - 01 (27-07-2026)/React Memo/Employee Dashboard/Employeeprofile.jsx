import React, { memo } from 'react'

function Employeeprofile({name,department}) {
    console.log("Employee Profile Rendered")
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Department : {department}</h1>
    </div>
  )
}

export default memo(Employeeprofile)
