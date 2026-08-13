import React, { useContext } from 'react'
import { Usercontext } from './Username'

function Navbar() {
    let username = useContext(Usercontext)
  return (
    <nav>
        <h2>My Website</h2>
        <p>Welcome, {username}</p>
    </nav>
  )
}

export default Navbar
