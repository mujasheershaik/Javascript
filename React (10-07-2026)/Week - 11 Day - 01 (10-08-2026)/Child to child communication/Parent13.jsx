import React, { useState } from 'react'
import Child13a from './Child13a'
import Child13b from './Child13b'

function Parent13() {
    let [name, setname] = useState("")

    function receiveName(data){
        setname(data)
    }
  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Student Name : {name}</h2>

      <Child13a sendName = {receiveName}/>

      <Child13b studentName = {name}/>
    </div>
  )
}

export default Parent13
