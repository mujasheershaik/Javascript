import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {
    let navigate = useNavigate()

    function buyproduct(){
        alert("Product added to cart")
        navigate("/cart")
    }
  return (
    <div>
      <h2>Products</h2>

      <h3>iPhone 17</h3>

      <button onClick={buyproduct}>Add to cart</button>
    </div>
  )
}

export default Products
