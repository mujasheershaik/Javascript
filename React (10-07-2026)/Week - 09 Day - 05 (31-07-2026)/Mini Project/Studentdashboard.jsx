import React from "react"
import withAuthentication from "./withAuthentication"

function Studentdashboard(){

    return(
        <>
        <h2>Student Dashboard</h2>
        </>
    )
}

export default withAuthentication(Studentdashboard)