import React from "react"
function Eventbinding() {

    function showMessage(){
        alert("Button Clicked")
    }

    return(
        <>
        <h2>Event Binding</h2>

        <button onClick={showMessage}>Click</button>
        </>
    )
}

export default Eventbinding