import React, {createContext, useState} from "react";

import { useDispatch, useSelector} from "react-redux"

export let context = createContext()
function A(){
    let data = useSelector((state)=>{
        return state
    })
    let d = useDispatch()
    console.log(d)
    console.log(data)
  let [a,setA] = useState(100)
    return(
        <div>
            <h1>data:{data.sum}</h1>
            <button onClick={()=>{d({type:"a"})}}>Inc</button>
            

            <button onClick={()=>{d({type: "B"})}}>Dec</button>
            <context.Provider value ={{a,setA}}>
              
            </context.Provider>
            
        </div>
    )
}

export default A