import React, { lazy, Suspense, useState } from 'react'

let Home = lazy(()=>import("./Home"))
let Courses = lazy(()=>import("./Courses"))
let Attendance = lazy(()=>import("./Attendance"))
let Result = lazy(()=>import("./Result"))

function Studentportal() {
    let [page, setpage] = useState("Home")
  return (
    <div>
      <h1>Student Portal</h1>

      <button onClick={()=>setpage("Home")}>Home</button>
      <button onClick={()=>setpage("Courses")}>Courses</button>
      <button onClick={()=>setpage("Attendance")}>Attendance</button>
      <button onClick={()=>setpage("Result")}>Result</button>

      <Suspense fallback = {<h2>Loading...</h2>}>
        {page === "Home" && <Home/>}
        {page === "Courses" && <Courses/>}
        {page === "Attendance" && <Attendance/>}
        {page === "Result" && <Result/>}

      </Suspense>
    </div>
  )
}

export default Studentportal
