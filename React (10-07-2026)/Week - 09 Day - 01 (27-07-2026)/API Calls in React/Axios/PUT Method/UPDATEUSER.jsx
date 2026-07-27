import React, { useEffect, useState } from "react";
import axios from "axios";

function UPDATEUSER() {
  let [name, setname] = useState("Shaik")
  let [loading, setloading] = useState(true)
  let [success, setsuccess] = useState("")
  let [error, seterror] = useState("")

  // Fetch user details when component loads
  useEffect(() => {
    async function getuser() {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        setname(response.data.name)
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
      let response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: name,
        }
      )

      console.log(response.data);

      setsuccess("User updated successfully");
    } catch (err) {
      seterror(err.message);
    } finally {
      setloading(false);
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
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
  )
}

export default UPDATEUSER