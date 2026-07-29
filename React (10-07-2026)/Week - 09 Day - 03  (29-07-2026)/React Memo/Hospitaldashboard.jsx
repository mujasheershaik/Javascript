import React, { useState } from 'react'
import Patientdetails from './Patientdetails'

function Hospitaldashboard() {
    let [appointments, setappointments] = useState(0)
    console.log("Hospital Dashboard Rendered")
  return (
    <div>
      <h1>Hospital Appointment System</h1>

      <Patientdetails 
      name = "Mujasheer"
      patientid = {101}
      />

      <h2>Total Appointments : {appointments}</h2>

      <button onClick={()=>setappointments(appointments+1)}>Book Appointment</button>
    </div>
  )
}

export default Hospitaldashboard
