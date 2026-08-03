import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

function Allroutes() {
  return (
    <div>
      <h1>My Company Website</h1>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/About">About</Link> |
        <Link to="/Services">Services</Link> |
        <Link to="/Contact">Contact</Link>  
      </nav>

      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path= "/Services" element ={<Services/>}/>
        <Route path = "/Contact" element ={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
