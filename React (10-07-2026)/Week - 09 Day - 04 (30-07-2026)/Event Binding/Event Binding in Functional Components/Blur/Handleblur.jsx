import React from 'react'

function Handleblur() {
  function handleBlur(){
    alert("Email Validation Completed")
  }
  return (
    <div>
      <input 
      type="email"
      placeholder='Enter Email'
      onBlur={handleBlur} />
    </div>
  )
}

export default Handleblur
