import React from "react"
import B from './B'
import C from './C'

function A(){
    let a = 10
    return(
        <div>
            <h1>Value in a : {a}</h1>
            <B Value = {a}/>
            <C Value = {a}/>

        </div>
    )
}


export default A