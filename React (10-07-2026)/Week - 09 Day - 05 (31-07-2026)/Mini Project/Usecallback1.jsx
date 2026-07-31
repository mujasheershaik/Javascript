import React, {useCallback,useState} from "react"

function Usecallback1(){

    let [count,setCount]=useState(0)

    let show=useCallback(()=>{
        alert("Welcome")
    },[])

    return(
        <>
        <h2>useCallback</h2>

        <button onClick={show}>Show</button>

        <button onClick={()=>setCount(count+1)}>
            {count}
        </button>
        </>
    )
}

export default Usecallback1