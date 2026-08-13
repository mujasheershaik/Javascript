import React from "react"

function Employee({ name, role }) {
  console.log("Employee component rendered")

  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  )
}
export default React.memo(Employee)