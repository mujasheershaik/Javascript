import React, { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"

function Profile() {

  let [login, setLogin] = useState(false)
  let [exist, setExist] = useState(true)

  function changeLogin() {
    setLogin(true)
  }

  if (login) {
    return (
      <div>
        <h1>Profile</h1>

        <button onClick={() => setLogin(false)}>
          Logout
        </button>
      </div>
    )
  }

  if (exist) {
    return (
      <div>

        <Login value={changeLogin} />

        <button onClick={() => setExist(false)}>
          Signup
        </button>

      </div>
    )
  }

  return (
    <div>

      <Signup />

      <button onClick={() => setExist(true)}>
        Login
      </button>

    </div>
  )
}
export default Profile;