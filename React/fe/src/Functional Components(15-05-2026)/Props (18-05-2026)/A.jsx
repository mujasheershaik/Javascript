import React from 'React'
import B from './B'
import C from './C'

function A(){
    let a =10
    function hai(k){
        console.log(k)
    }
    hai(1)
    return(
        <div>
            <h1>Value in a : {a}</h1>
            <B Value = {a}/>
            <C Value = {hai}/>
        </div>
    )
}

export default A



// A is the parent component 
// B, C is the child component of A 