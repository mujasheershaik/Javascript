import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import Members from './Members'
import Issuebook from './Issuebook'
import Returnbook from './Returnbook'

function Libraryrouter() {
  return (
    <div>
      <h1>Welcome to Library Management System</h1>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/Books">Books</Link> |
        <Link to="/Members">Members</Link> |
        <Link to="/Issuebook">Issuebook</Link> |
        <Link to= "Returnbook">Returnbook</Link>
      </nav>

      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/Books" element = {<Books/>}/>
        <Route path="/Members" element ={<Members/>}/>
        <Route path="/Issuebook" element = {<Issuebook/>}/>
        <Route path= "Returnbook" element = {<Returnbook/>}/>
      </Routes>
    </div>
  )
}

export default Libraryrouter
