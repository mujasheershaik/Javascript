import React, { useState } from 'react'

function Loginform() {
    let [username, setusername] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        alert("Welcome" + username)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Enter username'
        onChange={(e)=>setusername(e.target.value)} />
        
        <br />

        <button type='submit'>
        Login
        </button>

      </form>

      
    </div>
  )
}

export default Loginform
