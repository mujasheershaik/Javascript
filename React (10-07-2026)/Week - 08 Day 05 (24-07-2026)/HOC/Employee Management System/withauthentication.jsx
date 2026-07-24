import React, { useState } from 'react'
import Dashboard from './Dashboard'

function withauthentication(Component) {

  return function ProtectedComponent() {

    let [username, setusername] = useState("")
    let [password, setpassword] = useState("")
    let [isloggedin, setisloggedin] = useState(false)

    function login() {
      if (username === "admin" && password === "1234") {
        setisloggedin(true)
      }
      else {
        alert("Invalid username or password")
      }
    }

    return (
      <div>

        {
          isloggedin ? (

            <div>

              <button onClick={() => setisloggedin(false)}>
                Logout
              </button>

              <br />
              <hr />
              <br />

              <Component />

            </div>

          ) : (

            <div>

              <h2>Employee Login</h2>

              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />

              <br />
              <br />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <br />
              <br />

              <button onClick={login}>
                Login
              </button>

            </div>

          )
        }

      </div>
    )
  }
}

let ProtectedDashboard = withauthentication(Dashboard)
export default ProtectedDashboard
