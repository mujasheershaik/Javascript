import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()

    function login(){
        alert("Login Successful")

        navigate("/profile")
    }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
