import React from 'react'

function Ticketcounter({bookticket}) {
    console.log("Ticket Counter Rendered")
  return (
    <div>
      <button onClick={bookticket}>Book Ticket</button>
    </div>
  )
}

export default React.memo(Ticketcounter)

