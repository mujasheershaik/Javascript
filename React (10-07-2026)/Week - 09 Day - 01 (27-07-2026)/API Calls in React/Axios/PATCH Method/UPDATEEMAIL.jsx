import React, { useState } from "react";
import axios from "axios";

function UPDATEEMAIL() {
  let [email, setEmail] = useState("shaik@gmail.com");
  let [loading, setLoading] = useState(false);
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");

  async function updateEmail() {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      let response = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          email: email,
        }
      );

      console.log(response.data);

      setSuccess("Email updated successfully!");
    } catch (err) {
      setError("Failed to update email");
      console.log(err);
    } finally {
      setLoading(false);
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

      <button onClick={updateEmail}>
        Update Email
      </button>

      {loading && <h3>Updating...</h3>}

      {success && <h3>{success}</h3>}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default UPDATEEMAIL