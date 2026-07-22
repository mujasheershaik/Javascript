import React, { useState } from 'react'

function Hobbies() {
    let [hobbies,sethobbies]= useState(false)
  return (
    <div>
      <input type="checkbox"
      name='hobbies'
      checked={hobbies}
      onChange={(e)=>sethobbies(e.target.checked)} />
      Football

      <h2>{hobbies ? "Football Selected" : "Football Not Selected"}</h2>
    </div>
  )
}

export default Hobbies
