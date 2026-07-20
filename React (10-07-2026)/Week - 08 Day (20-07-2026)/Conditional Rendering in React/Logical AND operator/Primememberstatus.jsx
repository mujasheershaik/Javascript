import React from "react"
import PrimeBenefits from "./PrimeBenefits"

function Primememberstatus() {

  let isPrime = true

  return (

    <div>

      <h1>Amazon</h1>

      {isPrime && <PrimeBenefits />}

    </div>

  )

}

export default Primememberstatus