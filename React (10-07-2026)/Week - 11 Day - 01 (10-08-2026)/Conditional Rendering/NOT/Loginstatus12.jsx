import React, { useState } from 'react'

function Loginstatus12() {
    let [isloggedin, setisloggedin] = useState(false)

  return (
    <div>
      <h2>My Website</h2>

      {!isloggedin && (
        <button onClick={()=>setisloggedin(true)}>Login</button>
      )}

      {isloggedin && (
        <div>
            <h2>Welcome User</h2>

            <button onClick={()=>setisloggedin(false)}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Loginstatus12
