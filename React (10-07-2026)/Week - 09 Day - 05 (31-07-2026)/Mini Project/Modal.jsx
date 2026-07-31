import ReactDOM from "react-dom"

function Modal(){

    return ReactDOM.createPortal(

        <div style={{
            background:"black",
            color:"white",
            padding:"20px"
        }}>

        Portal Modal

        </div>,

        document.getElementById("portal-root")

    )
}

export default Modal