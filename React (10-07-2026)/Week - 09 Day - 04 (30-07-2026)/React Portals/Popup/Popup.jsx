import { useState } from "react"
import ReactDOM from "react-dom"

function Popup() {
  let [show, setShow] = useState(false)

  function payment() {
    setShow(true)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div>
      <button onClick={payment}>Pay Now</button>

      {show &&
        ReactDOM.createPortal(
          <div style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              background: "green",
              color: "white",
              padding: "15px",
            }}>
            Payment Successful
          </div>,
          document.getElementById("portal-root")
        )}
    </div>
  )
}

export default Popup