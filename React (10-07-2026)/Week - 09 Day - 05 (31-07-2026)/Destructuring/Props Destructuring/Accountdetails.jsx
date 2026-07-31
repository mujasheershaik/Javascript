import React from 'react'

function Accountdetails({Accountno, Holdername, Balance}) {
  return (
    <div>
      <h2>Account Details :-</h2>
      <p>Account No : {Accountno}</p>
      <p>Holder : {Holdername}</p>
      <p>Balance : {Balance}</p>
    </div>
  )
}

export default Accountdetails
