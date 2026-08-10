import React, { useState } from 'react'

function Payments1() {
  let [payment, setpayment] = useState("pending")

  function makePayment(){
    setpayment("success")
  }
  return (
    <div>
      <h1>Payment</h1>

      {payment === "pending" &&(
        <h2>Payment is processing...</h2>
      )}

      {payment === "success" &&(
        <h2>Payment Successful</h2>
      )}

      {payment === "failed" && (
        <h2>Payment Failed</h2>
      )}

      <button onClick={makePayment}>Pay Now</button>
    </div>
  )
}

export default Payments1
