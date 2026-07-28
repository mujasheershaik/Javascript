import React from 'react'
import BankDashboard from './BankDashboard'

function WithAuthetication(Component) {
    return function ProtectedComponent(){
        let islogged = false

        if (!isloggedin){
            return <h2>Please Login First</h2>
        }
        return <Component/>
    }
    
}

let ProtectedBankDashboard = WithAuthetication(BankDashboard)
export default ProtectedBankDashboard
