import React from 'react'
import useDevice from './useDevice'

function Home() {
    let device = useDevice()
    
  return (
    <div>
      <h2>Home Page</h2>

      <h3>Device : {device}</h3>
    </div>
  )
}

export default Home
