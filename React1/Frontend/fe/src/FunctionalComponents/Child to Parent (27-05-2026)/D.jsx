import React from "react"
import E from './E'
import F from './F'

function D(){
    let a =10
    function hai(k){
        console.log(k)
    }
    hai(1)
    return(
        <div>
            <h1>Value in a : {a}</h1>
            <E Value = {a}/>
            <F Value = {hai}/>
        </div>
    )
}


export default D