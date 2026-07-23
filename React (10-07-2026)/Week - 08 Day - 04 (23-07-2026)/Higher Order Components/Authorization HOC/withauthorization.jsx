import React, { useState } from 'react'
import Admindashboard from './Admindashboard'

function withauthorization(Component) {
    return function ProtectedComponent() {
        let [role,setrole] = useState("guest")
    
    return(
        <div>
            <button onClick={()=>{setrole("admin")}}>Login as Admin</button>

            <button onClick={()=>{setrole("Employee")}}>Login as Employee</button>

            <button onClick={()=>{setrole("guest")}}>Logout</button>

            <br />

            {role === "guest"?
            ( <h2>Please Login First</h2>)
            :role === "admin"?(
                <Component/>
            ):(
                <h2>Access Denied. Only Admin Can Access This Page</h2>
            )}
        </div>

    )}
}

let Protectedadmindashboard = withauthorization(Admindashboard)
export default Protectedadmindashboard
