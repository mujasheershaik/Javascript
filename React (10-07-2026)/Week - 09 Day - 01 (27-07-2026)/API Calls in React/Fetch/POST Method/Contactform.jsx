import React, { useState } from "react";

function Contactform() {
  let [name, setname] = useState("")
  let [message, setmessage] = useState("")
  let [status, setstatus] = useState("")

  function Sendmessage() {
    setstatus("Sending...")

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send message")
        }

        return response.json()
      })
      .then((data) => {
        console.log(data)
        setstatus("Message sent successfully")
        setname("")
        setmessage("")
      })
      .catch((error) => {
        console.log(error.message)
        setstatus("Failed to send message")
      })
  }

  return (
    <div>
      <h2>Contact Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      />

      <br />

      <button onClick={Sendmessage}>Send</button>

      <h3>{status}</h3>
    </div>
  )
}

export default Contactform