import { useState } from "react"
import ReactDOM from "react-dom"

function Tooltip() {
  let [show, setShow] = useState(false)

  return (
    <div>
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>Hover Me
        </button>

      {show &&
        ReactDOM.createPortal(
          <div style={{
              position: "fixed",
              top: "120px",
              left: "120px",
              background: "black",
              color: "white",
              padding: "10px",
            }}>
            Save your changes
          </div>,

          document.getElementById("portal-root")
        )}
    </div>
  )
}

export default Tooltip