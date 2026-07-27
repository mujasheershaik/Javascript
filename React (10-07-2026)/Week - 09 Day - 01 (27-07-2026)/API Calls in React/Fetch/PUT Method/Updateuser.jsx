import React, { useEffect, useState } from "react";

function Updateuser() {
  let [name, setname] = useState("Shaik")
  let [loading, setloading] = useState(true)
  let [success, setsuccess] = useState("")
  let [error, seterror] = useState("")

  // Fetch user details when component loads
  useEffect(() => {
    async function getuser() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
          throw new Error("Failed To Fetch User")
        }

        let data = await response.json()
        setname(data.name)
      } catch (err) {
        seterror(err.message)
      } finally {
        setloading(false)
      }
    }

    getuser()
  }, [])

  // Update user
  async function updateuser() {
    setloading(true)
    setsuccess("")
    seterror("")

    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to update user")
      }

      let data = await response.json()
      console.log(data)

      setsuccess("User updated successfully")
    } catch (err) {
      seterror(err.message)
    } finally {
      setloading(false)
    }
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Update User</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <br />
      <br />

      <button onClick={updateuser}>Update</button>

      {success && <h3>{success}</h3>}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default Updateuser