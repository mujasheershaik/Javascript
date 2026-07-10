import React from 'react'
 
const Firstchild = ({data}) => {
  return (
    <div>
      Child3
      <button onClick={()=>{data(100)}}>child-parent</button>
    </div>
  )
}
 
export default Firstchild