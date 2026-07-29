import React from 'react'

function Movieinfo({moviename, ticketprice}) {
    console.log("Movie Info Rendered")
  return (
    <div>
      <h2>Movie : {moviename}</h2>
      <h2>Ticket Price : ${ticketprice}</h2>
    </div>
  )
}

export default React.memo(Movieinfo)
