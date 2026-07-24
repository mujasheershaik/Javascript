import React, { useState } from "react"

function TravelBooking() {
  let [passengers, setPassengers] = useState([
    { name: "", age: "" }
  ]);

  function handleChange(index, e) {
    let updatedPassengers = [...passengers]

    updatedPassengers[index][e.target.name] = e.target.value

    setPassengers(updatedPassengers)
  }

  function addPassenger() {
    setPassengers([
      ...passengers,
      { name: "", age: "" }
    ])
  }

  function removePassenger(index) {
    let updatedPassengers = passengers.filter(
      (_, i) => i !== index
    )

    setPassengers(updatedPassengers)
  }
  function handleSubmit(e) {
    e.preventDefault()

    console.log(passengers)

    alert("Booking Confirmed")
  }

  return (
    <div>
      <h2>Travel Booking Form</h2>

      <form onSubmit={handleSubmit}>

        {passengers.map((passenger, index) => (
          <div key={index}>

            <h3>Passenger {index + 1}</h3>

            <input
              type="text"
              name="name"
              placeholder="Passenger Name"
              value={passenger.name}
              onChange={(e) => handleChange(index, e)}/>

            <br />
            <br />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={passenger.age}
              onChange={(e) => handleChange(index, e)}/>

            <button
              type="button"
              onClick={() => removePassenger(index)}>Remove</button>

            <hr />

          </div>
        ))}

        <button
          type="button"
          onClick={addPassenger}>Add Passenger</button>

        <br />
        <br />

        <button type="submit">Book Ticket</button>

      </form>
    </div>
  )
}

export default TravelBooking