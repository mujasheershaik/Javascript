import React, { useState } from 'react'

function Userprofile() {
    let [showprofile, setshowprofile] = useState(false)
  return (
    <div>
      <button onClick={()=>setshowprofile(!showprofile)}>View Profile</button>

      {showprofile && (
        <div>
            <h2>Name : Shaik Mahammad Mujasheer,</h2>
            <h2>Course : React,</h2>
            <h2>Place : Bengaluru</h2>
        </div>
      )}
    </div>
  )
}

export default Userprofile
