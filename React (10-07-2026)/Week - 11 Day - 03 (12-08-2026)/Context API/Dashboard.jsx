import React from 'react'
import { useContext } from 'react'
import { Usercontext } from './Username'

function Dashboard() {
    let username = useContext(Usercontext)
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Hello, {username}</p>
    </div>
  )
}

export default Dashboard
