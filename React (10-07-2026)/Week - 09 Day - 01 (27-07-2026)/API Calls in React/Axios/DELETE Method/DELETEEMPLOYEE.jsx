import React, { useState } from "react"
import axios from "axios"

function DELETEEMPLOYEE() {
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState("")
  let [error, setError] = useState("")

  async function deleteEmployee() {
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      setSuccess("Employee deleted successfully!")
    } catch (err) {
      setError("Failed to delete employee")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Delete Employee</h2>

      <button onClick={deleteEmployee}>
        Delete Employee
      </button>

      {loading && <h3>Deleting...</h3>}

      {success && <h3>{success}</h3>}

      {error && <h3>{error}</h3>}</div>
  )
}

export default DELETEEMPLOYEE