import React, { useState } from 'react'

function Handleclick() {
  let [likes, setlikes] = useState(0)
    function handleClick(){
      setlikes(likes+1)
    }
  return (
    <div>
      <h2>Likes : {likes}</h2>

      <button onClick={handleClick}>Like</button>
    </div>
  )
}

export default Handleclick
