import { lazy, Suspense, useState } from 'react'

let StudentDashboard = lazy (()=>import("./StudentDashboard"))

function Student2() {
    let [showdashboard, setshowdashboard] = useState(false)
  return (
    <div>
      <h1>Student portal</h1>

      <button onClick={()=>setshowdashboard(true)}>Open Dashboard</button>

      <Suspense fallback={<h2>Loading Dashboard...</h2>}>
      {showdashboard && <StudentDashboard/>}
      </Suspense>
    </div>
  )
}

export default Student2
