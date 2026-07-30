import { useState } from "react"
import ReactDOM from "react-dom"

function LoginModal() {
  let [show, setShow] = useState(false)
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  function openModal() {
    setShow(true)
  }

  function closeModal() {
    setShow(false)
  }

  function handleUsername(event) {
    setUsername(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleFocus() {
    console.log("Input Focused")
  }

  function handleBlur(event) {
    if (event.target.value === "") {
      alert("This field is required")
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    alert("Welcome " + username)

    setShow(false)
    setUsername("")
    setPassword("")
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Portal</h1>

      <button onClick={openModal}>
        Login
      </button>

      {show &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: "25%",
              left: "35%",
              background: "white",
              border: "2px solid black",
              padding: "20px",
              width: "320px",
              boxShadow: "0 0 10px gray",
            }}>

            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={handleUsername}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
                
                <br />
                
                <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePassword}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
                
                <br />
                
                <button type="submit">
                    Login
                    </button>
                    
                    <button
                    type="button"
                    onClick={closeModal}
                    style={{ marginLeft: "10px" }}>
                        Cancel
                        </button>

            </form>

          </div>,
          
          document.getElementById("portal-root")
        )}
    </div>
  )
}

export default LoginModal