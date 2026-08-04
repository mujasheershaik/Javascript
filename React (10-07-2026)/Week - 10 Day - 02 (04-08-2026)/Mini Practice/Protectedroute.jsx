import { Navigate } from "react-router-dom"

function Protectedroute({children}){

    let isLoggedIn = localStorage.getItem("login")

    return isLoggedIn ? children : <Navigate to="/login"/>
}
export default Protectedroute