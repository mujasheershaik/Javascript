import React, { useCallback, useMemo, useState } from 'react'
import Movieinfo from './Movieinfo'
import Ticketcounter from './Ticketcounter'

function Ticketdashboard() {
    let [tickets, settickets] = useState(1)
    let [theme, settheme] = useState("Light")

    console.log("Ticket Dashboard Rendered")

    // Use Memo :- 
    let Totalamount = useMemo(()=>{
        console.log("Calculating Total Amount")
        return tickets *150
    },[tickets])

    // Use Call Back 
    let handleBookTicket = useCallback(()=>{
        settickets((prev)=>prev+1)
    },[])
  return (
    <div>
      <h1>Movie Ticket Dashboard</h1>

      <Movieinfo 
      moviename = "Avengers"
      ticketprice = {150}/>

        <h2>Tickets Booked : {tickets}</h2>

        <h2>Total Amount : {Totalamount}</h2>

        <h2>Theme : {theme}</h2>

        <Ticketcounter 
        bookticket = {handleBookTicket}/>

        <button onClick={()=>settheme(theme === "Light"? "Dark" : "Light")}>Change Theme</button>
    </div>
  )
}

export default Ticketdashboard
