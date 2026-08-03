import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Students from "./Students"
import Courses from "./Courses"
import Results from "./Results"
import Attendance from "./Attendance"

function Studentrouter(){
    return(
        <div>
            <h1>Student Management System</h1>

            <nav>
                <Link to="/">Home</Link> |
                <Link to="/Students">Students</Link> |
                <Link to="/Courses">Courses</Link> |
                <Link to="/Attendance">Attendance</Link> |
                <Link to="/Results">Results</Link> |
            </nav>

            <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path = "/Students" element = {<Students/>}/>
                <Route path = "/Courses" element = {<Courses/>}/>
                <Route path = "/Attendance" element = {<Attendance/>}/>
                <Route path = "/Results" element = {<Results/>}/>
            </Routes>
        </div>
    )

}

export default Studentrouter