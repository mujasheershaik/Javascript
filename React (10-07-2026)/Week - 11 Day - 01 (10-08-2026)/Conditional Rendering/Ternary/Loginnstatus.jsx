import React, { useState } from 'react'

function Loginnstatus() {
    let [isloggedin, setisloggedin] = useState(false)

    function login(){
        setisloggedin(true)
    }

    function logout(){
        setisloggedin(false)
    }
  return (
    <div>
      {isloggedin ? (
        <div>
            <h1>Welcome to Dashboard</h1>

            <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
            <h1>Please Login</h1>

            <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  )
}

export default Loginnstatus
