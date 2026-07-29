import React from "react";

function Patientdetails({name, patientid}){
    console.log("Patient Details Rendered")
    return(
        <div>
            <h2>Patient Name : {name}</h2>
            <h2>Patient ID : {patientid}</h2>
        </div>
    )
}

export default React.memo(Patientdetails)