import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Products from "./Products";
import Productdetails from "./Productdetails";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Protectedroute from "./Protectedroute";

import Notfound from "./Notfound";

function Allroutes2() {

    return (

        <div>
            <h1>My Company Website</h1>

            <nav>
                <Link to="/">Home</Link> |
                <Link to="/About">About</Link> |
                <Link to="/Services">Services</Link> |
                <Link to="/Products">Products</Link> |
                <Link to="/Contact">Contact</Link> |
                <Link to="/Dashboard">Dashboard</Link>
            </nav>

            <hr/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Product/:id" element={<Productdetails/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route
                    path="/Dashboard"
                    element={
                        <Protectedroute>
                            <Dashboard/>
                        </Protectedroute>
                    }/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </div>
    )
}

export default Allroutes2