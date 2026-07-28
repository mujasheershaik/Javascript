import React, { useEffect, useState } from 'react'
import Employeelist from './Employeelist'

function WithLoading(Component) {
    return function ProtectedComponent(){
        let [loading, setloading] = useState(true)
        let [employees, setemployees] = useState([])

        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response)=>response.json())
                .then((data)=>{
                    setemployees(data)
                    setloading(false)
                })
        },[])
        if (loading){
            return <h2>Loading Employees...</h2>
        }
        return <Component employees = {employees}/>
    }
}

let ProtectedEmployeelist = WithLoading(Employeelist)
export default ProtectedEmployeelist
