import { useState } from "react";
import ReactDOM from "react-dom";

function Modal() {
  let [show, setShow] = useState(false)

  return (
    <div>
      <h1>Delete Account</h1>

      <button onClick={() => setShow(true)}>
        Delete
      </button>

      {show &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: "35%",
              left: "35%",
              background: "white",
              padding: "20px",
              border: "2px solid black",
            }}>
            <h2>Are you sure?</h2>

            <button onClick={() => setShow(false)}>
                Cancel
            </button>
          </div>,

          document.getElementById("portal-root")
        )}
    </div>
  );
}

export default Modal