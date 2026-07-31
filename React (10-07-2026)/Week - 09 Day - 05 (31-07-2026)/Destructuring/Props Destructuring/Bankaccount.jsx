import React from 'react'
import Accountdetails from './Accountdetails'

function Bankaccount() {
  return (
    <div>
      <h1>Bank Account details passing as a props for destructuring</h1>

      <Accountdetails
      Accountno = "1234567890"
      Holdername = "Mujasheer"
      Balance = {15000}/>
    </div>
  )
}

export default Bankaccount
