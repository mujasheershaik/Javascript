import React from 'react'

function Login() {
    let isloggedin = false

    if (!isloggedin){
        return <h1>Please Login First</h1>
    }
  return <h1>Welcome User</h1>
}

export default Login

