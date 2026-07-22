import React, { useState } from 'react'

function Resumeupload() {
    let [resume, setresume] = useState(null)
  return (
    <div>
      <input 
      type="file" 
      name='resume'
      onChange={(e)=>setresume(e.target.files[0])}
      />

      <h2>{resume?.name}</h2>
    </div>
  )
}

export default Resumeupload
