import React, { useMemo, useState } from 'react'

function ShoppingCart1() {
    let [quantity, setquantity] = useState(1)
    let [theme, settheme] =useState("Light")

    let totalprice = useMemo(()=>{
        console.log("Calculating Total Price")
        return quantity*500
    },[quantity])
  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Items : {quantity}</h2>
      <h2>Total Price : ${totalprice}</h2>
      <h2>Theme : {theme}</h2>

      <button onClick={()=>setquantity(quantity+1)}>Add Item</button>

      <button onClick={()=>settheme(theme === "Light"? "Dark" : "Light")}>Change Theme</button>
    </div>
  )
}

export default ShoppingCart1
