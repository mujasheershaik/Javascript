import React,{useState} from "react"

let Child=React.memo(function Child(){

    console.log("Child Rendered")

    return <h3>Memo Child</h3>

})

function Memo(){

    let [count,setCount]=useState(0)

    return(
        <>
        <h2>React.memo</h2>

        <Child/>

        <button onClick={()=>setCount(count+1)}>
            Count {count}
        </button>
        </>
    )
}

export default Memo