import React, { lazy, Suspense, useState } from "react"

let Reports = lazy(() => import("./Reports"))
let Analytics = lazy(() => import("./Analytics"))

function Reportanalytics() {
  let [page, setPage] = useState("dashboard")

  return (
    <div>
      <h1>Business Dashboard</h1>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => setPage("reports")}>
        Reports
      </button>

      <button onClick={() => setPage("analytics")}>
        Analytics
      </button>

      {page === "dashboard" && (
        <h2>Dashboard Home</h2>
      )}

      <Suspense fallback={<h2>Loading...</h2>}>
        {page === "reports" && <Reports />}
        {page === "analytics" && <Analytics />}
      </Suspense>
    </div>
  )
}

export default Reportanalytics