import React, { useState } from "react";

function Deleteemployee() {
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState("")
  let [error, setError] = useState("")

  async function deleteEmployee() {
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete employee")
      }

      setSuccess("Employee deleted successfully!")
    } catch (err) {
      setError(err.message)
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

      {error && <h3>{error}</h3>}
    </div>
  )
}

export default Deleteemployee