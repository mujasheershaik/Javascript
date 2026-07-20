import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Profile() {
    let [status, setstatus] = useState("new")
    let [login, setlogin] = useState(false)
    let [exist,setexist] = useState(true)
    let changeLogin =() =>{
        setlogin(true)
    }
    
  return (
    <div>
    
      {login? <div>
        <h1>Profile</h1>
        <button onClick={()=>setlogin(false)}>Logout</button>
      </div>
       : exist ? <Login value = {changeLogin}/> : <Signup/> }

       {login? (<button onClick={()=>setlogin(false)}>Logout</button>):
      exist?(
      <div>
        <p>If you are a new user? Click</p>

        <button onClick={()=>setexist(false)}>Signup</button>
      </div>) : (<div>
        <p>If you are an existing user? Click</p>

        <button onClick={()=>setexist(true)}>Login</button>
      </div>)
}
    </div>
  )
}

export default Profile



// Signup Page :- 

// Registration details 
// Signup Button 
// If existing user then click on Login 

// Login Page :- 

// Login details 
// Login Button 
// If you are a new user then click on signup 

// Profile Page :- 

// Profile 