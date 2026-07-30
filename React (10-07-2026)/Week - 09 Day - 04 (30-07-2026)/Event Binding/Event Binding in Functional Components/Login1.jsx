import React from 'react'

function Login1(){
function handleLogin() {
    alert("Login Successful")
}
  return (
    <div>
      <h2>Login Page</h2>

      <button onClick={handleLogin}>Login</button>
    </div>
  )

}
export default Login1
