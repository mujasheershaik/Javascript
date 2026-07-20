import React from 'react'

function Login({value}) {
    console.log(value)
    let handlesubmit = (e) =>{
        e.preventDefault()
        value()
        // API calls (POST) (User id password) 
        // Success 
        // Failure 
        // True - Profile Page 
        // False - Login Page 
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
