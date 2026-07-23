import React, { useState } from 'react'
import Dashboard from './Dashboard'

// HOC
function withauthentication(Component) {
  return function ProtectedComponent() {
    let [isloggedin, setisloggedin] = useState(false)

    return (
      <div>
        <button onClick={() => setisloggedin(!isloggedin)}>
          {isloggedin ? "Logout" : "Login"}
        </button>

        <br />
        <br />

        {isloggedin ? (
          <Component />
        ) : (
          <div>
            <h2>Please Login First</h2>
          </div>
        )}
      </div>
    )
  }
}


let ProtectedDashboard = withauthentication(Dashboard)


export default ProtectedDashboard