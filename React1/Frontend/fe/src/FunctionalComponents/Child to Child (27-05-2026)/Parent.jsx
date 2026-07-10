import React, { useState } from 'react'
import Firstchild from './Firstchild'
import Secondchild from './Secondchild'
 
const Parent = () => {
    let[v,s]=useState(0)
   
    let setdata=(m)=>{
        s(m)
    }
  return (
    <div>
     
      <Firstchild data={setdata}/>
      <Secondchild data={v}/>
    </div>
  )
}
 
export default Parent