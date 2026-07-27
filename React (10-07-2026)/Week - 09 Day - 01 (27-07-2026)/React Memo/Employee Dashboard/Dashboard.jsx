import React, { useState } from 'react'
import Employeeprofile from './Employeeprofile'

function Dashboard() {
    let [notifications, setnotifications] = useState(0)
  return (
    <div>
      <h1>Notifications : {notifications}</h1>

      <button onClick={()=>setnotifications(notifications+1)}>New Notifications</button>

      <Employeeprofile name = "Mujasheer"
                       department = "IT"
                        />
    </div>
  )
}

export default Dashboard
