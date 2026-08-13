import React, { useContext } from 'react'
import { Usercontext } from './Username'

function Profile() {
    let username = useContext(Usercontext)
  return (
    <div>
      <h2>Profile</h2>
      <p>User : {username}</p>

    </div>
  )
}

export default Profile
