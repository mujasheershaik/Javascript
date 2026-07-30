import React, { useState } from 'react'

function Searchbox() {
    let [search, setsearch] = useState("")
    function handleChange(event){
        setsearch(event.target.value)
    }
  return (
    <div>
      <input 
      type="text"
      placeholder="Search Product"
      onChange={handleChange} />

      <h2>Searching : {search}</h2>
    </div>
  )
}

export default Searchbox
