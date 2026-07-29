import React from 'react'

function Addrunsbutton({addruns}) {
  console.log("Add runs button rendered")
  return (
    <button onClick={addruns}>Add 4 Runs</button>
  )
}

export default React.memo(Addrunsbutton)
