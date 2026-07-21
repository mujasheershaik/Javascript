import React, { useEffect, useState } from 'react'

function Chatapp() {
    let [message, setmessage] = useState("")
    let [selecteduser, setselecteduser] = useState("Shaik")

    // Without dependency array :- 
    useEffect(()=>{
        console.log("Component rendered")
    })

    // Empty dependency array :- 
    useEffect(()=>{
        console.log("Loading chat messages from API")
    }, [])

    // With dependency array :- 
    useEffect(()=>{
        console.log("Fetching chat for :", selecteduser)
    }, [selecteduser])

    // Cleanup Function :- 
    useEffect(()=>{
        console.log("Connected to", selecteduser)

        return () =>{
            console.log("Disconnected from", selecteduser)
        }
    },[selecteduser])
  return (
    <div>
        <h1>Chat APP</h1>

        <h3>Current Chat : {selecteduser}</h3>

        <button onClick={()=> setselecteduser("Shaik")}>Shaik</button>

        <button onClick={()=> setselecteduser("Mujasheer")}>Mujasheer</button>

        <br />
        <input type="text" 
        placeholder='Type Message'
        value={message}
        onChange={(e)=>setmessage(e.target.value)}/>
    </div>
  )
}

export default Chatapp
