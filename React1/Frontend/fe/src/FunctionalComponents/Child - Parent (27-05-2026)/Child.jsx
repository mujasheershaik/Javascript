import React from 'react'
 
const Child = ({sendData}) => {
  let d=100;
    return (
    <div>
      <h1>Child component</h1>
      <button onClick={()=>sendData(d)}>Send data to parent</button>
    </div>
  )
}
 
export default Child