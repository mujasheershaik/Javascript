import React from 'react'
import { Navigate } from 'react-router-dom'

function Protectedroute({children}) {
    let isloggedin = localStorage.getItem("isloggedin")

    if (isloggedin === "true"){
        return children
    }

  return <Navigate to = "/Login"></Navigate>
}

export default Protectedroute
