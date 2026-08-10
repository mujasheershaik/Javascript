import React from 'react'

function Child13a(props) {
    function sendStudentname(){
        props.sendName("Mujasheer")
    }
  return (
    <div>
      <h2>This is Child13A Component</h2>

      <button onClick={sendStudentname}>Send Name to Parent</button>
    </div>
  )
}

export default Child13a
