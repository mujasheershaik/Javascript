import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Studentlist from './Studentlist'
import Studentprofile from './Studentprofile'

function Universityrouter() {
  return (
    <div>
      <h1>University Portal</h1>

      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/Students">Students</Link>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Students" element = {<Studentlist/>}/>
        <Route path = "/Student/:rollno" element = {<Studentprofile/>}/>
      </Routes>
    </div>
  )
}

export default Universityrouter
