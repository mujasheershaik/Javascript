import React, { useState } from 'react'

function Searchproduct() {
  let [search, setsearch] = useState("")
  return (
    <div>
      <input type="text" 
      name='search'
      placeholder='Search Product'
      value={search}
      onChange={(e)=>setsearch(e.target.value)}/>

      <h3>Searching for : {search} </h3>
    </div>


  )
}

export default Searchproduct
