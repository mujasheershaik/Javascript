import React from 'react'

function Hallticket() {
    let feespaid = true
  return (
    <div>
      {feespaid?(
        <button>Download Hall Ticket</button>
      ) : (
        <h2>Please Pay The Exam Fee</h2>
      )}
    </div>
  )
}

export default Hallticket
