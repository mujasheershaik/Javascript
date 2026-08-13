import React, { createContext } from 'react'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

export let Usercontext = createContext()
function Username() {
    let username = "Mujasheer"
  return (
    <Usercontext.Provider value={username}>
        <Navbar/>
        <Dashboard/>
        <Profile/>
    </Usercontext.Provider>
  )
}

export default Username
