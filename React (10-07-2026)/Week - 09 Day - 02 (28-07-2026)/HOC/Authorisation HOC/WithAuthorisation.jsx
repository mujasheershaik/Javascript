import React from 'react'
import Patientrecords from './Patientrecords'

function WithAuthorisation(Component) {
    return function ProtectedComponent(){
        // let role = "Nurse" 
        let role = "Doctor"

        if(role !== "Doctor"){
            return <h2>You are not authorised to view patient records</h2>
        }
        return <Component/>
    }
}

let ProtectedPatientrecords = WithAuthorisation(Patientrecords)
export default ProtectedPatientrecords
