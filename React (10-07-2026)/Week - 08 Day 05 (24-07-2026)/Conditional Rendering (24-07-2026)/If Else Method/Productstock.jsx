import React, { useState } from 'react'

function Productstock() {
    let [stock, setstock] = useState(true)

    if(stock){
        return(
            <div>
                <h3>Samsung Galaxy S24 Ultra</h3>
                <button onClick={()=>setstock(false)}>Buy Product</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>Out Of Stock</h3>
                <button onClick={()=>setstock(true)}>Restock</button>
            </div>
        )
    }
}

export default Productstock
