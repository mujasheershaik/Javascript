import React from 'react'

function Addtocart1(){
function addToCart(product) {
    alert(product + "Added to cart")
}
  return (
    <div>
      <button onClick={()=>addToCart("Mobile")}>Add Mobile</button>

      <button onClick={()=>addToCart("LED TV")}>Add TV</button>
    </div>
  )
}

export default Addtocart1
