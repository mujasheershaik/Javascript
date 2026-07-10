import React from "react"
import Q from './Q'
import R from './R'

function P(){
    let B = 50
    return(
        <div>
            <h1>This is the P Component</h1>
            <h2>Value in B:{B}</h2>
            <Q Value = {B}/>
            <R Value = {B}/>
        </div>
    )
}

export default P


// P is the Parent Element
// Q, R are the Child Element