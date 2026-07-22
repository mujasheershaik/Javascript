import React, { useState } from 'react'

function Payment() {
    let [payment, setpayment] = useState("")
  return (
    <div>
      <input type="radio"
      name='payment'
      value = "Cash"
      checked={payment === "Cash"}
      onChange={(e)=>setpayment(e.target.value)} />
      Cash

      <br />
      <input type="radio"
      name='payment'
      value = "UPI"
      checked={payment === "UPI"}
      onChange={(e)=>setpayment(e.target.value)} />
      UPI 

      <br />
      <input type="radio"
      name='payment'
      value = "Card"
      checked={payment === "Card"}
      onChange={(e)=>setpayment(e.target.value)} />
      Card

      <h2>Payment : {payment}</h2>

    </div>
  )
}

export default Payment
