import React from "react"
import Child12 from "./Child12"

function Parent12(){
    function receiveData(data){
        console.log("Data received from child", data)
    }
    return(
        <div>
            <h1>Parent Component</h1>

            <Child12 sendData = {receiveData}/>
        </div>
    )
}

export default Parent12