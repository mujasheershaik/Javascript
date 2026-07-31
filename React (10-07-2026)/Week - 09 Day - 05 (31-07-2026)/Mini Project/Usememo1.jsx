import React, {useMemo,useState} from "react"

function Usememo1(){

    let [count,setCount]=useState(0)

    let square=useMemo(()=>{
        console.log("Calculating")
        return count*count
    },[count])

    return(
        <>
        <h2>useMemo</h2>

        <h3>{square}</h3>

        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
        </>
    )
}

export default Usememo1