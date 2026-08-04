import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Courses from './Courses'
import Attendance from './Attendance'
import Students from './Students'

function Studentrouter1() {
  return (
    <div>
      <Routes>
        <Route path = "/" element ={<Dashboard/>}>
            <Route index element = {<Home/>}/>
            <Route path = "Students" element = {<Students/>}/>
            <Route path = "Courses" element = {<Courses/>}/>
            <Route path = "Attendance" element = {<Attendance/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Studentrouter1
