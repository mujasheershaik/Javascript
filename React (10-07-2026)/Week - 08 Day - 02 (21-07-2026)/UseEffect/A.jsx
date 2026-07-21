import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function A() {
    let [a,seta] = useState([])
    useEffect(()=>{
        console.log(a)
    },[a])
    useEffect(()=>{
        console.log("Hello")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d)=>d.json())
        .then((d)=>
            // console.log(Array.isArray(d)))
        // console.log(d))
        seta(d))
    },[])
    // console.log(a)
    // console.log(a[0])
    // console.log(a[0]?.title)
    
  return (
    <div>
        {/* <h1>{a}</h1> */}
        {/* <h1>{a[0]?.title}</h1>
        <h2>{a[0]?.id}</h2>
        <h3>{a[0]?.userId}</h3>
        
        <h1>{a[1]?.title}</h1>
        <h2>{a[1]?.id}</h2>
        <h3>{a[2]?.userId}</h3>

        <h1>{a[2]?.title}</h1>
        <h2>{a[2]?.id}</h2>
        <h3>{a[2]?.userId}</h3> */}

        {/* Map() Method  */}
        {a.map((b)=>{
            return (
            <div key={b.id}>
                {console.log(b)}
                <h1>{b.title}</h1>
                <h2>{b.id}</h2>
                {/* <h3>{b.userId}</h3> */}
            </div>)
        })}
        <button onClick={()=>seta(a+1)}>Change</button>
    </div>
  )
}

export default A
