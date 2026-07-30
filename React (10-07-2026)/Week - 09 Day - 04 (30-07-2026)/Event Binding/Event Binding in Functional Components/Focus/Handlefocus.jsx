import React from 'react'

function Handlefocus() {
    function handleFocus(){
        console.log("Username field is focused")
    }
  return (
    <input 
    type="text"
    placeholder='Username'
    onFocus={handleFocus} />
  )
}

export default Handlefocus
