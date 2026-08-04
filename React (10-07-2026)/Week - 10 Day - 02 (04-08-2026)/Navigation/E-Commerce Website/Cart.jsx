import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
    let navigate = useNavigate()

    function checkout(){
        navigate("/orders")
    }
  return (
    <div>
      <h2>Shopping Cart</h2>

      <button onClick={checkout}>Checkout</button>
    </div>
  )
}

export default Cart
