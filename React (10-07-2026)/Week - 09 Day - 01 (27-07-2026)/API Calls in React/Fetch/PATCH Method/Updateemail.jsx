import React, { useState } from "react";

function Updateemail() {
  let [email, setEmail] = useState("shaik@gmail.com")
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState("")
  let [error, setError] = useState("")

  async function UpdateEmail() {
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to update email")
      }

      let data = await response.json()
      console.log(data)

      setSuccess("Email updated successfully!")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Update Email</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={UpdateEmail}>
        Update Email
      </button>

      {loading && <h3>Updating...</h3>}

      {success && <h3>{success}</h3>}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default Updateemail